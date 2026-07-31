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
    showReplayButton: true,
    showLoopButton: true,
    replayOnHover: false,
    replayWhenOpenedLarge: true,
  };

  const LEGACY_WRAPPER_CLASS = 'inkloom-animated-image-player';
  const OVERLAY_CLASS = 'inkloom-animated-image-overlay';
  const STYLE_ID = 'inkloom-animated-image-player-styles';
  const PLAYER_STATE_KEY = 'inkloomAnimatedImagePlayer';
  const LARGE_VIEW_ROOT_SELECTOR = '.viewer-container, .viewer-canvas, .b3-dialog, [role="dialog"]';
  const LARGE_VIEW_IMAGE_SELECTOR = '.viewer-container img, .viewer-canvas img, .b3-dialog img, [role="dialog"] img';
  const controllersByImage = new WeakMap();
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
        right: 8px;
        bottom: 8px;
        display: flex;
        gap: 6px;
        z-index: 2;
        pointer-events: auto;
      }
      .${OVERLAY_CLASS}__controls button {
        display: grid;
        width: 36px;
        height: 36px;
        place-items: center;
        margin: 0;
        padding: 0;
        border: 1px solid rgba(255, 255, 255, 0.35);
        border-radius: 50%;
        background: rgba(18, 24, 22, 0.72);
        color: white;
        cursor: pointer;
        font: 700 20px/1 system-ui, sans-serif;
        backdrop-filter: blur(6px);
      }
      .${OVERLAY_CLASS}__controls button[aria-pressed="true"] {
        background: #16835f;
        border-color: #8ce0c3;
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

  const createControls = () => {
    const controls = document.createElement('span');
    controls.className = `${OVERLAY_CLASS}__controls`;
    const replayButton = CONFIG.showReplayButton
      ? createButton('重新播放', '重新播放', '↻')
      : null;
    const loopButton = CONFIG.showLoopButton
      ? createButton('无限循环', '无限循环', '∞')
      : null;

    loopButton?.setAttribute('aria-pressed', 'false');
    [replayButton, loopButton].filter(Boolean).forEach((button) => controls.appendChild(button));
    return {controls, loopButton, replayButton};
  };

  const replayNativeImage = (img) => {
    const src = img.currentSrc || img.src;
    const srcset = img.srcset;
    img.srcset = '';
    img.src = '';
    requestAnimationFrame(() => {
      img.src = src;
      img.srcset = srcset;
    });
  };

  const readManifestDuration = async (src) => {
    const manifestUrl = new URL('manifest.json', src);
    const response = await fetch(manifestUrl);
    if (!response.ok) return 0;
    const manifest = await response.json();
    const fileName = new URL(src).pathname.split('/').pop();
    return manifest.scenes?.find((scene) => scene.file === fileName)?.durationMs ?? 0;
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
    img.addEventListener('load', controller.replayOnLoad = () => syncOverlay(controller));
    syncOverlay(controller);
    return controller;
  };

  function disposeController(controller) {
    if (!activeControllers.delete(controller)) return;
    resizeObserver.unobserve(controller.img);
    controller.img.removeEventListener('load', controller.replayOnLoad);
    controller.disposePlayback?.();
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
    const {controls, loopButton, replayButton} = createControls();
    overlay.appendChild(controls);

    let timer = 0;
    const replay = () => replayNativeImage(img);
    const replayOnHover = () => replay();
    const controller = registerController({
      img,
      overlay,
      replay,
      disposePlayback: () => {
        window.clearInterval(timer);
        img.removeEventListener('pointerenter', replayOnHover);
      },
    });

    replayButton?.addEventListener('click', (event) => {
      event.stopPropagation();
      replay();
    });
    loopButton?.addEventListener('click', async (event) => {
      event.stopPropagation();
      const enabled = loopButton.getAttribute('aria-pressed') !== 'true';
      loopButton.setAttribute('aria-pressed', String(enabled));
      window.clearInterval(timer);
      if (!enabled) return;

      const durationMs = await readManifestDuration(src).catch(() => 0);
      if (loopButton.getAttribute('aria-pressed') !== 'true') return;
      if (durationMs <= 0) {
        loopButton.setAttribute('aria-pressed', 'false');
        loopButton.disabled = true;
        loopButton.title = '无法读取动图时长，循环不可用';
        return;
      }
      replay();
      timer = window.setInterval(replay, durationMs + 80);
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

  let pendingLargeViewSrc = '';
  let largeViewReplayAttempts = 0;
  const replayOpenedLargeImage = () => {
    if (!pendingLargeViewSrc || largeViewReplayAttempts >= 20) return;
    largeViewReplayAttempts += 1;
    const candidates = document.querySelectorAll(LARGE_VIEW_IMAGE_SELECTOR);
    const target = [...candidates].find((img) => normalizedUrl(img.currentSrc || img.src) === pendingLargeViewSrc);

    if (target) {
      replayNativeImage(target);
      pendingLargeViewSrc = '';
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
    pendingLargeViewSrc = normalizedUrl(controller.img.currentSrc || controller.img.src);
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
      document.querySelectorAll('img').forEach((img) => {
        if (!img.closest(LARGE_VIEW_ROOT_SELECTOR)) void enhanceImage(img);
      });
      scheduleOverlaySync();
      if (pendingLargeViewSrc) replayOpenedLargeImage();
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
