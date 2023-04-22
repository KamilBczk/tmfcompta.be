import React from 'react'

import Logo from '../../assets/logo/logo.svg'
import './header.css'

function Header() {
  const currentLocation = window.location.pathname;

  return (
    <div className='header'>
      <div className='container'>
        <div className='logo'>
          <a href="/">
            <img src={Logo} alt='Logo TMF COMPTA'/>
          </a>
        </div>
        <div className='navigation'>
          <header>
            <nav>
              <ul>
                <li><a href="/" className={currentLocation === "/" ? "active" : ""}>Accueil</a></li>
                <li><a href="/comptabilite-generale" className={currentLocation === "/comptabilite-generale" ? "active" : ""}>Comptabilité générale</a></li>
                <li><a href="/a-propos" className={currentLocation === "/a-propos" ? "active" : ""}>À propos</a></li>
                <li><a href="/contact" className={currentLocation === "/contact" ? "active" : ""}>Contact</a></li>
              </ul>
            </nav>
          </header>
        </div>
      </div>
    </div>
  )
}

export default Header