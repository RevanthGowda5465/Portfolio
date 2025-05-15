import React, { useState } from 'react'
import './about.css'
import Education from './education';
import Skills from './Skills';
import { FaHtml5, FaJava, FaFutbol, FaFilm, FaPlane, FaLaptopCode } from "react-icons/fa";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io5";
import { RiReactjsFill } from "react-icons/ri";
import { SiSpring, SiSpringboot, SiMysql  } from "react-icons/si";
import { BiLogoCPlusPlus } from "react-icons/bi";
import { FaC } from "react-icons/fa6";

function About() {
    const [heading, setHeading] = useState("About Me");
    const [aboutContent, setAboutContent] = useState("Hi, I'm Revanth Gowda R — a dedicated and curious Java Full Stack Developer, currently enhancing my skills through intensive training at Pentagon Space, Bengaluru. With a B.E. in Computer Science and a strong technical foundation in Java, Spring Boot, MySQL, and front-end technologies, I enjoy building reliable and user-centric web applications. Through projects like a Banking Management System, a Savings and Rental Tracker, and an AI-powered Drone Detection System, I’ve tackled real-world problems with a practical, hands-on approach. I thrive in dynamic environments, quickly adapt to new tools and challenges, and consistently aim to contribute meaningful solutions that reflect both innovation and impact. I’m someone who takes initiative, enjoys working collaboratively, and finds motivation in learning something new every day. Whether it's optimizing a backend system or collaborating on UI design, I bring a blend of analytical thinking, creativity, and team spirit to every project I work on.");
    const [selectedSection, setSelectedSection] = useState("about");

    const aboutHandle = () => {
        setHeading("About Me")
        setSelectedSection('about')
        setAboutContent("Hi, I'm Revanth Gowda R — a dedicated and curious Java Full Stack Developer, currently enhancing my skills through intensive training at Pentagon Space, Bengaluru. With a B.E. in Computer Science and a strong technical foundation in Java, Spring Boot, MySQL, and front-end technologies, I enjoy building reliable and user-centric web applications. Through projects like a Banking Management System, a Savings and Rental Tracker, and an AI-powered Drone Detection System, I’ve tackled real-world problems with a practical, hands-on approach. I thrive in dynamic environments, quickly adapt to new tools and challenges, and consistently aim to contribute meaningful solutions that reflect both innovation and impact. I’m someone who takes initiative, enjoys working collaboratively, and finds motivation in learning something new every day. Whether it's optimizing a backend system or collaborating on UI design, I bring a blend of analytical thinking, creativity, and team spirit to every project I work on.")
    }
    const skillsHandle = () => {
        setHeading("My Skills")
        setSelectedSection('skills')
        setAboutContent(
            <div id="skil">
                <div style={{ display: 'flex' }}>
                    <Skills icon={<FaHtml5 size={'55px'} color='#c736a0' />} name="HTML" />
                    <Skills icon={<IoLogoCss3 size={'55px'} color='#c736a0' />} name="CSS" />
                    <Skills icon={<IoLogoJavascript size={'55px'} color='#c736a0' />} name="JavaScript" />
                    <Skills icon={<RiReactjsFill size={'55px'} color='#c736a0' />} name="ReactJS" />
                </div>
                <div style={{ display: 'flex' }}>
                    <Skills icon={<FaJava size={'55px'} color='#c736a0' />} name="Java" />
                    <Skills icon={<BiLogoCPlusPlus size={'55px'} color='#c736a0' />} name="C++" />
                    <Skills icon={<FaC size={'55px'} color='#c736a0' />} name="C" />
                    <Skills icon={<SiSpring size={'55px'} color='#c736a0' />} name="Spring" />
                </div>
                <div style={{ display: 'flex' }}>
                    <Skills icon={<SiSpringboot size={'55px'} color='#c736a0' />} name="SpringBoot" />
                    <Skills icon={<SiMysql size={'55px'} color='#c736a0' />} name="MySQL" />
                </div>
            </div>
        );
    }
    const educationHandle = () => {
        setHeading("My Education")
        setSelectedSection('education')
        setAboutContent(
            <div>
                <div style={{ display: "flex" }}>
                    <Education year="2024-2025" course="Java Full-Stack" institute="Pentagon Space" />
                    <Education year="2020-2024" course="B.E in Computer Science and Engineering" institute="BGS Institute of Technology" />
                </div>
                <div style={{ display: "flex" }}>
                    <Education year="2018-2020" course="Pre-University Education" institute="Arvind PU College" />
                    <Education year="2017-2018" course="Secondary School Leaving Certificate" institute="Arvind International School" />
                </div>
            </div>
        );
    }
    const hobbiesHandle = () => {
        setHeading("Hobbies")
        setSelectedSection('hobbies')
        setAboutContent(
            <section id="hobbies" className="p-6 bg-white rounded-xl shadow-md">
  <h2 className="text-2xl font-bold mb-6">Hobbies & Interests</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg">
    <div className="flex items-center space-x-3">
      <FaFutbol className="text-blue-500" />
      <span>Playing Sports (especially Cricket)</span>
    </div>
    <div className="flex items-center space-x-3">
      <FaFilm className="text-red-500" />
      <span>Watching Movies (Sci-Fi & Action)</span>
    </div>
    <div className="flex items-center space-x-3">
      <FaPlane className="text-green-500" />
      <span>Traveling and Exploring New Places</span>
    </div>
    <div className="flex items-center space-x-3">
      <FaLaptopCode className="text-purple-500" />
      <span>Learning New Technical Skills</span>
    </div>
  </div>
</section>
        )
    }

    return (
        <div id="about">
            <div id="container">
                <div className='list-container'>
                    <ul type='none' className='list'>
                        <li><button className={`listButtons ${selectedSection === 'about' ? 'selected' : ''}`} onClick={aboutHandle} > About</button></li>
                        <li><button className={`listButtons ${selectedSection === 'skills' ? 'selected' : ''}`} onClick={skillsHandle}>    Skills</button></li>
                        <li><button className={`listButtons ${selectedSection === 'education' ? 'selected' : ''}`} onClick={educationHandle}> Education </button> </li>
                        <li><button className={`listButtons ${selectedSection === 'hobbies' ? 'selected' : ''}`} onClick={hobbiesHandle} >  Hobbies</button> </li>
                    </ul>
                </div>
                <div className='content'>
                    <h2 style={{color:'#883FE0'}}>{heading}</h2>
                    <p >{aboutContent}</p>
                </div>
            </div>
        </div>
    )
}

export default About