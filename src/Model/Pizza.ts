export class Pizza {
    constructor (
    private name: string,
    private price: number,
    private ingredients: string[]
    )
    {}

    public getName() {
        return this.name
    }

    public getPrice () {
        return this.price
    }

    public getIngredients () {
        return this.ingredients
    }
}

export interface PizzaInputDTO {
    name: string,
    price: string,
    ingredients: []
}