import { Routes, Route } from "react-router-dom"
import { useState } from 'react'
import './App.css'

import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from "./Pages/Register"
import Layout from './components/Layout'




function App() {

  return (
    <>
      <Routes >
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='login' element={<Login/>} />
          <Route path="/register" element={<Register/>}/>
        </Route>

      </Routes>
    </>



  )
}

export default App
