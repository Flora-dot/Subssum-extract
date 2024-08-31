import { CustomButton } from "../Button";
import { HeaderSignedout } from "../Header/Header";
import ToggleButton from "../ToggleButton";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <section className="w-4/5 p-7 bg-custom-faint-white">
      <HeaderSignedout />
      <section className="mx-auto my-8 w-full lg:w-2/4">
        <h1 className="text-center font-semibold text-2xl text-custom-grey-70 mb-6">
          Login
        </h1>
        <form action="" className="flex flex-col gap-6">
          <CustomButton
            className={
              "w-full py-4 flex items-center gap-3 justify-center px-12 rounded-xl bg-custom-white border-2 border-custom-grey-30 text-xl font-medium text-custom-grey-90"
            }
          >
            <svg
              width="24"
              height="23"
              viewBox="0 0 24 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M23.04 11.7615C23.04 10.946 22.9668 10.1619 22.8309 9.40918H12V13.8576H18.1891C17.9225 15.2951 17.1123 16.513 15.8943 17.3285V20.214H19.6109C21.7855 18.2119 23.04 15.2637 23.04 11.7615Z"
                fill="#4285F4"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.9999 23.0001C15.1049 23.0001 17.7081 21.9703 19.6108 20.2139L15.8942 17.3285C14.8644 18.0185 13.5472 18.4262 11.9999 18.4262C9.00467 18.4262 6.46945 16.4032 5.56513 13.6851H1.72308V16.6646C3.61536 20.423 7.50445 23.0001 11.9999 23.0001Z"
                fill="#34A853"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.56523 13.685C5.33523 12.995 5.20455 12.2579 5.20455 11.5C5.20455 10.742 5.33523 10.005 5.56523 9.31499V6.33545H1.72318C0.944318 7.88795 0.5 9.64431 0.5 11.5C0.5 13.3557 0.944318 15.112 1.72318 16.6645L5.56523 13.685Z"
                fill="#FBBC05"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.9999 4.57386C13.6883 4.57386 15.2042 5.15409 16.396 6.29364L19.6944 2.99523C17.7029 1.13955 15.0997 0 11.9999 0C7.50445 0 3.61536 2.57705 1.72308 6.33545L5.56513 9.315C6.46945 6.59682 9.00468 4.57386 11.9999 4.57386Z"
                fill="#EA4335"
              />
            </svg>
            Login with Google
          </CustomButton>
          <div className="flex items-center justify-between">
            <hr className="w-2/6" />
            <p className="text-sm font-normal">Or continue with</p>
            <hr className="w-2/6" />
          </div>
          <div className="flex flex-col gap-2 p-10 rounded-xl bg-custom-white border-2 border-custom-grey-30">
            <label
              htmlFor="email"
              className="text-base font-normal text-custom-grey-70"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="wabdot@gmail.com"
              className="w-full border-2 border-custom-grey-30 p-3 rounded-md focus:outline-none"
            />
            <label
              htmlFor="password"
              className="text-base font-normal text-custom-grey-70"
            >
              Password
            </label>
            <div
              className={
                " flex justify-between w-full border-2 border-custom-grey-30 p-3 rounded-md"
              }
            >
              <input
                type={passwordVisible ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Gabdot1234"
                required
                className="h-full w-5/6 focus:outline-none"
              />
              <button
                type="button"
                className={"bg-none border-none cursor-pointer"}
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? <FaEyeSlash className="text-custom-primary-blue"/> : <FaEye className="text-custom-primary-blue"/>}
              </button>
            </div>
            <div className=" my-5 flex flex-col  lg:flex-row items-center justify-between">
              <div className="flex items-center gap-2">
                <ToggleButton />
                <p className="text-sm text-custom-grey-70 font-normal">
                  Remember me
                </p>
              </div>
              <a href="/" className="text-sm font-normal text-custom-red-error">
                Recover Password
              </a>
            </div>
            <Link to="/dashboard">
              <CustomButton
                type="submit"
                children={"Log In"}
                className={
                  "bg-custom-primary-blue text-custom-white w-full py-4 px-12 rounded-xl hover:bg-dark-blue"
                }
              />
            </Link>
          </div>
        </form>
      </section>
    </section>
  );
};
