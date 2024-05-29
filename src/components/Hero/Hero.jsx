import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'

const Hero = () => {
  return (
    <div className='hero'>
      <img src={profile_img} alt="" />
      <h1>Hello <span>I am Jagan,</span><br/>Welcome to my page</h1>
      <p>I'm a developer based in Minnesota, USA with 10 years of experience working in multiple companies like Anthem, BCBSMN, Anderson Windows and Winnebago.</p>
      <div className="hero-action">
        <div className="hero-connect">Connect</div>
        <div className="hero-resume">Resume</div>
      </div>
    </div>
  )
}

export default Hero