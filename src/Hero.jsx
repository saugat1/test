import React from "react";
import "./bootstrap/css/bootstrap.min.css";
import "./custom.css";
import myImage from "./myImage.svg";

function Hero() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 order-1 order-md-0">
                        <div className="pt-5">
                            <h4>Make Your Day Amazing With ur plans</h4>
                            <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quod non fugit. Tempora, pariatur.</p>
                            <button className="btn btn-primary btn-sm">Explore Now</button>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <img src={myImage} alt="" srcset=""/>
                    </div>
                </div>
            </div>
            </>
    )
}

export default Hero;