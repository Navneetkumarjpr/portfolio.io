import React from 'react'
import "./about.css"
import ME from '../../assests/dp.jpg';
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    <section id='about'> 
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" className="about__me-image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon"/>
              <h5>Experience</h5>
              <small>1+ Year</small>
            </article>
            {/* <article className="about__card">
              <FaAward className="about__icon"/>
              <h5>Experience</h5>
              <small>1+ Year</small>
            </article> */}
            <article className="about__card">
              <VscFolderLibrary className="about__icon"/>
              <h5>Projects</h5>
              <small>3+ Completed</small>
            </article>
          </div>
          <p>My Name is Navneet Kumar. Pursuing my Bacherlor's of Technology from Rajasthan Technical University, Kota
            in Electronics and Communication branch. </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About