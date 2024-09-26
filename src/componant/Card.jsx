import React from "react";
import imgStar from "../assets/star.png"


export default function Card(props){
    //  let data = props["data"]
// {title:"swiming pool activity with zafares",star:40,number:300,place:"germany",price:"3000"},
     console.log(props.info)
    return (
        <div className="card">
            {props.info && <div className="info_pop">{props.info}</div>}
            <img src={props.url} className="image" />
            <div className="rating_section">
                <img src={imgStar} className = "star"/>
                <p className="rating_star ">{props.star}</p>
                <p className="rating_number grey"> •({props.number})• </p>
                <p className="rating_place grey">{props.place}</p>
            </div>
            <p className="info">hello everybody to our show</p>
            <p className="pricing"> <span className="bolder">From ${props.price} </span> / preson</p>
        </div>        
    )
}