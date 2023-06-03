import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";

export const MySwiper = () => {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);

  const slides = [
    {
      title: "Каппадокія",
      subtitle: "Туреччина",
      img: require("@/components/assets/img/swiper/swiper-img-1.png").default
        .src,
    },
    {
      title: "Канкун",
      subtitle: "Мексика",
      img: require("@/components/assets/img/swiper/swiper-img-2.png").default
        .src,
    },
    {
      title: "Париж",
      subtitle: "Франція",
      img: require("@/components/assets/img/swiper/swiper-img-3.png").default
        .src,
    },
    {
      title: "Париж",
      subtitle: "Франція",
      img: require("@/components/assets/img/swiper/swiper-img-3.png").default
        .src,
    },
    {
      title: "Каппадокія",
      subtitle: "Туреччина",
      img: require("@/components/assets/img/swiper/swiper-img-1.png").default
        .src,
    },
    {
      title: "Канкун",
      subtitle: "Мексика",
      img: require("@/components/assets/img/swiper/swiper-img-2.png").default
        .src,
    },
  ];

  return (
    <>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={3}
        loop
        className="!pb-12"
        navigation={{ prevEl, nextEl }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="flex flex-col justify-center items-start space-y-1.5"
          >
            <div
              className="w-full h-[530px]"
              style={{
                background: `url('${slide.img}') no-repeat center center / cover`,
              }}
            ></div>
            <div className="text-vip-blue">
              <span className="uppercase">{slide.title}</span>, {slide.subtitle}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute bottom-0 w-full flex justify-end items-center z-10 space-x-10">
        <div ref={(node) => setPrevEl(node)} className="cursor-pointer">
          <img
            src={require("@/components/assets/btn-arrow.svg").default.src}
            className="rotate-180"
            alt="Prev arrow"
          />
        </div>
        <div ref={(node) => setNextEl(node)} className="cursor-pointer">
          <img
            src={require("@/components/assets/btn-arrow.svg").default.src}
            alt="Next arrow"
          />
        </div>
      </div>
    </>
  );
};
