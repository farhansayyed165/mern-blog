import { useState } from "react";
import { Navigate } from "react-router-dom";

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false)

    async function login(e){
        e.preventDefault()
        const response = await fetch("http://localhost:4000/login",{
            method:"POST",
            body:JSON.stringify({username, password}),
            headers:{"Content-type":"application/json"},
            credentials:"include",
        })
        console.log(response.ok)
        if(response.ok){
           setRedirect(true)
        }
        else{
            alert("no")
        }

    }

    if(redirect){
        return <Navigate to="/"/>
    }

    return (
        <>
            <form className="login" onSubmit={login}>
                <h1>Login</h1>
                <input
                    type="text"
                    name="" id=""
                    placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username} />
                <input
                    type="password"
                    name="" id=""
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password} />
                <button>Login</button>
            </form>
        </>
    )
}