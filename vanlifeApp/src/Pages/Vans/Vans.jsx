import { useState, useEffect } from "react";
import { Link, useSearchParams, useLoaderData } from "react-router-dom";
import "/Users/arsen/Desktop/projects/vanlife--app/vanlifeApp/src/Styles/vans.css";
import { getVans } from "../../api";

export function loader() {
    return getVans();
}

function Vans() {
    const [searchParams, setSearchParams ] = useSearchParams();
    const [error, setError] = useState(null);
    const vans = useLoaderData();
    // console.log(vans);

    const typeFilter = searchParams.get("type");

    const displayedVans = typeFilter ? 
        vans.filter(van => van.type === typeFilter)
        : vans;

    const vanElements = displayedVans.map(van => (
        <Link 
            to={van.id} 
            state={{ 
                    searchParams: searchParams.toString(),
                    type: typeFilter
                }}
            >
            <div className="show--vans">
                <img className="van--img" src={van.imageUrl}/>
                <div className="ind--desc">
                    <h4 className="van--name">{van.name}</h4>
                    <h6 className="van--price">${van.price}/day</h6>
                </div>
                <h6 className={van.type}>{van.type}</h6>
            </div>
        </Link>
    ));

    function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
            if(value === null){
                prevParams.delete(key)
            } else{
                prevParams.set(key, value)
            }
        })
    }

    if(error) {
        return <div className="loading">There was an error: {error.message}</div>
    }

    return(
        <div className="vans">
            <div className="vans--desc"> 
                <h1 className="vans--title">
                    Explore our vans options
                </h1>
                <div className="settings">
                    <button 
                        className={typeFilter === "simple" ? "simpleButtonActive" : "simpleButton"}
                        onClick={() => handleFilterChange("type", "simple")}
                    >
                        Simple
                    </button>
                    <button 
                        className={typeFilter === "luxury" ? "luxuryButtonActive" : "luxuryButton"}
                        onClick={() => handleFilterChange("type", "luxury")}
                    >
                        Luxury
                    </button>
                    <button 
                        className={typeFilter === "rugged" ? "ruggedButtonActive" : "ruggedButton"}
                        onClick={() => handleFilterChange("type", "rugged")}
                    >
                        Rugged
                    </button>
                    {typeFilter ? (
                        <h2 className="clear"
                            onClick={() => handleFilterChange("type", null)}
                        >
                            Clear filters
                        </h2>    
                    ) : null}
                </div>
            </div>
            <div className="show">
                {vanElements}
            </div>
        </div>
    )
}

export default Vans;