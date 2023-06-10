import { ItTourWidget } from "@/components/itTourWidget";
import { Header } from "@/components/main/header";
import { MySwiper } from "@/components/mySwiper";
import { MyForm } from "@/components/myForm";
import { Button } from "@/components/main/button";
import { Footer } from "@/components/main/footer";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export default function Home() {
  const { ref, inView } = useInView({
    triggerOnce: false, // Change this to false if you want the animation to trigger again whenever it comes in view
    threshold: 0.1, // Percentage of the element that is in view before the callback triggers
  });

  const variants = {
    hidden: { y: 100 },
    show: { y: 0 },
  };

  return (
    <>
      <div className="w-screen h-auto overflow-hidden text-vip-blue">
        <Header />
        <div
          className="w-full min-h-[calc(100vh-65px)] relative pt-32 -mt-2 text-white"
          style={{
            background: `url('${
              require("@/components/assets/img/bg-desk.jpg").default.src
            }') no-repeat center top / cover`,
          }}
        >
          <div className="max-w-[1440px] mx-auto px-6">
            <h1 className="text-3xl leading-snug w-2/5">
              Ми забезпечимо Вам <b>незабутні враження</b> та
              <b> комфортний відпочинок</b>.
            </h1>
          </div>

          <div className="absolute w-full bottom-2 left-0 flex justify-center items-center text-center">
            <h2 className="uppercase text-xl font-bold">Пошук відпочинку</h2>
          </div>
          <div id="search" />
        </div>

        <div className="max-w-[1210px] mx-auto mb-24">
          <ItTourWidget />
          <div id="about" />
        </div>

        <motion.div
          ref={ref}
          variants={variants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          transition={{ duration: 1 }}
          className="px-6 flex max-w-[1440px] mx-auto mb-24"
        >
          <div className="flex-1 flex flex-col items-start space-y-10">
            <h1 className="uppercase text-xl font-semibold">Про нас</h1>

            <div className="pl-24 flex flex-col justify-center items-start space-y-10">
              <h1 className="font-semibold text-5xl leading-tight">
                ВІП Путник - <br />
                туристична компанія з 18-річним досвідом.
              </h1>

              <h2 className="uppercase text-lg font-light leading-8">
                Ми надаємо послуги
                <span className="font-medium"> проживання</span> і
                <span className="font-medium"> харчування</span>, складаємо
                <span className="font-medium"> культурні програми</span>,
                організовуємо
                <span className="font-medium"> корпоративний відпочинок</span>,
                надаємо <span className="font-medium">транспортні послуги</span>
                , складаємо <span className="font-medium">водні маршрути </span>
                та багато іншого.
              </h2>

              <Button btnType="link">Зв&apos;язатись з нами</Button>
            </div>
          </div>
          <div className="flex-1 flex justify-end items-start relative">
            <img
              src={require("@/components/assets/img/banner_1.png").default.src}
              alt="Big banner"
            />
            <img
              src={require("@/components/assets/img/banner_2.png").default.src}
              className="absolute bottom-0 left-1/3"
              alt="Big banner"
            />
          </div>
        </motion.div>

        <div className="px-6 flex max-w-[1440px] mx-auto mb-24">
          <div className="flex flex-col items-start space-y-10 w-full">
            <h1 className="uppercase text-xl font-semibold">Тури улюбленці</h1>

            <div className="w-full relative">
              <MySwiper />
            </div>
          </div>
        </div>

        <div className="px-6 flex max-w-[1440px] mx-auto mb-24">
          <div className="flex flex-col items-start space-y-10 w-full">
            <h1 className="uppercase text-xl font-semibold">Чому ми?</h1>

            <div className="text-center w-1/2 mx-auto">
              <h2 className="uppercase text-3xl font-light leading-10">
                Завдяки
                <span className="font-medium"> широкому діапазону послуг </span>
                ми успішно співпрацюємо як з великими партнерами в Україні, так
                і з іноземними партнерами.{" "}
                <span className="font-medium">Якість</span>,
                <span className="font-medium"> стабільність</span> і
                <span className="font-medium"> постійний рух уперед </span> -
                запорука нашого успіху.
              </h2>
            </div>
          </div>
        </div>

        <div className="w-full bg-[#F9F9F9] mb-24">
          <div className="px-6 flex max-w-[1440px] mx-auto py-12">
            <div className="flex justify-between items-center w-full">
              <div className="w-2/3 relative flex justify-end">
                <img
                  src={
                    require("@/components/assets/img/banner_3.png").default.src
                  }
                  className="absolute left-0 top-1/2 -translate-y-1/2"
                  alt="Small banner"
                />
                <img
                  src={
                    require("@/components/assets/img/banner_4.png").default.src
                  }
                  alt="Big banner"
                />
              </div>
              <div className="w-1/3 flex justify-center items-center pl-20 pr-10">
                <h2 className="text-lg leading-7">
                  Ми знаходимо
                  <span className="font-semibold"> індивідуальний підхід </span>
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

        <div className="px-6 max-w-[1440px] mx-auto mb-36 text-lg font-semibold">
          <div className="w-full flex justify-center items-center space-x-40">
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
        </div>

        <div className="px-6 flex max-w-[1440px] mx-auto mb-24">
          <div className="flex flex-col items-start space-y-10 w-full">
            <h1 className="uppercase text-xl font-semibold">
              Напишіть нам повідомлення
            </h1>

            <div className="w-full max-w-[1200px] mx-auto flex justify-center items-center">
              <div className="w-1/2">
                <MyForm />
              </div>
              <div className="w-1/2 pl-10">
                <h2 className="uppercase text-lg font-light leading-8">
                  Ми готові зробити вашу мандрівку незабутньою! напишіть нам на{" "}
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

        <div id="contacts" />
        <Footer />
      </div>
    </>
  );
}
