import React from "react";
import "../Styles/default.css";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";

function Header(){

    return(
        <div className="container">
            <nav className="nav">
                <Link to="/">
                    <h2 className="nav--title">#VANLIFE</h2>
                </Link>
                <div className="nav--options">
                    <NavLink 
                        to="/host" 
                        className={({isActive}) => isActive ? "nav--item--active" : "nav--item"}>
                        Host
                    </NavLink>
                    <NavLink 
                        to="/about" 
                        className={({isActive}) => isActive ? "nav--item--active" : "nav--item"}>
                        About
                    </NavLink>
                    <NavLink 
                        to="/vans" 
                        className={({isActive}) => isActive ? "nav--item--active" : "nav--item"}>
                        Vans
                    </NavLink>
                    <NavLink 
                        to="/login" 
                        className={({isActive}) => isActive ? "nav--item--active" : "nav--item"}>
                        <FontAwesomeIcon icon={faRightToBracket} />
                    </NavLink>
                </div>
            </nav>
        </div>
    )
}

export default Header;