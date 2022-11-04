import React from "react";
import Moreimg from "../../../assets/images/icons/more-news.png";
import Moreimg1 from "../../../assets/images/icons/MoreInfo1.jpg";
import Moreimg2 from "../../../assets/images/icons/MoreInfo2.jpg";
import Moreimg3 from "../../../assets/images/icons/MoreInfo3.jpg";
import Moreimg4 from "../../../assets/images/icons/MoreInfo4.jpg";
import Moreimg5 from "../../../assets/images/icons/Moreimg5.jpg";
import Moreimg6 from "../../../assets/images/icons/Newsinfo6.jpg";
import Moreimg7 from "../../../assets/images/icons/NewsInfo7.jpg";
import Moreimg8 from "../../../assets/images/icons/NewsInfo8.jpg";
import Moreimg9 from "../../../assets/images/icons/NewsInfo9.jpg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { API_PATH } from "../../../constants/tools";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export default function MoreNews({ changeLang }) {
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

  useEffect(() => {
    getNews();
  }, [T.i18n.language]);

  const { t } = useTranslation();
  const changeLanguage = (e) => {
    changeLang(e.target.value);
  };
  return (
    <section className="MoreNews">
      <div className="containerr">
        <h2>{t("news")}</h2>

        <div className="more-news-cards">
          {news &&
            news.map((item, index) => (
              <div key={index} className="more-news-card">
                <img className="more-news-card-img" src={item.image} alt="" />
                <p className="more-news-card-data">
                  {item.created_at.slice(0, 10)}
                </p>
                <p className="more-news-card-title">{item.title}</p>
                <p className="more-news-card-text">{item.content}</p>
                <Link
                  to={`/readmorenews/${item.id}`}
                  className="read-more-link"
                >
                  Батафсил
                </Link>
              </div>
            ))}
          {/* <div className="more-news-card">
            <img className="more-news-card-img" src={Moreimg1} alt="" />
            <p className="more-news-card-data">01.02.22</p>
            <p className="more-news-card-title">
              Давлат экологик экспертизаси объектлари ўрганилмоқда
            </p>
            <p className="more-news-card-text">
              Самарқанд вилояти Қўшработ туманида жойлашган “Устук” майдони
              ҳудудида амалга оширилиши режалаштирилган геолик қидирув ишалри
              фаолият тури Давлат экологик экспертизаси маркази ходимлари
              томонидан жойига чиқиб ўрганилди.
            </p>
            <Link to="/readmorenews" className="read-more-link">
              Батафсил
            </Link>
          </div>

          <div className="more-news-card">
            <img className="more-news-card-img" src={Moreimg2} alt="" />
            <p className="more-news-card-data">01.02.22</p>
            <p className="more-news-card-title">
              Бугун Женева шаҳрида атроф-муҳит билан боғлиқ бўлган масалалар
              бўйича Орхус конвенцияси иштирокчи
            </p>
            <p className="more-news-card-text">
              24 июнга қадар давом этадиган ушбу йиғилишда Давлат экология
              қўмитаси делегацияси ҳам иштирок этмоқда.
            </p>
            <Link to="/readmorenews" className="read-more-link">
              Батафсил
            </Link>
          </div>

          <div className="more-news-card">
            <img className="more-news-card-img" src={Moreimg3} alt="" />
            <p className="more-news-card-data">01.02.22</p>
            <p className="more-news-card-title">
              {" "}
              Дешери бошчилигидаги делегaция вакиллари билан учрашув бўлиб ўтди.
            </p>
            <p className="more-news-card-text">
              Учрашув якунида кун тартибидан ўрин олган масалалар юзасидан ўзаро
              ҳамкорликни йўлга қўйиш юзасидан келишиб олинди.
            </p>
            <Link to="/readmorenews" className="read-more-link">
              Батафсил
            </Link>
          </div> */}
        </div>

        {/* <div className="more-news-cards">
          <div className="more-news-card">
            <img className="more-news-card-img" src={Moreimg4} alt="" />
            <p className="more-news-card-data">01.02.22</p>
            <p className="more-news-card-title">
              Жорий йилнинг 23 июнь куни Женева шаҳрида конвенцияси котибияти
              вакиллари билан учрашуви бўлиб ўтди.{" "}
            </p>
            <p className="more-news-card-text">
              Шунингдек, Ўзбекистон Республикаси ҳудудида стратегик экологик
              баҳолаш бўйича пилот лойиҳанинг 2-фазасини амалга ошириш, ушбу
              жараёнларда Орхус ковенцияси талабларини ҳам ҳисобга олиш бўйича
              таклфилар билдирилди.
            </p>
            <Link to="/readmorenews" className="read-more-link">
              Батафсил
            </Link>
          </div>

          <div className="more-news-card">
            <img className="more-news-card-img" src={Moreimg5} alt="" />
            <p className="more-news-card-data">01.02.22</p>
            <p className="more-news-card-title">
              2022 йил 23 июнь куни Экология қўмитаси ҳамда “UzAssystem”
              масъулияти чекланган ж Ҳамкорлик келишуви тўғрисидаги ҳбўлиб ўтди.
            </p>
            <p className="more-news-card-text">
              Томонлар ўртасида ҳамкорлик тўғрисидаги битимнинг имзоланиши
              атроф-муҳитга таъсирни баҳолаш соҳасидаги кўп қиррали ва самарали
              ҳамкорликни янада кенгайтиришга хизмат қилади.
            </p>
            <Link to="/readmorenews" className="read-more-link">
              Батафсил
            </Link>
          </div>

          <div className="more-news-card">
            <img className="more-news-card-img" src={Moreimg6} alt="" />
            <p className="more-news-card-data">01.02.22</p>
            <p className="more-news-card-title">
              Жорий йилнинг 20-24 июнь кунлари “Ўзатом” агентлигида “АЭС қурилиш
              майдончасининг хавфсизлигини баҳолаш мавзуида SEED миссиясига
              тайёргарлик кўриш бўйича миллий семинар-амалиёти ўтказилмоқда.
            </p>
            <p className="more-news-card-text">
              Ўзбекистон Республикаси ва Атом энергияси халқаро агентлиги
              ўртасидаги келишувга асосан ташкил этилган мазкур тадбирда соҳа
              мутахассислари, тегишли ташкилотлар вакиллари ва АЭХА экспертлари
              қаторида Давлат экология қўмиатси вакиллари хам иштирок этмоқда.
            </p>
            <Link to="/readmorenews" className="read-more-link">
              Батафсил
            </Link>
          </div>
        </div>

        <div className="more-news-cards">
          <div className="more-news-card">
            <img className="more-news-card-img" src={Moreimg7} alt="" />
            <p className="more-news-card-data">01.02.22</p>
            <p className="more-news-card-title">
              Давлат экология қўмитасининг Давлат экологик экспертизаси
              марказида бағишланган учрашув бўлиб ўтди.
            </p>
            <p className="more-news-card-text">
              Учрашув якунида кун тартибидан ўрин олган масалалар юзасидан ўзаро
              ҳамкорликни йўлга қўйиш юзасидан келишиб олинди.
            </p>
            <Link to="/readmorenews" className="read-more-link">
              Батафсил
            </Link>
          </div>

          <div className="more-news-card">
            <img className="more-news-card-img" src={Moreimg8} alt="" />
            <p className="more-news-card-data">01.02.22</p>
            <p className="more-news-card-title">
              Xorazm viloyati “Orolboʼyi mintaqasini ekologik jihatdan
              mintaqaviy rivojlantirish” (ECO-ARAL) Oʼzbekistonning mintaqaviy
              rivojlantirish ekologik baholash jarayonini integratsiya qilish
              masalalariga bagʼishlangan uchrashuv boʼlib oʼtdi.
            </p>
            <p className="more-news-card-text">
              Uchrashuv yakunida kun tartibidan oʼrin olgan masalalar yuzasidan
              oʼzaro hamkorlikni yoʼlga qoʼyish yuzasidan kelishib olindi.
            </p>
            <Link to="/readmorenews" className="read-more-link">
              Батафсил
            </Link>
          </div>

          <div className="more-news-card">
            <img className="more-news-card-img" src={Moreimg9} alt="" />
            <p className="more-news-card-data">01.02.22</p>
            <p className="more-news-card-title">
              Қорақалпоғистон Республикаси Экология Давлат Экологик экспертиза
              маркази Бош директори Ғ.Мухамедов бошчилигида очиқ мулоқот бўлиб
              ўтди.{" "}
            </p>
            <p className="more-news-card-text">
              Шунингдек, аниқланган муаммоларни тезкорлик билан ҳал қилиш
              юзасидан тегишли маъсулларга топшириқлар берилди.
            </p>
            <Link to="/readmorenews" className="read-more-link">
              Батафсил
            </Link>
          </div>
        </div> */}

        {/* <div className="morenews-pagination">
          <p className="moerenews-btn">
            <a href="">Previous</a>
          </p>
          <p className="pagination-numbers">
            <span>1</span> 2 3 4 5 ..... 30
          </p>
          <p className="moerenews-btn">
            <a href="">Next</a>
          </p>
        </div> */}
      </div>
    </section>
  );
}
