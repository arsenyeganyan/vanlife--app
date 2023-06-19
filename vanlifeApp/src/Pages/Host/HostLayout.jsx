import React from "react";
import "/Users/arsen/Desktop/projects/vanlife--app/vanlifeApp/src/Styles/host.css";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

function HostLayout(){
    return(
        <div className="host">
            <nav className="host--nav">
                <div className="host--list">
                    <NavLink 
                        to="."
                        end
                        className={({isActive}) => isActive ? "nav--item--active" : "nav--item"}
                    >
                        Dashboard
                    </NavLink>
                    <NavLink 
                        to="income"
                        className={({isActive}) => isActive ? "nav--item--active" : "nav--item"}
                    >
                        Income
                    </NavLink>
                    <NavLink 
                        to="vans"
                        className={({isActive}) => isActive ? "nav--item--active" : "nav--item"}
                    >
                        Vans
                    </NavLink>
                    <NavLink 
                        to="reviews"
                        className={({isActive}) => isActive ? "nav--item--active" : "nav--item"}
                    >
                        Reviews
                    </NavLink>
                </div>
            </nav>
            <Outlet/>
        </div>
    )
}

export default HostLayout;