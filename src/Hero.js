import React from "react";
import Card from "./Card";

function Hero() {
    return (
        <div className='hero'>
            <div className='container'>
                <div className="box-title">
                    <h1 className="title">Shop</h1>
                    <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        <br/> tempor incididunt ut labore et dolore magna aliqua.</p>

                    <Card/>

                </div>

            </div>
        </div>
    )
}

export default Hero