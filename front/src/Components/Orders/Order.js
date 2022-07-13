import React from "react"
import "./Order.css"

export const Order = (props) => {
    
    const card = props.card

    const showShopCart = () => {
        document.getElementById("shopCartPage").style.opacity = 1
        document.getElementById("shopCartPage").style.transform = "translate(-110px, 0)"
    }

    const numberOrder = <div id="ordersCard">
        {card.length}
        <button onClick={()=> showShopCart()}>Checar suas ordens</button>
    </div>

    return (
        <div id="ordersComponent">
            {card.length !== 0 ? numberOrder : null}
        </div>
    )

}