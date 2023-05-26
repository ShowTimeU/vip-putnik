import { ItTourWidget } from "@/components/itTourWidget";
import { Header } from "@/components/main/header";

export default function Home() {
  return (
    <>
      <div className="w-screen h-auto text-white overflow-hidden">
        <Header />
        <div
          className="w-full min-h-[calc(100vh-80px)] relative pl-40 pt-32 -mt-2"
          style={{
            background: `url('${
              require("@/components/assets/img/bg-desk.jpg").default.src
            }') no-repeat center top / cover`,
          }}
        >
          <h1 className="text-3xl w-2/5 leading-snug">
            Ми забезпечимо Вам <b>незабутні враження</b> та
            <b> комфортний відпочинок</b>.
          </h1>
          <div className="absolute w-full bottom-2 left-0 flex justify-center items-center text-center">
            <h2 className="uppercase text-xl font-bold">Пошук відпочинку</h2>
          </div>
        </div>

        <div className="max-w-[1210px] mx-auto">
          <ItTourWidget />
        </div>

        <div className="px-6 flex max-w-[1440px] mx-auto my-24">
          <div className="flex-1 flex flex-col items-start space-y-10">
            <h1 className="text-vip-blue uppercase text-xl font-semibold">
              Про нас
            </h1>

            <div className="text-vip-blue pl-24 flex flex-col justify-center items-start space-y-10">
              <h1 className="font-semibold text-5xl leading-tight">
                ВІП Путник - <br />
                туристична компанія з 18-річним досвідом.
              </h1>

              <p className="uppercase text-lg font-light leading-8">
                Ми надаємо послуги
                <span className="font-medium"> проживання</span> і
                <span className="font-medium"> харчування</span>, складаємо
                <span className="font-medium"> культурні програми</span>,
                організовуємо
                <span className="font-medium"> корпоративний відпочинок</span>,
                надаємо <span className="font-medium">транспортні послуги</span>
                , складаємо <span className="font-medium">водні маршрути </span>
                та багато іншого.
              </p>

              <a
                href=""
                className="text-lg flex justify-center items-center gap-2 rounded-full border border-vip-light-blue py-4 px-6 uppercase"
              >
                Зв&apos;язатись з нами
                <img
                  src={require("@/components/assets/btn-arrow.svg").default.src}
                  alt="Arrow img"
                />
              </a>
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
        </div>
        <div className="px-6 flex max-w-[1440px] mx-auto mb-24">
          <div className="flex flex-col items-start space-y-10">
            <h1 className="text-vip-blue uppercase text-xl font-semibold">
              Тури улюбленці
            </h1>

            <div className="text-black">Slider</div>
          </div>
        </div>
      </div>
    </>
  );
}
