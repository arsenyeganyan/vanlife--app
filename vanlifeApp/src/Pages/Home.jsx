import React from "react";
import { Link } from "react-router-dom";
import "../Styles/home.css";

function Home(){
    return(
        <main className="main--content">
            <h1 className="main--title">
                You got the travel plans, we got the travel vans.
            </h1>
            <h3 className="main--desc">
                Add adventure to your life by joining the #vanlife movement. 
                Rent the perfect van to make your perfect road trip.
            </h3>
            <Link to="/vans">   
                <button className="main--button">
                    Find your van!
                </button>
            </Link>
        </main>
    )
}

export default Home;