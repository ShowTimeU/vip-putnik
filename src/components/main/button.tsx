import React from "react";

type ButtonProps = {
  btnType?: "link" | "btn";
  children?: JSX.Element | string;
};

export const Button = ({ btnType, children }: ButtonProps) => {
  return (
    <>
      {btnType === "link" ? (
        <a
          href=""
          className="flex justify-center items-center rounded-full border border-vip-light-blue py-2.5 px-5 uppercase my-button"
        >
          <span className="flex justify-center items-center gap-3">
            {children}
            <img
              src={require("@/components/assets/btn-arrow.svg").default.src}
              width={40}
              alt="Arrow img"
            />
          </span>
        </a>
      ) : (
        <button
          type="submit"
          className="flex justify-center items-center rounded-full border border-vip-light-blue py-2.5 px-5 uppercase font-normal my-button"
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
