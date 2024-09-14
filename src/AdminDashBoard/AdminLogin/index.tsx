/* eslint-disable tailwindcss/no-custom-classname */
import { useState } from "react";
import { Link } from "react-router-dom";
import slide71 from "/Images/slide71.png";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";

export default function Index() {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-[60%_40%]">
        <div className="px-5  pt-5 md:pt-52 lg:pt-16 xl:px-40 xl:pt-20">
          <div className="md:px-2 md:pt-5 xl:px-10">
            <div className="pb-5 text-2xl font-semibold  text-[#174568] md:pb-10 md:text-[40px]">
            Admin Login
            </div>

            <form>
              <div className="pb-3">Email Address</div>
              <div className="field">
                <div className="border-1 md:h-[50px] md:w-[430px] xl:h-10 xl:w-[500px]">
                  <input
                    name="email"
                    placeholder="Enter email adress"
                    className="h-10 w-full border border-current pl-5 md:h-[50px] md:w-[430px] xl:h-10 xl:w-[500px]"
                    required
                  />
                </div>

                <div className="error pt-1 text-red-500">
                  {/* error here */}
                </div>
              </div>

              <div className="pt-4  md:pt-4">Password</div>
              <div className="field">
                <div className="border-1 md:h-[50px] md:w-[430px] xl:h-10 xl:w-[500px]">
                  <input
                    type={open === false ? "password" : "text"}
                    name="password"
                    placeholder="Password"
                    className="h-10 w-full border border-current pl-5 md:h-[50px] md:w-[430px] xl:h-10 xl:w-[500px]"
                    required
                  />
                </div>

                <div className="grid justify-items-end pr-[15px] md:pr-[90px] lg:mr-[120px] xl:mr-[-100px]">
                  <div className="absolute mt-[-35px] text-2xl lg:mt-[-30px]">
                    {open === false ? (
                      <FaRegEye onClick={toggle} />
                    ) : (
                      <FaRegEyeSlash onClick={toggle} />
                    )}
                  </div>
                </div>

                <div className="error text-red-500">{/* error here */}</div>

                <label
                  htmlFor="input-group-1"
                  className="block pt-2 text-xs font-light text-[#697077]"
                >
                  It must be a combination of minimum 8 letters, numbers, and
                  symbols.
                </label>

                <div className="flex justify-between pt-3 md:pr-16 xl:pr-0">
                  <div className="flex items-center gap-2 text-[#174568]">
                    <input type="checkbox" id="remember" />
                    <div>Remember me</div>
                  </div>
                  <div className="text-[#174568] lg:pr-20 xl:pr-0">
                    <Link to="">Forgot Password?</Link>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="mt-5 w-[430px] rounded-none border bg-[#174568] p-2 text-white lg:w-[500px]"
              >
                Log In
              </button>
            </form>
          </div>
          <div className="grid justify-items-center py-2 md:hidden">or</div>

          <div className="hidden pl-10 pr-48 pt-4 md:block">
            <hr />
          </div>
          <div className="py-5 text-sm font-light text-[#174568] md:py-3 md:pb-0 md:pl-10 md:pt-8">
            No account yet?
            <span className="pl-2">
              <Link to="/SignUp">Sign Up</Link>
            </span>
          </div>
        </div>

        <div className="order-first px-3 md:order-last md:px-0">
          <img src={slide71} alt="image" className="h-96 w-full md:h-screen" />
        </div>
      </div>
    </>
  );
}
