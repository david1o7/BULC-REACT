import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar.jsx'
import Hero from '../Hero/Hero.jsx'
import Programs from '../programs/Programs.jsx'
import Title from "../title/Title.jsx"
import About from '../About/About.jsx'
import Campus from '../Campus/Campus.jsx'
import TeamMembers from '../Team memebers/TeamMembers.jsx'
import Contact from '../Contact/Contact.jsx'
import Footer from "../footer/Footer.jsx"
import Videoplayer from "../videofolder/Videoplayer.jsx"
import SlidingDisplay from '../slides/SlidingDisplay.jsx'
import FeaturesPage from '../Features/FeaturesPage.jsx'
const HomePage = () => {
  const [playState , setPlayState] = useState(false);

  return (
    <div> 
      <Navbar/>
      <Hero/>
      <div className="container">
      <Title subTitle="Stay Active" title="Slide show"/>
      <SlidingDisplay/>
      <Title subTitle="Stay Active" title="Slide show"/>
      <FeaturesPage/>
      <Title subTitle="OUR PROGRAM" title="What we offer"/>
      <Programs/>
      <About setPlayState = {setPlayState}/>
      <Title subTitle="Gallery" title="Photos"/>
      <Campus/>
      <Title subTitle="Team Members" title="Here from the People responsible for this innovative idea"/>
      <TeamMembers/>
      <Title subTitle="Contact" title="Get in touch"/>
      <Contact/>
      <Footer/>
      </div>

      <Videoplayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default HomePage