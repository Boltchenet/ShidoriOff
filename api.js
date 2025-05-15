// Simulation des données de commandes
export const mockOrders = [
  // ... (copier le contenu de orders.json ici)
];

// Simulation de l'API cuisine
export const KitchenAPI = {
  getOrders: async () => {
    return new Promise(resolve => {
      setTimeout(() => resolve(mockOrders), 500); // Simule un délai réseau
    });
  },

  markDishAsDone: async (orderId, dishId) => {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log(`Plat ${dishId} de la commande ${orderId} marqué comme prêt`);
        resolve({ success: true });
      }, 300);
    });
  }
};