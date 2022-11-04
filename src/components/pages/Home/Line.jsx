import React from 'react'
import img from '../../../assets/images/icons/ishonchtel.png'
import { useTranslation } from "react-i18next";


export default function Line({changeLang}) {
  const { t } = useTranslation();
  const changeLanguage = (e)=>{
    changeLang(e.target.value)
  }
  return (
    <div className='Line'>
      <div className="containerr">
        <div className='line-info'>
          <img src={img} alt="" />
          <div>
            <p>{t('hotlines')}</p>
            <li>
              <a href="tel:+998 71 203 03 04" >+998 71 203 03 04</a>
            </li>
          </div>
        </div>
      </div>
    </div>
  )
}
