import React from "react"
import CardContent from '@mui/material/CardContent';
import{ CardContainer} from "./styled"
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material'

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
        detailsCard()
    }

    const detailsCard = () => {
        document.getElementById("ordersComponent").style.opacity = 1
        document.getElementById("ordersComponent").style.transform = "translate(0, -50px)"
    }

    const listPizzas = pizzas && pizzas.map((pizza) => {
        return (
            <CardContainer sx={{ maxWidth: 345 }} key={pizza.name}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {pizza.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                             {pizza.ingredients}
                            <p>R$ {pizza.price}</p>
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" onClick={() => addToCard(pizza)}>
                        Adicionar no carrinho
                    </Button>
                </CardActions>
            </CardContainer>
        )
    })

    return (
        <div>
            {listPizzas}
        </div>
    )
}