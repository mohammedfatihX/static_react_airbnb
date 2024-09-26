import React from "react";
import Card from "./Card"

export default function CardPlace(){
    let option = ["Online","solde Out",""]
    let myData = [
        {title: "Mountain hiking with Max", star: 45, number: 150, place: "Switzerland", price: "5000"},
        {title: "Desert safari adventure", star: 50, number: 200, place: "UAE", price: "4000"},
        {title: "Skydiving experience with Alex", star: 48, number: 320, place: "Australia", price: "6000"},
        {title: "Cultural tour in Kyoto", star: 42, number: 100, place: "Japan", price: "3500"},
        {title: "Scuba diving in Bali", star: 47, number: 220, place: "Indonesia", price: "4500"},
        {title: "Northern lights viewing with experts", star: 50, number: 180, place: "Iceland", price: "7000"},
        {title: "Safari wildlife adventure", star: 43, number: 250, place: "Kenya", price: "5500"},
        {title: "Hot air balloon ride with Amy", star: 44, number: 80, place: "Turkey", price: "3000"},
        {title: "Wine tasting tour", star: 41, number: 120, place: "France", price: "3500"},
        {title: "Zipline adventure in the Amazon", star: 49, number: 160, place: "Brazil", price: "5000"},
        {title: "Sailing trip around Greek islands", star: 46, number: 90, place: "Greece", price: "4800"},
        {title: "Rock climbing with professional guides", star: 45, number: 110, place: "Canada", price: "4200"},
        {title: "Luxury beach resort vacation", star: 50, number: 70, place: "Maldives", price: "8000"},
        {title: "Art and history tour in Rome", star: 40, number: 300, place: "Italy", price: "3200"},
        {title: "Trekking through Patagonia", star: 47, number: 140, place: "Argentina", price: "5200"}
    ];
    let newData = myData.map(item => {
        item.url = "https://random-image-pepebigotes.vercel.app/api/swag-wallpaper"
        item.info= option[Math.floor(Math.random()*3)]
        return item })
    
    return(
        <div className="shows_holder">
        {newData.map(card_info => <Card {...card_info} />)}     
        </div>
    )
}