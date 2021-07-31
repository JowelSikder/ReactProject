import React from 'react'
import ReactDom from 'react-dom'
// import App from './App'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import Api from './Api'



ReactDom.render(
   
  <>
    
   <BrowserRouter>
     <Api/>
   </BrowserRouter>
   
  </>,
  document.getElementById("root")

);

