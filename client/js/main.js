/**
 * Script principal pour les animations et interactions
 */

document.addEventListener('DOMContentLoaded', function() {
    // Animation de transition entre les pages
    const links = document.querySelectorAll('a');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            // Si ce n'est pas un lien externe
            if (!this.href.includes('http') && !this.href.startsWith('mailto')) {
                e.preventDefault();
                const href = this.getAttribute('href');
                
                // Animation de sortie
                document.body.style.opacity = '0';
                
                // Changement de page après l'animation
                setTimeout(() => {
                    window.location.href = href;
                }, 500);
            }
        });
    });
    
    // Réapparition progressive après le chargement
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Effet de parallaxe léger pour le fond
window.addEventListener('scroll', function() {
    const scrollPosition = window.pageYOffset;
    const marbleOverlay = document.querySelector('.marble-overlay');
    
    if (marbleOverlay) {
        marbleOverlay.style.transform = `translateY(${scrollPosition * 0.3}px)`;
    }
});