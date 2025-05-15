document.addEventListener('DOMContentLoaded', function() {
    if (typeof menuData === 'undefined') {
        console.error('Erreur: menuData non chargé.');
        return;
    }

    // Charger toutes les catégories disponibles
    loadCategory('entrees');
    loadCategory('sashimis');
    loadCategory('sushis');
    loadCategory('plats-chauds');
    loadCategory('brochettes');
    loadCategory('alcool');
    loadCategory('boissons');
    loadCategory('desserts');
});

function loadCategory(category) {
    const section = document.getElementById(`${category}-section`);
    if (!section || !menuData[category]) return;

    // Afficher sans trier par prix et sans afficher le prix
    section.innerHTML = menuData[category].map(dish => `
        <div class="catalogue-dish">
            <img src="${dish.image}" alt="${dish.name}" class="catalogue-image" loading="lazy">
            <div class="catalogue-dish-info">
                <h3 class="catalogue-dish-name">${dish.name}</h3>
                <p class="catalogue-dish-desc">${dish.desc}</p>
            </div>
        </div>
    `).join('');
}