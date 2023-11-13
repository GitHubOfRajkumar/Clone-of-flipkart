import React from 'react'
import Quickaction from './Quickaction'
import Slider from './Slider'
import "../Css/Homepage.css"
// import Dummy from './Dummy'
import Footer from "./Footer"
import Navbar from "./Navbar"
import Homepageinnerslider from './Homepageinnerslider'
const Homepage = () => {
  return (
    <div>
      <Slider/>
       {/* <Navbar/> */}
       <Homepageinnerslider/>
      <Footer/> 

    </div>
  )
}

export default Homepage