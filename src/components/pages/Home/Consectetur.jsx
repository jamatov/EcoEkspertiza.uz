import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper";
import { useTranslation } from "react-i18next";
import "swiper/css/navigation";
import Moreimg1 from "../../../assets/images/icons/MoreInfo1.jpg";
import Moreimg2 from "../../../assets/images/icons/MoreInfo2.jpg";
import Moreimg3 from "../../../assets/images/icons/MoreInfo3.jpg";
import Moreimg4 from "../../../assets/images/icons/MoreInfo4.jpg";
import Moreimg5 from "../../../assets/images/icons/Moreimg5.jpg";
import Moreimg9 from "../../../assets/images/icons/NewsInfo9.jpg";
import { Link } from "react-router-dom";
import { API_PATH } from "../../../constants/tools";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const Consectetur = ({ changeLang }) => {
  const [news, setNews] = useState([]);
  const { t } = useTranslation();
  const changeLanguage = (e) => {
    changeLang(e.target.value);
  };
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

  useEffect(() => {
    getNews();
  }, [T.i18n.language]);
  return (
    <section className="Consectetur" data-aos="fade-right">
      <div className="containerr">
        <div className="consectetur-swipe" >
          <Swiper
            slidesPerView={3}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              736: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1000: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            {/* <h2>{t('latestnews')}</h2> */}

              {news &&
                news.map((item, index) => (
                  <SwiperSlide key={index} className="slide">
                    <img
                      src={item.image}
                      className="swiperSlideImaGE"
                      alt={item.title}
                    />

                    <div className="swiperSlideInfo">
                      <span className="slider-data">{item.created_at.slice(0, 10)}</span>
                      <p className="swiperSlideTitle">{item.title}</p>
                      <p className="swiperSlideText">{item.content.slice(0, 200)}...</p>
                      <Link
                        to={`/readmorenews/${item.id}`}
                        className="read-more-link"
                      >
                        {t("more")}
                      </Link>
                    </div>
                  </SwiperSlide>
                ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Consectetur;
