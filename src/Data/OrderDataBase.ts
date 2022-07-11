import { Order, Orders } from "../Model/Order";
import { BaseDataBase } from "./BaseDataBase";

export class OrderDataBase extends BaseDataBase {
    private static TABLE_NAME = "ambulnz_order"

    async insertOrder(order: Orders) {
        try {
            await this.connection()
                .insert(order)
                .into(OrderDataBase.TABLE_NAME)
        } catch (error: any) {
            throw new Error(error.message || error.sqlMessage);
        }

    }

    async getOrders(): Promise<Order[]> {
        try {
            const order = await this.connection()
                .into(OrderDataBase.TABLE_NAME)

            return order
        } catch (error: any) {
            throw new Error(error.message || error.sqlMessage);
        }

    }

    async getOrderById(id: string): Promise<Order> {
        try {
            const [orderId] = await this.connection()
                .select("ambullanz_order.id", "ambullanz_order.pizza", "ambullanz_order.quantity",
                    "ambullanz_pizza.name", "ambullanz_pizza.price", "ambullanz_pizza.ingredients")
                .where({ id })
                .innerJoin("ambullanz_pizza", "ambullanz_order.pizza", "ambullanz_pizza.name")
                .into(OrderDataBase.TABLE_NAME)

            return orderId
        } catch (error: any) {
            throw new Error(error.message || error.sqlMessage);
        }

    }
}