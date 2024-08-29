import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import { TypeAnimation } from 'react-type-animation'
const Home = () => {
  const [typing, setTyping] = useState("Bot")
  return (
    <div className='homepage'>
      <div className="left">
        <h1>OLS AI</h1>
        <h2>SuperCharge Your Creativity</h2>
        <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia incidunt quod beatae iure laboriosam cumque.</h3>

        <Link to='/dashboard'>Get Started</Link>
      </div>
      <div className="right">
          <div className="imgcontainer">
            <div className="bgContainer">
              <div className="bg">

              </div>
            </div>
            <img src="../public/bot.png" alt="" className='bot' />
            <div className="chat">
              <img src={typing === "Bot" ? '../public/bot.png' : '../public/human1.jpeg'} className='bot'/>
              <TypeAnimation
                  sequence={[
                    'Bot:We produce food for Mice',
                    2000, () =>{
                      setTyping("Human")
                    },
                    'Human:We produce food for Hamsters',
                    2000, () =>{
                      setTyping("Bot")
                    }
                  ]}
                  wrapper="span"
                  speed={25}
                  style={{ fontSize: '0.75em', display: 'inline-block' }}
                  repeat={Infinity} 
                  cursor={true}
                  omitDeletionAnimation={true}
                  className='typeanimate'/>
            </div>
          </div>
      </div>
      <div className="terms">
        <img src="../public/logo.png" alt="" />
        <div className="links">
          <Link to="/">Terms of Service</Link>
          <span>|</span>
          <Link to="/">Privacy Policy</Link>
        </div>
      </div>
    </div>
  )
}

export default Home