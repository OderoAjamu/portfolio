import React from 'react'
import './services.css'
import { FaCheck } from 'react-icons/fa6'

export const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>

            <ul className='service__list'>
              <li>
               <FaCheck className='service__list-icon' /> 
              <p>filler text</p>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  )
}
export default Services