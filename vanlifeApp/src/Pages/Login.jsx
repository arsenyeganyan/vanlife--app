import { useState } from "react";
import { 
    useLoaderData, 
    redirect, 
    Form, 
    useActionData, 
    useNavigation 
} from "react-router-dom";
import { loginUser } from "../api";

export function loginLoader({ request }){
    return new URL(request.url).searchParams.get("message");
}

export async function action({ request }){
    const formData = await request.formData();
    const email = formData.get("email");
    const password = formData.get("password");
    const pathname = new URL(request.url)
        .searchParams.get("redirectTo") || "/host";

    try{
        const data = await loginUser({ email, password });
        localStorage.setItem("loggedin", true);
        redirect(pathname);
    } catch(err){
        return err.message;
    }
}

function Login() {
    const errorMessage = useActionData();
    const message = useLoaderData();
    const navigation = useNavigation();
    const status = navigation.state;
    
    return(
        <div className="login--page">
            <h1 className="login--title">
                Sign in to your account
            </h1>
            {message && <h3>{message}</h3>}
            {errorMessage && <h3 className="messages">{errorMessage}</h3>}
            <Form 
                className="login" 
                method="post"
                replace
            >
                <input
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                />
                <button 
                    disabled={status === "submitting"}
                >
                    {status === "submitting" ? "Logging in..." : "Log in"}
                </button>
            </Form>
        </div>
    )
}

export default Login;