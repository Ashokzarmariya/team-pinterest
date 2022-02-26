import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../Componets/Home/Home'

import Navbar from '../Componets/Navbar/Navbar'

import Search from '../Componets/Search/Search'
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
        <Route path="/serch" exact element={<Search/>}></Route>
      </Routes>
      
    </div>
  )
}

export default Routers
