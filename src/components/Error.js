import React from "react";
import { useRouteError } from "react-router-dom";

function ErrorPage(){
    const error = useRouteError();
    console.error(error);

    return(
        <div id="error-page">
            <h1>There's been an error</h1>
            <p>
                I see you're trying to access something that doesn't exist. Restart the app at root.
            </p>
            <o>
                <i>{ error.statusText || error.message }</i>
            </o>
        </div>
    )
}

export default ErrorPage;