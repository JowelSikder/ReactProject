import React from 'react'
import img from '../src/img/rocket-png-40794.png'


const Common = (props) => {
    return(
        <>
            <section id="header" className=" d-flex align-items-center">
            <div className="container-fluid">
               <div className='row'>
                   <div className="col-10 mx-auto">
                       <div className="row">
                           <div className="col-md-6 pt-4 order-2 order-lg-1 d-flex justify-content-center flex-column">
                               <h1> {props.data} <strong className="brand-name">Best Developer</strong></h1>
                               <h2 className="mt-3">We are the team of developer making websites</h2>
                               <div className="button text-center pt-1">
                                   <a href="#" className="btn-get-started">{props.button}</a>
                               </div>
                           </div>
                           <div className="col-md-6 order-lg-2 order-1 pt-4">
                               <img src={props.img} className="animated"/>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
        </section>
        </>
    )
}

export default Common