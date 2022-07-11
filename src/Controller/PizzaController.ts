import { Request, Response } from "express";
import { PizzaBusiness } from "../Business/PizzaBusiness";
import { PizzaInputDTO } from "../Model/Pizza";

export class PizzaController {

    async getPizzaController (req: Request, res: Response) {
        try {
            const pizzas = await new PizzaBusiness().getPizzas()

            res.status(200).send(pizzas)
            
        } catch (error: any) {
            res.status(400).send(error.message)
        }
    }
}