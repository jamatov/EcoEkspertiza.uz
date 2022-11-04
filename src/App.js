import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import AboutCommitee from "./components/pages/AboutCommittee/AboutCommitee";
import Activity from "./components/pages/Activity/Activity";
import Affair from "./components/pages/Affair/Affair";
import Contact from "./components/pages/Contacts/Contact";
import News from "./components/pages/Home/MoreNews";
import Moretempus from "./components/pages/Home/MoreTempus";
import ReadMoreNews from "./components/pages/Home/ReadMoreNews";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Line from "./components/pages/Home/Line";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationsUz from "./locale/Uz";
import translationsRu from "./locale/Ru";
import translationsUzKril from "./locale/UzKril";
import translationsEn from "./locale/En";
import Staff from "./components/pages/staff/Staff";
import i18next from "i18next";
import Leftbg from "./assets/images/icons/naqshleft.svg";
import Rightbg from "./assets/images/icons/naqshright.svg";
import Ekoservice from "./assets/images/icons/eko-service.svg";
import Kalkulator from "./assets/images/icons/kalkulator.svg";
import Documents from "./components/pages/Documents/Documents";
import Andijon from "./components/pages/YoymaRoyxat/Andijon";
import Button from 'react-bootstrap/Button';

import { useState } from "react";
import MyVerticallyCenteredModal from "./components/Modal/MyVerticallyCenteredModal";
import Markaztarixi from "./components/pages/Home/Markaztarixi";

i18n.use(initReactI18next).init({
  resources: {
    ru: { translation: translationsRu },
    uz: { translation: translationsUz },
    oz: { translation: translationsUzKril },
    en: { translation: translationsEn },
  },
  lng: "uz",
  fallbackLng: "uz",
});

const App = () => {
  const { pathname } = useLocation();
  const changeLang = (value) => {
    i18next.changeLanguage(value);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="app">
      <img className="naqsh" src={Leftbg} alt="" />
      <img className="naqsh2" src={Rightbg} alt="" />

      <a className="eco-btn" href="http://eco-service.uz/">
        <div className="ekoservice-btn">
          <img src={Ekoservice} alt="" />
          <p>eco-service</p>
        </div>
      </a>

      {/* <div className="ekoservice-btn2 eco-btn" >
        <img src={Kalkulator} alt="" />
        <p>Калькулятор</p>
      </div> */}

      <Button className="ekoservice-btn2 eco-btn"  onClick={() => setModalShow(true)}>
          <img src={Kalkulator} alt="" />
          <p>Калькулятор</p>
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <Navbar changeLang={changeLang} />
      <Line />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-commitee" element={<AboutCommitee />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/affair" element={<Affair />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<News />} />
          <Route path="/moretempus" element={<Moretempus />} />
          <Route path="/readmorenews/:id" element={<ReadMoreNews />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/information/:id" element={<Andijon />} />
          <Route path="/markaz-tarixi" element={<Markaztarixi />} />
        </Routes>
      <Footer />
    </div>
  );
};

export default App;
