import React, { useEffect, useState } from "react"
import { CardPizza } from "../Components/CardPizza/CardPizza"
import axios from "axios"
import {BASE_URL} from "../BaseUrl/BaseUrl"
import { Order } from "../Components/Orders/Order"
import { CardShop } from "../Components/CardShop/CardShop"
import { Header } from "../Components/Header/Header"
import { Footer } from "../Components/Footer/Footer"

export const Feed = () => {

    const [pizza, setPizza] = useState([])
    const [card, setCard] = useState([])

    const selectPizza = () => {
        axios.get(`${BASE_URL}/pizza`)
        .then((res) => {
            setPizza(res.data)
        })
        .catch((err)=> {
            alert(err.message)
        })
    }

    useEffect(()=>{
        selectPizza()
    },[])

    return(
        <div>
            <Header/>
            <CardPizza
                card={card}
                setCard={setCard}
                pizza={pizza}
            />

            <Order
                card={card}
            />

            <CardShop
                card={card}
                setCard={setCard}
            />
            
            <Footer/>
        </div>
    )
}