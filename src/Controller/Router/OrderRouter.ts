import express from "express"
import { OrderController } from "../OrderController"

export const orderRouter = express.Router()

const orderController = new OrderController()

orderRouter.post("/order/insert", orderController.createOrderController)
orderRouter.get("/orders", orderController.getOrderController)
orderRouter.get("/order/:id", orderController.getOrderByIdController)
