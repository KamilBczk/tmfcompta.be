import React, { useState } from 'react'

import Logo from '../../assets/logo/logo.svg'
import hamburgerMenu from '../../ressource/hamburger-menu.svg'
import closeMenu from '../../ressource/close-menu.svg'
import './header.css'

function Header() {
  const currentLocation = window.location.pathname;
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className='header'>
      <div className='container'>
        <div className='logo'>
          <a href="/">
            <img src={Logo} alt='Logo TMF COMPTA'/>
          </a>
        </div>
        <div className={`navigation ${openMenu ? "navigation-show" : "navigation-hide"}`}>
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
        <div onClick={() => setOpenMenu(prevOpenMenu => !prevOpenMenu)} className='hamburger-menu menu-btn'><img src={`${openMenu ? closeMenu : hamburgerMenu}`} alt="" /></div>
      </div>
    </div>
  )
}

export default Header