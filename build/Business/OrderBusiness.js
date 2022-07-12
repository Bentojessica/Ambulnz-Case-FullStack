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
exports.OrderBusiness = void 0;
const OrderDataBase_1 = require("../Data/OrderDataBase");
const IdGenerator_1 = require("../services/IdGenerator");
class OrderBusiness {
    createOrderBusiness(order) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { pizza, quantity } = order;
                if (!pizza || !quantity) {
                    throw new Error("Passe as informações nos parametros!");
                }
                const id = new IdGenerator_1.IdGenerator().generate();
                const newOrder = {
                    id: id,
                    pizza: pizza,
                    quantity: quantity
                };
                yield new OrderDataBase_1.OrderDataBase().insertOrder(newOrder);
            }
            catch (error) {
                throw new Error(error.message || error.sqlMessage);
            }
        });
    }
    getOrderBusiness() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const order = yield new OrderDataBase_1.OrderDataBase().getOrders();
                if (!order) {
                    return "";
                }
                return order;
            }
            catch (error) {
                throw new Error(error.message || error.sqlMessage);
            }
        });
    }
    getOrderByIdBusiness(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const orderId = yield new OrderDataBase_1.OrderDataBase().getOrderById(id);
                if (!orderId) {
                    throw new Error("Não existe id");
                }
                return orderId;
            }
            catch (error) {
                throw new Error(error.message || error.sqlMessage);
            }
        });
    }
}
exports.OrderBusiness = OrderBusiness;
//# sourceMappingURL=OrderBusiness.js.map