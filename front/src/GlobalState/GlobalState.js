import React, {useState} from "react"
import {GlobalStateContext} from "./GlobalStateContext"

export const GlobalState = (props) => {

    const [card, setCard] = useState()

    const data = {card, setCard}

    return(
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}