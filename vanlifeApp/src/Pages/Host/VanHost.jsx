import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function VanHost(){
    const [host, setHost] = useState(null);
    useEffect(() => {
        fetch("/api/host/vans")
            .then((res) => res.json())
            .then((data) => setHost(data))
    }, []);
    
    if(host){
        return(
            <div className="van--host--container">
                <h1 className="host--title">Your listed vans</h1>
                {host.vans.map(van => (
                    <Link to={`/host/vans/${van.id}`}>
                        <div className="vans--host">    
                            <div className="vans--showcase">
                                <div className="individual--host--van" key={van.id}>
                                    <img className="host--img" src={van.imageUrl}/>
                                    <div className="host--desc">
                                        <h3 className="host--name">{van.name}</h3>
                                        <i className="host--price">${van.price}/day</i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        )
    }
    else{ return <h2>Loading...</h2> }
}

export default VanHost;