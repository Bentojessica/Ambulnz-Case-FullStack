"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const PizzaRouter_1 = require("./Controller/Router/PizzaRouter");
const OrderRouter_1 = require("./Controller/Router/OrderRouter");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/ambulnz", PizzaRouter_1.pizzaRouter);
app.use("/ambulnz", OrderRouter_1.orderRouter);
app.listen(process.env.PORT || 3003, () => {
    console.log("Ready");
});
//# sourceMappingURL=index.js.map