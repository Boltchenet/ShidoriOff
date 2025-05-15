// Définition des structures de données communes

class Order {
    constructor(data) {
        this.id = data.id;
        this.tableNumber = data.tableNumber;
        this.rounds = data.rounds.map(round => new Round(round));
    }
}

class Round {
    constructor(data) {
        this.number = data.number;
        this.status = data.status;
        this.dishes = data.dishes.map(dish => new Dish(dish));
    }
}

class Dish {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.status = data.status;
    }
}