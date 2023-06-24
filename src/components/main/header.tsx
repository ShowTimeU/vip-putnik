import React from "react";
import Head from "next/head";
import { Link } from "react-scroll";

export const Header = () => {
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

      <div className="w-screen h-[65px] bg-white border-b border-vip-blue uppercase text-vip-blue fixed top-0 z-50">
        <div className="w-full h-full max-w-[1440px] flex justify-between items-center px-6 mx-auto">
          <div className="flex-1 w-1/3 flex items-center space-x-5">
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Про нас
            </Link>
            <Link
              to="contacts"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Контакти
            </Link>
          </div>

          <div className="flex-1 w-1/3 text-center">
            <a href="https://vipputnik.com.ua/" className="font-bold text-xl">
              Vipputnik
            </a>
          </div>

          <div className="flex-1 w-1/3 flex justify-end items-center space-x-5">
            <a href="https://vipputnik.com.ua/payment">Оплата послуг</a>
            <Link
              to="search"
              smooth={true}
              duration={500}
              className="cursor-pointer py-2.5 px-5 rounded-full bg-vip-light-blue text-white"
            >
              Пошук туру
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
