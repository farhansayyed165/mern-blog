import { useEffect } from 'react'
import {Link} from 'react-router-dom' 

export default function Nav(){
  useEffect(()=>{
    fetch("http:localhost:4000/profile",{
      credentials:"include"
    })
    .then(res => res.json())
    .then(data => console.log(data))
  },[])
    return(
        <header>
        <Link to="/" className='logo'>Blog</Link>
        <nav>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>

        </nav>
      </header>
    )
}