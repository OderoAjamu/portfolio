import React from 'react'
import './header.css'
import CTA from './CTA'

export const Header = () => {
  return (
    <header>
      <div className="container header__container"></div>
      <h5>Hello I'm</h5>
      <h1>Odero Ajamu</h1>
      <h5 className="text-light">Fullstack Developer</h5>
      <CTA />

    </header>
  )
}
export default Header
