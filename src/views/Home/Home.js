import React from 'react'

import homeIllustration from '../../ressource/home-illustration.png'
import homeGrid1 from '../../ressource/home-grid-1.png'
import homeGrid2 from '../../ressource/home-grid-2.png'
import homeGrid3 from '../../ressource/home-grid-3.png'
import homeLogo from '../../ressource/home-logo.svg'


function Home() {
  return (
    <>
    <div className='section first-home-section'>
      <div className='container'>
        <div className='container-left'>
          <div className='center-y'>
            <h1 className='title-xl'>
              <span className='small-caps'>C</span>omptable-<span className='text-prusian-blue-b300'><span className='small-caps'>F</span>iscaliste</span>,<br/>
              <span className='small-caps'>S</span>itué à <span className='text-prusian-blue-b300'><span className='small-caps'>B</span>ruxelles</span>  
            </h1>
            <div className='sep'></div>
            <p className='p-m'>Lorem ipsum dolor sit amet. Non quasi ipsum ad velit ratione qui quaerat fuga ut ipsa beatae et obcaecati fugiat.</p>
          </div>
        </div>
        <div className='container-right'>
          <div className='center-x'>
            <img src={homeIllustration} alt="" />
          </div>
        </div>
      </div>
    </div>
    <div className='section second-home-section'>
      <div className='container'>
        <h2 className='title text-center'>à chaque <span className='text-prusian-blue-b300'>phase</span> de votre entreprise</h2>
        <div className='grid-3'>
          <div className='grid-elem'>
            <img src={homeGrid1} alt="" />
            <p className='p-m'>Création</p>
          </div>
          <div className='grid-elem'>
            <img src={homeGrid2} alt="" />
            <p className='p-m'>Gestion</p>
          </div>
          <div className='grid-elem'>
            <img src={homeGrid3} alt="" />
            <p className='p-m'>Expension</p>
          </div>
        </div>
      </div>
    </div>
    <div className='section third-home-section bg-prusian-blue-b300'>
      <div className='container'>
        <div className='grid-4'>
          <div className='grid-elem'>
            <img src={homeLogo} alt="" />
          </div>
          <div className='grid-elem'>
            <img src={homeLogo} alt="" />
          </div>
          <div className='grid-elem'>
            <img src={homeLogo} alt="" />
          </div>
          <div className='grid-elem'>
            <img src={homeLogo} alt="" />
          </div>
        </div>
      </div>
    </div>
    <div className='section section-home-fourth'>
      <div className='container'>
        
      </div>
    </div>
    </>
  )
}

export default Home