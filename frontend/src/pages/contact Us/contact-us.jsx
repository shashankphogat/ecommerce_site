import React from 'react'
import "./contact-us.css"
import { context } from '../../context/productContext'
import { useContext } from 'react'
import { useEffect } from 'react'

export const ContactUs = () => {
    const {changeCurrentPageName}=useContext(context)
    useEffect(()=>{
        changeCurrentPageName("contact");
      },[]);
  return (
    <>
    <div className='heading'>
        <h1>Contact Us</h1></div>
        <div className='form-container'>
        <form action="/email" method="POST" className='form'>
            <div className='field-container'>
        <input type="text" placeholder='Your Name' className='contact_input' name="nameOfPerson"></input>
        </div>
        <div className='field-container'>
        <input type="email" placeholder='Your Email' className='contact_input' name="email"></input>
        </div>
        <div className='textarea-container'>
        <textarea rows="5" placeholder='Your Message' name="message"></textarea>
        </div>
        <button type="submit" className='btn'>Submit</button>
        </form>
        </div>
        </>
  )
}
