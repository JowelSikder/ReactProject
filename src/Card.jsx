import React from 'react'
import img from '../src/img/service-1019821_960_720.jpg'


const Card = () => {
    return(
        <>
            
                <div className='col-md-4'>
                <div className="card">
                            <img src={img} className="img-fluid"/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                </div>
            
                           
        </>
    )
}

export default Card