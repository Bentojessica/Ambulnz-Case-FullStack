import { PizzaDataBase } from "../Data/PizzaDataBase";
import { PizzaInputDTO } from "../Model/Pizza";

export class PizzaBusiness {

    async getPizzas() {
        try {
            const pizzas = await new PizzaDataBase().getPizzas()

            return pizzas

        } catch (error: any) {
            throw new Error(error.message || error.sqlMessage);
        }
    }
}