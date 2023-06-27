import { useState } from "react";

function Login() {
    const [loginFormData, setLoginFormData] = useState({
        email: "",
        password: ""
    });

    function handleChange(e){
        const { name, value } = e.target;
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(loginFormData);
    }
    
    return(
        <div className="login--page">
            <h1 className="login--title">
                Sign in to your account
            </h1>
            <form className="login" onSubmit={handleSubmit}>
                <input
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="Enter your email address"
                    value={loginFormData.email}
                />
                <input
                    name="password"
                    onChange={handleChange}
                    type="password"
                    placeholder="Enter your password"
                    value={loginFormData.password}
                />
                <button>Log in</button>
            </form>
        </div>
    )
}

export default Login;