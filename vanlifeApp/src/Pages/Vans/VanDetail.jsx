import { useState, useEffect } from "react"
import "/Users/arsen/Desktop/projects/vanlife--app/vanlifeApp/src/Styles/vans.css";
import { useParams, Link, useLocation, useLoaderData } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { getVans } from "../../api";

export function detailsLoader({ params }){
    // console.log(params);
    return getVans(params.id);
}

function VanDetail() {
    const params = useParams();
    const location = useLocation();
    const van = useLoaderData();

    // const [van, setVan] = useState(null);

    // useEffect(() => {
    //     fetch(`/api/vans/${params.id}`)
    //         .then(res => res.json())
    //         .then(data => setVan(data.vans))
    // }, [params.id]);

    const search = location.state?.searchParams || "";
    const name = location.state?.type || "all";

    return (
        <div className="van-detail-container">
            <Link 
                to={`..?${search}`}
                relative="path" 
                className="back--button"
            >
                <FontAwesomeIcon icon={faArrowLeft} className="back--icon"/>
                Back to {name} vans
            </Link>
            <div className="van-detail">
                <img src={van.imageUrl} className="van--detail--img"/>
                <i className={`van-type ${van.type} selected`}>
                    {van.type}
                </i>
                <h2>{van.name}</h2>
                <p className="van-price"><span>${van.price}</span>/day</p>
                <p className="van--desc">{van.description}</p>
                <button className="link-button">Rent this van</button>
            </div>
        </div>
    )
}

export default VanDetail;