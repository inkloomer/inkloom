(() => {
  const INSTANCE_KEY = '__inkloomAnimatedImagePlayer';
  window[INSTANCE_KEY]?.dispose?.();

  // User-editable settings. APNG only matches .apng by default, so ordinary
  // PNG images are not scanned. Add "png" or use data-inkloom-animated-type.
  const CONFIG = {
    imageTypes: [
      {name: 'WebP', extensions: ['webp'], mimeType: 'image/webp'},
      {name: 'GIF', extensions: ['gif'], mimeType: 'image/gif'},
      {name: 'AVIF', extensions: ['avif'], mimeType: 'image/avif'},
      {name: 'APNG', extensions: ['apng'], mimeType: 'image/png'},
    ],
    showReplayButton: true, // Show the small replay control.
    replayOnHover: true, // Replay when the pointer enters the image.
    replayWhenOpenedLarge: true, // Replay when SiYuan opens the large-image viewer.
  };

  const LEGACY_WRAPPER_CLASS = 'inkloom-animated-image-player';
  const OVERLAY_CLASS = 'inkloom-animated-image-overlay';
  const STYLE_ID = 'inkloom-animated-image-player-styles';
  const PLAYER_STATE_KEY = 'inkloomAnimatedImagePlayer';
  const LARGE_VIEW_ROOT_SELECTOR = '.viewer-container, .viewer-canvas, .b3-dialog, [role="dialog"]';
  const LARGE_VIEW_IMAGE_SELECTOR = '.viewer-container img, .viewer-canvas img, .b3-dialog img, [role="dialog"] img';
  const controllersByImage = new WeakMap();
  const replayStatesByImage = new WeakMap();
  const replayedImages = new Set();
  const activeControllers = new Set();

  const cleanupLegacyPlayers = () => {
    document.querySelectorAll(`.${LEGACY_WRAPPER_CLASS}`).forEach((wrapper) => {
      const img = [...wrapper.children].find((child) => child instanceof HTMLImageElement);
      if (!(img instanceof HTMLImageElement) || !wrapper.parentNode) {
        wrapper.remove();
        return;
      }

      // The retired Canvas player hid and reparented the original image.
      // Mark it before moving so the legacy observer cannot wrap it again.
      img.dataset[PLAYER_STATE_KEY] = 'migrating';
      img.hidden = false;
      wrapper.parentNode.insertBefore(img, wrapper);
      wrapper.remove();
    });

    document.querySelectorAll(`.${OVERLAY_CLASS}`).forEach((overlay) => overlay.remove());
    document.getElementById(STYLE_ID)?.remove();
  };

  const normalizedUrl = (value) => {
    try {
      const url = new URL(value, window.location.href);
      url.hash = '';
      return url.href;
    } catch {
      return value;
    }
  };

  const extensionFromUrl = (value) => {
    try {
      const pathname = new URL(value, window.location.href).pathname.toLowerCase();
      return pathname.split('.').pop() || '';
    } catch {
      return '';
    }
  };

  const findImageType = (img, src) => {
    const explicitType = img.dataset.inkloomAnimatedType?.toLowerCase();
    if (explicitType) {
      return CONFIG.imageTypes.find((type) => type.name.toLowerCase() === explicitType);
    }

    const extension = extensionFromUrl(src);
    return CONFIG.imageTypes.find((type) => type.extensions.includes(extension));
  };

  const installStyles = () => {
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = `
      .${OVERLAY_CLASS} {
        position: absolute;
        display: block;
        overflow: hidden;
        margin: 0;
        padding: 0;
        pointer-events: none;
        line-height: 0;
        z-index: 4;
      }
      .${OVERLAY_CLASS}__controls {
        position: absolute;
        right: 4px;
        bottom: 4px;
        display: flex;
        z-index: 2;
        pointer-events: auto;
      }
      .${OVERLAY_CLASS}__controls[hidden] {
        display: none;
      }
      .${OVERLAY_CLASS}__controls button {
        display: grid;
        width: 30px;
        height: 30px;
        place-items: center;
        margin: 0;
        padding: 0;
        border: 1px solid rgba(255, 255, 255, 0.16);
        border-radius: 50%;
        background: rgba(18, 24, 22, 0.3);
        color: rgba(255, 255, 255, 0.78);
        cursor: pointer;
        font: 600 16px/1 system-ui, sans-serif;
        opacity: 0.62;
        backdrop-filter: blur(3px);
        transition: background 120ms ease, opacity 120ms ease;
      }
      .${OVERLAY_CLASS}__controls button:hover,
      .${OVERLAY_CLASS}__controls button:focus-visible {
        background: rgba(18, 24, 22, 0.56);
        opacity: 0.92;
      }
      @media (max-width: 600px) {
        .${OVERLAY_CLASS}__controls button {
          width: 26px;
          height: 26px;
          font-size: 14px;
        }
      }
    `;
    document.head.appendChild(style);
  };

  const createButton = (label, title, text) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.setAttribute('aria-label', label);
    button.title = title;
    button.textContent = text;
    return button;
  };

  const createReplayControl = ({label = '重新播放', text = '↻'} = {}) => {
    const controls = document.createElement('span');
    controls.className = `${OVERLAY_CLASS}__controls`;
    const replayButton = CONFIG.showReplayButton
      ? createButton(label, label, text)
      : null;
    if (replayButton) controls.appendChild(replayButton);
    return {controls, replayButton};
  };

  const replayNativeImage = async (img) => {
    let state = replayStatesByImage.get(img);
    if (!state) {
      state = {
        generation: 0,
        objectUrl: '',
        originalSrc: img.getAttribute('src'),
        originalSrcset: img.getAttribute('srcset'),
        source: img.currentSrc || img.src,
      };
      replayStatesByImage.set(img, state);
    }

    const generation = state.generation += 1;
    try {
      const response = await fetch(state.source, {cache: 'force-cache'});
      if (!response.ok) throw new Error(`request failed with ${response.status}`);
      const objectUrl = URL.createObjectURL(await response.blob());
      if (generation !== state.generation || !img.isConnected) {
        URL.revokeObjectURL(objectUrl);
        return;
      }

      const previousObjectUrl = state.objectUrl;
      state.objectUrl = objectUrl;
      replayedImages.add(img);
      if (previousObjectUrl) {
        img.addEventListener('load', () => URL.revokeObjectURL(previousObjectUrl), {once: true});
      }
      img.srcset = '';
      img.src = objectUrl;
    } catch (error) {
      console.warn('[InkLoom Animated Image Player] Replay failed; keeping the current frame.', error);
    }
  };

  const restoreReplaySource = (img) => {
    const state = replayStatesByImage.get(img);
    if (!state) return;
    state.generation += 1;
    if (state.originalSrc === null) img.removeAttribute('src');
    else img.setAttribute('src', state.originalSrc);
    if (state.originalSrcset === null) img.removeAttribute('srcset');
    else img.setAttribute('srcset', state.originalSrcset);
    if (state.objectUrl) URL.revokeObjectURL(state.objectUrl);
    replayStatesByImage.delete(img);
    replayedImages.delete(img);
  };

  const syncOverlay = (controller) => {
    const {img, overlay} = controller;
    if (!img.isConnected) {
      disposeController(controller);
      return;
    }

    const offsetParent = img.offsetParent || document.body;
    if (overlay.parentElement !== offsetParent) offsetParent.appendChild(overlay);
    overlay.hidden = img.offsetWidth === 0 || img.offsetHeight === 0;
    overlay.style.left = `${img.offsetLeft}px`;
    overlay.style.top = `${img.offsetTop}px`;
    overlay.style.width = `${img.offsetWidth}px`;
    overlay.style.height = `${img.offsetHeight}px`;
  };

  const resizeObserver = new ResizeObserver((entries) => {
    entries.forEach(({target}) => {
      const controller = controllersByImage.get(target);
      if (controller) syncOverlay(controller);
    });
  });

  const registerController = ({img, overlay, replay, disposePlayback}) => {
    const controller = {disposePlayback, img, overlay, replay};
    controllersByImage.set(img, controller);
    activeControllers.add(controller);
    resizeObserver.observe(img);
    img.addEventListener('load', controller.syncOnLoad = () => syncOverlay(controller));
    syncOverlay(controller);
    return controller;
  };

  function disposeController(controller) {
    if (!activeControllers.delete(controller)) return;
    resizeObserver.unobserve(controller.img);
    controller.img.removeEventListener('load', controller.syncOnLoad);
    controller.disposePlayback?.();
    restoreReplaySource(controller.img);
    controller.overlay.remove();
  }

  let overlaySyncQueued = false;
  const scheduleOverlaySync = () => {
    if (overlaySyncQueued) return;
    overlaySyncQueued = true;
    requestAnimationFrame(() => {
      overlaySyncQueued = false;
      [...activeControllers].forEach(syncOverlay);
    });
  };

  const createOverlay = (src, type) => {
    const overlay = document.createElement('span');
    overlay.className = OVERLAY_CLASS;
    overlay.dataset.inkloomAnimatedSrc = normalizedUrl(src);
    overlay.dataset.inkloomAnimatedType = type.name.toLowerCase();
    return overlay;
  };

  const addImageControls = async (img, src, type) => {
    const overlay = createOverlay(src, type);
    const {controls, replayButton} = createReplayControl();
    overlay.appendChild(controls);

    const replay = () => replayNativeImage(img);
    const replayOnHover = () => replay();
    const controller = registerController({
      img,
      overlay,
      replay,
      disposePlayback: () => {
        img.removeEventListener('pointerenter', replayOnHover);
      },
    });

    replayButton?.addEventListener('click', (event) => {
      event.stopPropagation();
      replay();
    });
    if (CONFIG.replayOnHover) img.addEventListener('pointerenter', replayOnHover);
    syncOverlay(controller);
  };

  const enhanceImage = async (img) => {
    if (controllersByImage.has(img) || img.dataset[PLAYER_STATE_KEY] === 'loading') return;
    const src = img.currentSrc || img.src;
    const type = src ? findImageType(img, src) : null;
    if (!src || !type) return;
    img.dataset[PLAYER_STATE_KEY] = 'loading';

    try {
      await addImageControls(img, src, type);
      img.dataset[PLAYER_STATE_KEY] = 'ready';
    } catch (error) {
      console.warn(`[InkLoom ${type.name} Player]`, error);
      img.dataset[PLAYER_STATE_KEY] = 'failed';
    }
  };

  let pendingLargeViewSources = [];
  let largeViewReplayAttempts = 0;
  const replayOpenedLargeImage = () => {
    if (pendingLargeViewSources.length === 0 || largeViewReplayAttempts >= 20) return;
    largeViewReplayAttempts += 1;
    const candidates = document.querySelectorAll(LARGE_VIEW_IMAGE_SELECTOR);
    const target = [...candidates].find((img) => pendingLargeViewSources.includes(normalizedUrl(img.currentSrc || img.src)));

    if (target) {
      replayNativeImage(target);
      pendingLargeViewSources = [];
      return;
    }
    window.setTimeout(replayOpenedLargeImage, 50);
  };

  const handleDocumentClick = (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;
    if (!CONFIG.replayWhenOpenedLarge || target.closest('button')) return;
    const controller = target instanceof HTMLImageElement ? controllersByImage.get(target) : null;
    if (!controller) return;
    const replayState = replayStatesByImage.get(controller.img);
    pendingLargeViewSources = [
      normalizedUrl(controller.img.currentSrc || controller.img.src),
      replayState ? normalizedUrl(replayState.source) : '',
    ].filter(Boolean);
    largeViewReplayAttempts = 0;
    window.setTimeout(replayOpenedLargeImage, 0);
  };

  let scanQueued = false;
  const scan = () => {
    if (scanQueued) return;
    scanQueued = true;
    requestAnimationFrame(() => {
      scanQueued = false;
      [...activeControllers].forEach((controller) => {
        if (!controller.img.isConnected) disposeController(controller);
      });
      [...replayedImages].forEach((img) => {
        if (!img.isConnected) restoreReplaySource(img);
      });
      document.querySelectorAll('img').forEach((img) => {
        if (!img.closest(LARGE_VIEW_ROOT_SELECTOR)) void enhanceImage(img);
      });
      scheduleOverlaySync();
      if (pendingLargeViewSources.length > 0) replayOpenedLargeImage();
    });
  };

  cleanupLegacyPlayers();
  installStyles();
  scan();
  window.addEventListener('resize', scheduleOverlaySync);
  document.addEventListener('scroll', scheduleOverlaySync, true);
  document.addEventListener('click', handleDocumentClick, true);
  const observer = new MutationObserver(scan);
  observer.observe(document.body, {childList: true, subtree: true});

  const dispose = () => {
    observer.disconnect();
    window.removeEventListener('resize', scheduleOverlaySync);
    document.removeEventListener('scroll', scheduleOverlaySync, true);
    document.removeEventListener('click', handleDocumentClick, true);
    [...activeControllers].forEach(disposeController);
    document.getElementById(STYLE_ID)?.remove();
  };

  window[INSTANCE_KEY] = {dispose};
})();
