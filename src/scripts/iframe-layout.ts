const isIframe = () =>
  window.self !== window.top || new URLSearchParams(window.location.search).get('embed') === '1';

export const initializeIframeLayout = () => {
  const embedded = isIframe();
  const declaration = document.querySelector<HTMLElement>('[data-iframe-fit]');
  const fitAnimation = embedded && declaration?.dataset.iframeFit === 'true';

  delete document.documentElement.dataset.isIframe;
  document.documentElement.dataset.iframeFit = fitAnimation ? 'animation' : 'off';
};
