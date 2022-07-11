
export class Order {
    constructor (
    private id: string,
    private pizza: string,
    private quantity: number
    )
    {}

    public getId() {
        return this.id 
    }

    public getPizza () {
        return this.pizza
    }

    public getQuantity () {
        return this.quantity
    }
}

export interface OrderInputDTO {
    pizza: string,
    quantity: number
}

export interface Orders {
    id: string,
    pizza: string,
    quantity: number
}