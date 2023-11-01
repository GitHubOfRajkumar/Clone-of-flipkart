import logo from './logo.svg';
import './App.css';
import Homepage from './Pages/Homepage';
import Footer from "./Pages/Footer"
import Navbar from './Pages/Navbar';
import Login from './Pages/Login';
import Login2 from './Pages/LoginForm';
import React from 'react';
import { ReactDOM } from 'react';
import {BsFacebook} from "react-icons/bs"
import Facebook, { Linkedin } from './Pages/Facebook';
import Twitter from './Pages/twitter';
import Google from './Pages/Google';
import { Text } from '@chakra-ui/react';
import LoginForm from './Pages/LoginForm';
import MainRoutes from './Components/MainRoutes';
import Slider from './Pages/Slider';
import Homepageinnerslider from './Pages/Homepageinnerslider';
import PageNotFound from './Pages/PageNotFound';
// const App = props => (
//   <LoginForm />
// );






// ReactDOM.render(<App />, document.getElementById('container'));
const App=()=> {
  console.log("Application started");

  return (
    <div className="App">
      
     {/* <LoginForm/> */}
     {/* <Login/> */}
     
     {/* <Login2/> */}
     {/* <LoginForm/> */}
     {/* <LoginForm/> */}
    

     <Navbar/>
     




     {/* <Homepage/> */}
     {/* <Slider/> */}
     
     {/* <Homepageinnerslider/> */}

    

     <MainRoutes/>
     

    {/* <PageNotFound/> */}

      {/* <Footer/> */}
     
      
    </div>
  );
}

export default App;
