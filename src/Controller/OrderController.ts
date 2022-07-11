import { Request, Response } from "express"
import { OrderBusiness } from "../Business/OrderBusiness"
import { OrderInputDTO } from "../Model/Order"
export class OrderController {

    async createOrderController(req: Request, res: Response) {
        try {
            const { pizza, quantity } = req.body

            const newOrder: OrderInputDTO = {
                pizza,
                quantity
            }

            await new OrderBusiness().createOrderBusiness(newOrder)

            res.status(200).send("Your order is Confirmed!")
        } catch (error: any) {
            res.status(400).send(error.message)
        }
    }

    async getOrderController(req: Request, res: Response) {
        try {
            const orders = await new OrderBusiness().getOrderBusiness()

            res.status(200).send(orders)

        } catch (error: any) {
            res.status(400).send(error.message)
        }
    }

    async getOrderByIdController(req: Request, res: Response) {
        try {
            const { id } = req.params

            const order = await new OrderBusiness().getOrderByIdBusiness(id)

            res.status(200).send(order)

        } catch (error: any) {
            res.status(error.customErrorCode || 500).send(error.message)
        }
    }
}