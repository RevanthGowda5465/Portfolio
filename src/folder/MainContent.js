import React, { useState, useEffect } from 'react'
import './mainContent.css'
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import Spline from '@splinetool/react-spline';

function MainContent() {
  const roles = ['Full-Stack', 'Front-End', 'Back-End'];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % roles.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);
  const handelButton = () => { 
        const element = document.createElement('a');
        element.href = '/Documents/Revanth_Gowda_R_Java_FullStack.pdf'; 
        element.download = 'Revanth_Gowda_R_Java_FullStack.pdf'; 
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
  }
  return (
    <div id='main'>
      <div className="main-container">
        <div className='container-links'>
          <a href='https://www.linkedin.com/in/revanth-gowda-r-251443319' target='_blank' className='social-links'><IoLogoLinkedin className="socials" /></a>
          <a href='mailto:revanthgowdar5465@gmail.com' target='_blank' className='social-links'><IoIosMail className="socials" /></a>
          <a href='https://github.com/RevanthGowda5465' target='_blank' className='social-links'><FaGithub className="socials" /></a>
        </div>
        <div className='container'>
          <h2 style={{ color: '#EE2E2E' }}>Hey there! 👋</h2>
          <br />
          <h1 style={{ color: '#C736A0' }}>I'm Revanth Gowda R.</h1>
          <br />
          <h2 style={{ color: '#EE2E2E' }}>A passionate <span id="span" style={{ color: '#FAF369' }}>{roles[index]}</span> developer.</h2>
          <br />
          <p >
            I craft clean, scalable, and user-centric web applications from concept to deployment.
            With a strong foundation in <strong>Java Full-Stack Development </strong>
            and a love for solving real-world problems, I blend logic and creativity to build smooth digital experiences.
          </p>
          <button onClick={handelButton}>Download CV</button>
        </div>
      </div>
      <div className="main-container">
        <Spline scene="https://prod.spline.design/W9LLmD49K91NmguB/scene.splinecode" />
      </div>
    </div>
  )
}

export default MainContent