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
             - A very simplified website to get the top news of your interest!!!.
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
             - A user friendly designed website for arranging your contacts ina a systematic manner for anytime use .
            </p>
             <p>
             - User can store contact in there account online and can send a message on mail and whatsApp on one click. 
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
              - A site designed for the access of results and many such informations.
              <p>
             - It is available for both University and the students with their respective pannels.

              </p>
              <p>

             - Student and Teachers can login in the portal.
              </p>
              <p>

             - Consist of features like announcement of result ,student complaints etc.
              </p>
            </p>
            </div>  
        </article>
      </div>
    </section>
  )
}

export default Portfolio