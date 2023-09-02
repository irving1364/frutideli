import brandOne from "@/data/brandOne";
import React from "react";
import { Container, Image } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";

const options = {
  spaceBetween: 100,
  slidesPerView: 5,
  speed: 5000 ,
  autoplay:{
    delay: 0,
    disableOnInteraction: false,
  },
  
  breakpoints: {
    0: {
      spaceBetween: 30,
      slidesPerView: 2,
    },
    375: {
      spaceBetween: 30,
      slidesPerView: 2,
    },
    575: {
      spaceBetween: 30,
      slidesPerView: 3,
    },
    767: {
      spaceBetween: 50,
      slidesPerView: 4,
    },
    991: {
      spaceBetween: 50,
      slidesPerView: 5,
    },
    1199: {
      spaceBetween: 100,
      slidesPerView: 5,
    },
  },
};

const BrandOne = ({ className = "" }) => {
  return (
    <section className={`brand-one ${className}`} style={{backgroundSize: "cover", minHeight: 700, backgroundImage: `url(/parallax/back-client.webp)` }}>
      <Container>
        <Swiper className="thm-swiper__slider" {...options}>
          <div className="swiper-wrapper">
            {brandOne.map((image, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={require(`@/images/brand/${image}`).default.src}
                  alt=""
                />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </Container>
    </section>
  );
};

export default BrandOne;
