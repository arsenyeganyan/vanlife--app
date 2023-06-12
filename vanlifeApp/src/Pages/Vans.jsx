import React, { useState } from "react";
import "../Styles/vans.css";

function Vans(props){
    const [def, setDef] = useState(true);
    const [simple, setSimple] = useState(false);
    const [luxury, setLuxury] = useState(false);
    const [rugged, setRugged] = useState(false);

    function filterSimple(){
        setDef(false);
        setSimple(true);
    }
    function filterLuxury(){
        setDef(false);
        setLuxury(true);
    }
    function filterRugged(){
        setDef(false);
        setRugged(true);
    }
    
    if(props.vans === undefined){
        return <div className="loading">Loading Page...</div>
    }
    else{
        return(
            <div className="vans">
                <div className="vans--desc"> 
                    <h1 className="vans--title">
                        Explore our vans options
                    </h1>
                    <div className="settings">
                        <button 
                            className="simple"
                            onClick={filterSimple}>
                                Simple
                        </button>
                        <button 
                            className="luxury"
                            onClick={filterLuxury}>
                                    Luxury
                        </button>
                        <button 
                            className="rugged"
                            onClick={filterRugged}>
                                Rugged
                        </button>
                        <h2 
                            className="clear" 
                            onClick={() => setDef(true)}>
                                Clear filters
                        </h2>
                    </div>
                </div>
                <div className="show">
                    {props.vans.data.map(van => (
                        <div className="show--vans">
                            <img className="van--img" src={van.url}/>
                            <div className="ind--desc">
                                <h4 className="van--name">{van.name}</h4>
                                <h6 className="van--price">${van.price}/day</h6>
                            </div>
                            <h6 className="van--type">{van.type}</h6>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default Vans;