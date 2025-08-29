import React from 'react'
import "./Hero.css"
import dark_arrow from "../../assets/edusity_assets/dark-arrow.png"
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>BASIC UTILITY LEARNERS CONNECT &trade;</h1>
            <p>Basic Utility Learners Connect!😃 <br />
              We're a community and  a supportive space
              of learners helping learners navigate the essentials✨️ 
              of coding and academics .🚀
            </p>
                <div className="animated-text">
                  <p className='text'>WELCOME TO <span style={{color : "rgb(29, 188, 27)"}}> <b>BULC</b></span> &trade;</p>
                </div>
              <br />
           <Link to="program" smooth={true} offset={-260} duration={500}> <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button> </Link>
        </div>
      
    </div>
  )
}

export default Hero
