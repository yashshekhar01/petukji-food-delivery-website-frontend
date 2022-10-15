import React from 'react'
import "../../styles/contact.css"

const Contact = () => { 
  return (
    <div name='contact' className="contact__section">
        <form method='POST' action="https://getform.io/f/c3fd27df-500a-47a0-a4e9-5cf002881a25" className='contact__container'>
            <div className='contact__wrapper'>
                <p className='contact__content'>Contact Me</p>
                <p className='highlight'>// Submit the form below or shoot me an email - <a href='mailto:yashshekhar2934@gmail.com' className='text-blue-600'>yashshekhar2934@gmail</a></p>
            </div>
            <input className='contact__highlight' type="text" placeholder='Name' name='name' />
            <input className='contact__a' type="email" placeholder="Email" name="email" />
            <textarea className='contact__b' name="message" rows="10" placeholder='Message'></textarea>
            <button className='contact__c'>Let's Collaborate</button>
        </form>
    </div> 
  )
}

export default Contact