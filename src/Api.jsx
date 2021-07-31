import React, { createContext } from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Service from './Service'
import Navbar from './Navbar'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';



const Api = () => {

    
    return (
        <>

        <Navbar/>
           <Switch>
               <Route exact path="/" component={Home}></Route> 
               <Route exact path="/about" component={About}></Route>      
               <Route exact path="/contact" component={Contact}></Route>      
               <Route exact path="/service" component={Service}></Route>    
               <Redirect to="/" />              

           </Switch>
        </>
    )
}


export default Api
