import { useState } from "react";

export default function Register() {
    const  [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function Register(e){
        e.preventDefault()
        const response = await fetch("http://localhost:4000/register", {
            method:"POST",
            body:JSON.stringify({username, password}),
            headers: {'Content-Type': 'application/json'}
        })
        if(response.ok === 200){
            alert("logged in")
            console.log("logged in")
        }
        else{
            alert("no")
            console.log("registration failed")
        }
    }

    return (
        <form className="register" onSubmit={Register}>
            <h1>Register</h1>
            <input type="text" name="" id="" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)}/>
            <input type="password" name="" id="" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
            <button>Register</button>
        </form>
    )
}