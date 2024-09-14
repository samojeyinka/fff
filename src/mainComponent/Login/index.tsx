/* eslint-disable tailwindcss/no-custom-classname */
import { useState } from "react";
import { file } from "./data";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../../redux/user/userSlice";
import { UseDispatch, useDispatch, useSelector } from "react-redux";
import OAuth from "../../authComponent/OAuth.jsx";
import { toast } from "react-toastify";
import { FaWindows } from "react-icons/fa6";
import Loader from "../Loader/Loader.js";

export default function Index() {
  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch("http://localhost:8080/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        toast.error(data.message);
        return;
      }
      dispatch(signInSuccess(data));
      toast.info("Welcome Back!");
      if (data.role === "Admin") {
        navigate("/adminDashBoard");
      } else {
        navigate("/");
      }
      window.location.reload();
    } catch (error) {
      dispatch(signInFailure(error));
      console.log(error);
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

        <div className="px-5 pt-10 sm:px-3 md:pt-2">
          <div className="md:px-2 md:pt-5 xl:mr-40 xl:px-10">
            <div className="pb-5 text-2xl font-semibold  text-[#174568] md:pb-10 md:text-[40px]">
              Login
            </div>

            <form onSubmit={handleSubmit}>
              <div className="pb-3">Email Address</div>
              <div className="field">
                <div className="border-1 md:h-[50px] md:w-[430px] xl:h-10 xl:w-[500px]">
                  <input
                    name="email"
                    placeholder="Enter email adress"
                    className="h-10 w-full border border-current pl-5 md:h-[50px] md:w-[430px] xl:h-10 xl:w-[500px]"
                    onChange={handleChange}
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
                    onChange={handleChange}
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

                <div className="flex justify-between pt-3 md:pr-16 xl:pr-[90px]">
                  <div className="flex items-center gap-2 text-[#174568]">
                    <input type="checkbox" id="remember" />
                    <div>Remember me</div>
                  </div>
                  <div className="text-[#174568]">
                    <Link to="">Forgot Password?</Link>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="mt-5 w-[430px] rounded-none border bg-[#174568] p-2 text-white lg:w-[500px]"
              >
                {loading ? <Loader /> : <>Log In</>}
              </button>
            </form>
          </div>
          <div className="grid justify-items-center py-2 md:hidden">or</div>
          <OAuth />

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
      </div>
    </>
  );
}
