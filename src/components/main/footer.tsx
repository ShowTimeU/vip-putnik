import React from "react";
import { useRouter } from "next/router";

export const Footer = () => {
  const { asPath } = useRouter();
  const paymentPage = asPath === "/payment";

  return (
    <div className="max-w-[1200px] mx-auto pb-12 lg:pb-24 px-6 lg:px-0 border lg:border-0 border-t border-t-vip-blue pt-5 lg:pt-0">
      <div className="w-full flex flex-col-reverse lg:flex-row justify-center items-end">
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start space-y-10 text-base lg:text-xl text-center lg:text-left">
          <div className="font-semibold leading-9 lg:leading-normal">
            <h1 className="mb-1.5">+380(44) 537 67 99</h1>
            <h1>Пр-т Степана Бандери, 6</h1>
          </div>

          <div className="flex justify-start items-center space-x-14 text-vip-light-blue underline">
            <a href="https://www.instagram.com/vip.putnik/">Instagram</a>
            <a href="https://www.facebook.com/Viputnik">Facebook</a>
            <a href="https://www.linkedin.com/in/gelena-yankovich-52702549/">
              LinkedIn
            </a>
          </div>
        </div>
        {!paymentPage && (
          <div className="w-full lg:w-1/2 lg:pl-10 flex justify-center lg:justify-start mb-12 lg:mb-0">
            <a
              href="https://vipputnik.com.ua/payment"
              className="text-white bg-vip-blue flex justify-center items-center rounded-lg py-2.5 px-5 uppercase my-button"
            >
              <span className="flex justify-center items-center gap-3">
                Оплата послуг
                <img
                  src={
                    require("@/components/assets/btn-arrow-white.svg").default
                      .src
                  }
                  width={40}
                  alt="Arrow img"
                />
              </span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
