import React from 'react'

import homeAbout from '../../ressource/home-about.png'

function About() {
  return (
    <>
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
            <p className='p-m'>TMF compta est un bureau Lorem ipsum dolor sit amet. Hic fugiat voluptas hic iure facere cum adipisci autem qui cupiditate voluptatem est quis error aut odit quos. Sit commodi nisi ut odit quaerat et eligendi dolor est praesentium neque est quia nemo sed dolor assumenda.</p>
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
        <p className='p-m text-white-b300 text-center'>Lorem ipsum dolor sit amet. Hic fugiat voluptas hic iure facere cum adipisci autem qui cupiditate voluptatem est quis error aut odit quos. Sit commodi nisi ut odit quaerat et eligendi dolor est praesentium neque est quia nemo sed dolor assumenda.</p>
      </div>
    </div>
  </div>
  <div className='section section-about-second'>
    <div className='container'>
      <h2 className='title ml'>Notre <span className='text-prusian-blue-b300'>histoire</span></h2>
      <div className='grid-2'>
        <div className='grid-elem'>
          <h2 className='title text-prusian-blue-b300 center-y'>2005</h2>
        </div>
        <div className='grid-elem'>
          <div className='text-box'>
            <p className='p-m'>Lorem ipsum dolor sit amet. Hic fugiat voluptas hic iure facere cum adipisci autem qui cupiditate voluptatem est quis error aut odit quos.</p>
          </div>
        </div>
        <div className='grid-elem'>
          <h2 className='title text-prusian-blue-b300 center-y'>2010</h2>
        </div>
        <div className='grid-elem'>
          <div className='text-box'>
            <p className='p-m'>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className='grid-elem'>
          <h2 className='title text-prusian-blue-b300 center-y'>2012</h2>
        </div>
        <div className='grid-elem'>
          <div className='text-box'>
            <p className='p-m'>Lorem ipsum dolor sit amet. Hic fugiat voluptas hic iure facere cum adipisci autem qui cupiditate voluptatem est quis error aut odit quos.</p>
          </div>
        </div>
        <div className='grid-elem'>
          <h2 className='title text-prusian-blue-b300 center-y'>2018</h2>
        </div>
        <div className='grid-elem'>
          <div className='text-box'>
            <p className='p-m'>Lorem ipsum dolor sit amet. Hic fugiat voluptas hic iure facere cum adipisci autem qui cupiditate voluptatem est quis error aut odit quos.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>
  )
}

export default About