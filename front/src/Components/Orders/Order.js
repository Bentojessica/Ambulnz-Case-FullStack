import React from "react"
import {OrdersComponent, OrdersCard, Button} from "./styled"

export const Order = (props) => {
    
    const card = props.card

    const showShopCart = () => {
        document.getElementById("ShopCartPage").style.opacity = 1
        document.getElementById("ShopCartPage").style.transform = "translate(60rem, 0)"
    }

    const numberOrder = <OrdersCard id="OrderCard">
        <Button onClick={()=> showShopCart()}>
        <div>{card.length}</div>
             Checar suas ordens</Button>
    </OrdersCard>

    return (
        <OrdersComponent id="OrdersComponent">
            {card.length !== 0 ? numberOrder : null}
        </OrdersComponent>
    )

}