import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../Componets/Home/Home'

import Navbar from '../Componets/Navbar/Navbar'
import Register from "../Componets/Register/Login"
import { About } from '../Componets/Today/About'


const Routers = () => {
  return (
    <div>
     
      <Navbar />
      {/* <Register/> */}
      <Routes>
        <Route path='/nabar' element={<Navbar/>}></Route>
        <Route path="/home" exact element={<Home />}></Route>
        <Route path="/today" exact element={<About />}></Route>
      <Route path="/" exact element={<Home />}></Route>
      </Routes>
      
    </div>
  )
}

export default Routers
