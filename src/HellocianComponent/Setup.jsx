/* eslint-disable tailwindcss/no-custom-classname */
import { useState } from "react";
import { file } from "./data";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import {useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios"

export default function Setup() {
  const [open, setOpen] = useState(false);
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();

  const toggle = () => {
    setOpen(!open);
  };


  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
        await axios.post("http://localhost:8080/api/auth-hellocian/set-password",{
          email,
          password
        })
        setEmail("");
        setPassword("");
        toast.success("Your account has been set up, continue to login")
        setTimeout(() => {
          navigate("/hellocian-login")
        },1000)
    } catch (error) {
        console.log(error)
    }
  }
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-[40%_60%]">
        <div className="hideOnMobile px-4 md:px-0">
          <img src={file.image} alt="image" className="max-h-screen" />
        </div>

        <div className="px-5 pt-10 sm:px-3 md:pt-2">
          <div className="md:px-2 md:pt-5 xl:mr-40 xl:px-10">
            <div className="pb-5 text-2xl font-semibold  text-[#174568] md:pb-10 md:text-[40px]">
              Account Setup
            </div>

            <form onSubmit={handleSubmit}>
              <div className="pb-3">Email Address</div>
              <div className="field">
                <div className="border-1 md:h-[50px] md:w-[430px] xl:h-10 xl:w-[500px]">
                  <input
                    name="email"
                    placeholder="Enter email adress"
                    className="h-10 w-full border border-current pl-5 md:h-[50px] md:w-[430px] xl:h-10 xl:w-[500px]"
                    onChange={(e) => setEmail(e.target.value)}
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
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <div className="grid justify-items-end pr-[15px] md:pr-[90px] lg:pr-[110px]">
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
              </div>
              <button
                type="submit"
                className="mt-5 w-[430px] rounded-none border bg-[#174568] p-2 text-white lg:w-[500px]"
              >
              Continue
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
