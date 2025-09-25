import React from "react";
import netflixlogo from "../assets/netflixlogo.png";
import usericon from "../assets/usericon.png";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleClick = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="absolute w-full px-12 py-4 bg-gradient-to-b from-black  z-10 flex items-center justify-between">
      <div>
        <img src={netflixlogo} alt="logo" className=" w-48  " />
      </div>
      {user && (
        <div className="flex items-center space-x-4 text-white">
          <img
            alt="user-icon"
            src={usericon}
            className="w-12 rounded-full hover:scale-105 transition-transform duration-200"
          />
          <p className="font-bold">{user?.displayName}</p>
          <button
            onClick={handleClick}
            className="hover:underline text-sm text-gray-300 hover:text-white transition"
          >
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
