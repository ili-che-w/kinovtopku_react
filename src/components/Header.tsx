import React from 'react'
import popcorn from '../assets/img/popcorn.svg'

import './Header.scss'

const Header: React.SFC = () => (
  <header className="header">
    <div className="header__logo mr-4">
      <img src={popcorn} alt="Logo" />
    </div>
    <h1 className="header__title">
      <a href="/">KinoVTopku</a>
    </h1>
  </header>
)

export default Header
