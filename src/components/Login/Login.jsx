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
      <section className="mx-auto my-8 w-2/4">
        <h1 className="text-center font-semibold text-2xl text-custom-grey-70 mb-6">
          Login
        </h1>
        <form action="" className="flex flex-col gap-6">
          <CustomButton
            children={" Login with Google"}
            className={
              "w-full py-4 px-12 rounded-xl bg-custom-white border-2 border-custom-grey-30 text-xl font-medium text-custom-grey-90"
            }
          />
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
                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <div className=" my-5 flex items-center justify-between">
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
            <Link to='/dashboard'><CustomButton
              type="submit"
              children={"Log In"}
              className={
                "bg-custom-primary-blue text-custom-white w-full py-4 px-12 rounded-xl"
              }
            /></Link>
          </div>
        </form>
      </section>
    </section>
  );
};
