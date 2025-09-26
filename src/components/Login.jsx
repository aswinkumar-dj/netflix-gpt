import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_LOGIN } from "../utils/constant";

const Login = () => {
  const [signInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toggleSignInForm = () => {
    setSignInForm(!signInForm);
  };
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!signInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up

          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
              setErrorMessage(error);
            });

          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div className="relative h-screen w-full">
      <div className="absolute inset-0">
        <img src={BG_LOGIN} alt="bg" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <Header />

      <div className="relative flex justify-center items-center h-full">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-black/80 p-8 rounded-md flex flex-col gap-4 w-full max-w-md"
        >
          <h2 className="text-white text-2xl font-bold mb-4 text-center">
            {signInForm ? "Sign In" : "Sign Up"}{" "}
          </h2>

          {!signInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Enter your Name"
              className="p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-orange-400"
            />
          )}

          <input
            ref={email}
            type="text"
            placeholder="Enter your email"
            className="p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-orange-400"
          />
          <input
            ref={password}
            type="password"
            placeholder="Enter your password"
            className="p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-orange-500"
          />
          <p className="text-red-500">{errorMessage}</p>
          <button
            className="bg-orange-500 hover:bg-orange-600 transition text-white py-2 rounded font-semibold"
            onClick={handleButtonClick}
          >
            {signInForm ? "Sign In" : "Sign Up"}
          </button>

          <p className="text-gray-400 text-sm text-center">
            {signInForm ? "New to Netflix?" : "Already Registered?"}
            <span
              className="text-white hover:underline cursor-pointer"
              onClick={toggleSignInForm}
            >
              {signInForm ? " Sign up now" : " Sign In "}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
