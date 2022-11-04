// import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import { useRef, useState } from 'react';
import carusel1 from '../../../assets/images/icons/carusel-img1.jpg'
import carusel2 from '../../../assets/images/icons/carusel-img2.jpg'
import carusel4 from '../../../assets/images/icons/carusel4.jpg'
import { Swiper, SwiperSlide } from "swiper/react"; 
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";
import { Autoplay, Pagination, Navigation } from "swiper";



function CarouselFadeExample() {
  return (
    <div className='CarouselFadeExample'>
      <div className="containerr">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide><img className='carusel-img' src={carusel1} alt="" /></SwiperSlide>
          <SwiperSlide><img className='carusel-img' src={carusel2} alt="" /></SwiperSlide>

          
        </Swiper>
      </div>
    </div>
    // <section className='CarouselFadeExample' data-aos="fade-right">
    //   <div className="containerr">
    //     <Carousel fade='right' >
    //       <Carousel.Item>
    //         <img
    //           className="d-block w-100 caruselimg"
    //           src={carusel1}
    //           alt="First slide"
    //         />
    //         {/* <Carousel.Caption>
    //           <h3>First slide label</h3>
    //           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    //         </Carousel.Caption> */}
    //       </Carousel.Item>
    //       <Carousel.Item>
    //         <img
    //           className="d-block w-100 caruselimg"
    //           src={carusel2}
    //           alt="Second slide"
    //         />

    //         {/* <Carousel.Caption>
    //           <h3>Second slide label</h3>
    //           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    //         </Carousel.Caption> */}
    //       </Carousel.Item>
    //       {/* <Carousel.Item>
    //         <img
    //           className="d-block w-90 caruselimg"
    //           src={carusel4}
    //           alt="Third slide"
    //         />

    //         <Carousel.Caption>
    //           <h3>Third slide label</h3>
    //           <p>
    //             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
    //           </p>
    //         </Carousel.Caption>
    //       </Carousel.Item> */}
    //     </Carousel>
    //   </div>
    // </section>
  );
}

export default CarouselFadeExample;