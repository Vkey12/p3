import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from "react-icons/fa";
import { LuUserCircle } from "react-icons/lu";
import { GrProjects } from "react-icons/gr";

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="About things" />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>

            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>

            <article className='about__card'>
              <LuUserCircle  className='about__icon'/>
              <h5>Projects</h5>
              <small>60+ Complited</small>
            </article>

            <article className='about__card'>
              <GrProjects className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi mollitia recusandae aspernatur eaque beatae sequi tempora illum modi, ad, sit sapiente error labore, maiores assumenda eos esse hic! Est, excepturi.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
