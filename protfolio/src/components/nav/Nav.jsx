import React from 'react'
import './nav.css'
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { IoMdBook } from "react-icons/io";
import { MdDesignServices } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')}className={activeNav === '#' ? 'active' : ''}><IoHomeOutline/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaRegUser/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><IoMdBook/></a>
      <a href="#services"  onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><MdDesignServices/></a>
      <a href="#contact"  onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><IoIosContact/></a>
    </nav>
  )
}

export default Nav
