(() => {
  // User-editable settings. APNG uses .apng by default; add "png" to its
  // extensions or set data-inkloom-animated-type="apng" for .png assets.
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

  const WRAPPER_CLASS = 'inkloom-animated-image-player';
  const STYLE_ID = 'inkloom-animated-image-player-styles';
  const PLAYER_STATE_KEY = 'inkloomAnimatedImagePlayer';
  const LARGE_VIEW_ROOT_SELECTOR = '.viewer-container, .viewer-canvas, .b3-dialog, [role="dialog"]';
  const LARGE_VIEW_IMAGE_SELECTOR = '.viewer-container img, .viewer-canvas img, .b3-dialog img, [role="dialog"] img';

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
      .${WRAPPER_CLASS} {
        position: relative;
        display: inline-block;
        overflow: hidden;
        max-width: 100%;
        line-height: 0;
      }
      .${WRAPPER_CLASS} > img,
      .${WRAPPER_CLASS} > canvas {
        display: block;
        width: 100%;
        max-width: 100%;
        height: auto;
      }
      .${WRAPPER_CLASS}__controls {
        position: absolute;
        right: 8px;
        bottom: 8px;
        display: flex;
        gap: 6px;
        z-index: 2;
      }
      .${WRAPPER_CLASS}__controls button {
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
      .${WRAPPER_CLASS}__controls button[aria-pressed="true"] {
        background: #16835f;
        border-color: #8ce0c3;
      }
      .${WRAPPER_CLASS}__controls button:disabled {
        cursor: not-allowed;
        opacity: 0.5;
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

  const createControls = ({pauseSupported}) => {
    const controls = document.createElement('span');
    controls.className = `${WRAPPER_CLASS}__controls`;
    const replayButton = CONFIG.showReplayButton
      ? createButton('重新播放', '重新播放', '↻')
      : null;
    const pauseButton = createButton(
      '暂停',
      pauseSupported ? '暂停' : '当前思源内核不支持逐帧暂停',
      'Ⅱ',
    );
    const loopButton = CONFIG.showLoopButton
      ? createButton('无限循环', '无限循环', '∞')
      : null;

    pauseButton.disabled = !pauseSupported;
    loopButton?.setAttribute('aria-pressed', 'false');
    [replayButton, pauseButton, loopButton].filter(Boolean).forEach((button) => controls.appendChild(button));
    return {controls, loopButton, pauseButton, replayButton};
  };

  const wrapImage = (img, src, type) => {
    const wrapper = document.createElement('span');
    wrapper.className = WRAPPER_CLASS;
    wrapper.dataset.inkloomAnimatedSrc = normalizedUrl(src);
    wrapper.dataset.inkloomAnimatedType = type.name.toLowerCase();
    img.parentNode.insertBefore(wrapper, img);
    wrapper.appendChild(img);
    return wrapper;
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

  const addNativeFallback = async (img, src, type) => {
    const wrapper = wrapImage(img, src, type);
    const {controls, loopButton, replayButton} = createControls({pauseSupported: false});
    wrapper.appendChild(controls);

    let timer = 0;
    let durationMs = 0;
    const replay = () => replayNativeImage(img);
    const schedule = () => {
      window.clearInterval(timer);
      if (loopButton?.getAttribute('aria-pressed') === 'true' && durationMs > 0) {
        timer = window.setInterval(replay, durationMs + 80);
      }
    };

    replayButton?.addEventListener('click', (event) => {
      event.stopPropagation();
      replay();
    });
    loopButton?.addEventListener('click', (event) => {
      event.stopPropagation();
      const enabled = loopButton.getAttribute('aria-pressed') !== 'true';
      loopButton.setAttribute('aria-pressed', String(enabled));
      if (enabled) replay();
      schedule();
    });
    if (CONFIG.replayOnHover) wrapper.addEventListener('pointerenter', replay);

    if (loopButton) {
      try {
        durationMs = await readManifestDuration(src);
        if (durationMs <= 0) throw new Error('No duration in manifest.');
        schedule();
      } catch {
        loopButton.disabled = true;
        loopButton.title = '无法读取动图时长，循环不可用';
      }
    }
  };

  const addDecodedPlayer = async (img, src, type) => {
    const response = await fetch(src);
    if (!response.ok) throw new Error(`${type.name} request failed with ${response.status}.`);
    const decoder = new ImageDecoder({
      data: new Uint8Array(await response.arrayBuffer()),
      type: type.mimeType,
    });
    await decoder.tracks.ready;
    const track = decoder.tracks.selectedTrack;
    if (!track || track.frameCount < 2) {
      decoder.close();
      return false;
    }

    const wrapper = wrapImage(img, src, type);
    const canvas = document.createElement('canvas');
    canvas.setAttribute('aria-label', img.alt || `InkLoom ${type.name} 动图`);
    canvas.setAttribute('role', 'img');
    img.hidden = true;
    wrapper.insertBefore(canvas, img);
    canvas.addEventListener('click', (event) => {
      event.stopPropagation();
      img.click();
    });

    const {controls, loopButton, pauseButton, replayButton} = createControls({pauseSupported: true});
    wrapper.appendChild(controls);
    const context = canvas.getContext('2d');
    let currentFrame = 0;
    let playing = true;
    let timer = 0;
    let renderGeneration = 0;

    const updatePauseButton = () => {
      pauseButton.textContent = playing ? 'Ⅱ' : '▶';
      pauseButton.title = playing ? '暂停' : '继续播放';
      pauseButton.setAttribute('aria-label', pauseButton.title);
    };

    const scheduleFrame = async (frameIndex, generation) => {
      if (!wrapper.isConnected) {
        decoder.close();
        return;
      }

      const result = await decoder.decode({frameIndex, completeFramesOnly: true});
      if (generation !== renderGeneration) {
        result.image.close();
        return;
      }

      const frame = result.image;
      if (canvas.width !== frame.displayWidth || canvas.height !== frame.displayHeight) {
        canvas.width = frame.displayWidth;
        canvas.height = frame.displayHeight;
      }
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(frame, 0, 0);
      const delayMs = Math.max(16, (frame.duration || 100000) / 1000);
      frame.close();
      currentFrame = frameIndex;

      if (!playing) return;
      const nextFrame = frameIndex + 1;
      if (nextFrame >= track.frameCount) {
        if (loopButton?.getAttribute('aria-pressed') !== 'true') {
          playing = false;
          updatePauseButton();
          return;
        }
        timer = window.setTimeout(() => scheduleFrame(0, generation), delayMs);
        return;
      }
      timer = window.setTimeout(() => scheduleFrame(nextFrame, generation), delayMs);
    };

    const replay = () => {
      window.clearTimeout(timer);
      renderGeneration += 1;
      playing = true;
      updatePauseButton();
      void scheduleFrame(0, renderGeneration);
    };

    replayButton?.addEventListener('click', (event) => {
      event.stopPropagation();
      replay();
    });
    pauseButton.addEventListener('click', (event) => {
      event.stopPropagation();
      playing = !playing;
      window.clearTimeout(timer);
      renderGeneration += 1;
      updatePauseButton();
      if (playing) void scheduleFrame(Math.min(currentFrame + 1, track.frameCount - 1), renderGeneration);
    });
    loopButton?.addEventListener('click', (event) => {
      event.stopPropagation();
      const enabled = loopButton.getAttribute('aria-pressed') !== 'true';
      loopButton.setAttribute('aria-pressed', String(enabled));
      if (enabled && !playing && currentFrame === track.frameCount - 1) replay();
    });
    if (CONFIG.replayOnHover) wrapper.addEventListener('pointerenter', replay);

    updatePauseButton();
    void scheduleFrame(0, renderGeneration);
    return true;
  };

  const canDecodeType = async (mimeType) => {
    if (!('ImageDecoder' in window)) return false;
    if (typeof ImageDecoder.isTypeSupported !== 'function') return true;
    return ImageDecoder.isTypeSupported(mimeType);
  };

  const enhanceImage = async (img) => {
    if (img.dataset[PLAYER_STATE_KEY] || img.closest(`.${WRAPPER_CLASS}`)) return;
    const src = img.currentSrc || img.src;
    const type = src ? findImageType(img, src) : null;
    if (!src || !type) return;
    img.dataset[PLAYER_STATE_KEY] = 'loading';

    try {
      const decoded = await canDecodeType(type.mimeType)
        ? await addDecodedPlayer(img, src, type)
        : false;
      if (!decoded) await addNativeFallback(img, src, type);
      img.dataset[PLAYER_STATE_KEY] = 'ready';
    } catch (error) {
      console.warn(`[InkLoom ${type.name} Player]`, error);
      img.dataset[PLAYER_STATE_KEY] = 'failed';
      if (!img.closest(`.${WRAPPER_CLASS}`)) await addNativeFallback(img, src, type);
    }
  };

  let pendingLargeViewSrc = '';
  let largeViewReplayAttempts = 0;
  const replayOpenedLargeImage = () => {
    if (!pendingLargeViewSrc || largeViewReplayAttempts >= 20) return;
    largeViewReplayAttempts += 1;
    const candidates = document.querySelectorAll(LARGE_VIEW_IMAGE_SELECTOR);
    const target = [...candidates].find((img) => {
      const src = img.currentSrc || img.src;
      return normalizedUrl(src) === pendingLargeViewSrc && !img.closest(`.${WRAPPER_CLASS}`);
    });

    if (target) {
      replayNativeImage(target);
      pendingLargeViewSrc = '';
      return;
    }
    window.setTimeout(replayOpenedLargeImage, 50);
  };

  document.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;
    if (!CONFIG.replayWhenOpenedLarge || target.closest('button')) return;
    const wrapper = target.closest(`.${WRAPPER_CLASS}`);
    if (!wrapper) return;
    pendingLargeViewSrc = wrapper.dataset.inkloomAnimatedSrc || '';
    largeViewReplayAttempts = 0;
    window.setTimeout(replayOpenedLargeImage, 0);
  }, true);

  let scanQueued = false;
  const scan = () => {
    if (scanQueued) return;
    scanQueued = true;
    requestAnimationFrame(() => {
      scanQueued = false;
      document.querySelectorAll('img').forEach((img) => {
        if (!img.closest(LARGE_VIEW_ROOT_SELECTOR)) void enhanceImage(img);
      });
      if (pendingLargeViewSrc) replayOpenedLargeImage();
    });
  };

  installStyles();
  scan();
  const observer = new MutationObserver(scan);
  observer.observe(document.body, {childList: true, subtree: true});
})();
