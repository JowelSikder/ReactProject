import React from 'react'
import Common from './Common'
import img from '../src/img/rocket-png-40794.png'


const About = () => {
    return(
        <>
           <Common 
            data='Welcome to About Page' 
            img= {img} 
            button="Contact Now"/>
        </>
    )
}

export default About