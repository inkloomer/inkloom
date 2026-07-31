(() => {
  const IMAGE_SELECTOR = 'img[src*="/animation-webp/"], img[data-inkloom-webp]';
  const WRAPPER_CLASS = 'inkloom-webp-player';
  const STYLE_ID = 'inkloom-webp-player-styles';

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

  const wrapImage = (img) => {
    const wrapper = document.createElement('span');
    wrapper.className = WRAPPER_CLASS;
    img.parentNode.insertBefore(wrapper, img);
    wrapper.appendChild(img);
    return wrapper;
  };

  const addNativeFallback = async (img, src) => {
    const wrapper = wrapImage(img);
    const controls = document.createElement('span');
    controls.className = `${WRAPPER_CLASS}__controls`;
    const replayButton = createButton('重新播放', '重新播放', '↻');
    const pauseButton = createButton('暂停', '当前思源内核不支持逐帧暂停', 'Ⅱ');
    const loopButton = createButton('无限循环', '无限循环', '∞');
    pauseButton.disabled = true;
    loopButton.setAttribute('aria-pressed', 'false');
    controls.append(replayButton, pauseButton, loopButton);
    wrapper.appendChild(controls);

    let timer = 0;
    let durationMs = 0;
    const replay = () => {
      const oldSrc = img.src;
      img.src = '';
      requestAnimationFrame(() => {
        img.src = oldSrc;
      });
    };
    const schedule = () => {
      window.clearInterval(timer);
      if (loopButton.getAttribute('aria-pressed') === 'true' && durationMs > 0) {
        timer = window.setInterval(replay, durationMs + 80);
      }
    };

    replayButton.addEventListener('click', (event) => {
      event.stopPropagation();
      replay();
    });
    loopButton.addEventListener('click', (event) => {
      event.stopPropagation();
      const enabled = loopButton.getAttribute('aria-pressed') !== 'true';
      loopButton.setAttribute('aria-pressed', String(enabled));
      if (enabled) replay();
      schedule();
    });

    try {
      const manifestUrl = new URL('manifest.json', src);
      const manifest = await fetch(manifestUrl).then((response) => response.json());
      const fileName = new URL(src).pathname.split('/').pop();
      durationMs = manifest.scenes.find((scene) => scene.file === fileName)?.durationMs ?? 0;
      schedule();
    } catch {
      loopButton.disabled = true;
      loopButton.title = '无法读取动图时长，循环不可用';
    }
  };

  const addDecodedPlayer = async (img, src) => {
    const response = await fetch(src);
    if (!response.ok) throw new Error(`WebP request failed with ${response.status}.`);
    const decoder = new ImageDecoder({
      data: new Uint8Array(await response.arrayBuffer()),
      type: 'image/webp',
    });
    await decoder.tracks.ready;
    const track = decoder.tracks.selectedTrack;
    if (!track || track.frameCount < 2) {
      decoder.close();
      return;
    }

    const wrapper = wrapImage(img);
    const canvas = document.createElement('canvas');
    canvas.setAttribute('aria-label', img.alt || 'InkLoom WebP 动图');
    canvas.setAttribute('role', 'img');
    img.hidden = true;
    wrapper.insertBefore(canvas, img);

    const controls = document.createElement('span');
    controls.className = `${WRAPPER_CLASS}__controls`;
    const replayButton = createButton('重新播放', '重新播放', '↻');
    const pauseButton = createButton('暂停', '暂停', 'Ⅱ');
    const loopButton = createButton('无限循环', '无限循环', '∞');
    loopButton.setAttribute('aria-pressed', 'false');
    controls.append(replayButton, pauseButton, loopButton);
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
        if (loopButton.getAttribute('aria-pressed') !== 'true') {
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

    replayButton.addEventListener('click', (event) => {
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
    loopButton.addEventListener('click', (event) => {
      event.stopPropagation();
      const enabled = loopButton.getAttribute('aria-pressed') !== 'true';
      loopButton.setAttribute('aria-pressed', String(enabled));
      if (enabled && !playing && currentFrame === track.frameCount - 1) replay();
    });

    updatePauseButton();
    void scheduleFrame(0, renderGeneration);
  };

  const enhanceImage = async (img) => {
    if (img.dataset.inkloomWebpPlayer || img.closest(`.${WRAPPER_CLASS}`)) return;
    const src = img.currentSrc || img.src;
    if (!src || !src.toLowerCase().includes('.webp')) return;
    img.dataset.inkloomWebpPlayer = 'loading';

    try {
      if ('ImageDecoder' in window) {
        await addDecodedPlayer(img, src);
      } else {
        await addNativeFallback(img, src);
      }
      img.dataset.inkloomWebpPlayer = 'ready';
    } catch (error) {
      console.warn('[InkLoom WebP Player]', error);
      img.dataset.inkloomWebpPlayer = 'failed';
      if (!img.closest(`.${WRAPPER_CLASS}`)) await addNativeFallback(img, src);
    }
  };

  let scanQueued = false;
  const scan = () => {
    if (scanQueued) return;
    scanQueued = true;
    requestAnimationFrame(() => {
      scanQueued = false;
      document.querySelectorAll(IMAGE_SELECTOR).forEach((img) => {
        void enhanceImage(img);
      });
    });
  };

  installStyles();
  scan();
  const observer = new MutationObserver(scan);
  observer.observe(document.body, {childList: true, subtree: true});
})();
