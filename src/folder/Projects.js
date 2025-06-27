import { React, useState, useEffect } from 'react'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import './projects.css'

function Projects() {
  const project = [{ id: "01", title: "Bank Management", description: "Banking Management is a web application designed to perform fundamental banking operations such as account creation, deposits, withdrawals, and balance inquiries. The application includes features like user authentication, transaction history tracking, and database management. It follows OOP principles and implements CRUD operations, making it a scalable and structured banking solution.", tech: "[ HTML, CSS, JavaScript, Java, MySQL ]", links: "https://github.com/RevanthGowda5465/Bank-Management", photo: "Bank-dashbard.png" },
  { id: "02", title: "Household Savings and Rental Management", description: "Household Savings and Rental Management is a web application that helps users track expenses, income, and rental payments efficiently. It includes user authentication, expense tracking, budget planning, rental payment tracking, and loan management. The system allows users to set financial goals, automate reminders, and generate reports. This project provides an organized digital platform for budget management and expense monitoring.", tech: "[ HTML, CSS, JavaScript, Java, MySQL ]", links: 0, photo: "HSRM-dashboard.png" },
  { id: "03", title: "AI-Based Drone Detection", description: "AI-Based Drone Detection is an AI-powered approach using machine learning and YOLOv5 to identify and analyze drones in real time. It is trained to differentiate between UAVs and non-UAVs while providing automated alerts to users. The system processes video feeds for accurate drone detection in restricted areas. By leveraging deep learning and image processing, it enhances security surveillance measures.", tech: "[ HTML, CSS, JavaScript, Python]", links: 0, photo: "AIBasedDrone.png" }
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % project.length);
    }, 3000); 
    return () => clearInterval(interval); 
  }, []);
  const goNext = () => {
    if (!project || project.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % project.length);
  };

  const goPrev = () => {
    if (!project || project.length === 0) return;
    setCurrentIndex((prev) => (prev - 1 + project.length) % project.length);
  };

  return (
    <div id="projects">
      <div className='project-container'>
        <div className='project-content'>
          {project[currentIndex] && (
            <div className='project-content-container'>
              <h1 id="project-no">{project[currentIndex].id}</h1>
              <h2 id="project-name">{project[currentIndex].title}</h2>
              <h6 id="project-desc">{project[currentIndex].description}</h6>
              <p id="project-tech">{project[currentIndex].tech}</p>
              <hr />
              <div id="project-links">
                {project[currentIndex].links !== 0 ? ( <a href={project[currentIndex].links} target="_blank"><FaGithub id="link" /></a>) : ""}
              </div>
            </div>
          )}
        </div>
        <div className='project-content' id="#project-content-image">
          <img src={project[currentIndex].photo} alt='no-image' className='image' />
          <div id="project-arrow">
            <button className='arrow-buttons' onClick={goPrev}><IoIosArrowBack /></button>
            <button className='arrow-buttons' onClick={goNext}><IoIosArrowForward /></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects