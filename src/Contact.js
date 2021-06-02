import React, { useState } from 'react'


 const Contact = () =>{
const [data,setData]= useState({
   fullName:'',
   phone: '',
   email: '',
   msg:'',
});
   
  const InputEvent =(event)=>{
     const {name,value} = event.target;

     setData((preval)=>{
        return{
           ...preval,
           [name]:value,
        };
     });
  };

    const formSubmit=(e)=>{
      e.preventDefault();
      alert(
          `My name is ${data.fullname} My mobile Number is ${data.phone} and email is ${data.email}, Here is what I watn to say ${data.msg}`)
    };

    return(
        <>
   <div className ="my-5">
   <h1 className="text-center"> contact Us</h1>
   </div>
   <div className ="container contact_div">
    <div className="row">
    <div className="col-md-6 col-10 mx-auto">
    <form onSubmit={formSubmit}> 
      
       <div className="mb-3">
  <label for="exampleFormControlInput1" 
  className="form-label">FullName</label>
  <input type="text" className="form-control"
  name="fullName"
  value={data.fullName}
  onChange={InputEvent}
    placeholder="enter Your name"/>
</div>
            <div className="mb-3">
  <label for="exampleFormControlInput1" 
  className="form-label">Phone</label>
  <input type="text" className="form-control"
    name="phone"
    value={data.phone}
    onChange={InputEvent} 
    placeholder="Mobile no"/>
</div>       
     <div className="mb-3">
  <label for="exampleFormControlInput1" 
  className="form-label">Email address</label>
  <input type="email" className="form-control"
   id="exampleFormControlInput1"
   name="email"
    value={data.email}
    onChange={InputEvent}
    placeholder="name@example.com"/>
</div>

<div className="mb-3">
  <label for="exampleFormControlTextarea1" 
  class="form-label">Message</label>
  <textarea className="form-control" 
  id="exampleFormControlTextarea1" 
  rows="3"
  name="msg"
  value={data.msg}
  onChange={InputEvent}>
  </textarea>

  <div className="col-12">
    <button className="btn btn-outline-primary" 
    type="submit">Submit form</button>
  </div>

</div>
            </form>
         </div>
      </div>
   </div>
        </>
    )
 }
 export default Contact;