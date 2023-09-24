import React from 'react'
import { Route, Routes } from "react-router-dom"
import Login from '../Pages/Login'
import LoginForm from '../Pages/LoginForm'
import Homepage from '../Pages/Homepage'
import Navbar from '../Pages/Navbar'
import PageNotFound from '../Pages/PageNotFound'
const MainRoutes = () => {
  return <Routes>
    {/* <Route path='/navbar' element={<Navbar/>}/> */}
    <Route path='/' element={<Homepage />} />
    <Route path='/login' element={<Login />} />
    <Route path='/register' element={<LoginForm />} />
    <Route path='*' element={<PageNotFound/>} />

  </Routes>
}

export default MainRoutes