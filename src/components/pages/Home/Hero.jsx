import React from 'react'
import { useTranslation } from "react-i18next";


const Hero = ({changeLang}) => {
  const { t } = useTranslation();
  const changeLanguage = (e)=>{
    changeLang(e.target.value)
  }
  return (
    <div className='hero'>
      <div className="hero__info">
          <h1>{t('herotittle')}</h1>
          <button>Lorem ipsum</button>
      </div>
      <div className="hero__img"></div>
    </div>
  )
}

export default Hero