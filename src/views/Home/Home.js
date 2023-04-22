import React from 'react'
import {ReactSVG } from 'react-svg';

import homeIllustration from '../../ressource/home-illustration.png'
import homeGrid1 from '../../ressource/home-grid-1.png'
import homeGrid2 from '../../ressource/home-grid-2.png'
import homeGrid3 from '../../ressource/home-grid-3.png'
import homeLogo from '../../ressource/home-logo.svg'
import homeAbout from '../../ressource/home-about.png'
import homeOpinion from '../../ressource/home-opinion.png'
import roundIllustration from '../../ressource/round-illustration.svg'


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
        <div className='grid-2'>
          <div className='grid-elem'>
            <div className='center-y'>
              <h2 className='title'>Qui sommes<span className='text-prusian-blue-b300'> nous?</span></h2>
              <p className='p-m'>TMF compta est un bureau Lorem ipsum dolor sit amet. Hic fugiat voluptas hic iure facere cum adipisci autem qui cupiditate voluptatem est quis error aut odit quos. Sit commodi nisi ut odit quaerat et eligendi dolor est praesentium neque est quia nemo sed dolor assumenda.</p>
            </div>
          </div>
          <div className='grid-elem'>
              <img className='center-xy' src={homeAbout} alt="" />
          </div>
        </div>
      </div>
    </div>
    <div className='section section-home-fifth bg-prusian-blue-b300'>
      <div className='container'>
        <div className='image-module'>
          <div className='image-thumb'>
            <img src={homeOpinion} alt="" />
          </div>
          <div className='text-box'>
              <p className='p-s text-bold text-white-b300'>Iulius Bold</p>
              <p className='p-xs text-italic text-white-b300'>CEO de Bild Construct SRL</p>
          </div>
        </div>
        <div className='clear'></div>
        <div className='content-box'>
          <p className='p-m text-white-b300'>“Comptable très compétent, disponible, de bon conseil et qui fourni des explications claires. Il a pris le temps d'analyser notre situation fiscale et de corriger les erreurs des déclarations passées. Je le recommande vivement !”</p>
        </div>
      </div>
    </div>
    <div className='section section-small'>
        <div className='container'>
          <div className='rounded-svg'>
            <ReactSVG  src={roundIllustration} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home