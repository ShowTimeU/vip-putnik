import React from "react";
import Head from "next/head";

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

      <div className="w-screen h-[80px] bg-white border-b border-vip-blue uppercase text-vip-blue fixed top-0 z-50">
        <div className="w-full h-full max-w-[1440px] flex justify-between items-center px-6 mx-auto">
          <div className="flex-1 w-1/3 flex items-center space-x-5">
            <a href="">Про нас</a>
            <a href="">Контакти</a>
          </div>

          <div className="flex-1 w-1/3 text-center">
            <a href="" className="font-bold text-xl">
              Vipputnik
            </a>
          </div>

          <div className="flex-1 w-1/3 flex justify-end items-center space-x-5">
            <a href="">Оплата послуг</a>
            <a
              href=""
              className="px-6 py-4 rounded-full bg-vip-light-blue text-white"
            >
              Пошук туру
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
