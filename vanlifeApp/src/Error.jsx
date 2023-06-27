import React from "react";
import "/Users/arsen/Desktop/projects/vanlife--app/vanlifeApp/src/Styles/default.css";
import { Link } from "react-router-dom";

function Error(){
    return(
        <div className="error--page">
            <h1 className="error--title">
                Sorry! The page you were looking for was not found.
            </h1>
            <Link to="/">
                <button className="error--button">
                    Return to home
                </button>
            </Link>
        </div>
    )
}

export default Error;