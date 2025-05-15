// Données des plats
const menuData = {
    entrees: [
        { id: 1, name: "Edamame", desc: "Fèves de soja fraîches légèrement salées", image: "https://medias.cotesushi.com/products/216/large_76211.webp" },
        { id: 2, name: "Gyoza", desc: "Raviolis japonais croustillants fourrés au porc", image: "https://www.giallozafferano.fr/images/74-7419/raviolis-de-viande-japonais-gyoza_1200x800.jpg" },
        { id: 3, name: "Tataki de Thon", desc: "Thon légèrement saisi, mariné au citron et gingembre", image: "https://www.lamaisonnordique.com/wp-content/uploads/2014/04/TATAKI_019.jpg" },
        { id: 4, name: "Ebi Mayo", desc: "Crevettes tempura avec sauce mayonnaise épicée", image: "https://tokyorestaurant.ro/wp-content/uploads/2020/06/Ebi-mayo-maki.jpg" },
        { id: 5, name: "Sashimi de Hamachi", desc: "5 pièces de sashimi de jaune (hamachi)", image: "https://takeaway.chahouse-ede.nl/wp-content/uploads/2020/11/20521-003.jpg" }
    ],
    sashimis: [
        { id: 6, name: "Sashimi de Saumon", desc: "8 pièces de saumon frais", image: "https://s3-sa-east-1.amazonaws.com/deliveryon-uploads/products/wasabi/21_5ea7aa9d15664.jpg" },
        { id: 7, name: "Sashimi Mixte Premium", desc: "12 pièces (thon, saumon, hamachi, madai)", image: "https://media-cdn.tripadvisor.com/media/photo-m/1280/15/13/83/5a/sashimi.jpg" },
        { id: 8, name: "Sashimi de Thon Rouge", desc: "6 pièces de thon rouge d'Oma", image: "https://medias.cotesushi.com/products/178/large_d86d1.webp" },
        { id: 9, name: "Sashimi de Otoro", desc: "5 pièces de ventrèche de thon premium", image: "https://media.istockphoto.com/id/179591767/fr/photo/cuisine-japonaise-temakizushi.jpg?s=612x612&w=0&k=20&c=_ssasqxW22Hu9o5V5nFI5Q7y4waH6s5uIEIaCLzPRgA=" }
    ],
    sushis: [
        { id: 10, name: "Nigiri Saumon", desc: "2 pièces de sushi au saumon", image: "https://restaurant-lesamourai.com/www/image/nigiris_shake_min.jpg" },
        { id: 11, name: "Maki California", desc: "6 pièces de maki au crabe et avocat", image: "https://media.istockphoto.com/id/157609060/fr/photo/sushi-am%C3%A9ricain.jpg?s=612x612&w=0&k=20&c=gop_YoPIG56A8MF40vylx91sAEcmLuLBWgZln7FHvOQ=" },
        { id: 12, name: "Uramaki Spicy Tuna", desc: "8 pièces de sushi inversé au thon épicé", image: "https://media-cdn.tripadvisor.com/media/photo-s/10/a4/eb/f3/uramaki-spicy-tuna.jpg" },
        { id: 13, name: "Assortiment Chef", desc: "10 pièces (nigiri et maki sélectionnés)", image: "https://static.vecteezy.com/ti/photos-gratuite/t2/36212479-ai-genere-fraicheur-et-des-cultures-sur-une-assiette-de-maki-sushi-genere-par-ai-photo.jpg" },
        { id: 14, name: "Temaki Uni", desc: "Cône main à l'oursin de Hokkaido", image: "https://media.istockphoto.com/id/179591767/fr/photo/cuisine-japonaise-temakizushi.jpg?s=612x612&w=0&k=20&c=_ssasqxW22Hu9o5V5nFI5Q7y4waH6s5uIEIaCLzPRgA=" }
    ],
    'plats-chauds': [
        { id: 15, name: "Ramen Tonkotsu", desc: "Nouilles dans un bouillon de porc crémeux 48h", image: "https://blog.sakura.co/wp-content/uploads/2021/10/Hakata-thumbnail.jpg" },
        { id: 16, name: "Wagyu A5 Miyazaki", desc: "Bœuf wagyu de grade A5, 150g", image: "https://img.freepik.com/photos-premium/viande-miyazaki-wagyu-a5_863013-174846.jpg" },
        { id: 17, name: "Teriyaki Saumon", desc: "Saumon grillé avec sauce teriyaki maison", image: "https://media.istockphoto.com/id/647871516/fr/photo/saumon-teriyaki-sur-fond-noir.jpg?s=612x612&w=0&k=20&c=eF4-V4HkbOHANGGoitrVCw52_QKMhAZYyDkbYCv_XQE=" },
        { id: 18, name: "Unagi Don", desc: "Bol de riz avec anguille grillée sauce kabayaki", image: "https://static.vecteezy.com/ti/photos-gratuite/t2/29557317-grille-anguille-avec-riz-photo.jpg" },
        { id: 19, name: "Katsu Curry", desc: "Porc pané avec curry japonais et riz", image: "https://img.freepik.com/premium-photo/deluxe-chicken-katsu-curry-dish-japanese-cuisine-katsu-curry-food-image-photography_1020697-662801.jpg" }
    ],
    alcool: [
        { id: 20, name: "Saké Daiginjo", desc: "Saké premium Dassai 23, 180ml", image: "https://cove27.co.nz/cdn/shop/files/Dassai-23-Junmai-Daiginjo-Sake-720ml-nip_1024x1024@2x.webp?v=1732241256" },
        { id: 21, name: "Saké Nigori", desc: "Saké non filtré Shirakabegura, 180ml", image: "https://cdn.shopify.com/s/files/1/0212/1922/files/021520_sg_nigori_web_1024x1024.jpg?v=1580771563" },
        { id: 22, name: "Bière Asahi", desc: "Bière japonaise premium, 33cl", image: "https://www.kawaiicafe.fr/wp-content/uploads/2024/04/Biere-japonaise-asashi.jpg" },
        { id: 23, name: "Umeshu Premium", desc: "Liqueur de prune vieillie Choya, 50ml", image: "https://media.assettype.com/foodtechbiz%2F2022-02%2F2e85a5f6-9257-4fa7-af44-a9e326f223d6%2FThree_flavours_of_Umeshu___Japan_s_traditional_plum_wine.png?w=1024&auto=format%2Ccompress&fit=max" },
        { id: 24, name: "Whisky Yamazaki 18 ans", desc: "Single malt japonais, 50ml", image: "https://house.suntory.com/sites/default/files/styles/original/public/2023-05/Yamazaki_18YO_LTO_0.jpg.webp" }
    ],
    brochettes: [
        { id: 25, name: "Brochettes de Wagyu", desc: "2 brochettes de bœuf wagyu A5", image: "https://ebanian-traiteur.com/wp-content/uploads/2024/09/2-29.jpg" },
        { id: 26, name: "Tsukune", desc: "Brochettes de boulettes de poulet", image: "https://ramekin.fr/wp-content/uploads/2024/06/tsukune-1-500x375.jpg" },
        { id: 27, name: "Brochettes d'anguille", desc: "Unagi grillé sauce kabayaki", image: "https://media.istockphoto.com/id/1286618077/fr/photo/chef-dans-un-restaurant-danguille-cuisine-languille-kabayaki.jpg?s=612x612&w=0&k=20&c=hMVCInp0MizuEBBlib6VJZEtOXhrFscptH1uC8Oeth4=" }
    ],
    boissons: [
        { id: 28, name: "Thé vert Matcha", desc: "Thé vert japonais en poudre", image: "https://www.bresilia.fr/2363-large_default/matcha.jpg" },
        { id: 29, name: "Ramune Original", desc: "Boisson gazeuse japonaise à la lime", image: "https://www.yatai-france.fr/wp-content/uploads/2022/12/ramune.png" },
        { id: 30, name: "Calpico", desc: "Boisson lactée japonaise rafraîchissante", image: "https://m.media-amazon.com/images/I/712be7Bvb1L.jpg" },
        { id: 31, name: "Yuzu Soda", desc: "Soda au yuzu frais", image: "https://cdn.faire.com/fastly/4ef156d3ab5f326353eaaee17f311cbb52bd1d1c40528c23d80621ed734801a3.png" }
    ],
    desserts: [
        { id: 32, name: "Mochi Glacé", desc: "3 pièces (matcha, fraise, mangue)", image: "https://img.cuisineaz.com/1024x768/2023/11/13/i196490-mochi-glace.jpg" },
        { id: 33, name: "Dorayaki", desc: "Pancakes fourrés à la pâte de haricots rouges", image: "https://www.maisondumochi.fr/wp-content/uploads/2018/08/dorayaki-japon-533x800.jpg" },
        { id: 34, name: "Matcha Tiramisu", desc: "Tiramisu au thé matcha", image: "https://www.iletaitunfruit.fr/wp-content/uploads/2024/05/Quel-est-le-secret-du-tiramisu-revisite-au-matcha-et-chocolat-blanc-pour-une-explosion-de-saveurs-1024x578.png" },
        { id: 35, name: "Parfait Matcha", desc: "Dessert glacé multi-couches", image: "https://www.bentoandco.com/cdn/shop/articles/custom_resized_d8a2eced-50a5-40e0-99cd-5ef161942373.png?v=1628741285&width=1100" }
    ]
};

// Variables d'état
let currentCategory = 'entrees';
let cart = [];
let quantities = {};
let remainingItems = 20;
let currentRound = 1;
const maxRounds = 5;

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    loadCategory(currentCategory);
    setupEventListeners();
    updateCartSummary();
});

// Charger les plats d'une catégorie
function loadCategory(category) {
    const dishesList = document.getElementById('dishes-list');
    dishesList.innerHTML = '';
    
    document.querySelector('.category-title').textContent = 
        category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ');
    
    menuData[category].forEach(dish => {
        const dishCard = document.createElement('div');
        dishCard.className = 'dish-card';
        dishCard.innerHTML = `
            <div class="dish-image" style="background-image: url('${dish.image}')"></div>
            <h3 class="dish-name">${dish.name}</h3>
            <p class="dish-desc">${dish.desc}</p>
            <div class="quantity-selector">
                <button class="quantity-btn minus" data-id="${dish.id}">-</button>
                <span class="quantity" data-id="${dish.id}">${quantities[dish.id] || 0}</span>
                <button class="quantity-btn plus" data-id="${dish.id}">+</button>
            </div>
        `;
        dishesList.appendChild(dishCard);
    });
}

// Gestion des événements
function setupEventListeners() {
    document.querySelectorAll('.category-list li').forEach(item => {
        item.addEventListener('click', function() {
            document.querySelector('.category-list li.active').classList.remove('active');
            this.classList.add('active');
            currentCategory = this.dataset.category;
            loadCategory(currentCategory);
        });
    });
    
    document.addEventListener('click', function(e) {
        const dishId = parseInt(e.target.dataset.id);
        if (e.target.classList.contains('plus')) {
            adjustQuantity(dishId, 1);
        } else if (e.target.classList.contains('minus')) {
            adjustQuantity(dishId, -1);
        }
    });
    
    document.getElementById('validate-btn').addEventListener('click', validateRound);
}

// Ajuster les quantités
function adjustQuantity(dishId, change) {
    if (currentRound >= maxRounds && change > 0) return;
    
    if (!quantities[dishId]) quantities[dishId] = 0;
    
    const newQuantity = quantities[dishId] + change;
    
    if (newQuantity >= 0 && (change > 0 ? (remainingItems > 0) : true)) {
        quantities[dishId] = newQuantity;
        updateQuantityDisplay(dishId);
        
        let dish;
        for (const category in menuData) {
            dish = menuData[category].find(item => item.id === dishId);
            if (dish) break;
        }
        
        if (dish) {
            if (change > 0) {
                cart.push(dish);
                remainingItems--;
            } else {
                const index = cart.findIndex(item => item.id === dishId);
                if (index !== -1) {
                    cart.splice(index, 1);
                    remainingItems++;
                }
            }
            updateCartSummary();
            updateCartItems();
        }
    }
}

// Mettre à jour l'affichage des quantités
function updateQuantityDisplay(dishId) {
    const quantityElement = document.querySelector(`.quantity[data-id="${dishId}"]`);
    if (quantityElement) {
        quantityElement.textContent = quantities[dishId] || 0;
    }
}

// Mettre à jour le résumé du panier
function updateCartSummary() {
    document.getElementById('total-items').textContent = cart.length;
    document.getElementById('remaining-items').textContent = remainingItems;
    document.getElementById('current-round').textContent = currentRound;
    
    // Mettre à jour le statut du tour
    const roundStatus = document.getElementById('round-status');
    if (currentRound === maxRounds) {
        roundStatus.textContent = "(Dernier tour)";
    } else {
        roundStatus.textContent = "";
    }
}

// Mettre à jour les articles du panier
function updateCartItems() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    
    const itemCounts = {};
    cart.forEach(item => {
        itemCounts[item.id] = (itemCounts[item.id] || 0) + 1;
    });
    
    Object.keys(itemCounts).forEach(id => {
        const item = cart.find(item => item.id === parseInt(id));
        if (item) {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <span>${item.name} x${itemCounts[id]}</span>
                <div class="cart-item-actions">
                    <button class="cart-plus" data-id="${id}">+</button>
                    <button class="cart-minus" data-id="${id}">-</button>
                </div>
            `;
            cartItems.appendChild(cartItem);
        }
    });
    
    document.querySelectorAll('.cart-plus').forEach(btn => {
        btn.addEventListener('click', (e) => {
            adjustQuantity(parseInt(e.target.dataset.id), 1);
        });
    });
    
    document.querySelectorAll('.cart-minus').forEach(btn => {
        btn.addEventListener('click', (e) => {
            adjustQuantity(parseInt(e.target.dataset.id), -1);
        });
    });
}

// Valider le tour
function validateRound() {
    if (cart.length === 0) return;
    
    const overlay = document.getElementById('validation-overlay');
    const validateBtn = document.getElementById('validate-btn');
    
    if (currentRound < maxRounds) {
        currentRound++;
        remainingItems = 20;
        cart = [];
        quantities = {};
        
        // Afficher l'animation
        overlay.classList.add('active');
        
        setTimeout(() => {
            overlay.classList.remove('active');
            updateCartSummary();
            updateCartItems();
            
            // Réinitialiser les quantités affichées
            document.querySelectorAll('.quantity').forEach(el => {
                el.textContent = '0';
            });
            
            // Mettre à jour le bouton si dernier tour
            if (currentRound === maxRounds) {
                validateBtn.textContent = "Valider la commande finale";
            }
        }, 1000);
        
    } else if (currentRound === maxRounds) {
        // Dernière validation
        overlay.classList.add('active');
        
        setTimeout(() => {
            overlay.classList.remove('active');
            
            // Désactiver complètement le système
            validateBtn.disabled = true;
            validateBtn.style.opacity = '0.5';
            validateBtn.style.cursor = 'not-allowed';
            validateBtn.textContent = "Commande terminée";
            
            // Bloquer l'ajout de nouveaux plats
            remainingItems = 0;
            updateCartSummary();
            
            // Soumettre la commande au serveur
            const tableNumber = 1; // À remplacer par la valeur réelle
            const customerName = "Client"; // À remplacer par la valeur réelle
            const notes = ""; // À remplacer par les notes réelles
            
            // Préparer les items pour la soumission
            const itemsForSubmission = [];
            const itemCounts = {};
            cart.forEach(item => {
                itemCounts[item.id] = (itemCounts[item.id] || 0) + 1;
            });
            
            Object.keys(itemCounts).forEach(id => {
                itemsForSubmission.push({
                    id: parseInt(id),
                    quantity: itemCounts[id]
                });
            });
            
            submitOrder(tableNumber, customerName, itemsForSubmission, notes);
        }, 1000);
    }
}

// Soumettre la commande au serveur
async function submitOrder(tableNumber, customerName, items, notes) {
    try {
        const response = await fetch('/api/orders', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                table_number: tableNumber,
                customer_name: customerName,
                items: items,
                notes: notes
            })
        });
        
        if (!response.ok) throw new Error('Failed to submit order');
        
        const data = await response.json();
        alert(`Commande #${data.orderId} soumise avec succès !`);
        return data.orderId;
    } catch (error) {
        console.error('Erreur lors de la soumission de la commande:', error);
        alert('Erreur lors de la soumission de la commande. Veuillez réessayer.');
        return null;
    }
}