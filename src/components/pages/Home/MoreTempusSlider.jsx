import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import arrow from "../../../assets/images/icons/arrow.png"


const MoreTempusSlider = () => {
  return (
    <section className="Consectetur">
      <div className="container5">
        <div className="consectetur-swipe">
          <Swiper
            slidesPerView={3}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            <h2>Consectetur adipiscing elit</h2>

            <SwiperSlide className="slide">
              <div className="tempus__card">
                <div className="tempus__card__info">Eget risus ullamcorper risus erat.</div>
                <div className="tempus__card__img"><img src="" alt="" /></div>
                <div className="tempus__card__link"><Link to='/moretempus' >At morbi sagittis</Link> <img src={arrow} alt="arrow"/></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="tempus__card">
                <div className="tempus__card__info">Eget risus ullamcorper risus erat.</div>
                <div className="tempus__card__img"><img src="" alt="" /></div>
                <div className="tempus__card__link"><Link to='/moretempus' >At morbi sagittis</Link> <img src={arrow} alt="arrow"/></div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="tempus__card">
                <div className="tempus__card__info">Eget risus ullamcorper risus erat.</div>
                <div className="tempus__card__img"><img src="" alt="" /></div>
                <div className="tempus__card__link"><Link to='/moretempus' >At morbi sagittis</Link> <img src={arrow} alt="arrow"/></div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="tempus__card">
                <div className="tempus__card__info">Eget risus ullamcorper risus erat.</div>
                <div className="tempus__card__img"><img src="" alt="" /></div>
                <div className="tempus__card__link"><Link to='/moretempus' >At morbi sagittis</Link> <img src={arrow} alt="arrow"/></div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="tempus__card">
                <div className="tempus__card__info">Eget risus ullamcorper risus erat.</div>
                <div className="tempus__card__img"><img src="" alt="" /></div>
                <div className="tempus__card__link"><Link to='/moretempus' >At morbi sagittis</Link> <img src={arrow} alt="arrow"/></div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="tempus__card">
                <div className="tempus__card__info">Eget risus ullamcorper risus erat.</div>
                <div className="tempus__card__img"><img src="" alt="" /></div>
                <div className="tempus__card__link"><Link to='/moretempus' >At morbi sagittis</Link> <img src={arrow} alt="arrow"/></div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default MoreTempusSlider;

