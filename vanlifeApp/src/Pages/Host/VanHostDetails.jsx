import React, { useState, useEffect } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
import "/Users/arsen/Desktop/projects/vanlife--app/vanlifeApp/src/Styles/host.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function VanHostDetails(){
    const { id } = useParams();
    const [details, setDetails] = useState(null);

    useEffect(() => {
        fetch(`/api/host/vans/${id}`)
            .then((res) => res.json())
            .then((data) => setDetails(data.vans[0]))
    }, [id]);

    return(
        <div>
            {details ? (
                <div className="van-detail--container">
                    <Link to=".." relative="path" className="back--button">
                        <FontAwesomeIcon icon={faArrowLeft} className="back--icon"/>
                        Back to all vans
                    </Link>
                    <div className="van--ui" key={details.id}>
                        <div className="van--detail">
                            <img className="host--detail--img" src={details.imageUrl}/>
                            <div className="host--detail--desc">
                                <span className={`host--detail--${details.type}`}>{details.type}</span>
                                <h3 className="host--detail--name">{details.name}</h3>
                                <i className="host--detail--price">${details.price}/day</i>
                            </div>
                        </div>
                        <nav className="host--detail--nav">
                            <NavLink 
                                to="."
                                end
                                className={({isActive}) => isActive ? "nav--item--active" : "nav--item"}
                            >
                                Details
                            </NavLink>
                            <NavLink 
                                to="pricing"
                                className={({isActive}) => isActive ? "nav--item--active" : "nav--item"}
                            >
                                Pricing
                            </NavLink>
                            <NavLink 
                                to="photos"
                                className={({isActive}) => isActive ? "nav--item--active" : "nav--item"}
                            >
                                Photos
                            </NavLink>
                        </nav>
                        <Outlet context={{details}}/>
                    </div>
                </div>
            ) : <h2>Loading...</h2>}
            
        </div>
    )
}

export default VanHostDetails;