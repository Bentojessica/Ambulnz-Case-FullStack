"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRouter = void 0;
const express_1 = __importDefault(require("express"));
const OrderController_1 = require("../OrderController");
exports.orderRouter = express_1.default.Router();
const orderController = new OrderController_1.OrderController();
exports.orderRouter.post("/order/insert", orderController.createOrderController);
exports.orderRouter.get("/orders", orderController.getOrderController);
exports.orderRouter.get("/order/:id", orderController.getOrderByIdController);
//# sourceMappingURL=OrderRouter.js.map