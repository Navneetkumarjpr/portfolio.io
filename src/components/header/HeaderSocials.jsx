import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiGeeksforgeeks,SiLeetcode} from 'react-icons/si'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/navneet-kumar-603b14193/" target="_blank">LinkedIn - <BsLinkedin/></a>
        <a href="https://github.com/Navneetkumarjpr" target="_blank">Github - <FaGithub/></a>
    </div>
  )
}

export default HeaderSocials