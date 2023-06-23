import React, { useEffect } from "react";

import $ from "jquery";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export const MySwiper = () => {
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
      title: "Барселона",
      subtitle: "Іспанія",
      img: require("@/components/assets/img/swiper/swiper-img-4.jpg").default
        .src,
    },
    {
      title: "Токіо",
      subtitle: "Японія",
      img: require("@/components/assets/img/swiper/swiper-img-5.jpg").default
        .src,
    },
    {
      title: "Амстердам",
      subtitle: "Нідерланди",
      img: require("@/components/assets/img/swiper/swiper-img-6.jpg").default
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
    {
      title: "Париж",
      subtitle: "Франція",
      img: require("@/components/assets/img/swiper/swiper-img-3.png").default
        .src,
    },
    {
      title: "Барселона",
      subtitle: "Іспанія",
      img: require("@/components/assets/img/swiper/swiper-img-4.jpg").default
        .src,
    },
    {
      title: "Токіо",
      subtitle: "Японія",
      img: require("@/components/assets/img/swiper/swiper-img-5.jpg").default
        .src,
    },
    {
      title: "Амстердам",
      subtitle: "Нідерланди",
      img: require("@/components/assets/img/swiper/swiper-img-6.jpg").default
        .src,
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const initMarqueeSlider = () => {
      $(document).ready(() => {
        ($(".img_tray") as JQuery).each(function () {
          const container = $(this);
          const isReverse = container.hasClass("reverse");
          const holder = container.find(".tray_roller" as any) as JQuery;
          let timer: any;

          const speed = 0.8;
          const slides = holder.find(".tray_col" as any) as JQuery;
          slides.each(function () {
            const slide = $(this);
            const clone = slide.clone();
            holder.append(clone);
          });

          let i = isReverse ? holder[0].scrollWidth / 2 : 0;
          initInterval();

          function initInterval() {
            timer = setInterval(function () {
              holder.css("transform", `translate3d(-${i}px, 0, 0)`);
              if (isReverse) {
                if (i <= 0) {
                  i = holder[0].scrollWidth / 2;
                }
                i = i - speed;
              } else {
                if (i > holder[0].scrollWidth / 2) {
                  i = 0;
                }
                i = i + speed;
              }
            }, 40);
          }

          container.hover(
            function () {
              clearInterval(timer);
            },
            function () {
              initInterval();
            }
          );

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: container[0],
              markers: false,
              toggleActions: "play reverse play reverse",
              start: "top bottom",
              end: "bottom top",
              scrub: 0.25,
              onUpdate: (self) => {
                if (isReverse) {
                  gsap.to(container, {
                    x: "+" + self.progress * 30 + "%",
                  });
                } else {
                  gsap.to(container, {
                    x: "-" + self.progress * 30 + "%",
                  });
                }
              },
            },
          });
        });
      });
    };

    initMarqueeSlider();
  }, []);

  return (
    <>
      <div
        className="img_tray w-full"
        style={{
          translate: "none",
          rotate: "none",
          willChange: "transform",
          scale: "none",
        }}
      >
        <div
          className="tray_roller overflow-visible flex"
          style={{ backfaceVisibility: "hidden", willChange: "transform" }}
        >
          {slides.map((slide, idx) => (
            <div key={idx + 1} className="tray_col px-3">
              <div
                className="w-[390px] h-[520px]"
                style={{
                  background: `url('${slide.img}') no-repeat center center / cover`,
                }}
              />
              <div className="text-vip-blue">
                <span className="uppercase">{slide.title}</span>,{" "}
                {slide.subtitle}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
