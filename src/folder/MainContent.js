import React, { useState, useEffect } from 'react'
import './mainContent.css'
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
function MainContent() {
const roles = ['Full-Stack', 'Front-End', 'Back-End'];
const [index, setIndex] = useState(0);
useEffect(() => {
  const interval = setInterval(() => {
    setIndex(prevIndex => (prevIndex + 1) % roles.length);
  }, 7000);
  return () => clearInterval(interval);
}, []);
  const handelButton=()=>{}
return (
  <div id="main">
    <div className='container-links'>
      <a href='https://www.linkedin.com/in/revanth-gowda-r-251443319' className='social-links'><IoLogoLinkedin className="socials" /></a>
      <a href='mailto:revanthgowdar5465@gmail.com' className='social-links'><IoIosMail className="socials" /></a>
      <a href='https://github.com/RevanthGowda5465' className='social-links'><FaGithub className="socials" /></a>
    </div>
    <div className='container'>
      <h2 style={{color:'#EE2E2E'}}>Hey there! 👋</h2>
      <br />
      <h1 style={{color:'#C736A0'}}>I'm Revanth Gowda R.</h1>
      <br />
      <h2 style={{color:'#EE2E2E'}}>A passionate <span id="span" style={{color:'#FAF369'}}>{roles[index]}</span> developer.</h2>
      <br />
      <p >    
        I craft clean, scalable, and user-centric web applications from concept to deployment. 
        With a strong foundation in <strong>Java Full-Stack Development </strong> 
        and a love for solving real-world problems, I blend logic and creativity to build smooth digital experiences.
      </p>
      <button onClick={handelButton}>Download CV</button>
    </div>
  </div>
)
}

export default MainContent