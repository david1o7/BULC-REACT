import React from 'react'
import "./About.css"
import about_img from "../../assets/edusity_assets/about.png"
import play_icon from "../../assets/edusity_assets/play-icon.png"

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' onClick={() => {setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h3>ABOUT &nbsp;<span className='mini-text'>BASIC UTILITY <span className='mini-text2'>  LEARNERS CONNECT</span></span> &trade;</h3>
        <h2>"Code Better, Grow Smarter, Succeed Together!" 🚀💻</h2>
        <p>
        ✨️Imagine 🤔having a supportive space.💪

        where your programming questions get answered✨️and your academic struggles feel less overwhelming. 🚀
        <br />
        <b>💡That's Basic Utility Learners Connect!😃 We're a community of learners helping learners navigate the essentials✨️ of coding and academics.🚀</b>

        Let's learn, grow, and succeed together! 💪 
        <br />
        <br />
        👋Ready to find your tribe? 🚀
        <br />
       <span style={{color : "#000000"}}><b>JOIN BASIC UTILITY LEARNER'S CONNECT💪 </b></span>

        </p>
        <button class="rainbow-button" onClick={() => window.location.href = "https://chat.whatsapp.com/Jn4LB6fkZjzCOa9TFgVnqZ"}>Our WhatsApp group 🚀</button>
      </div>
    </div>
  )
}

export default About
