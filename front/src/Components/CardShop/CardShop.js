import React from "react"
import axios from "axios"
import { BASE_URL } from "../../BaseUrl/BaseUrl"
import { ShopCartPage, ContainerOrderCard } from "./styled"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Typography from '@mui/material/Typography';

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
        return <div  key={pizza.name}>
            <ContainerOrderCard>
            <Typography variant="h6" color="red">{pizza.name}
            </Typography>
            <Typography color="text.secondary">R${pizza.price.toFixed(2) * pizza.quantity.toFixed(2)} 
            </Typography> 
            <DeleteForeverIcon style={{ margin: '10px 10px', cursor: 'pointer' }} onClick={() => removeFromCart(pizza)} />
            </ContainerOrderCard>
        </div >
    })

    const hideShopCart = () => {
        document.getElementById("ShopCartPage").style.opacity = 0
        document.getElementById("ShopCartPage").style.transform = "translate(110px, 0)"
    }

    const confirmAll = () => {
        orders.forEach((item) => {
            order(item)
        })
    }

    return (
        <ShopCartPage id="ShopCartPage">
            <ArrowBackIosNewIcon  style={{ cursor: 'pointer' }} onClick={() => hideShopCart()}/>
            {card.length !== 0 ? cartCard : <Typography color="text.secondary" variant="h6">Carrinho vazio </Typography>}
            <ShoppingBasketIcon style={{marginTop: '50px', cursor: 'pointer'}} onClick={() => confirmAll()}/>
        </ShopCartPage>
    )
}