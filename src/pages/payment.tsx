import React from "react";
import { Header } from "@/components/main/header";
import { Footer } from "@/components/main/footer";

export default function Payment() {
  return (
    <>
      <Header />
      <div className="w-full mt-[65px] py-14 flex justify-center items-center px-6">
        <iframe
          className="lozad"
          src="https://pay.pinbank.ua/widget-ext/payment/service/3197?lang=uk&iframePartnerCode=putnik-frame&template=false"
          width="900"
          height="500"
          scrolling="no"
          frameBorder="no"
        ></iframe>
      </div>
      <Footer />
    </>
  );
}
