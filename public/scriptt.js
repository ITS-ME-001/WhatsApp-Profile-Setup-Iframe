const WEBSITE_URL = 'https://ambitious-becki-shizothetechie-fd7ba018.koyeb.app/';
const SOCIAL_LINKS = {
  github: 'https://github.com/',
  whatsapp: 'https://chat.whatsapp.com/',
  whatsapp2: 'https://chat.whatsapp.com/channel/',
  instagram: 'https://instagram.com/'
};

const iframe = document.getElementById('website-frame');
const loadingOverlay = document.getElementById('loadingOverlay');

document.addEventListener('DOMContentLoaded', () => {
  initializeIframe();
  setupSocialIcons();

  iframe.addEventListener('load', hideLoadingOverlay);
  iframe.addEventListener('load', () => iframe.focus());

  iframe.addEventListener('error', () => {
    showLoadingOverlay();
    setTimeout(() => {
      iframe.src = WEBSITE_URL;
    }, 2000);
  });
});

function initializeIframe() {
  iframe.src = WEBSITE_URL;
  showLoadingOverlay();
}

function showLoadingOverlay() {
  loadingOverlay.style.display = 'flex';
  loadingOverlay.style.opacity = '1';
}

function hideLoadingOverlay() {
  setTimeout(() => {
    loadingOverlay.style.opacity = '0';
    setTimeout(() => {
      loadingOverlay.style.display = 'none';
    }, 500);
  }, 1000);
}

window.addEventListener('resize', () => {
  iframe.style.height = `${window.innerHeight}px`;
});

document.addEventListener('contextmenu', e => e.preventDefault());

function setupSocialIcons() {
  const icons = [
    { id: 'github-icon', link: SOCIAL_LINKS.github },
    { id: 'whatsapp-icon', link: SOCIAL_LINKS.whatsapp },
    { id: 'whatsapp-icon2', link: SOCIAL_LINKS.whatsapp2 },
    { id: 'instagram-icon', link: SOCIAL_LINKS.instagram },
  ];

  icons.forEach(({ id, link }) => {
    const element = document.getElementById(id);
    if (element) {
      element.addEventListener('click', () => window.open(link, '_blank'));
    }
  });
}