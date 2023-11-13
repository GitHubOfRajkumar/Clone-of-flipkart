import React from 'react'
import { Route, Routes } from "react-router-dom"
import Login from '../Pages/Login'
import LoginForm from '../Pages/LoginForm'
import Homepage from '../Pages/Homepage'
import Navbar from '../Pages/Navbar'
import PageNotFound from '../Pages/PageNotFound'
import ProductsList from './ProductsList'
import ProductsCard from './ProductsCard'
const MainRoutes = () => {
  return <Routes>
    {/* <Route path='/navbar' element={<Navbar/>}/> */}
    <Route path='/' element={<Homepage />} />
    <Route path='/products' element={<ProductsList/>} />
    <Route path='/login' element={<Login />} />
    <Route path='/register' element={<LoginForm />} />
    <Route path='*' element={<PageNotFound/>} />
    <Route path='/products-card' element={<ProductsCard/>}/>

  </Routes>
}

export default MainRoutes