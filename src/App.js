import React from 'react'
import   '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import   '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import               "./Index.css"
import Home     from     "./Home";
import Service  from  "./Service";
import About    from    "./About";
import Contact  from  "./Contact";
import Navbar   from   "./Navbar";
import Common from "./Common";
import Footers from "./Footers";
import { Switch,Route, Redirect} from 'react-router-dom';


 const App = () =>{
    return(
        <>
        <Navbar/>
        <Switch>  
           <Route  exact path  = "/" component = {Home} />
           <Route  exact path  = "/About" component = {About} />
           <Route  exact path  = "/contact" component = {Contact} />
           <Route  exact path  = "/service" component = {Service} />
           <Redirect to ="/" />
             </Switch>
             <Footers/>
        </>
    )
 }
 export default App;