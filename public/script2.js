const WEBSITE_URL = 'https://fp.apiis.dpdns.org';
const iframe = document.getElementById('website-frame');
const loadingOverlay = document.getElementById('loadingOverlay');

document.addEventListener('DOMContentLoaded', () => {
  wakeUpThenLoad();
  setupIframeEvents();
});

function wakeUpThenLoad() {
  showLoadingOverlay();

  fetch(WEBSITE_URL, { method: 'GET', mode: 'no-cors' })
    .finally(() => {
      iframe.src = WEBSITE_URL;
    });
}

function setupIframeEvents() {
  iframe.addEventListener('load', () => {
    setTimeout(() => {
      hideLoadingOverlay();
      iframe.focus();
    }, 1000);
  });

  iframe.addEventListener('error', () => {
    showLoadingOverlay();
    setTimeout(() => {
      iframe.src = WEBSITE_URL;
    }, 2000);
  });
}

function showLoadingOverlay() {
  loadingOverlay.style.display = 'flex';
  loadingOverlay.style.opacity = '1';
}

function hideLoadingOverlay() {
  loadingOverlay.style.opacity = '0';
  setTimeout(() => {
    loadingOverlay.style.display = 'none';
  }, 500);
}

window.addEventListener('resize', () => {
  iframe.style.height = `${window.innerHeight}px`;
});

document.addEventListener('contextmenu', e => e.preventDefault());