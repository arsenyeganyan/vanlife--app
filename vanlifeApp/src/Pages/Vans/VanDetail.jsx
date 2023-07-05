import { Suspense } from "react"
import "/Users/arsen/Desktop/projects/vanlife--app/vanlifeApp/src/Styles/vans.css";
import { 
    Link, 
    useLocation, 
    useLoaderData, 
    defer, 
    Await 
} from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { getVan } from "../../api";

export function detailsLoader({ params }){
    return defer({ vans: getVan(params.id) });
}

function VanDetail() {
    const location = useLocation();
    const van = useLoaderData();

    const search = location.state?.searchParams || "";
    const name = location.state?.type || "all";

    const renderVanDetail = (van) => {
        return(
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
        )
    }

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
            <Suspense fallback={<h2>Loading van...</h2>}>
                <Await resolve={van.vans}>
                    {renderVanDetail}
                </Await>
            </Suspense>
        </div>
    )
}

export default VanDetail;