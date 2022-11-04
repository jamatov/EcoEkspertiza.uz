import React from "react";
import { Link } from "react-router-dom";
import NewsImg1 from "../../../assets/images/icons/NewsInfo1.jpg";
import NewsImg2 from "../../../assets/images/icons/NewsInfo2.jpg";
import NewsImg3 from "../../../assets/images/icons/NewsInfo3.jpg";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { API_PATH } from "../../../constants/tools";
import { useEffect } from "react";
import { useState } from "react";

const News = ({ changeLang }) => {
  const [news, setNews] = useState([]);
  const T = useTranslation();
  const getNews = async () => {
    await axios
      .get(API_PATH + `/${T.i18n.language}/news/list-news/`)
      .then((res) => {
        setNews(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const { t } = useTranslation();
  const changeLanguage = (e) => {
    changeLang(e.target.value);
  };

  useEffect(() => {
    getNews();
  }, [T.i18n.language]);

  return (
    <div className="news">
      <div className="news__info">
        <h2>{t("news")}</h2>
        <span>
          <Link to="/news" className="span__link">
            {t("see_all")}
          </Link>
        </span>
      </div>
      <div className="news__cards">

        {news &&
          news.slice(0, 3).map((item, index) => (
            <div key={index} className="news__card" data-aos="fade-right">
              <div className="news__card__img">
                <img className="news-images" src={item.image} alt={item.title} />
              </div>
              <div className="news__card__info">
                <div className="news__card__info__text">
                  <h3>
                    {item.title}
                  </h3>
                  <span>{item.created_at.slice(0, 10)}</span>
                </div>
                <div className="news__card__info__btn">
                  <p>
                    {item.content}
                  </p>
                  <Link to={`/readmorenews/${item.id}`} className="read-more-link">
                    {t("more")}
                  </Link>
                </div>
              </div>
            </div>
          ))}

      </div>
    </div>
  );
};

export default News;
