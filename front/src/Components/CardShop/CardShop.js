import React from "react"
import axios from "axios"
import { BASE_URL } from "../../BaseUrl/BaseUrl"
import "./CardShop.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material'

export const CardShop = (props) => {

    const card = props.card

    const orders = card.map((itens) => {
        return { pizza: itens.name, quantity: itens.quantity }
    })

    const findOrder = (pizza) => {
        const index = orders.findIndex((item) => {
            return item.pizza === pizza.name
        })

        let body = orders[index];

        order(body)
    }

    const order = (body) => {
        axios.post(`${BASE_URL}/order/insert`, body)
            .then((response) => {
                alert(response.data)
            }).catch((error) => {
                alert(error.message)
                console.error(error.message)
            })
    }

    const removeFromCart = (order) => {
        const position = card.findIndex((item) => {
            return order.name === item.name
        })

        let newCard = [...card]

        if (newCard[position].quantity === 1) {
            newCard.splice(position, 1)

        } else {
            newCard[position].quantity -= 1

        }

        props.setCard(newCard)
    }

    const cartCard = card && card.map((pizza) => {
        return <div key={pizza.name}>
            <h4>{pizza.name}</h4>
            <h5>R${pizza.price.toFixed(2) * pizza.quantity.toFixed(2)}</h5>
            <button onClick={() => removeFromCart(pizza)}>Remove</button>
            <button onClick={() => findOrder(pizza)}>Confirm</button>
        </div>
    })

    const hideShopCart = () => {
        document.getElementById("shopCartPage").style.opacity = 0
        document.getElementById("shopCartPage").style.transform = "translate(110px, 0)"
    }

    const confirmAll = () => {
        orders.forEach((order) => {
            order(order)
        })
    }

    return (
        <div id='shopCartPage'>
            {card.length !== 0 ? cartCard : <h3>ShopCart empty :(</h3>}
            <button onClick={() => hideShopCart()}>X</button>
            <button onClick={() => confirmAll()}>Confirm All</button>
        </div>
    )
}