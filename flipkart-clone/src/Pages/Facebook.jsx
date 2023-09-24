import React from 'react'
import '../App.css';
import { FaFacebook } from 'react-icons/fa';
import { Button } from '@chakra-ui/react';
import {BsLinkedin} from "react-icons/bs"
const Facebook = props => (
     <a href="#" id="facebookIcon">{<FaFacebook size={"lg"}/>}</a>
    
    );

    export const Linkedin = props =>(
        <a href="#" id="facebookIcon">{<BsLinkedin size={"lg"}/>}</a>
    )
   
    

export default Facebook