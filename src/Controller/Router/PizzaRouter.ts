import express from "express"
import { PizzaController } from "../PizzaController"

export const pizzaRouter = express.Router()

const pizzaController = new PizzaController()

pizzaRouter.get("/pizza", pizzaController.getPizzaController)