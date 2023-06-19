import React from "react";
import "/Users/arsen/Desktop/projects/vanlife--app/vanlifeApp/src/Styles/host.css";
import { useOutletContext } from "react-router-dom";

function HostVanPricing(){
    const { details } = useOutletContext();

    return(
        <section className="details--pricing">
            <h2 className="details--price">${details.price}/day</h2>
        </section>
    )
}

export default HostVanPricing;