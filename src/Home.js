import React from 'react';
import Common from "./Common";
import Web from "../src/Images/Home.jpeg";
import { NavLink } from 'react-router-dom';




 const Home = (props) =>{
    return(
        <>
           <Common 
                  name ="Grow Your Business with "
                   imgsrc={Web}
                  visit="/Service"
                  btname="Get Started"
         />
        </>
    ) 
 }
 export default Home;