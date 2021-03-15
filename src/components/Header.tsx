import React from 'react'
import { Link } from 'react-router-dom'

import popcorn from '../assets/img/popcorn.svg'

const Header: React.FC = () => (
  <header className="header container">
    <div className="header__logo">
      <img src={popcorn} alt="Logo" />
    </div>
    <h1 className="header__title">
      <Link to="/">KinoVTopku</Link>
      {/* <a href="/">KinoVTopku</a> */}
    </h1>
  </header>
)

export default Header
