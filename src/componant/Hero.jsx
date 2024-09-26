import React from "react";
import hero from "../assets/hero.png"
export default function Hero(){
    return (
            <section>
            <div className="hero">
                <div className="hero_image">
                <img src={hero}  />
                </div>
                <h1>Online Experiences</h1>
                <p>
                    Join unique interactive activities led by <br /> 
                
                    one-of-a-kind hosts-all without leaving <br /> home
                </p>
            </div>
            </section>
        )
    }