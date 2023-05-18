import React, { useEffect, useState } from 'react'
import {ReactSVG } from 'react-svg';
import { Helmet } from 'react-helmet';

import homeIllustration from '../../ressource/home-illustration.png'
import homeGrid1 from '../../ressource/home-grid-1.png'
import homeGrid2 from '../../ressource/home-grid-2.png'
import homeGrid3 from '../../ressource/home-grid-3.png'
import homeLogo1 from '../../ressource/home-logo-1.svg'
import homeLogo2 from '../../ressource/home-logo-2.svg'
import homeLogo3 from '../../ressource/home-logo-3.svg'
import homeLogo4 from '../../ressource/home-logo-4.svg'
import homeAbout from '../../ressource/home-about.png'
import homeOpinion from '../../ressource/home-opinion.png'
import roundIllustration from '../../ressource/round-illustration.svg'
import arrowLeft from '../../ressource/arrow-left.svg'
import arrowRight from '../../ressource/arrow-right.svg'


function Home() {

  const reviews = [
    {
      name : "Thomas L.",
      time: "Il y a une semaine",
      review: "TMF Compta a été d'une grande aide pour ma petite entreprise. Leur expertise en matière de comptabilité et de fiscalité est impressionnante. Je les recommande vivement !",
      avatar: "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Prescription01&hairColor=PastelPink&facialHairType=BeardMedium&facialHairColor=Blonde&clotheType=ShirtCrewNeck&clotheColor=PastelGreen&eyeType=EyeRoll&eyebrowType=SadConcernedNatural&mouthType=Vomit&skinColor=Pale"
    },
    {
      name : "Sophie D.",
      time: "Il y a deux semaines",
      review: "Je suis très satisfait des services de TMF Compta. Leur équipe est compétente, réactive et professionnelle. Ils m'ont aidé à maintenir mes finances en ordre. Un grand merci !",
      avatar: "https://avataaars.io/?avatarStyle=Circle&topType=LongHairCurvy&accessoriesType=Prescription02&hairColor=PastelPink&facialHairType=Blank&facialHairColor=Red&clotheType=Overall&clotheColor=Pink&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Tongue&skinColor=Brown"
    },
    {
      name : "Maxime D.",
      time: "Il y a un mois",
      review: "TMF Compta a été recommandé par un ami et je ne suis pas déçu. Leur équipe m'a aidé à résoudre des problèmes fiscaux complexes et a fourni des conseils précieux pour mon entreprise. Un excellent cabinet comptable !",
      avatar: "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairSides&accessoriesType=Prescription01&hairColor=Blue&facialHairType=BeardLight&facialHairColor=Blonde&clotheType=ShirtCrewNeck&clotheColor=PastelOrange&eyeType=Default&eyebrowType=UnibrowNatural&mouthType=Twinkle&skinColor=Pale"
    },
    {
      name : "Julien M.",
      time: "Il y a un mois",
      review: "TMF Compta a été mon partenaire comptable pendant plusieurs années et je n'ai que des éloges à faire. Leur expertise, leur professionnalisme et leur souci du détail ont été essentiels pour la croissance de mon entreprise. Je les recommande sans réserve.",
      avatar: "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortWaved&accessoriesType=Round&hatColor=Heather&hairColor=Blonde&facialHairType=Blank&facialHairColor=BlondeGolden&clotheType=Hoodie&clotheColor=PastelGreen&eyeType=Side&eyebrowType=UpDown&mouthType=Twinkle&skinColor=Light"
    },
    {
      name : "Mathieu S.",
      time: "Il y a trois mois",
      review: "Je suis ravi des services de TMF Compta. Leur équipe est amicale, compétente et toujours prête à répondre à mes questions. Ils ont simplifié la comptabilité pour moi et m'ont fait économiser du temps et des efforts.",
      avatar: "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortRound&accessoriesType=Round&hairColor=Platinum&facialHairType=Blank&facialHairColor=Platinum&clotheType=BlazerSweater&clotheColor=PastelRed&eyeType=Wink&eyebrowType=Angry&mouthType=Smile&skinColor=Tanned"
    },
  ]

  const [reviewActive, setReviewActive] = useState(0);
  const [leftProp, setLeftProp] = useState('');

  const reviewStyle = {
    left: leftProp
  }


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1250) {
        setLeftProp(`calc((-100% / 3) * ${reviewActive})`);
      } else if (window.innerWidth > 950) {
        setLeftProp(`calc((-100% / 2) * ${reviewActive})`);
      } else {
        setLeftProp(`calc((-100% / 1) * ${reviewActive})`);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize); 
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [reviewActive]);


  const handleSlider = (action) => {
    if(action === "back") {
      if (reviewActive > 0) {
        if (window.innerWidth > 1250) {
            setReviewActive(reviewActive - 1)
        }
        else if (window.innerWidth > 950) {
            setReviewActive(reviewActive - 1)
        }
        else {
            setReviewActive(reviewActive - 1)
        }
      }
    }
    else if(action === "next") {
      if (window.innerWidth > 1250) {
        if (reviewActive < 2) {
          setReviewActive(reviewActive + 1)
        }
      }
      else if (window.innerWidth > 950) {
        if (reviewActive < 3) {
          setReviewActive(reviewActive + 1)
        }
      }
      else {
        if (reviewActive < 4) {
          setReviewActive(reviewActive + 1)
        }
      }
    }
  }

  return (
    <>
    <div>
      <Helmet>
        <title>TMF Comtpa | Accueil</title>
      </Helmet>
    </div>
    <div className='section first-home-section'>
      <div className='container'>
        <div className='container-left'>
          <div className='center-y'>
            <h1 className='title-xl'>
              <span className='small-caps'>C</span>omptable-<span className='text-prusian-blue-b300'><span className='small-caps'>F</span>iscaliste</span>,<br/>
              <span className='small-caps'>S</span>itué à <span className='text-prusian-blue-b300'><span className='small-caps'>Z</span>aventem</span>  
            </h1>
            <div className='sep'></div>
            <p className='p-m'>Optimisez la santé financière de votre entreprise avec l'expertise d'un cabinet d'expert comptable de confiance.</p>
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
            <img src={homeLogo1} alt="" />
          </div>
          <div className='grid-elem'>
            <img src={homeLogo2} alt="" />
          </div>
          <div className='grid-elem'>
            <img src={homeLogo3} alt="" />
          </div>
          <div className='grid-elem'>
            <img src={homeLogo4} alt="" />
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
              <p className='p-m'>Notre cabinet comptable à Zaventem cumule plus de 15 années d'expérience dans le domaine, offrant des services comptables fiables et personnalisés pour les entreprises de toutes tailles. Notre équipe d'experts dévoués met tout en œuvre pour vous aider à atteindre vos objectifs financiers et vous accompagne dans la réussite de votre entreprise.</p>
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
        <div className='carousel-review'>
          <div className={`carousel-container`} style={reviewStyle}>
            {reviews != null
              ? reviews.map((review) => (
                <div className='carousel-elem'>
                  <p className='p-s text-center text-bold text-white-b300'>{review.name}</p>
                  <p className='p-xs text-center text-italic text-white-b300'>{review.time}</p>
                  <p className='p-xs text-center text-white-b300' style={{paddingTop: "20px"}}>“{review.review}”</p>
                  <img src={review.avatar} alt="" />
                </div>
              ))
              : <></>
            }
          </div>
        </div>
        <div className='arrows'>
          <div className='arrow arrow-left'>
            <img src={arrowLeft} alt="" onClick={() => handleSlider("back")}/>
          </div>
          <div className='arrow arrow-right'>
            <img src={arrowRight} alt="" onClick={() => handleSlider("next")}/>
          </div>
        </div>
      </div>
    </div>
    <div className='section section-small'>
        <div className='container container-wheel'>
          <div className='text-box'>
            <p className='p-m'>Découvrez notre roue de services, votre passerelle vers une gestion comptable et financière optimale. Explorez les différentes sections en cliquant sur la roue et accédez à une expertise spécialisée dans les domaines clés.</p>
          </div>
          <div className='rounded-svg'>
            <ReactSVG  src={roundIllustration} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home