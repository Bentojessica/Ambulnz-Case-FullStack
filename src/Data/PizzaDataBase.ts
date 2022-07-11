import { Pizza, PizzaInputDTO } from "../Model/Pizza";
import { BaseDataBase } from "./BaseDataBase";

export class PizzaDataBase extends BaseDataBase {

    private static TABLE_NAME = "ambulnz_pizza"

    async getPizzas() {
        try {
                  
            let pizzas = await this.connection()
                .into(PizzaDataBase.TABLE_NAME)

            const arrayPizzas = pizzas.map((pizza) => {
                return { ...pizza, ingredients: JSON.parse(pizza.ingredients) }
            })

            
        } catch (error: any) {
            throw new Error(error.message || error.sqlMessage);
        }

    }
}