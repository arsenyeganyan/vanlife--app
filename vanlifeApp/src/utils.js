import { redirect } from "react-router-dom";

export function requireAuth({ request }){
    const isLoggedIn = localStorage.getItem("loggedin");
    console.log(`Login status: ${isLoggedIn}`);
    const pathname = new URL(request.url).pathname;

    if(!isLoggedIn){
        throw redirect(
            `/login?message=You must login first&redirectTo=${pathname}`
        );
    }
}