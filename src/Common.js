import React from 'react'
import { NavLink } from 'react-router-dom';


 const Common = (props) =>{
    return(
        <>
         <section id="header"  className ="d-flex align_items_center">
        <div className="container-fluid ">
      <div className="row">
      <div className="col-10  mx-auto"> 
      <div className="row">  
       <div className = "mar"></div>
      <div  className="col-md-6 pt-5   pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
     
     <h1> {props.name} <strong className="brand-name"> Aj_Anuj</strong></h1>
    <h2 className="my-22"> 
        We are team of talanted Developer making website 
    </h2>
    <div className="mt-102">
       <NavLink to={props.visit} className= "btn-get-started">{props.btname}
       </NavLink>


 </div>
</div>

   <div className = " col-lg-6 order-1 order-lg-2 header-img">
      <img src={props.imgsrc} className="img-fluid animated" alt="Homeing" />
   </div>
</div>
</div>
</div>
</div>       
 </section>
        </>
    )
 }
 export default Common;