import dotenv from "dotenv"
import express from "express"
import cors from "cors"
import { pizzaRouter } from "./Controller/Router/PizzaRouter"
import { orderRouter } from "./Controller/Router/OrderRouter"

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

app.use("/ambulnz", pizzaRouter)
app.use("/ambulnz", orderRouter)

app.listen(process.env.PORT || 3003, () => {
    console.log("Ready")
}) 