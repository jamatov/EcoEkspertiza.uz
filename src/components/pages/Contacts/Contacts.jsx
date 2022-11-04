import React from 'react'
import { useTranslation } from "react-i18next";


export default function Contacts({changeLang}) {
  const { t } = useTranslation();
  const changeLanguage = (e) => {
    changeLang(e.target.value)
  }
  return (
    <section className='ContactsContact'>
      <div className="containerr">
        <h2 className='contacts-title'>{t('contact')}</h2>
        <div className='contacts-addres'>
          <div className='conttacts-info' data-aos="fade-right">
            <div className='contacts-info__info'>
              <p className='contacts-info__info-title'>{t('address')}</p>
              <p className='contacts-info__info-text'>Toshkent shahar Yakkasaroy tumani Kichik halqa yo`li 10 a uy,</p>
            </div>

            <div className='contacts-info__info'>
              <p className='contacts-info__info-title'>{t('number')}</p>
              <p className='contacts-info__info-text'>+998 71 203-00-22</p>
            </div>

            <div className='contacts-info__info'>
              <p className='contacts-info__info-title'>{t('email')}</p>
              <p className='contacts-info__info-text'>boshdavecoekspertiza@uznature.uz</p>
            </div>

            <div className="contacts-info__social">
              <p className='contacts-info__info-title'>{t('followUs')}</p>
              <div className='contacts-info__social-list'>
                <div className='contacts-info__social-info'>
                  <li className='contacts-info__social-item'>
                   <a className='contacts-info__info-text contacts-info__social-link' href="#">Telegram</a>
                  </li>
                  <li className='contacts-info__social-item'>
                    <a className='contacts-info__info-text contacts-info__social-link' href="#">Facebook</a>
                  </li>
                </div>
              </div>

            </div>

          </div>
          <iframe className='contact-map' data-aos="fade-left" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d749.7315941634113!2d69.24937552922447!3d41.266938898704744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b201eb6a7ff%3A0x3820839f6cde6ba3!2z0JTQsNCy0LvQsNGCINCt0LrQvtC70L7Qs9C40Log0K3QutGB0L_QtdGA0YLQuNC30LDRgdC4INCc0LDRgNC60LDQt9C4!5e0!3m2!1sru!2s!4v1661514399874!5m2!1sru!2s" frameborder="0"></iframe>
        </div>
      </div>
    </section>
  )
}
