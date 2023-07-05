import { Link, useLoaderData } from "react-router-dom";
import { getHostVans } from "../../api";
import { requireAuth } from "../../utils";

export async function loader({ request }){
    await requireAuth(request);
    return getHostVans();
}

function VanHost(){
    const host = useLoaderData();
    return(
        <div className="van--host--container">
            <h1 className="host--title">Your listed vans</h1>
            {host.map(van => (
                <Link to={van.id}>
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

export default VanHost;