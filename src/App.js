import React from "react"
import Nav from "./Navbar.js"
import Content from "./MainContent.js"
import data from "./data.js"

export default function App(){
    var counter = 0
    const content = data.map(item =>{
        return(     
        <Content
            key={counter++}
            title= {item.title}
            location = {item.location}
            googleMapsUrl ={item.googleMapsUrl}
            startDate={item.startDate}
            endDate={item.endDate}
            description={item.description}
            imageUrl={item.imageUrl}
        />
        )
    })
    return(
        <>
        <Nav/>
        {content}
        </>
    )
}