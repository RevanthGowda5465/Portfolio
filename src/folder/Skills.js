import React from 'react'
import './skills.css'
function Skills({icon,name}) {
  return (
    <div className='skills-container'>
      {icon}
      <p id="skill">{name}</p>
    </div>
  )
}

export default Skills
