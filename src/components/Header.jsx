import React from "react";
import netflixlogo from "../assets/netflixlogo.png";

const Header = () => {
  return (
    <div className="absolute w-full px-12 py-4 bg-gradient-to-b from-black  z-10 flex items-center justify-between">
      <div>
        <img src={netflixlogo} alt="logo" className=" w-48  " />
      </div>
    </div>
  );
};

export default Header;
