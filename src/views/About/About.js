import React from 'react'
import { Helmet } from 'react-helmet';

import homeAbout from '../../ressource/home-about.png'

function About() {
  return (
    <>
    <div>
      <Helmet>
        <title>À Propos | TMF Compta</title>
      </Helmet>
    </div>
    <div className='generic-banner generic-banner-about'>
      <div className='text-box center-xy'>
        <h1 className='title-xl text-bold text-white-b300'>à propos</h1>
      </div>
    </div>
    <div className='section section-home-fourth'>
    <div className='container'>
      <div className='grid-2'>
        <div className='grid-elem'>
          <div className='center-y'>
            <h2 className='title'>Qui sommes<span className='text-prusian-blue-b300'> nous?</span></h2>
            <p className='p-m'>Notre cabinet comptable à Zaventem cumule plus de 10 années d'expérience dans le domaine, offrant des services comptables fiables et personnalisés pour les entreprises de toutes tailles. Notre équipe d'experts dévoués met tout en œuvre pour vous aider à atteindre vos objectifs financiers et vous accompagne dans la réussite de votre entreprise.</p>
          </div>
        </div>
        <div className='grid-elem'>
            <img className='center-xy' src={homeAbout} alt="" />
        </div>
      </div>
    </div>
  </div>
  <div className='section bg-prusian-blue-b300 section-about-first'>
    <div className='container'>
      <h2 className='title text-center text-white-b300'>Notre mission</h2>
      <div className='text-box'>
        <p className='p-m text-white-b300 text-center'>Chez TMF Compta, notre mission est votre succès financier. Nous vous accompagnons avec expertise et solutions personnalisées pour optimiser votre gestion, vos décisions stratégiques et votre croissance. Faites confiance à notre équipe expérimentée pour atteindre vos objectifs entrepreneuriaux.</p>
      </div>
    </div>
  </div>
  <div className='section section-about-second'>
    <div className='container'>
      <h2 className='title ml'>Notre <span className='text-prusian-blue-b300'>histoire</span></h2>
      <div className='grid-2'>
        <div className='grid-elem'>
          <h2 className='title text-prusian-blue-b300 center-y'>2014</h2>
        </div>
        <div className='grid-elem'>
          <div className='text-box'>
            <p className='p-m'>TMF Compta est fondée, marquant le début de notre parcours dans le domaine de la comptabilité et des services financiers.</p>
          </div>
        </div>
        <div className='grid-elem'>
          <h2 className='title text-prusian-blue-b300 center-y'>2015</h2>
        </div>
        <div className='grid-elem'>
          <div className='text-box'>
            <p className='p-m'>Grâce à notre approche centrée sur le client et à notre engagement envers l'excellence, nous gagnons la confiance de nombreuses entreprises qui bénéficient de nos conseils et de notre expertise.</p>
          </div>
        </div>
        <div className='grid-elem'>
          <h2 className='title text-prusian-blue-b300 center-y'>2016</h2>
        </div>
        <div className='grid-elem'>
          <div className='text-box'>
            <p className='p-m'>Nous déménageons vers de nouveaux locaux, renforçant notre capacité à offrir des services de qualité supérieure à nos clients.</p>
          </div>
        </div>
        <div className='grid-elem'>
          <h2 className='title text-prusian-blue-b300 center-y'>2022</h2>
        </div>
        <div className='grid-elem'>
          <div className='text-box'>
            <p className='p-m'>TMF Compta franchit une étape majeure de son évolution en devenant une PME à part entière. Ce jalon témoigne de notre croissance continue et de notre engagement à offrir des services de qualité supérieure à une clientèle de plus en plus diversifiée. Nous sommes fiers d'accompagner les entreprises, petites et moyennes, dans leur développement financier et de contribuer à leur réussite.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>
  )
}

export default About