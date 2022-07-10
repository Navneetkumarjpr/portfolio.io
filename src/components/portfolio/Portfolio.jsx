import React from 'react'
import "./portfolio.css"
import Weather from "../../assests/weather.png"
import SRMS from "../../assests/srms.png"
import NEWS from "../../assests/news.png"
import List from "../../assests/list.png"
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Work</h5>
      <h2>Projects</h2>

      <div className="container container__portfolio">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Weather} alt="" />
          </div>
            <h3>Weather Info</h3>
            <div className="portfolio__item-cta">
            {/* <a href="https://github.com/Navneetkumarjpr/WeatherInfo.github.io/tree/master" target="_blank" className='btn'>Github</a>
            <a href="https://navneetkumarjpr.github.io/WeatherInfo.github.io/" target="_blank" className='btn btn-primary'>Live Demo</a> */}
            <p className='exposure' >
            Tech Used: ReactJs, Public Api.
            </p>
            <p>
             - Website designed for Users to get the Weather Information.
            </p>
            </div>
            
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={NEWS} alt="" />
          </div>
            <h3>News Website</h3>
            <div className="portfolio__item-cta">
            {/* <a href="https://github.com/Navneetkumarjpr/WeatherInfo.github.io/tree/master" target="_blank" className='btn'>Github</a>
            <a href="https://navneetkumarjpr.github.io/WeatherInfo.github.io/" target="_blank" className='btn btn-primary'>Live Demo</a> */}
            <p className='exposure' >
            Tech Used: ReactJs, Public Api.
            </p>
            <p>
             - In this Website user can get the top news and also can serach for any topic and can use filter.
            </p>
            </div>  
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={List} alt="" />
          </div>
            <h3>Online Contact List</h3>
            <div className="portfolio__item-cta">
            {/* <a href="https://github.com/Navneetkumarjpr/WeatherInfo.github.io/tree/master" target="_blank" className='btn'>Github</a>
            <a href="https://navneetkumarjpr.github.io/WeatherInfo.github.io/" target="_blank" className='btn btn-primary'>Live Demo</a> */}
            <p className='exposure' >
            Tech Used: ReactJs, NodeJS, ExpressJs, MongoDB, Google Authentication.
            </p>
            <p>
             - In this user can add the Contacts online in their account and can access any time any where.
            </p>
            </div>  
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={SRMS} alt="" />
          </div>
            <h3>SRMS(Student Result Managment System)</h3>
            <div className="portfolio__item-cta">
            {/* <a href="https://github.com/Navneetkumarjpr/WeatherInfo.github.io/tree/master" target="_blank" className='btn'>Github</a>
            <a href="https://navneetkumarjpr.github.io/WeatherInfo.github.io/" target="_blank" className='btn btn-primary'>Live Demo</a> */}
            <p className='exposure' >
            Tech Used: ReactJs, NodeJS, ExpressJs, MongoDB.
            </p>
            <p>
             - In this there are Two Panel One for college and one for Student . 
             - College can add, update Result, create the account of student and able to post the announcemnet for the students.
             - Students can search the result and able to post the complaint. 
            </p>
            </div>  
        </article>
      </div>
    </section>
  )
}

export default Portfolio