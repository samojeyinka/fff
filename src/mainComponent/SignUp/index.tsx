/* eslint-disable tailwindcss/no-custom-classname */
import { useState } from "react";
import { file } from "./data";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../../authComponent/OAuth.jsx";
import { toast } from "react-toastify";
import Loader from "../Loader/Loader.js";

export default function Index() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(false);
      const res = await fetch("http://localhost:8080/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      setLoading(false);
      if (data.success === false) {
        setError(true);
        toast.error(data.message);
        return;
      }
      toast.info(data.message);
      navigate(`/verify?email=${formData.email}`);
    } catch (error) {
      setLoading(false);
      setError(true);
      toast.error(error.message);
    }
  };

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-[40%_60%]">
        <div className="hideOnMobile px-4 md:px-0">
          <img src={file.image} alt="image" className="max-h-screen" />
        </div>

        <div className="px-5 pt-10 sm:px-3 md:pt-10">
          <div className="md:px-2 md:pt-5 xl:mr-40 xl:px-10 xl:pt-0">
            <div className="pb-5 text-2xl font-semibold  text-[#174568] md:pb-10 md:text-[40px]">
              Sign Up
            </div>

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div className="flex">
                <div className="w-full pr-2">
                  <div className="mb-2 block">
                    <div>First Name</div>
                  </div>
                  <input
                    name="firstName"
                    placeholder="Enter your name here"
                    className="h-10 w-full border border-current pl-5 md:h-[50px] md:w-[430px] xl:h-10 xl:w-[290px]"
                    onChange={handleChange}
                    required
                  />
                  <div className="error pt-1 text-red-500">
                    {/* error here */}
                  </div>
                </div>

                <div className="w-full">
                  <div className="mb-2 block">
                    <div>Last Name</div>
                  </div>
                  <input
                    name="lastName"
                    placeholder="Enter surname here"
                    className="h-10 w-full border border-current pl-5 md:h-[50px] md:w-[430px] xl:h-10 xl:w-[290px]"
                    onChange={handleChange}
                    required
                  />
                  <div className="error pt-1 text-red-500">
                    {/* error here */}
                  </div>
                </div>
              </div>

              <div className="mb-[-10px]">Email Address</div>
              <div className="field">
                <div className="border-1 md:h-[50px] md:w-[430px] xl:h-10 xl:w-[590px]">
                  <input
                    name="email"
                    placeholder="Enter email adress"
                    className="h-10 w-full border border-current pl-5 md:h-[50px] md:w-[430px] xl:h-10 xl:w-[590px]"
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="error pt-1 text-red-500">
                  {/* error here */}
                </div>
              </div>

              <div className="mb-[-10px]">Password</div>
              <div className="border-1 md:h-[50px] md:w-[430px] xl:h-10 xl:w-[500px]">
                <input
                  type={open === false ? "password" : "text"}
                  name="password"
                  placeholder="Password"
                  className="h-10 w-full border border-current pl-5 md:h-[50px] md:w-[430px] xl:h-10 xl:w-[590px]"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="grid justify-items-end pr-[15px] md:pr-[90px] lg:pr-[20px]">
                <div className="absolute mt-[-45px] text-2xl lg:mt-[-48px]">
                  {open === false ? (
                    <FaRegEye onClick={toggle} />
                  ) : (
                    <FaRegEyeSlash onClick={toggle} />
                  )}
                </div>
              </div>

              <div className="error mt-[-28px] text-red-500">
                {/* <error here */}
              </div>

              <div className="flex items-center gap-2 text-[#174568]">
                <input type="checkbox" id="remember" name="remember" />
                <div>I agree to the terms and condition</div>
              </div>
              <button
                type="submit"
                className="w-full rounded-none border bg-[#174568] p-2 text-white md:w-[430px] xl:h-10 xl:w-[590px]"
              >
                {loading ? <Loader /> : <>Sign up</>}
              </button>
            </form>
          </div>
          <div className="grid justify-items-center py-2 md:hidden">or</div>
          <OAuth />

          <div className="hidden pb-1 pl-10 pr-48 pt-4 md:block">
            <hr />
          </div>
          <div className="py-5 text-sm font-light text-[#174568] md:py-0 md:pl-10">
            Already have an account?
            <span className="pl-2">
              <Link to="/Login">Login In</Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
