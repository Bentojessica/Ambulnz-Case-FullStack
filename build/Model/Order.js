"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
class Order {
    constructor(id, pizza, quantity) {
        this.id = id;
        this.pizza = pizza;
        this.quantity = quantity;
    }
    getId() {
        return this.id;
    }
    getPizza() {
        return this.pizza;
    }
    getQuantity() {
        return this.quantity;
    }
}
exports.Order = Order;
//# sourceMappingURL=Order.js.map