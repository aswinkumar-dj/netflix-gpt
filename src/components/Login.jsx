import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [signInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const toggleSignInForm = () => {
    setSignInForm(!signInForm);
  };

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
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    }
  };
  return (
    <div className="relative h-screen w-full">
      <div className="absolute inset-0">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c95abc7a-8124-4630-bb7a-3b160bdc6de3/web/IN-en-20250915-TRIFECTA-perspective_d3d87aa7-58ed-4c6b-98dc-231ed05ba675_large.jpg"
          alt="bg"
          className="h-full w-full object-cover"
        />
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
