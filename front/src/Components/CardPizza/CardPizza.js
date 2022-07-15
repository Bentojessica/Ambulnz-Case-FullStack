import React from "react"
import CardContent from '@mui/material/CardContent';
import{ CardContainer} from "./styled"
import Typography from '@mui/material/Typography';
import { Button} from '@mui/material'

export const CardPizza = (props) => {

    const card = props.card
    const pizzas = props.pizza

    const addToCard = (pizza) => {

        const item = card.findIndex((item) => {
            return pizza.name === item.name
        })


        let newCard = [...card]

        if (item === -1) {
            newCard.push({ ...pizza, quantity: 1 })
        } else {
            newCard[item].quantity += 1
        }

        props.setCard(newCard)
        showDetails()
    }

    const showDetails = () => {
        document.getElementById("OrdersComponent").style.opacity = 1
        document.getElementById("OrdersComponent").style.transform = "translate(0, -50px)"
    }


    const listPizzas = pizzas && pizzas.map((pizza) => {
        return (
            <CardContainer key={pizza.name}>
                    <CardContent>
                        <Typography gutterBottom variant="h4" color="red" component="div">
                            {pizza.name}
                        </Typography>
                        <Typography variant="h6" color="text.secondary">
                            {pizza.ingredients}
                        </Typography>
                        <Typography variant="h6" color="text.primary">
                            <p>R$ {pizza.price}</p>
                        </Typography>
                        <Button size="small" color="success" variant="contained" style={{ cursor: 'pointer', marginTop: "10px" }} onClick={() => addToCard(pizza)}>
                        Adicionar no carrinho
                    </Button>
                    </CardContent>
            </CardContainer>
        )
    })

    return (
        <div>
            {listPizzas}
        </div>
    )
}