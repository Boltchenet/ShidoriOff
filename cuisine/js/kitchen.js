document.addEventListener('DOMContentLoaded', () => {
    let currentOrders = [];

    // Affiche l'heure
    const updateTime = () => {
        const now = new Date();
        document.getElementById('current-time').textContent = 
            `Heure : ${now.getHours()}h${now.getMinutes().toString().padStart(2, '0')}`;
    };
    updateTime();
    setInterval(updateTime, 60000);

    // Charge les commandes depuis l'API
    const fetchOrders = async () => {
        try {
            const response = await fetch('/api/kitchen/orders');
            if (!response.ok) throw new Error('Échec du chargement des commandes');
            
            const orders = await response.json();
            currentOrders = orders;
            renderOrders(orders);
        } catch (error) {
            console.error('Erreur lors du chargement des commandes:', error);
        }
    };

    // Met à jour le statut d'un item
    const updateItemStatus = async (itemId, status) => {
        try {
            const response = await fetch(`/api/kitchen/items/${itemId}/status`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ status })
            });
            
            if (!response.ok) throw new Error('Échec de la mise à jour du statut');
            
            fetchOrders(); // Rafraîchir la liste
        } catch (error) {
            console.error('Erreur de mise à jour du statut:', error);
        }
    };

    // Affiche les commandes
    const renderOrders = (orders) => {
        const pending = document.getElementById('pending-orders');
        const preparing = document.getElementById('preparing-orders');
        const ready = document.getElementById('ready-orders');

        [pending, preparing, ready].forEach(el => el.innerHTML = '');

        orders.forEach(order => {
            const orderHTML = `
                <div class="order-card">
                    <div class="order-header">
                        <h3>Commande #${order.id} - Table ${order.table_number}</h3>
                        <span>${new Date(order.created_at).toLocaleTimeString()}</span>
                        ${order.notes ? `<p class="notes">Notes: ${order.notes}</p>` : ''}
                    </div>
                    <div class="order-dishes">
                        ${order.items.map(item => `
                            <div class="dish-item">
                                <span>${item.quantity}x ${item.dish_name}</span>
                                <select class="status-select" data-item-id="${item.item_id}">
                                    <option value="pending" ${item.status === 'pending' ? 'selected' : ''}>En attente</option>
                                    <option value="preparing" ${item.status === 'preparing' ? 'selected' : ''}>En préparation</option>
                                    <option value="ready" ${item.status === 'ready' ? 'selected' : ''}>Prêt</option>
                                </select>
                                ${item.special_requests ? `<p class="special-request">${item.special_requests}</p>` : ''}
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;

            // Trie les commandes par statut
            if (order.items.every(item => item.status === 'ready')) {
                ready.innerHTML += orderHTML;
            } else if (order.items.some(item => item.status === 'preparing')) {
                preparing.innerHTML += orderHTML;
            } else {
                pending.innerHTML += orderHTML;
            }
        });

        // Ajoute les écouteurs d'événements pour les changements de statut
        document.querySelectorAll('.status-select').forEach(select => {
            select.addEventListener('change', (e) => {
                updateItemStatus(e.target.dataset.itemId, e.target.value);
            });
        });
    };

    // Rafraîchir toutes les 30 secondes
    setInterval(fetchOrders, 30000);
    fetchOrders(); // Chargement initial
});
// cuisine/js/kitchen.js
async function exportOrders() {
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;
    
    const params = new URLSearchParams();
    if (startDate) params.append('startDate', startDate);
    if (endDate) params.append('endDate', endDate);
    
    window.open(`/api/reports/orders?${params.toString()}`, '_blank');
}