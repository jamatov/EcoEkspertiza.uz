import React, { useState } from "react";
import { Link } from "react-router-dom";
import loginIcon from "../assets/images/icons/search.png";
import { useTranslation } from "react-i18next";
import animation2 from '../assets/images/icons/animation2.mp4'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Ecobtn from "../assets/images/icons/menu-eco-btn.png"
import Calculaotr from '../assets/images/icons/menu-calculator.png'
import Rus from '../assets/images/flags/rus.png'
import Telegram from '../assets/images/icons/telegram.png'
import Facebook from '../assets/images/icons/facebook.png'
import Lupa from '../assets/images/icons/lupa.png'
import Achki from '../assets/images/icons/achki.png'


const Navbar = ({changeLang}) => {
  const [active, setActive] = useState('menus');
  const [toggleIcon, setToggleIcon] = useState('nav__toggler')
  const [search, setSearch] = useState('search')

  
  const { t } = useTranslation();
  const changeLanguage = (e)=>{
    changeLang(e.target.value)
    localStorage.setItem("LANGUAGE", e.target.value)
  }

  const searchInput = () =>{
    search === 'search'
    ? setSearch('search search-active')
    : setSearch('search')
  }
  
  const navToggle = () =>{
    active === 'menus'
      ? setActive('menus nav__active')
      : setActive('menus')

    toggleIcon === 'nav__toggler'
      ? setToggleIcon('nav__toggler toggle')
      : setToggleIcon ('nav__toggler')
  };
  return (
    <div className="nav">
      <div className="containerr">
        <div className="nav1">
          <Link to='/'  className="logo">
            <video className='video'
              autoPlay
              playsInline
              muted >
              <source
                  src={animation2}
                  type="video/mp4"
                  id="bgvid"
              />
            </video>
            <p className='logo-info' >{t('herotittle')}</p>
          </Link>

          <ul className="nav1_socials">
            <li>
              <a href="https://t.me/ecoekspertiza">
                <img src={Telegram} alt="" />
              </a>
            </li>
           
            <li>
              <a href="https://www.facebook.com/ecoekspertiza/">
                <img src={Facebook} alt="" />
              </a>
            </li>
          </ul>                        

          <div className="login_btn">
            {/* <div onClick={searchInput} className={search}>

              <img className="icon" src={Lupa} alt="" />
              <div className="icon">

              </div>
              <div className="input">
                <input type="text" placeholder="Search" />
              </div>
              <span className="clear">

              </span>
            </div> */}
            <img src={Lupa} alt="" />
            <img src={Achki} alt="" />
            {/* <div className="search" onClick={searchInput} >
              <div className="icon"></div>
              <div className="input"></div>
            </div> */}
            {/* <img className="language-img" src={t('language')} alt="" /> */}
            <select className="language" name="languages" id="languages" onChange={changeLanguage}>
              <option value="uz">UZ</option>
              <option value="oz">ЎЗ</option>
              <option value="ru">РУ</option>
              <option value="en">EN</option>
            </select>

          </div>
        </div>
        <ul className={active}>

            <li className="nav__item right-menu">
              <p className="links nav-link">{t('about')}</p>
              <div className="dropdownn">
                <Link className="dropdown-item" onClick={navToggle} to='/about-commitee'>Maqsadi va yo'nalishlari</Link>
                <Link className="dropdown-item" onClick={navToggle} to='/about-commitee'>Maqsadi va yo'nalishlari</Link>
                <Link className="dropdown-item" onClick={navToggle} to='/about-commitee'>Maqsadi va yo'nalishlari</Link>
                <Link className="dropdown-item" onClick={navToggle} to='/about-commitee'>Maqsadi va yo'nalishlari</Link>
                <Link className="dropdown-item" onClick={navToggle} to='/about-commitee'>Maqsadi va yo'nalishlari</Link>
                <Link className="dropdown-item" onClick={navToggle} to='/about-commitee'>Maqsadi va yo'nalishlari</Link>
                <Link className="dropdown-item" onClick={navToggle} to='/about-commitee'>Maqsadi va yo'nalishlari</Link>
                <Link className="dropdown-item" onClick={navToggle} to='/about-commitee'>Maqsadi va yo'nalishlari</Link>
                <Link className="dropdown-item" onClick={navToggle} to='/about-commitee'>Maqsadi va yo'nalishlari</Link>
              </div>
            </li>

            <NavDropdown  title={t('about')} id="basic-nav-dropdown">
              <Link className="dropdown-item" onClick={navToggle} to='/about-commitee'>Maqsadi va yo'nalishlari</Link>
              <NavDropdown.Item href="#action/3.1">Xuquqiy faoliyat asoslari</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Markaz tarkibi</NavDropdown.Item>
              <Link className="dropdown-item" onClick={navToggle} to='/markaz-tarixi'>Markaz tarixi</Link>  

              <NavDropdown.Item href="#action/3.1">Raxbariyat</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">E'lon va tenderlar</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Yoshlar siyosati</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Bo'sh ish o'rinlari</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Faoliyat ko'rsatkichlari</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Xalqaro aloqalar</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Elektron hukumat</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Ma'naviyat va ma'rifat
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Karrupsiyaga qarshi kurash</NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
              {/* <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>

            <NavDropdown className="links" title={t('activity')} id="basic-nav-dropdown">
              <NavDropdown.Item ><Link to="/activity" onClick={navToggle}>Funksiyalar va vazifalar</Link></NavDropdown.Item>
              <NavDropdown.Item href="#">Markaz funksiyalari va vazifalari</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Qonunchilik</NavDropdown.Item>
              <NavDropdown.Item href="#">Davlat xizmatlari</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Ochiq ma'lumotlar</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Ko'pincha so'raladigon savollar va javoblar</NavDropdown.Item>
              
              
            </NavDropdown>
            <NavDropdown className="links" title={t('services')} id="basic-nav-dropdown">
              <NavDropdown.Item ><Link to='/affair' onClick={navToggle}>Faoliyat ochiqligi yuzasidan ochiq ma'lumotlar</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Moliya tog'risidagi ochiq ma'lumotlar</NavDropdown.Item>
              <NavDropdown.Item href="#">Umumiy ochiq ma'lumotlarni joylashtirishgga ma'sul shaxslar</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Axborot olishga doir so'rovlarni ko'rib chiqish</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Axborot xizmati bilan bog'lanish</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Davlat xizmatlari</NavDropdown.Item>

              
              
            </NavDropdown>
          <li className="nav__item">
            <Link to="/documents" onClick={navToggle} className="links nav-link">
              {t('documents')}
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/contact" onClick={navToggle} className="links nav-link">
              {t('contact')}
            </Link>
          </li>

          

          {/* <ul className="nav1_socials">
            <li>
              <a href="https://t.me/ecoekspertiza">
                <svg className="nav1-icons" width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.5 0.5C6.937 0.5 0 7.438 0 16C0 24.562 6.938 31.5 15.5 31.5C24.063 31.5 31 24.562 31 16C31 7.438 24.062 0.5 15.5 0.5ZM23.113 11.119L20.569 23.107C20.381 23.957 19.875 24.163 19.169 23.763L15.294 20.907L13.425 22.707C13.219 22.913 13.044 23.088 12.644 23.088L12.919 19.144L20.1 12.656C20.413 12.381 20.031 12.225 19.618 12.5L10.743 18.087L6.918 16.893C6.087 16.631 6.068 16.062 7.093 15.662L22.037 9.899C22.731 9.649 23.337 10.068 23.112 11.118L23.113 11.119Z" fill="#336C5F"/>
                </svg>
              </a>
            </li>
           
            <li>
              <a href="https://www.facebook.com/ecoekspertiza/">
                <svg className="nav1-icons" width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.4997 0C6.93954 0 0 6.93969 0 15.4997C0 24.0595 6.93954 31 15.4997 31C24.0599 31 31 24.0598 31 15.4997C30.9997 6.93969 24.0599 0 15.4997 0ZM20.7932 9.9148C20.7932 10.0627 20.6734 10.1828 20.5252 10.1828H16.7519V12.2108H20.5249C20.6731 12.2108 20.7929 12.3309 20.7929 12.4788V16.2515C20.7929 16.3997 20.6731 16.5195 20.5249 16.5195H17.0199V24.7987C17.0199 24.9469 16.9001 25.0667 16.7519 25.0667H13.186C13.0378 25.0667 12.918 24.9469 12.918 24.7987V16.5198H10.4746C10.3264 16.5198 10.2066 16.4 10.2066 16.2517V12.4791C10.2066 12.3311 10.3264 12.2111 10.4746 12.2111H12.918V10.6813C12.918 10.6593 12.9207 10.6381 12.9255 10.6178C12.9277 8.43864 13.3937 5.94566 16.9639 5.93441C16.9716 5.93387 16.9799 5.93334 16.988 5.93334H20.5249C20.6731 5.93334 20.7929 6.0534 20.7929 6.20134V9.9148H20.7932Z" fill="#336C5F"/>
                </svg>
              </a>
            </li>
          </ul>  */}

          <a className="menu-btn" href="http://eco-service.uz/">
            <div className="menu-eco">
              <img src={Ecobtn} alt="" />
              <p>eco-service</p>
            </div>
          </a>

          <div className="menu-btn">
            <div className="menu-eco">
              <img src={Calculaotr} alt="" />
              <p>Калькулятор</p>
            </div>
          </div>

          <div className="nav2_socials">
            <ul>
              <li>
                <a href="https://t.me/ecoekspertiza">
                  <svg className="nav2-icons" width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.5 0.5C6.937 0.5 0 7.438 0 16C0 24.562 6.938 31.5 15.5 31.5C24.063 31.5 31 24.562 31 16C31 7.438 24.062 0.5 15.5 0.5ZM23.113 11.119L20.569 23.107C20.381 23.957 19.875 24.163 19.169 23.763L15.294 20.907L13.425 22.707C13.219 22.913 13.044 23.088 12.644 23.088L12.919 19.144L20.1 12.656C20.413 12.381 20.031 12.225 19.618 12.5L10.743 18.087L6.918 16.893C6.087 16.631 6.068 16.062 7.093 15.662L22.037 9.899C22.731 9.649 23.337 10.068 23.112 11.118L23.113 11.119Z" fill="#336C5F"/>
                  </svg>
                </a>
              </li>
              {/* <li>
                <a href="#"><h1><i class="fa-brands fa-instagram social"></i></h1></a>
                </li> */}
              <li>
                <a href="https://www.facebook.com/ecoekspertiza/">
                  <svg className="nav2-icons" width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.4997 0C6.93954 0 0 6.93969 0 15.4997C0 24.0595 6.93954 31 15.4997 31C24.0599 31 31 24.0598 31 15.4997C30.9997 6.93969 24.0599 0 15.4997 0ZM20.7932 9.9148C20.7932 10.0627 20.6734 10.1828 20.5252 10.1828H16.7519V12.2108H20.5249C20.6731 12.2108 20.7929 12.3309 20.7929 12.4788V16.2515C20.7929 16.3997 20.6731 16.5195 20.5249 16.5195H17.0199V24.7987C17.0199 24.9469 16.9001 25.0667 16.7519 25.0667H13.186C13.0378 25.0667 12.918 24.9469 12.918 24.7987V16.5198H10.4746C10.3264 16.5198 10.2066 16.4 10.2066 16.2517V12.4791C10.2066 12.3311 10.3264 12.2111 10.4746 12.2111H12.918V10.6813C12.918 10.6593 12.9207 10.6381 12.9255 10.6178C12.9277 8.43864 13.3937 5.94566 16.9639 5.93441C16.9716 5.93387 16.9799 5.93334 16.988 5.93334H20.5249C20.6731 5.93334 20.7929 6.0534 20.7929 6.20134V9.9148H20.7932Z" fill="#336C5F"/>
                  </svg>
                </a>
              </li>
            </ul>
          </div> 

        </ul>

        <div className="menu3">
          <div className="nav3">
            <img src={Lupa} alt="" />
            <img src={Achki} alt="" />
            <div className="login_btn2">
              <select className="language" name="languages" id="languages" onChange={changeLanguage}>
                <option value="uz">UZ</option>
                <option value="oz">ЎЗ</option>
                <option value="ru">РУ</option>
                <option value="en">EN</option>
              </select>
            </div>
          </div>
        </div>
        

        <div onClick={navToggle} className={toggleIcon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </div>
    </div>
  );
};



export default Navbar;
