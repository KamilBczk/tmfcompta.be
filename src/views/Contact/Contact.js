import React, { useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';
// import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'
import contactAdressIcon from '../../ressource/contact-adress-icon.svg'
import contactMailIcon from '../../ressource/contact-mail-icon.svg'
import contactTelIcon from '../../ressource/contact-tel-icon.svg'
import queryString from 'query-string';
import env from "react-dotenv";
import { Helmet } from 'react-helmet';

// import "leaflet/dist/images/marker-shadow.png";

function Contact() {
  const params = queryString.parse(window.location.search);
  const email = params.email;

  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [mail, setMail] = useState(email ? email : "");
  const [number, setNumber] = useState("+32");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  
  function submitForm() {
    if (firstName === "" || lastName === "" || mail === "" || message === "") {
    } else {
      sendEmail(firstName, lastName, mail, number, company, message);
      setFirstName("");
      setLastName("");
      setMail("");
      setNumber("");
      setCompany("");
      setMessage("");
    }
  }

  return (
    <>
    <div>
      <Helmet>
        <title>Contact | TMF Compta</title>
      </Helmet>
    </div>
    <div className='generic-banner generic-banner-contact'>
      <div className='text-box center-xy'>
        <h1 className='title-xl text-bold text-white-b300'>Contact</h1>
      </div>
    </div>
    <div className='section section-contact-first'>
      <div className='container'>
        <h2 className='title'>Contactez<span className='text-prusian-blue-b300'>-nous</span></h2>
        <div className='grid-total grid-2'>
          <div className='grid-elem'>
            <form id='form1' method="get" onSubmit={(e) => {e.preventDefault(); submitForm();}}>
            <div className='input-container-2'>
              <div className="input-container">
                <input className={lastName !== "" ? "active" : ""} value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" id="lastname" name="lastname" required />
                <label htmlFor="lastname">Nom*</label>
              </div>
              <div className="input-container">
                <input className={firstName !== "" ? "active" : ""} value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" id="firstname" name="firstname" required />
                <label htmlFor="firstname">Prénom*</label>
              </div>
            </div>
            <div className='mt input-container-2'>
              <div className="input-container">
                <input className={mail !== "" ? "active" : ""} value={mail} onChange={(e) => setMail(e.target.value)} type="email" id="email" name="email" required />
                <label htmlFor="email">Mail*</label>
              </div>
              <div className="input-container">
                <input className={number !== "" ? "active" : ""} value={number} onChange={(e) => setNumber(e.target.value)} type="text" id="tel" name="tel" />
                <label htmlFor="tel">Numéro de télephone</label>
              </div>
            </div>
            <div className='mt input-container-1'>
              <div className="input-container">
                <input className={company !== "" ? "active" : ""} value={company} onChange={(e) => setCompany(e.target.value)} type="text" id="company" name="company" />
                <label htmlFor="company">Société</label>
              </div>
            </div>
            <div className='mt input-container-1'>
              <div className="input-container">
                <textarea className={message !== "" ? "active" : ""} value={message} onChange={(e) => setMessage(e.target.value)} id="message" name="message" rows="4" required></textarea>
                <label htmlFor="message">Votre message*</label>
              </div>
            </div>
            <div className='btn'>
              <button className='center-x' form="form1" type="submit">Envoyer</button>
            </div>
            </form>
          </div>
          <div className='grid-elem'>
            <div className='grid-1'>
              <div className='map'>
                <iframe
                  height="250"
                  width="100%"
                  loading="lazy"
                  allowFullScreen={true}
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10070.93994200018!2d4.4855783!3d50.8731058!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3dcacc3b35dad%3A0x3fea5054a36896de!2sTMF%20Compta!5e0!3m2!1sfr!2sbe!4v1682965907037!5m2!1sfr!2sbe">
                </iframe>
              </div>
            </div>
            <div className='clear'></div>
            <div className='grid-1'>
              <img src={contactAdressIcon} alt="" />
                <a className='p-m'>Steerebeekstraat 154, 1930 Zaventem</a>
            </div>
            <div className='clear'></div>
            <div className='grid-1'>
              <img src={contactTelIcon} alt="" />
              <a href="tel:+32027058099" className='p-m center-y'>+32 (0)27 05 80 99</a>
            </div>
            <div className='clear'></div>
            <div className='grid-1'>
              <img src={contactMailIcon} alt="" />
              <a href="mailto:info@tmfcompta.be" className='p-m center-y'>info@tmfcompta.be</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

const sendEmail = async (firstName, lastName, mail, number, company, message) => {
  axios.post('https://api.brevo.com/v3/smtp/email', {
    sender: {
        name: 'TMF COMPTA',
        email: 'no-reply@tmfcompta.be'
    },
    to: [{
        email: `${mail}`,
        name: `${firstName} ${lastName}`
    }],
    cc: [{
        email: `andrei@tmfcompta.be`,
        name: `TMF Compta`
    }],
    subject: `Prise de contact ${firstName} ${lastName} - TMF Compta`,
    htmlContent: `<!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="background-color: #f6f6f6; width: 100%; box-sizing: border-box; padding: 100px 0;">
        <div style="margin: 0 auto; background-color: #FFFFFF; max-width: 450pt;">
            <div style="position: relative; padding: 50px 0 20px 0;">
                <div style="position:relative; height: 80px; width: 60%; margin: 0 auto; background-position: center center; background-size: contain; background-repeat: no-repeat;background-image:url(https://i.ibb.co/L0vZgj9/Group-14.png);"></div>
            </div>
            <div style="font-family: -apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;">
                <h1 style="font-size: 15px; color: #000000; font-weight: 500; text-align:center;">Accusé de récéption pour votre prise de contact.</h1>
            </div>
            <div style="padding: 20px 5% 0; font-family: -apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;">
                <h1 style="font-size: 15px; color: #000000; font-weight: 400;">Merci de nous contacter. Notre équipe vous recontactera dans les plus bref délais à votre adresse mail : "<b>${mail}</b>" ou encore à votre numéro de téléphone : "<b>${number}</b>".</h1>
            </div>
            <div style="padding: 20px 5% 0; font-family: -apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;">
                <h1 style="font-size: 15px; color: #000000; font-weight: 400;">Confirmation de vos données :</h1>
                <ul style="font-size: 15px; color: #000000; font-weight: 400;">
                    <li>Nom: "<b>${lastName}</b>"</li>
                    <li>Prénom: "<b>${firstName}</b>"</li>
                    <li>Téléphone: "<b>${number}</b>"</li>
                    <li>Adresse mail: "<b>${mail}</b>"</li>
                    <li>Société: "<b>${company}</b>"</li>
                    <li>Message: "<b>${message}</b>"</li>
                </ul>
            </div>
            <div style="padding: 20px 5% 0; font-family: -apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;">
                <h1 style="font-size: 15px; color: #000000; font-weight: 400;"><i>Ceci est un mail automatique. Veuillez ne pas répondre.</i></h1>
            </div>
            <div style="position: relative; left: 50%; transform:translateX(-50%); padding: 50px 5% 100px; font-family: -apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;">
                <a style= "display:block;font-size: 15px; color: #000000; font-weight: 400; text-align: center; color: #000000; text-decoration: none; border: 1px solid #000000; padding: 10px 25px;" href="https://tmfcompta.be">Retour vers le site</a>
            </div>
        </div>
    </body>
    </html>`
  }, {
    headers: {
      'accept': 'application/json',
      'api-key': `${env.API_KEY}`,
      'content-type': 'application/json'
    }
  }).then(response => {
  }).catch(error => {
  });
};


export default Contact