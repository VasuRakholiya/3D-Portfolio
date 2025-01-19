import React from 'react'
import { Link } from 'react-router-dom'
import arrow from '../assets/icons/arrow.svg'

const InfoBox = ({text , link , btnText})=>{
  return(
    <div className='info-box'>
    <p className='font-medium sm:text-xl text-center'>{text}</p>
    <Link to={link} className='neo-brutalism-white neo-btn'>
      {btnText}
      <img src={arrow} className='w-4 h-4 object-contain' />
    </Link>
    </div>
  )
}


const renderContent={
  1:(
    <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>Hi , I am <span className='font-semibold'>Vasu</span>👋
    <br />
    A Website Developer from India
    </h1>
  ),
  2:(
    <InfoBox
    text='I am a Front End Developer , I love to create beautiful and responsive websites.'
    link = '/about'
    btnText='Know More'
    />
  ),
  3:(
    <InfoBox
      text='i have done some projects in React using Tailwind CSS , Three.js and bootstrap.'
      link = '/Projects'
      btnText='Visit my portfolio'
    />
  ),
  4:(
    <InfoBox
      text='I am currently learning React Native and Node.js. and looking for oppertunities to work as a Front End Developer . to expand my knowledge and skills.'
      link = '/contact'
      btnText="Let's talk"
    />
  ),
}


const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
    
  
}

export default HomeInfo
