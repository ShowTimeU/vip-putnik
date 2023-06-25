import React, { useRef, useState } from "react";
import Head from "next/head";
import classnames from "classnames";
import { useClickAway } from "react-use";
import { useRouter } from "next/router";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useClickAway(menuRef, () => {
    if (isOpen) {
      setIsOpen(false);
    }
  });

  const router = useRouter();

  const navigateAndScroll = (whereTo: any) => {
    router.push("/", undefined, { scroll: false }).then(() => {
      window.scrollTo({
        top: document.querySelector(whereTo).offsetTop,
        behavior: "smooth",
      });
    });
    setIsOpen(false);
  };

  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <title>ВІППутник</title>
        <meta
          name="description"
          content="Ми забезпечимо Вам незабутні враження та комфортний відпочинок."
        />
        <link rel="icon" type="image/png" href="" />
      </Head>

      <div className="w-screen h-[65px] bg-white border-b border-vip-blue uppercase text-vip-blue fixed top-0 z-50 hidden lg:block">
        <div className="w-full h-full max-w-[1440px] flex justify-between items-center px-6 mx-auto">
          <div className="flex-1 w-1/3 flex items-center space-x-5">
            <a
              className="cursor-pointer"
              onClick={() => navigateAndScroll("#about")}
            >
              Про нас
            </a>
            <a
              className="cursor-pointer"
              onClick={() => navigateAndScroll("#contacts")}
            >
              Контакти
            </a>
          </div>

          <div className="flex-1 w-1/3 text-center">
            <a href="https://vipputnik.com.ua/" className="font-bold text-xl">
              Vipputnik
            </a>
          </div>

          <div className="flex-1 w-1/3 flex justify-end items-center space-x-5">
            <a href="https://vipputnik.com.ua/payment">Оплата послуг</a>
            <a
              onClick={() => navigateAndScroll("#search")}
              className="cursor-pointer py-2.5 px-5 rounded-full bg-vip-light-blue text-white"
            >
              Пошук туру
            </a>
          </div>
        </div>
      </div>

      <div
        ref={menuRef}
        className="w-screen h-[50px] bg-white border-b border-vip-blue uppercase text-vip-blue fixed top-0 z-50 block lg:hidden text-sm"
      >
        <div className="w-full h-full flex justify-between items-center px-2.5">
          <div className="flex-1 text-left">
            <a href="https://vipputnik.com.ua/" className="font-bold">
              Vipputnik
            </a>
          </div>
          <div className="flex-1 text-right flex justify-end items-center">
            <div
              className={classnames(
                "w-[44px] h-[10px] relative flex flex-col justify-between cursor-pointer transition-transform ease-in-out duration-300 menu",
                isOpen && "open"
              )}
              onClick={toggleMenu}
            >
              <span className="w-full h-[1px] bg-vip-blue block transition-transform ease-in-out duration-300" />
              <span className="w-full h-[1px] bg-vip-blue block transition-transform ease-in-out duration-300" />
            </div>
          </div>
        </div>
        <div
          className="w-full bg-white px-2.5 pt-16 pb-20 flex flex-col justify-center items-center space-y-6 transition-transform duration-700 ease-in-out overflow-hidden"
          style={{
            transform: isOpen ? "translateX(0)" : "translateX(100%)",
          }}
        >
          <a onClick={() => navigateAndScroll("#about")}>Про нас</a>
          <a onClick={() => navigateAndScroll("#contacts")}>Контакти</a>
          <a href="https://vipputnik.com.ua/payment">Оплата послуг</a>
          <a
            onClick={() => navigateAndScroll("#search")}
            className="py-2.5 px-5 rounded-full bg-vip-light-blue text-white"
          >
            Пошук туру
          </a>
        </div>
      </div>
    </>
  );
};
