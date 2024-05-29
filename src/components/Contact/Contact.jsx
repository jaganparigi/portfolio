import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import location_icon from '../../assets/location_icon.svg'

const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I am currently available to take on new projects, so you can drop me a message if you have a project that you want me to work on!</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" /><p>mydomain9923@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt="" /><p>xxx-xxx-xxxx</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="" /><p>MN, United States</p>
                    </div>
                </div>
            </div>
            <div className='contact-right'>
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your Name' name='name'/>
                <label htmlFor="">Email</label>
                <input type="email" placeholder='Enter your email Id'name='email'/>
                <label htmlFor="">Message</label>
                <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
                <button type='submit' className="contact-submit">Submit</button>
            </div>
        </div>
    </div>
  )
}

export default Contact