(() => {
  const INSTANCE_KEY = '__inkloomSiyuanVideoPlayer';
  window[INSTANCE_KEY]?.dispose?.();

  const CONFIG = {
    showNativeControlsWhilePlaying: true,
    finalFrameOffsetSeconds: 0.04,
    replayFromSeconds: 0,
  };

  const OVERLAY_CLASS = 'inkloom-video-overlay';
  const STYLE_ID = 'inkloom-video-player-styles';
  const PLAYER_STATE_KEY = 'inkloomVideoPlayer';
  const controllersByVideo = new WeakMap();
  const activeControllers = new Set();

  const installStyles = () => {
    document.getElementById(STYLE_ID)?.remove();
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
      .${OVERLAY_CLASS}__control {
        position: absolute;
        right: 4px;
        top: 4px;
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
        pointer-events: auto;
        backdrop-filter: blur(3px);
        transition: background 120ms ease, opacity 120ms ease;
      }
      .${OVERLAY_CLASS}__control[hidden] {
        display: none;
      }
      .${OVERLAY_CLASS}__control:hover,
      .${OVERLAY_CLASS}__control:focus-visible {
        background: rgba(18, 24, 22, 0.56);
        opacity: 0.92;
      }
      @media (max-width: 600px) {
        .${OVERLAY_CLASS}__control {
          width: 26px;
          height: 26px;
          font-size: 14px;
        }
      }
    `;
    document.head.appendChild(style);
  };

  const parseMediaTime = (value) => {
    if (!value) return null;
    const parts = value.replace(/^npt:/, '').split(':').map(Number);
    if (parts.some((part) => !Number.isFinite(part)) || parts.length > 3) return null;
    return parts.reduce((seconds, part) => seconds * 60 + part, 0);
  };

  const mediaFragment = (video) => {
    const source = video.getAttribute('src')
      || video.querySelector('source')?.getAttribute('src')
      || video.currentSrc
      || video.src;
    try {
      const url = new URL(source, window.location.href);
      const value = new URLSearchParams(url.hash.slice(1)).get('t');
      const [startValue, endValue] = (value || '').split(',');
      return {
        start: parseMediaTime(startValue) ?? 0,
        end: parseMediaTime(endValue),
      };
    } catch {
      return {start: 0, end: null};
    }
  };

  const syncOverlay = (controller) => {
    const {overlay, video} = controller;
    if (!video.isConnected) {
      disposeController(controller);
      return;
    }

    const offsetParent = video.offsetParent || document.body;
    if (overlay.parentElement !== offsetParent) offsetParent.appendChild(overlay);
    overlay.hidden = video.offsetWidth === 0 || video.offsetHeight === 0;
    overlay.style.left = `${video.offsetLeft}px`;
    overlay.style.top = `${video.offsetTop}px`;
    overlay.style.width = `${video.offsetWidth}px`;
    overlay.style.height = `${video.offsetHeight}px`;
  };

  const resizeObserver = new ResizeObserver((entries) => {
    entries.forEach(({target}) => {
      const controller = controllersByVideo.get(target);
      if (controller) syncOverlay(controller);
    });
  });

  function disposeController(controller) {
    if (!activeControllers.delete(controller)) return;
    resizeObserver.unobserve(controller.video);
    controller.disposePlayback();
    controller.video.controls = controller.originalControls;
    delete controller.video.dataset[PLAYER_STATE_KEY];
    controller.overlay.remove();
  }

  const createController = (video) => {
    const overlay = document.createElement('span');
    overlay.className = OVERLAY_CLASS;
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `${OVERLAY_CLASS}__control`;
    overlay.appendChild(button);

    const originalControls = video.controls || video.hasAttribute('controls');
    const fragment = mediaFragment(video);
    let terminal = false;

    const endTime = () => fragment.end ?? (Number.isFinite(video.duration) ? video.duration : null);
    const isAtEnd = () => {
      const end = endTime();
      return terminal
        || video.ended
        || (end !== null && video.currentTime >= end - CONFIG.finalFrameOffsetSeconds * 2);
    };
    const holdFinalFrame = () => {
      const end = endTime();
      if (end === null) return;
      const target = Math.max(fragment.start, end - CONFIG.finalFrameOffsetSeconds);
      if (Math.abs(video.currentTime - target) > CONFIG.finalFrameOffsetSeconds) {
        video.currentTime = target;
      }
    };
    const showPausedControl = (forceTerminal = false) => {
      terminal = forceTerminal || isAtEnd();
      if (terminal) holdFinalFrame();
      video.controls = false;
      button.hidden = false;
      button.textContent = terminal ? '↻' : '▶';
      button.title = terminal ? '重新播放视频' : '继续播放视频';
      button.setAttribute('aria-label', button.title);
      syncOverlay(controller);
    };
    const handlePlay = () => {
      terminal = false;
      button.hidden = true;
      video.controls = originalControls && CONFIG.showNativeControlsWhilePlaying;
    };
    const handlePause = () => showPausedControl();
    const handleEnded = () => showPausedControl(true);
    const handleTimeUpdate = () => {
      if (terminal || fragment.end === null) return;
      if (video.currentTime < fragment.end - CONFIG.finalFrameOffsetSeconds) return;
      terminal = true;
      video.pause();
      showPausedControl(true);
    };
    const handleLoadedMetadata = () => {
      if (video.paused || video.ended) showPausedControl();
      else handlePlay();
      syncOverlay(controller);
    };
    const handleButtonClick = (event) => {
      event.preventDefault();
      event.stopPropagation();
      if (isAtEnd()) video.currentTime = CONFIG.replayFromSeconds;
      terminal = false;
      button.hidden = true;
      const playResult = video.play();
      playResult?.catch(() => showPausedControl());
    };

    const controller = {
      originalControls,
      overlay,
      video,
      disposePlayback: () => {
        video.removeEventListener('play', handlePlay);
        video.removeEventListener('pause', handlePause);
        video.removeEventListener('ended', handleEnded);
        video.removeEventListener('timeupdate', handleTimeUpdate);
        video.removeEventListener('loadedmetadata', handleLoadedMetadata);
        button.removeEventListener('click', handleButtonClick);
      },
    };

    controllersByVideo.set(video, controller);
    activeControllers.add(controller);
    resizeObserver.observe(video);
    video.playsInline = true;
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('ended', handleEnded);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    button.addEventListener('click', handleButtonClick);
    video.dataset[PLAYER_STATE_KEY] = 'ready';
    syncOverlay(controller);
    handleLoadedMetadata();
  };

  let overlaySyncQueued = false;
  const scheduleOverlaySync = () => {
    if (overlaySyncQueued) return;
    overlaySyncQueued = true;
    requestAnimationFrame(() => {
      overlaySyncQueued = false;
      [...activeControllers].forEach(syncOverlay);
    });
  };

  let scanQueued = false;
  const scan = () => {
    if (scanQueued) return;
    scanQueued = true;
    requestAnimationFrame(() => {
      scanQueued = false;
      [...activeControllers].forEach((controller) => {
        if (!controller.video.isConnected) disposeController(controller);
      });
      document.querySelectorAll('video').forEach((video) => {
        if (!controllersByVideo.has(video)) createController(video);
      });
      scheduleOverlaySync();
    });
  };

  document.querySelectorAll(`.${OVERLAY_CLASS}`).forEach((overlay) => overlay.remove());
  installStyles();
  scan();
  window.addEventListener('resize', scheduleOverlaySync);
  document.addEventListener('scroll', scheduleOverlaySync, true);
  const observer = new MutationObserver(scan);
  observer.observe(document.body, {childList: true, subtree: true});

  const dispose = () => {
    observer.disconnect();
    window.removeEventListener('resize', scheduleOverlaySync);
    document.removeEventListener('scroll', scheduleOverlaySync, true);
    [...activeControllers].forEach(disposeController);
    document.getElementById(STYLE_ID)?.remove();
  };

  window[INSTANCE_KEY] = {dispose};
})();
