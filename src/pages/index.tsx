import { ItTourWidget } from "@/components/itTourWidget";
import { Header } from "@/components/main/header";
import dynamic from "next/dynamic";
import { MyForm } from "@/components/myForm";
import { Button } from "@/components/main/button";
import { Footer } from "@/components/main/footer";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import React from "react";

const MySwiper = dynamic(() =>
  import("@/components/mySwiper").then((mod) => mod.MySwiper)
);

export default function Home() {
  return (
    <>
      <ParallaxProvider>
        <div className="w-screen h-auto overflow-hidden text-vip-blue">
          <Header />
          <div
            className="w-full min-h-[calc(88vh-50px)] lg:min-h-[calc(100vh-65px)] relative pt-24 lg:pt-32 -mt-2 text-white"
            style={{
              background: `url('${
                require("@/components/assets/img/bg-desk.jpg").default.src
              }') no-repeat center top / cover`,
            }}
          >
            <div className="max-w-[1440px] mx-auto px-2.5">
              <h1 className="text-xl lg:text-3xl leading-snug w-3/5 lg:w-2/5">
                Ми забезпечимо Вам <b>незабутні враження</b> та
                <b> комфортний відпочинок</b>.
              </h1>
            </div>

            <div className="absolute w-full bottom-2 left-0 flex justify-center items-center text-center">
              <h2 className="uppercase text-sm lg:text-xl font-bold">
                Пошук відпочинку
              </h2>
            </div>
            <div id="search" className="mt-44 lg:mt-10" />
          </div>

          <div className="max-w-[1210px] mx-auto mb-12 lg:mb-24">
            <ItTourWidget />
            <div id="about" />
          </div>

          <div className="px-2.5 flex flex-col lg:flex-row max-w-[1440px] mx-auto mb-12 lg:mb-24">
            <div className="flex-1 flex flex-col items-start space-y-5 lg:space-y-10">
              <h1 className="uppercase text-sm lg:text-xl font-semibold">
                Про нас
              </h1>

              <div className="lg:pl-24 flex flex-col justify-center items-start space-y-5 lg:space-y-10">
                <h1 className="font-semibold text-2xl lg:text-5xl leading-tight">
                  ВІП Путник - <br />
                  туристична компанія з 18-річним досвідом.
                </h1>

                <h2 className="uppercase text-sm lg:text-lg font-light lg:leading-8">
                  Ми надаємо послуги
                  <span className="font-medium"> проживання</span> і
                  <span className="font-medium"> харчування</span>, складаємо
                  <span className="font-medium"> культурні програми</span>,
                  організовуємо
                  <span className="font-medium"> корпоративний відпочинок</span>
                  , надаємо{" "}
                  <span className="font-medium">транспортні послуги</span>,
                  складаємо <span className="font-medium">водні маршрути </span>
                  та багато іншого.
                </h2>

                <Button btnType="link" whereTo="contacts">
                  Зв&apos;язатись з нами
                </Button>
              </div>
            </div>
            <Parallax
              speed={10}
              className="flex-1 flex justify-end items-start relative mt-12 lg:mt-0"
            >
              <img
                src={
                  require("@/components/assets/img/banner_1.png").default.src
                }
                className="w-[260px] lg:w-auto"
                alt="Big banner"
              />
              <img
                src={
                  require("@/components/assets/img/banner_2.png").default.src
                }
                className="absolute top-1/2 -translate-y-1/2 lg:translate-y-0 lg:bottom-0 left-0 lg:left-1/3 w-[180px] lg:w-auto"
                alt="Big banner"
              />
            </Parallax>
          </div>

          <div className="px-2.5 flex max-w-[1440px] mx-auto mb-12 lg:mb-24">
            <div className="flex flex-col items-start space-y-5 lg:space-y-10 w-full">
              <h1 className="uppercase text-sm lg:text-xl font-semibold">
                Тури улюбленці
              </h1>

              <div className="w-full relative">
                <MySwiper />
              </div>
            </div>
          </div>

          <div className="px-2.5 flex max-w-[1440px] mx-auto mb-12 lg:mb-24">
            <div className="flex flex-col items-start space-y-5 lg:space-y-10 w-full">
              <h1 className="uppercase text-sm lg:text-xl font-semibold">
                Чому ми?
              </h1>

              <div className="text-center w-full lg:w-1/2 mx-auto">
                <h2 className="uppercase text-sm lg:text-3xl font-light lg:leading-10">
                  Завдяки
                  <span className="font-medium">
                    {" "}
                    широкому діапазону послуг{" "}
                  </span>
                  ми успішно співпрацюємо як з великими партнерами в Україні,
                  так і з іноземними партнерами.{" "}
                  <span className="font-medium">Якість</span>,
                  <span className="font-medium"> стабільність</span> і
                  <span className="font-medium"> постійний рух уперед </span> -
                  запорука нашого успіху.
                </h2>
              </div>
            </div>
          </div>

          <div className="w-full bg-[#F9F9F9] mb-12 lg:mb-24">
            <div className="px-2.5 flex max-w-[1440px] mx-auto py-6 lg:py-12">
              <div className="flex flex-col lg:flex-row justify-between items-center w-full space-y-5 lg:space-y-0">
                <Parallax
                  speed={6}
                  className="w-4/5 lg:w-2/3 relative flex justify-start lg:justify-end"
                >
                  <div
                    className="lg:aspect-square w-[220px] h-[260px] lg:w-[700px] lg:h-auto"
                    style={{
                      background: `url('${
                        require("@/components/assets/img/banner_4.png").default
                          .src
                      }') no-repeat center center / cover`,
                    }}
                  />
                  <div
                    className="!absolute right-0 lg:left-0 top-1/2 -translate-y-1/2 lg:aspect-video w-[130px] h-[210px] lg:w-[400px] lg:h-auto z-10"
                    style={{
                      background: `url('${
                        require("@/components/assets/img/banner_3.png").default
                          .src
                      }') no-repeat center center / cover`,
                    }}
                  />
                </Parallax>
                <div className="w-full lg:w-1/3 flex justify-center items-center lg:pl-20 lg:pr-10">
                  <h2 className="text-base lg:text-lg lg:leading-7">
                    Ми знаходимо
                    <span className="font-semibold">
                      {" "}
                      індивідуальний підхід{" "}
                    </span>
                    до кожного клієнта, щоб знайти тур, який
                    <span className="font-semibold"> найкраще відповідає </span>
                    його
                    <span className="font-semibold"> потребам </span>та
                    <span className="font-semibold"> бюджету</span>.
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="px-2.5 max-w-[1440px] mx-auto mb-16 lg:mb-36 text-lg font-semibold">
            <div className="w-full flex flex-col lg:flex-row justify-center items-start lg:items-center lg:space-x-40 space-y-5 lg:space-y-0">
              <div className="flex justify-center items-center space-x-4">
                <i className="fal fa-shield-check fa-3x" />
                <p>
                  Надійність <br />
                  та відповідальність
                </p>
              </div>
              <div className="flex justify-center items-center space-x-4">
                <i className="fal fa-sack-dollar fa-3x" />
                <p>
                  Подорожі для <br /> кожного гаманця
                </p>
              </div>
              <div className="flex justify-center items-center space-x-4">
                <i className="fal fa-heart fa-3x" />
                <p>
                  Персональний <br />
                  підхід
                </p>
              </div>
            </div>
            <div id="contacts" />
          </div>

          <div className="px-2.5 flex max-w-[1440px] mx-auto mb-24">
            <div className="flex flex-col items-start space-y-5 lg:space-y-10 w-full">
              <h1 className="uppercase text-sm lg:text-xl font-semibold">
                Напишіть нам повідомлення
              </h1>

              <div className="w-full max-w-[1200px] mx-auto flex flex-col-reverse lg:flex-row justify-center items-center">
                <div className="w-full lg:w-1/2 mt-5 lg:mt-0">
                  <MyForm />
                </div>
                <div className="w-10/12 lg:w-1/2 lg:pl-10 text-center lg:text-left">
                  <h2 className="uppercase text-sm lg:text-lg font-light leading-6 lg:leading-8">
                    Ми готові зробити вашу мандрівку незабутньою! напишіть нам
                    на{" "}
                    <a
                      href="mailto:info@vipputnik.com.ua"
                      className="font-medium underline"
                    >
                      info@vipputnik.com.ua
                    </a>{" "}
                    і дізнайтесь більше про наші послуги.
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </ParallaxProvider>
    </>
  );
}
