import { redirect } from "react-router-dom";

export async function requireAuth(){
    const isLoggedIn = false;
    console.log(`Login status: ${isLoggedIn}`);

    if(!isLoggedIn){
        throw redirect("/login");
    }
}