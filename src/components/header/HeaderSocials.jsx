import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiGeeksforgeeks,SiLeetcode} from 'react-icons/si'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/navneet-kumar-603b14193/" target="_blank">LinkedIn - <BsLinkedin/></a>
        <a href="https://github.com/Navneetkumarjpr" target="_blank">Github - <FaGithub/></a>
        <a href="https://auth.geeksforgeeks.org/user/navaneetjpr/practice" target="_blank" >GfG - <SiGeeksforgeeks/></a>
        <a href="https://leetcode.com/navneet1902/" target="_blank">leetcode - <SiLeetcode/></a>
    </div>
  )
}

export default HeaderSocials