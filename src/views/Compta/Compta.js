import React from 'react'
import roundIllustration from '../../ressource/round-illustration.svg'
import {ReactSVG } from 'react-svg';


function Compta() {
  const hash = window.location.hash.substring(1);

  if (hash) {
    var element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView();
    }
  } else {
    window.scrollTo(0, 0);
  }

  return (
    <>
      <div className='generic-banner generic-banner-compta'>
        <div className='text-box center-xy'>
          <h1 className='title-xl text-bold text-white-b300'>Comptabilité générale</h1>
        </div>
      </div>
      <div className='section section-small'>
        <div className='container'>
          <div className='rounded-svg'>
            <ReactSVG  src={roundIllustration} alt="" />
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='compta-grid-elem compta-grid-elem-left' id='section1'>
          <div className='compta-grid-elem-img' style={{backgroundImage : "url(https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80)"}}></div>
          <div className='compta-grid-elem-text'>
            <h2 className='title'>Conseil en <span className='text-prusian-blue-b300'>création</span> d'entreprise</h2>
            <p className='p-m'>Le comptable peut aider les entrepreneurs à établir un plan d'affaires et à choisir la forme juridique appropriée pour leur entreprise. Ils peuvent également aider à la préparation des documents nécessaires à l'enregistrement de l'entreprise.</p>
          </div>
        </div>
        <div className='compta-grid-elem compta-grid-elem-right' id='section2'>
          <div className='compta-grid-elem-text'>
            <h2 className='title'>Missions <span className='text-prusian-blue-b300'>spéciales</span></h2>
            <p className='p-m'>Les comptables peuvent être mandatés pour effectuer des audits, des évaluations financières et des enquêtes financières spéciales, ainsi que pour aider les entreprises à obtenir des financements auprès d'institutions financières.</p>
          </div>
          <div className='compta-grid-elem-img' style={{backgroundImage: "url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)"}}></div>
        </div>
        <div className='compta-grid-elem compta-grid-elem-left' id='section3'>
          <div className='compta-grid-elem-img' style={{backgroundImage : "url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80)"}}></div>
          <div className='compta-grid-elem-text'>
            <h2 className='title'>Aide à la <span className='text-prusian-blue-b300'>gestion</span></h2>
            <p className='p-m'>Les comptables peuvent aider les entrepreneurs à gérer leur entreprise en fournissant des rapports financiers réguliers, en élaborant des budgets, en gérant les comptes clients et en préparant des prévisions financières.</p>
          </div>
        </div>
        <div className='compta-grid-elem compta-grid-elem-right' id='section4'>
          <div className='compta-grid-elem-text'>
            <h2 className='title'><span className='text-prusian-blue-b300'>Accompagnement</span> de la personne</h2>
            <p className='p-m'>Les comptables peuvent également aider les entrepreneurs en leur offrant un accompagnement personnalisé. Cela peut inclure des conseils sur la gestion de trésorerie, l'optimisation fiscale, la planification de la retraite et la planification successorale.</p>
          </div>
          <div className='compta-grid-elem-img' style={{backgroundImage: "url(https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)"}}></div>
        </div>
        <div className='compta-grid-elem compta-grid-elem-left' id='section5'>
          <div className='compta-grid-elem-img' style={{backgroundImage : "url(https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1147&q=80)"}}></div>
          <div className='compta-grid-elem-text'>
            <h2 className='title'><span className='text-prusian-blue-b300'>Social</span></h2>
            <p className='p-m'>Les comptables peuvent aider les entrepreneurs à comprendre les règles et les règlements relatifs aux régimes de sécurité sociale, tels que les régimes de retraite et les régimes d'assurance-maladie. Ils peuvent également aider les entrepreneurs à comprendre les obligations légales liées à l'embauche et à la gestion des employés.</p>
          </div>
        </div>
        <div className='compta-grid-elem compta-grid-elem-right' id='section6'>
          <div className='compta-grid-elem-text'>
            <h2 className='title'>Conseil <span className='text-prusian-blue-b300'>fiscal</span></h2>
            <p className='p-m'>Les comptables peuvent offrir des conseils fiscaux aux entrepreneurs pour minimiser leur charge fiscale et se conformer aux lois fiscales applicables. Ils peuvent également aider les entrepreneurs à préparer et à déposer leur déclaration de revenus.</p>
          </div>
          <div className='compta-grid-elem-img' style={{backgroundImage: "url(https://images.unsplash.com/photo-1554224154-26032ffc0d07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1126&q=80)"}}></div>
        </div>
        <div className='compta-grid-elem compta-grid-elem-left' id='section7'>
          <div className='compta-grid-elem-img' style={{backgroundImage : "url(https://plus.unsplash.com/premium_photo-1679922747473-f7210acb783e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)"}}></div>
          <div className='compta-grid-elem-text'>
            <h2 className='title'>Tenue de <span className='text-prusian-blue-b300'>comptabilité</span></h2>
            <p className='p-m'>Les comptables peuvent tenir à jour les livres de comptes des entrepreneurs, enregistrer les transactions financières, préparer les états financiers et gérer les comptes fournisseurs et les comptes clients.</p>
          </div>
        </div>
      </div>
    </>
  )
  
}

export default Compta