import React from 'react'
import Common from "./Common";
import { NavLink } from 'react-router-dom';
import Web from "../src/Images/About.jpeg";


 const About=(props) =>{
    return(
        <>
               <Common 
                  name ="Welcome to About page "
                  imgsrc={Web}
                  visit="/contact"
                  btname="Contact Now"
               />
        </>
    )
 }
 export default About;