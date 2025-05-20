import React, { useState } from 'react'
import { IoIosCall } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";
import './contact.css'
import emailjs from 'emailjs-com';

function Contact() {

  const [fname, setFname] = useState()
  const [lname, setLname] = useState()
  const [email, setEmail] = useState()
  const [phoneNo, setPhoneNo] = useState()
  const [message, setMessage] = useState()
  const [button, setButton] = useState('Send Message')
  const [isLoading, setIsLoading] = useState(false);

  let handelSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setButton('Sending...');

    const templateParams = {
      from_name: `${fname} ${lname}`,
      email: email,
      phone: phoneNo,
      message: message,
    };

    try {
      await emailjs.send(
        'service_5ig9354',      // Your Service ID
        'template_vn4x1hx',     // Your Template ID
        templateParams,
        'LhAUHVE7i4eibnGFm'       // Your Public Key
      );

      alert("Thank you for your message! I’ll be in touch shortly.");
      setFname('');
      setLname('');
      setEmail('');
      setPhoneNo('');
      setMessage('');
      setButton('Sent');
    } catch (error) {
      console.error('Email send error:', error);
      alert("Something went wrong. Please try again later.");
      setButton('Send Message');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="contact">
      <div className='form' id='form'>
        <div id="form-container">
          <form onSubmit={handelSubmit}>
            <h2 id="heading">Let's Connect</h2>
            <p id="paragraph">Open to new opportunities in tech — especially roles in full-stack or backend development. Don’t hesitate to reach out if you’re hiring.</p>
            <input className="input-field left-inputfield" type='text' placeholder='First Name' value={fname} onChange={(e) => setFname(e.target.value)} required></input>
            <input className="input-field right-inputfield" type='text' placeholder='Last Name' value={lname} onChange={(e) => setLname(e.target.value)} required></input>
            <br />
            <input className="input-field left-inputfield" type='email' placeholder='Email Address' value={email} onChange={(e) => setEmail(e.target.value)} required></input>
            <input className="input-field right-inputfield" type='tel' placeholder='Phone Number' value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} ></input>
            <br />
            <textarea rows={5} className="input-field" type='text' placeholder='Type your message here.' value={message} onChange={(e) => setMessage(e.target.value)} id="message-field" required></textarea>
            <br />

            <button type='submit' disabled={isLoading}> {isLoading ? (<p id="contact-button"> <span className="spinner"></span> Sending... </p>) : (button)} </button>
          </form>
        </div>
      </div>
      <div className='form' id="contact-info">
        <div className='contact-list'>
          <IoIosCall className='contact-icons' />
          <div className="mini-container">
            <label>Phone</label>
            <h3 className='context-content'>+91 89043 45465</h3>
          </div>
        </div>
        <div className='contact-list'>
          <IoIosMail className='contact-icons' />
          <div className="mini-container">
            <label>Email</label>
            <h3 className='context-content'><a id="linkedIn" href='mailto:revanthgowdar5465@gmail.com' style={{ color: 'white' }}>revanthgowdar5465@gmail.com</a></h3>
          </div>
        </div>
        <div className='contact-list'>
          <IoLogoLinkedin className='contact-icons' />
          <div className="mini-container">
            <label>LinkedIn</label>
            <h3 className='context-content'><a id="linkedIn" href='https://www.linkedin.com/in/revanth-gowda-r-251443319' style={{ color: 'white' }}>Revanth Gowda R</a></h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact