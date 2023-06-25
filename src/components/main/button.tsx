import React from "react";
import { Link } from "react-scroll";

type ButtonProps = {
  btnType?: "link" | "btn";
  children?: JSX.Element | string;
  whereTo?: string;
};

export const Button = ({ btnType, children, whereTo }: ButtonProps) => {
  return (
    <>
      {btnType === "link" ? (
        <Link
          to={whereTo || ""}
          smooth={true}
          duration={500}
          className="text-sm lg:text-base flex justify-center items-center rounded-full border border-vip-light-blue py-3.5 lg:py-2.5 px-5 uppercase my-button cursor-pointer"
        >
          <span className="flex justify-center items-center gap-3">
            {children}
            <img
              src={require("@/components/assets/btn-arrow.svg").default.src}
              width={40}
              alt="Arrow img"
            />
          </span>
        </Link>
      ) : (
        <button
          type="submit"
          className="text-sm lg:text-base flex justify-center items-center rounded-full border border-vip-light-blue py-3.5 lg:py-2.5 px-5 uppercase font-normal my-button"
        >
          <span className="flex justify-center items-center gap-3">
            {children}
            <img
              src={require("@/components/assets/btn-arrow.svg").default.src}
              width={40}
              alt="Arrow img"
            />
          </span>
        </button>
      )}
    </>
  );
};
