import React from 'react'
import CTA from './CTA'
import ME from '../../assests/dp.jpg'
import "./header.css"
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Navneet Kumar</h1>
        <h5 className='text-light'>Frontend/FullStack Developer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
          <img src={ME} alt="me" className='me-image' />
        </div>

        <a href="#contact" className='scroll__down'>Scroll down</a>
      </div>
    </header>
  )
}

export default Header