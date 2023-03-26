import React from 'react'

import Logo from '../../assets/logo/logo.svg'
import './header.css'

function Header() {
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
                <li><a href="/" className='active'>Accueil</a></li>
                <li><a href="/comptabilite-generale">Comptabilité générale</a></li>
                <li><a href="/a-propos">À propos</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </nav>
          </header>
        </div>
      </div>
    </div>
  )
}

export default Header