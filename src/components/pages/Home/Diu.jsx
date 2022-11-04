import React from 'react'
import Img from "../../../assets/images/icons/formimg.png"
import { useTranslation } from "react-i18next";


const Diu = ({changeLang}) => {
  const { t } = useTranslation();
  const changeLanguage = (e)=>{
    changeLang(e.target.value)
  }

  return (
    <section className='Dui' data-aos="fade-right">
      <div className="containerr">
        <h1 className='dui-title'><span>{t('connect_span')}</span>{t("connect")}</h1>

        <div className="dui-info">
          <form>
            <input className='dui-input' type="text" name="Name" id="name" placeholder='Name' />
            <input className='dui-input' type="number" placeholder='Phone' />
            <input className='dui-input' type="email" placeholder='Email' />
            <input className='dui-input' type="text" placeholder='Message' />
            {/* <div>
              <input className='dui-checkbox' type="checkbox" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div> */}

            <div className='dui-button'>
              <button className='dui-btn' type='submit'>Send</button>
            </div>
          </form>

          <img className='dui-img' src={Img} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Diu