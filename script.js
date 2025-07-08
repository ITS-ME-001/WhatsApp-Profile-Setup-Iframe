// Website URL
const WEBSITE_URL = 'https://ambitious-becki-shizothetechie-fd7ba018.koyeb.app/';

// Social Media Links (change these to your actual handles)
const SOCIAL_LINKS = {
    github: 'https://github.com/Aeon-San',
    whatsapp: 'https://chat.whatsapp.com/',
    whatsapp2: 'https://chat.whatsapp.com/channel/',
    instagram: 'https://instagram.com/shizo_the_techie'
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
    const githubIcon = document.getElementById('github-icon');
    const whatsappIcon = document.getElementById('whatsapp-icon');
    const whatsappIcon2 = document.getElementById('whatsapp-icon');
    const instagramIcon = document.getElementById('instagram-icon');
    
    githubIcon.addEventListener('click', function() {
        window.open(SOCIAL_LINKS.github, '_blank');
    });
    
    whatsappIcon.addEventListener('click', function() {
        window.open(SOCIAL_LINKS.whatsapp, '_blank');
    });
    
    whatsappIcon.addEventListener('click', function() {
        window.open(SOCIAL_LINKS.whatsapp2, '_blank');
    });
    
    instagramIcon.addEventListener('click', function() {
        window.open(SOCIAL_LINKS.instagram, '_blank');
    });
    
    // Add subtle pulse effect on hover
    [githubIcon, whatsappIcon, whatsappIcon2, instagramIcon].forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.animation = 'none';
            setTimeout(() => {
                this.style.animation = '';
            }, 10);
        });
    });
}
