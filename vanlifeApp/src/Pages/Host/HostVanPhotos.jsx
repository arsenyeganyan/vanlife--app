import React from "react";
import { useOutletContext } from "react-router-dom";

function HostVanPhotos(){
    const { details } = useOutletContext();

    return(
        <section className="details--photos">
            <img src={details.imageUrl} className="details--photo"/>
        </section>
    )
}

export default HostVanPhotos;