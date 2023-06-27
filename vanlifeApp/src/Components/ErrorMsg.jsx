import React from "react";
import { useRouteError } from "react-router-dom";

export default function ErrorMsg() {
    const error = useRouteError();
    console.log(error);

    return(
        <div className="error--message">
            <h1>
                Oops! You've conquered the following error: {error.message}.
            </h1>
            <pre>{error.status} - {error.statusText}</pre>
        </div>
    )
}