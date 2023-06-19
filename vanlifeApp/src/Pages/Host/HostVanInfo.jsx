import React from "react";
import "/Users/arsen/Desktop/projects/vanlife--app/vanlifeApp/src/Styles/host.css";
import { useOutletContext } from "react-router-dom";

function HostVanInfo(){
    const { details } = useOutletContext();

    return(
        <section className="details--info">
            <h3>Name: <span className="spo">{details.name}</span></h3>
            <h3>Category: <span>{details.type}</span></h3>
            <h3>Description: <span>{details.description}</span></h3>
            <h3>Visibility: <span>public</span></h3>
        </section>
    )
}

export default HostVanInfo;