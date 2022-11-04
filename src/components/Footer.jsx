import React from 'react'
import FooterArrow from "../assets/images/icons/arrow.png";
import { Link } from 'react-router-dom';
import Logo from '../assets/images/icons/Logo.png'
import { useTranslation } from "react-i18next";
import animation2 from '../assets/images/icons/animation2.mp4'



const Footer = ({changeLang}) => {
  const { t } = useTranslation();
  const changeLanguage = (e)=>{
    changeLang(e.target.value)
  }

  return (
    <footer className='Footer'>
    <div className="container4">
      <ul className="footer__list">
        <li className="footer__item">
          <Link to="/">
            {t('home')}
          </Link>
        </li>
        <li className="footer__item">
          <Link to="/about-commitee" className="links">
            {t('about')}
          </Link>
        </li>
        <li className="footer__item">
          <Link to="/activity" className="links">
            {t('activity')}
          </Link>
        </li>
        <li className="footer__item">
          <Link to="/affair" className="links">
            {t('services')}
          </Link>
        </li>
        <li className="footer__item">
          <Link to="/contact" className="links">
            {t('contact')}
          </Link>
        </li>
      </ul>

      <div className="footer-info">

        <div className="footer-info__contact">
          <div className='footer-info__contact-number'>
            <p className='contact-title'>{t('number')}</p>
            <a href='tel:+9989712030022' className='contact-info' >+998 71 203 00 22</a>
          </div>

          <div className='footer-info__contact-number'>
            <p className='contact-title'>{t('address')}</p>
            <p className='contact-info' >{t('location')}</p>
          </div>

          <div className='footer-info__contact-number'>
            <p className='contact-title'>{t('email')}</p>
            <p className='contact-info' >boshdavecoekspertiza@uznature.uz</p>
          </div>
        </div>

        <div className="footer-socials">
          <p>{t('followUs')}</p>
          {/* <li>
            <a href="#">Instagram</a>
          </li>
          <li>
            <a href="#">YouTube</a>
          </li> */}
          <li>
            <a href="https://www.facebook.com/ecoekspertiza/">Facebook</a>
          </li>
          <li>
            <a href="https://t.me/ecoekspertiza">Telegram</a>
          </li>
        </div>

        <div className='footer-logo'>
          <img src={Logo} alt="" />
          <p>{t('herotittle')}</p>
          {/* <div className="footer-logo__link">
            <p>Sed cras integer massa.</p>
            <a href="#">
              <img src={FooterArrow} alt="" />
            </a>
          </div> */}
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer