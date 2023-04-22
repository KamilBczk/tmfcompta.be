import React from 'react'
import './footer.css'
import '../../assets/css/index.css'
import footerImage from './footer-img.png'
import Logo from './logo-white.svg'


function Footer() {
  const currentLocation = window.location.pathname;

  return (
    <div className='footer'>
      {currentLocation !== "/contact" ?
      <div className='footer-contact'>
        <img src={footerImage} alt="" />
        <div className='container center-y'>
          <h2 className='title text-center text-white-b300'>Entrons en contact</h2>
          <div className='form center-x'>
            <form className='center-x'>
              <input type="mail" placeholder='info@example.com'/>
              <button type='submit'>Envoyer</button>
            </form>
          </div>
        </div>
      </div>
      : ""
      }
      <div className='border bg-prusian-blue-b300'>
        <div className='container'>
          <div className='footer-grid-3 text-white-b300'>
            <div className='footer-grid-elem footer-grid-elem-title'>
              <p className='p-s'>Statut</p>
            </div>
            <div className='footer-grid-elem footer-grid-elem-title'>
              <p className='p-s'>Liens</p>
            </div>
            <div className='footer-grid-elem footer-grid-elem-title'>
              <p className='p-s'>Informations de contact</p>
            </div>
            <div className='footer-grid-elem footer-swap'>
              <img src={Logo} alt="" />
            </div>
            <div className='footer-grid-elem'>
              <a className='p-xs' href="/">Accueil</a>
            </div>
            <div className='footer-grid-elem'>
              <a href="mailto:info@tmfcompta.be" className='p-xs'>info@tmfcompta.be</a>
            </div>
            <div className='footer-grid-elem footer-swap'>
            </div>
            <div className='footer-grid-elem'>
              <a className='p-xs' href="/comptabilite-generale">Comptabilité générale</a>
            </div>
            <div className='footer-grid-elem'>
              <a href="tel:+32 484 44 69 93" className='p-xs'>+32 484 44 69 93</a>
            </div>
            <div className='footer-grid-elem'>
              <p className='p-xs'>TMF Comtpa SRL.</p>
            </div>
            <div className='footer-grid-elem'>
              <a className='p-xs' href="/a-propos">À propos</a>
            </div>
            <div className='footer-grid-elem'>
              <p className='p-xs'>Avenue Docteur Zamenhof</p>
            </div>
            <div className='footer-grid-elem'>
              <p className='p-xs'>Expert Comptable sur Bruxelles</p>
            </div>
            <div className='footer-grid-elem'>
              <a className='p-xs' href="/contact">Contact</a>
            </div>
            <div className='footer-grid-elem'>
              <p className='p-xs'>1070 Anderlecht</p>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-prusian-blue-b300 text-white-b300'>
        <div className='container'>
          <div className='bttomfooter-grid-3'>
            <div className='bttomfooter-grid-elem'>
              <p className='p-xs text-left'>Réalisation & Head-Admin : <a href="https://kamilbiczyk.be" target='_blank' rel="noreferrer" style={{textDecoration: "underline"}}>Kamil Biczyk</a></p>
            </div>
            <div className='bttomfooter-grid-elem'>
              <p className='p-xs text-center'>TMF COMPTA © 2023</p>
            </div>
            <div className='bttomfooter-grid-elem'>
              <p className='p-xs text-right'><a href="/" style={{textDecoration: "underline"}}>Mentions légales</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer