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
            <h4>Photoshooto</h4>
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
              Design the user friendly Frontend Design
              </p>
             </li>
             <li >
             <BiCheck className='service__list-item'/>
              <p>
              Was part of the team and handled the team as team leader.
              </p>
             </li>
             <li >
             <BiCheck className='service__list-item'/>
              <p>
              Got Exposure to React js
              </p>
             </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services