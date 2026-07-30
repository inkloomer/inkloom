type Cleanup = () => void;

declare global {
  interface Window {
    __inkloomIframeLayoutCleanup?: Cleanup;
  }
}

const MIN_PLAYER_WIDTH = 280;

const numericStyle = (value: string) => {
  const parsed = Number.parseFloat(value);
  return Number.isFinite(parsed) ? parsed : 0;
};

const isIframe = () =>
  window.self !== window.top || new URLSearchParams(window.location.search).get('embed') === '1';

export const initializeIframeLayout = () => {
  window.__inkloomIframeLayoutCleanup?.();
  window.__inkloomIframeLayoutCleanup = undefined;

  const embedded = isIframe();
  const declaration = document.querySelector<HTMLElement>('[data-iframe-fit]');
  const fitAnimation = embedded && declaration?.dataset.iframeFit === 'true';

  document.documentElement.dataset.isIframe = String(embedded);
  document.documentElement.dataset.iframeFit = fitAnimation ? 'animation' : 'off';

  if (!fitAnimation) return;

  const viewport = document.querySelector<HTMLElement>('[data-animation-viewport]');
  if (!viewport) return;

  let animationFrame = 0;

  const update = () => {
    viewport.style.width = '100%';

    const deck = viewport.querySelector<HTMLElement>('.remotion-deck');
    const playerFrame = deck?.querySelector<HTMLElement>('.remotion-deck__player-frame');
    if (!deck || !playerFrame || !deck.querySelector('.remotion-deck__single')) return;

    const host = viewport.parentElement;
    if (!host) return;

    const hostStyle = window.getComputedStyle(host);
    const horizontalPadding = numericStyle(hostStyle.paddingLeft) + numericStyle(hostStyle.paddingRight);
    const verticalPadding = numericStyle(hostStyle.paddingTop) + numericStyle(hostStyle.paddingBottom);
    const availableWidth = Math.max(0, host.clientWidth - horizontalPadding);
    const availableHeight = Math.max(0, window.innerHeight - verticalPadding);
    const deckRect = deck.getBoundingClientRect();
    const playerRect = playerFrame.getBoundingClientRect();

    if (playerRect.width <= 0 || playerRect.height <= 0) return;

    const nonPlayerHeight = Math.max(0, deckRect.height - playerRect.height);
    const widthForHeight = Math.max(
      0,
      (availableHeight - nonPlayerHeight) * (playerRect.width / playerRect.height),
    );
    const minimumWidth = Math.min(MIN_PLAYER_WIDTH, availableWidth);
    const fittedWidth = Math.min(availableWidth, Math.max(minimumWidth, widthForHeight));

    viewport.style.width = `${fittedWidth}px`;
  };

  const scheduleUpdate = () => {
    window.cancelAnimationFrame(animationFrame);
    animationFrame = window.requestAnimationFrame(update);
  };

  const mutationObserver = new MutationObserver(scheduleUpdate);
  mutationObserver.observe(viewport, {childList: true, subtree: true});
  window.addEventListener('resize', scheduleUpdate);
  document.fonts?.ready.then(scheduleUpdate);
  scheduleUpdate();

  window.__inkloomIframeLayoutCleanup = () => {
    window.cancelAnimationFrame(animationFrame);
    mutationObserver.disconnect();
    window.removeEventListener('resize', scheduleUpdate);
    viewport.style.removeProperty('width');
  };
};
