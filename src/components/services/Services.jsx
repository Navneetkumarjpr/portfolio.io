import React from 'react'
import "./services.css"
import {BiCheck} from 'react-icons/bi'
const Services = () => {
  return (
    <section id='services'>
      <h5>Where I was Worked</h5>
      <h2>Internship</h2>
      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>Web Development Intern</h3>
            <h5>Bokeh Photogenic Pvt. Ltd.</h5>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-item'/>
              <p>
              Worked on a Frontend part of the Website
              </p>
             </li>
             <li>
             <BiCheck className='service__list-item'/>
              <p>
              Make the user friendly Frontend Design
              </p>
             </li>
             <li >
             <BiCheck className='service__list-item'/>
              <p>
              worked with Team and handled the team
              </p>
             </li>
             <li >
             <BiCheck className='service__list-item'/>
              <p>
              Got Exposure to React js
              </p>
             </li>
             <li >
             <BiCheck className='service__list-item'/>
              <p>
              Got Exposure to Team Work , Team Leading
              </p>
             </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services