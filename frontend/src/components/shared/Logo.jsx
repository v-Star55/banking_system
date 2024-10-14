import React from "react";
import logo from "../../assets/icons/logo.png";

export const Logo = ({ textSize = null, bg = true }) => {
  return (
    <div
      className={`${
        bg
      } w-full flex justify-center items-center   select-none`}
    >
      <img src={logo} alt={"text"} height={150} width={150}/>
    </div>
  );
};
