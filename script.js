// Website URL
const WEBSITE_URL = 'http://fullpp.olduser.dpdns.org/';

// Social Media Links (change these to your actual handles)
const SOCIAL_LINKS = {
    instagram: 'https://instagram.com/olduser.ml',
    github: 'https://github.com/Teamolduser'
};

// Get DOM elements
const iframe = document.getElementById('website-frame');
const loadingOverlay = document.getElementById('loadingOverlay');

// Initialize the iframe with the URL
function initializeIframe() {
    iframe.src = WEBSITE_URL;
}

// Hide loading overlay when iframe loads
iframe.addEventListener('load', function() {
    setTimeout(() => {
        loadingOverlay.style.opacity = '0';
        setTimeout(() => {
            loadingOverlay.style.display = 'none';
        }, 500);
    }, 1000);
});

// Show loading overlay on error and retry
iframe.addEventListener('error', function() {
    loadingOverlay.style.display = 'flex';
    loadingOverlay.style.opacity = '1';
    
    setTimeout(() => {
        iframe.src = iframe.src; // Retry loading
    }, 2000);
});

// Handle window resize
window.addEventListener('resize', function() {
    // Force iframe to recalculate dimensions
    iframe.style.height = window.innerHeight + 'px';
});

// Prevent right-click context menu to make it feel more native
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

// Initial setup
document.addEventListener('DOMContentLoaded', function() {
    // Initialize iframe with URL
    initializeIframe();
    
    // Setup social media icons
    setupSocialIcons();
    
    // Focus on iframe after load for better interaction
    iframe.addEventListener('load', function() {
        setTimeout(() => {
            iframe.focus();
        }, 100);
    });
});

// Setup social media icon click handlers
function setupSocialIcons() {
    const instagramIcon = document.getElementById('instagram-icon');
    const githubIcon = document.getElementById('github-icon');
    
    instagramIcon.addEventListener('click', function() {
        window.open(SOCIAL_LINKS.instagram, '_blank');
    });
    
    githubIcon.addEventListener('click', function() {
        window.open(SOCIAL_LINKS.github, '_blank');
    });
    
    // Add subtle pulse effect on hover
    [instagramIcon, githubIcon].forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.animation = 'none';
            setTimeout(() => {
                this.style.animation = '';
            }, 10);
        });
    });
}
