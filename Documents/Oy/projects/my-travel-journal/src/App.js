import React from "react"
import Navbar from "./components/Navbar"
import Place from "./components/Place"
import data from "./data"
import "./style.css"

export default function App() {
    const places = data.map(item => {
        return (
            <Place 
                key={item.id}
                {...item}
            />
        )
    })

    return (
        <>
            <Navbar />
            <div className="container">
                {places}
            </div>
        </>
    )
}