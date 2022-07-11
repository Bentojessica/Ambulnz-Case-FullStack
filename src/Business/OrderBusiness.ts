import { OrderDataBase } from "../Data/OrderDataBase";
import { Order, OrderInputDTO, Orders } from "../Model/Order";
import { IdGenerator } from "../services/IdGenerator";

export class OrderBusiness {

    async createOrderBusiness(order: OrderInputDTO) {
        try {
            const { pizza, quantity } = order

            if (!pizza || !quantity) {
                throw new Error("Passe as informações nos parametros!")
            }

            const id = new IdGenerator().generate()

            const newOrder: Orders = {
                id: id,
                pizza: pizza,
                quantity: quantity
            }

            await new OrderDataBase().insertOrder(newOrder)

        } catch (error: any) {
            throw new Error(error.message || error.sqlMessage);
        }

    }

    async getOrderBusiness() {
        try {
            const order = await new OrderDataBase().getOrders()

            if (!order) {
                return ""
            }

            return order
        } catch (error: any) {

            throw new Error(error.message || error.sqlMessage);
        }

    }

    async getOrderByIdBusiness(id: string) {
        try {
            const orderId = await new OrderDataBase().getOrderById(id)

            if (!orderId) {
                throw new Error("Não existe id");
            }

            return orderId
        } catch (error: any) {
            throw new Error(error.message || error.sqlMessage);
        }

    }

}