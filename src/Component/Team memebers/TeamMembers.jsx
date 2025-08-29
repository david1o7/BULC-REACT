import React , { useRef } from 'react'
import "./TeamMembers.css"
import next_icon from "../../assets/edusity_assets/next-icon.png"
import back_icon from "../../assets/edusity_assets/back-icon.png"
import user_1 from "../../assets/edusity_assets/David1.jpg"
import user_2 from "../../assets/edusity_assets/noel1.jpg"


const TeamMembers = () => {
    
    const slider = useRef();
    let tx = 0;

    const slideforward = () => {
        if(tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }

    const slidebackward = () => {
         if(tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
    
  return (
    <div className='TeamMembers'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideforward}/>
        <img src={back_icon} alt="" className='back-btn' onClick={slidebackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                        <img src={user_1} alt="" />
                            <div>
                                <h3>IRHENE DAVID .O.
                                </h3>
                                <span>Founder.</span>
                            </div>
                        </div>
                        <p>
                            My motto : Keep Me legendary (K.M.L)
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                        <img src={user_2} alt="" />
                            <div>
                                <h3>ASURU NOEL</h3>
                                <span>Founder.</span>
                            </div>
                        </div>
                        <p>
                            Busy...
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default TeamMembers
