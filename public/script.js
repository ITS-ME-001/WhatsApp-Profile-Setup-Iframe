const WEBSITE_URL = 'https://fullpp.olduser.dpdns.org/';

const SOCIAL_LINKS = {
  github: 'https://github.com/',
  instagram: 'https://instagram.com/',
  whatsapp: 'https://chat.whatsapp.com/',
  whatsapp2: 'https://chat.whatsapp.com/channel/',
};

document.addEventListener('DOMContentLoaded', () => {
  const iframe = document.getElementById('website-frame');
  const loadingOverlay = document.getElementById('loadingOverlay');

  // Load iframe
  iframe.src = WEBSITE_URL;
  loadingOverlay.style.display = 'flex';

  iframe.addEventListener('load', () => {
    setTimeout(() => {
      loadingOverlay.style.opacity = '0';
      setTimeout(() => {
        loadingOverlay.style.display = 'none';
      }, 500);
    }, 1000);

    setTimeout(() => iframe.focus(), 100);
  });

  iframe.addEventListener('error', () => {
    loadingOverlay.style.display = 'flex';
    loadingOverlay.style.opacity = '1';
    setTimeout(() => {
      iframe.src = WEBSITE_URL;
    }, 2000);
  });

  // Social button click handlers
  document.getElementById('github-icon')?.addEventListener('click', () => {
    window.open(SOCIAL_LINKS.github, '_blank');
  });

  document.getElementById('instagram-icon')?.addEventListener('click', () => {
    window.open(SOCIAL_LINKS.instagram, '_blank');
  });

  document.getElementById('whatsapp-icon')?.addEventListener('click', () => {
    window.open(SOCIAL_LINKS.whatsapp, '_blank');
  });

  document.getElementById('whatsapp-icon2')?.addEventListener('click', () => {
    window.open(SOCIAL_LINKS.whatsapp2, '_blank');
  });
});