import React from 'react'
import service1 from "../../../assets/images/icons/xizmatlar-img1.png"
import service2 from "../../../assets/images/icons/xizmatlar-img2.png"
import service3 from "../../../assets/images/icons/xizmatlar-img3.png"
import service4 from "../../../assets/images/icons/xizmatlar-img4.png"
import service5 from "../../../assets/images/icons/xizmatlar-img5.png"
import service6 from "../../../assets/images/icons/xizmatlar-img6.png"
import service7 from "../../../assets/images/icons/xizmatlar-img7.png"
import service8 from "../../../assets/images/icons/xizmatlar-img8.png"
import service9 from "../../../assets/images/icons/xizmatlar-img9.png"
import { useTranslation } from "react-i18next";



export default function Xizmatlar({changeLang}) {

  const { t } = useTranslation();
  const changeLanguage = (e)=>{
    changeLang(e.target.value)
  }
  return (
    <section className='Xizmatlar'>
      <div className="containerr">
        <h2>{t('services')}</h2>
        <p>{t('services_info')}</p>
        <div className='xizmatlar-cards'>
          <div className='xizmatlar-cards__card' data-aos="fade-right">
            <img src={service1} alt="" />
            <p>{t('xizmat1')}</p>
          </div>

          <div className='xizmatlar-cards__card' data-aos="fade-right">
            <img src={service2} alt="" />
            <p>{t('xizmat2')}</p>
          </div>

          <div className='xizmatlar-cards__card' data-aos="fade-right">
            <img src={service3} alt="" />
            <p>{t('xizmat3')}</p>
          </div>

          <div className='xizmatlar-cards__card' data-aos="fade-right">
            <img src={service4} alt="" />
            <p>{t('xizmat4')}</p>
          </div>

          <div className='xizmatlar-cards__card' data-aos="fade-right">
            <img src={service5} alt="" />
            <p>{t('xizmat5')}</p>
          </div>

          <div className='xizmatlar-cards__card' data-aos="fade-right">
            <img src={service6} alt="" />
            <p>{t("xizmat6")}</p>
          </div>

          <div className='xizmatlar-cards__card' data-aos="fade-right">
            <img src={service7} alt="" />
            <p>{t("xizmat7")}</p>
          </div>

          <div className='xizmatlar-cards__card' data-aos="fade-right">
            <img src={service8} alt="" />
            <p>{t('xizmat8')}</p>
          </div>

          <div className='xizmatlar-cards__card' data-aos="fade-right">
            <img src={service9} alt="" />
            <p>{t('xizmat9')}</p>
          </div>
        </div>  

        
      </div>
    </section>
  )
}
