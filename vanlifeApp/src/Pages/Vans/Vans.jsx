import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "/Users/arsen/Desktop/projects/vanlife--app/vanlifeApp/src/Styles/vans.css";

function Vans(){
    const [vans, setVans] = useState([])
    useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])
    
    if(vans){
        return(
            <div className="vans">
                {/* <div className="vans--desc"> 
                    <h1 className="vans--title">
                        Explore our vans options
                    </h1>
                    <div className="settings">
                        <button 
                            className="simpleButton">
                                Simple
                        </button>
                        <button 
                            className="luxuryButton">
                                Luxury
                        </button>
                        <button 
                            className="ruggedButton">
                                Rugged
                        </button>
                        <h2 
                            className="clear" >
                                Clear filters
                        </h2>
                    </div>
                </div> */}
                <div className="show">
                    {vans.map(van => (
                        <Link to={`/vans/${van.id}`}>
                            <div className="show--vans">
                                <img className="van--img" src={van.imageUrl}/>
                                <div className="ind--desc">
                                    <h4 className="van--name">{van.name}</h4>
                                    <h6 className="van--price">${van.price}/day</h6>
                                </div>
                                <h6 className={van.type}>{van.type}</h6>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        )
    }
    else{
        <div className="loading">Loading...</div>
    }
}

export default Vans;