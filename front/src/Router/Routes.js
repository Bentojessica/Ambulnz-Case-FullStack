import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CardShop } from "../Components/CardShop/CardShop"
import { Feed } from "../Pages/Feed"

export const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Feed/>}/>
            </Routes>
        </BrowserRouter>
    )
}