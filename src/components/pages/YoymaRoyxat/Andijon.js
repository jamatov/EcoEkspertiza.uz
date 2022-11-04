import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { API_PATH } from "../../../constants/tools";
import { useLocation } from "react-router-dom";
import Loader from "./Loader";

export default function Andijon({changeLang}) {

  const { t } = useTranslation();
  const T = useTranslation();
  const changeLanguage = (e)=>{
    changeLang(e.target.value)
  }
  const [posts, setPosts] = useState([]);
  const [load, setLoad] = useState(false);
  const [images, setImages] = useState([]);

  

  const location = useLocation();
  const path = location.pathname.split("/")[2];



  const getAll = async () => {
    setLoad(true);
    await axios
      .get(API_PATH + `/${T.i18n.language}/management/list-worker/?id=${path}`)
      .then((res) => {
        setPosts(res.data);
        setLoad(false);
      })
      .catch((err) => {
        console.log(err);
        setLoad(false);
      });
  };

  useEffect(() => {
    getAll();
  }, [T.i18n.language]);
  return (
    <section className="Royxat">
      <div className="containerr">
        <h2 className="nukus-title">
          {t('region_tittle')}
        </h2>
        {/* <p className="nukus-title-info">Андижон вилояти филиали</p> */}

        {load ? (
          <><Loader/></>
        ) : (
          <>
            {posts &&
              posts.map((item, index) => (
                <div key={index} className="royxat">
                  <div className="royxat-info">
                    <img src={item.image} alt={item.name} />
                    <div className="royxat-info__info">
                      <h3>{t("fio")}</h3>
                      <p>{item.name}</p>
                      <h3>{t("user_data")}</h3>
                      <p>
                        {item.date_birth}  {item.address_birth}
                      </p>
                      <h3>{t("user_tell")}</h3>
                      <p>{item.phone}</p>
                    </div>
                  </div>
                  <div className="royxat-info2">
                    <h3>{t("appointment")}</h3>
                    <p>{item.position}</p>
                    <h3>{t("education")}</h3>
                    <p>{item.specialty}</p>
                  </div>
                </div>
              ))}
          </>
        )}
      </div>
    </section>
  );
}
