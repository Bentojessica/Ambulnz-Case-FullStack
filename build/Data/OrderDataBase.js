"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDataBase = void 0;
const BaseDataBase_1 = require("./BaseDataBase");
class OrderDataBase extends BaseDataBase_1.BaseDataBase {
    insertOrder(order) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.connection()
                    .insert(order)
                    .into(OrderDataBase.TABLE_NAME);
            }
            catch (error) {
                throw new Error(error.message || error.sqlMessage);
            }
        });
    }
    getOrders() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const order = yield this.connection()
                    .into(OrderDataBase.TABLE_NAME);
                return order;
            }
            catch (error) {
                throw new Error(error.message || error.sqlMessage);
            }
        });
    }
    getOrderById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const [orderId] = yield this.connection()
                    .select("ambullanz_order.id", "ambullanz_order.pizza", "ambullanz_order.quantity", "ambullanz_pizza.name", "ambullanz_pizza.price", "ambullanz_pizza.ingredients")
                    .where({ id })
                    .innerJoin("ambullanz_pizza", "ambullanz_order.pizza", "ambullanz_pizza.name")
                    .into(OrderDataBase.TABLE_NAME);
                return orderId;
            }
            catch (error) {
                throw new Error(error.message || error.sqlMessage);
            }
        });
    }
}
exports.OrderDataBase = OrderDataBase;
OrderDataBase.TABLE_NAME = "ambulnz_order";
//# sourceMappingURL=OrderDataBase.js.map