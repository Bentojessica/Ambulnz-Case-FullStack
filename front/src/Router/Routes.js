import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Feed } from "../Pages/Feed"
import {Error} from "../Pages/Error/Error"

export const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Feed/>}/>
                <Route path="*" element={<Error/>}/>
            </Routes>
        </BrowserRouter>
    )
}