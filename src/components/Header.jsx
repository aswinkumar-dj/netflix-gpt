import React, { useEffect } from "react";
import netflixlogo from "../assets/netflixlogo.png";
import usericon from "../assets/usericon.png";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const gptSearchButton = useSelector((store) => store.gpt.showGptSearch);

  const handleClick = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch(() => {
        navigate("/error");
      });
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute w-full px-4 sm:px-8 md:px-12 py-4 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row md:items-center md:justify-between">
      <div className="flex justify-center md:justify-start">
        <img src={netflixlogo} alt="logo" className="w-28 sm:w-36 md:w-48" />
      </div>

      {user && (
        <div className="flex flex-col md:flex-row items-center md:space-x-4 text-white mt-4 md:mt-0 gap-3 md:gap-0">
          <button
            className="hover:bg-orange-400 w-40 md:w-auto bg-gradient-to-tr from-orange-400 md:mt-4  to-orange-600/60 text-black px-4 py-2 rounded"
            onClick={handleGptSearchClick}
          >
            {gptSearchButton ? "Home Page" : "GPT-Search"}
          </button>

          <div className="pt-4  flex items-center gap-3">
            <img
              alt="user-icon"
              src={usericon}
              className="w-10 sm:w-12 rounded-full hover:scale-105 transition-transform duration-200"
            />
            <p className="font-bold text-sm sm:text-base">
              {user?.displayName}
            </p>
            <button
              onClick={handleClick}
              className="hover:underline text-xs sm:text-sm text-gray-300 hover:text-white transition"
            >
              (Sign Out)
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
