const WEBSITE_URL = "https://fp.apiis.dpdns.org";

document.addEventListener("DOMContentLoaded", () => {
  const iframe = document.getElementById("website-frame");
  const loadingOverlay = document.getElementById("loadingOverlay");

  iframe.src = WEBSITE_URL;
  loadingOverlay.style.display = "flex";

  iframe.addEventListener("load", () => {
    setTimeout(() => {
      loadingOverlay.style.opacity = "0";
      setTimeout(() => {
        loadingOverlay.style.display = "none";
      }, 500);
    }, 1000);
    setTimeout(() => iframe.focus(), 100);
  });

  iframe.addEventListener("error", () => {
    loadingOverlay.style.display = "flex";
    loadingOverlay.style.opacity = "1";
    setTimeout(() => {
      iframe.src = WEBSITE_URL;
    }, 2000);
  });
});
