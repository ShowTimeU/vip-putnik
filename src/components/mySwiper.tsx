import React, { useRef } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

export const MySwiper = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

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
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onBeforeInit={(swiper) => {
          if (typeof swiper.params.navigation === "object") {
            if ("prevEl" in swiper.params.navigation) {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
            }
            if ("nextEl" in swiper.params.navigation) {
              swiper.params.navigation.nextEl = navigationNextRef.current;
            }
          }
        }}
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
        <button ref={navigationPrevRef}>
          <img
            src={require("@/components/assets/btn-arrow.svg").default.src}
            className="rotate-180"
            alt="Prev arrow"
          />
        </button>
        <button ref={navigationNextRef}>
          <img
            src={require("@/components/assets/btn-arrow.svg").default.src}
            alt="Next arrow"
          />
        </button>
      </div>
    </>
  );
};
