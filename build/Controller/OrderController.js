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
exports.OrderController = void 0;
const OrderBusiness_1 = require("../Business/OrderBusiness");
class OrderController {
    createOrderController(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { pizza, quantity } = req.body;
                const newOrder = {
                    pizza,
                    quantity
                };
                yield new OrderBusiness_1.OrderBusiness().createOrderBusiness(newOrder);
                res.status(200).send("Your order is Confirmed!");
            }
            catch (error) {
                res.status(400).send(error.message);
            }
        });
    }
    getOrderController(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const orders = yield new OrderBusiness_1.OrderBusiness().getOrderBusiness();
                res.status(200).send(orders);
            }
            catch (error) {
                res.status(400).send(error.message);
            }
        });
    }
    getOrderByIdController(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const order = yield new OrderBusiness_1.OrderBusiness().getOrderByIdBusiness(id);
                res.status(200).send(order);
            }
            catch (error) {
                res.status(error.customErrorCode || 500).send(error.message);
            }
        });
    }
}
exports.OrderController = OrderController;
//# sourceMappingURL=OrderController.js.map