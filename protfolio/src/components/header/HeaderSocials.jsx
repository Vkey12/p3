import React from 'react'
import { FaGithub } from "react-icons/fa";
import { RiInstagramLine } from "react-icons/ri";

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://instagram.com" target="_blank"><FaGithub/></a>
      <a href="https://github.com" target="_blank"><RiInstagramLine/></a>
    </div>
  )
}

export default HeaderSocials
