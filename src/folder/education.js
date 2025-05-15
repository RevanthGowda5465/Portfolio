import React from 'react'
import './education.css'

function Education({year, institute, course}) {
    return (
        <div className='education'>
            <h4 style={{color:'#f7b33b'}}>{institute}</h4>
            <p id='year'>{year}</p>
            <h5 style={{color:'#ee2e2e'}}>{course}</h5>
        </div>
    )
}
export default Education
