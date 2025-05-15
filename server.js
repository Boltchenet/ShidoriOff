const express = require('express');
const WebSocket = require('ws');
const http = require('http');
const cors = require('cors');
const path = require('path');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Données en mémoire (remplacez par une base de données réelle en production)
let orders = [];
let orderIdCounter = 1;

// Routes API
app.post('/api/orders', (req, res) => {
    const { table_number, dishes } = req.body;
    
    // Créer une nouvelle commande
    const newOrder = {
        id: orderIdCounter++,
        table_number,
        dishes,
        status: 'pending',
        created_at: new Date().toISOString()
    };
    
    orders.push(newOrder);
    
    // Notifier tous les clients WebSocket
    broadcast({
        type: 'NEW_ORDER',
        orderId: newOrder.id
    });
    
    res.status(201).json({ orderId: newOrder.id });
});

app.get('/api/kitchen/orders', (req, res) => {
    res.json(orders);
});

app.patch('/api/orders/:id', (req, res) => {
    const orderId = parseInt(req.params.id);
    const { status } = req.body;
    
    const orderIndex = orders.findIndex(o => o.id === orderId);
    if (orderIndex === -1) {
        return res.status(404).json({ error: 'Commande non trouvée' });
    }
    
    orders[orderIndex].status = status;
    
    // Notifier tous les clients WebSocket
    broadcast({
        type: 'ORDER_UPDATED',
        orderId: orderId,
        newStatus: status
    });
    
    res.json(orders[orderIndex]);
});

app.delete('/api/orders/:id', (req, res) => {
    const orderId = parseInt(req.params.id);
    
    const orderIndex = orders.findIndex(o => o.id === orderId);
    if (orderIndex === -1) {
        return res.status(404).json({ error: 'Commande non trouvée' });
    }
    
    orders = orders.filter(o => o.id !== orderId);
    
    // Notifier tous les clients WebSocket
    broadcast({
        type: 'ORDER_REMOVED',
        orderId: orderId
    });
    
    res.status(204).end();
});

// Gestion des connexions WebSocket
wss.on('connection', (ws) => {
    console.log('Nouveau client WebSocket connecté');
    
    ws.on('close', () => {
        console.log('Client WebSocket déconnecté');
    });
});

// Fonction pour diffuser un message à tous les clients WebSocket
function broadcast(message) {
    wss.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify(message));
        }
    });
}

// Démarrer le serveur
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});