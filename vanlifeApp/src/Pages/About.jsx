import React from "react";
import "../Styles/about.css";
import { Link } from "react-router-dom";

function About(){
    return(
        <div className="about">
            <img className="about--img" src="/images/image 54.png"/>
            <h1 className="about--title">
                Don’t squeeze in a sedan when you could relax in a van.
            </h1>
            <p className="about--desc">
                Our mission is to enliven your road trip with the perfect travel van rental. 
                Our vans are recertified before 
                each trip to ensure your travel plans can go off without a hitch.
                (Hitch costs extra 😉)

                Our team is full of vanlife enthusiasts who know firsthand the 
                magic of touring the world on 4 wheels.
            </p>
            <div className="about--add">
                <h1 className="add--title">
                    Your destination is waiting. Your van is ready.
                </h1>
                <Link to="/vans">
                    <button className="add--button">
                        Explore our vans
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default About;