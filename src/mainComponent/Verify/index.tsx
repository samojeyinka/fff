/* eslint-disable tailwindcss/no-custom-classname */
import { useState } from "react";
import { file } from "./data";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaWindows } from "react-icons/fa6";
import axios from "axios";


export default function Index() {


  const params = new URLSearchParams(window.location.search);
  const email = params.get('email');

  const [code1, setCode1] = useState("");
  const [code2, setCode2] = useState("");
  const [code3, setCode3] = useState("");
  const [code4, setCode4] = useState("");
  const navigate = useNavigate();





  const OTP = `${code1}${code2}${code3}${code4}`;
  console.log(OTP)





  const handleVerification = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/auth/activate", {
        email: email,
        activationCode: OTP
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      })

      toast.success(res.data.message)
      navigate("/login")
    } catch (error) {
      toast.error(error.response.data.message)
      console.log(error)
    }
  };




  const resendOTP = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/auth/resend-otp", {
        email: email
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      })

      toast.info(res.data.message)
    } catch (error) {
      toast.error(error.response.data.message)
    }
  };


  return (
    <>
      <div className="auth">

        <div className="auth-form px-5 pt-10 sm:px-3 md:pt-2">
          <div className="md:px-2 md:pt-5 xl:mr-40 xl:px-10">
            <div className="pb-2 text-2xl font-semibold  text-[#174568] md:pb-4 md:text-[40px]">
              OTP Verification
            </div>


            <p className="text-[#697077] pb-5 text-[.82rem]">A One Time Password (OTP) has been sent to your email. Kindly enter the 4 digits code below</p>
            <hr />
            <br />

            <form onSubmit={handleVerification}>

              <div className="input_boxes grid grid-cols-4 gap-5 mt-3">
                <input type="password" name="code1" id="code1"
                  onChange={(e) => setCode1(e.target.value)}
                  value={code1}
                  className="md:w-[100px] text-center bg-[#F2F4F8] border border-[#C1C7CD]"
                  required
                />
                <input type="password" name="code2" id="code2"
                  onChange={(e) => setCode2(e.target.value)}
                  value={code2}
                  className="md:w-[100px] text-center bg-[#F2F4F8] border border-[#C1C7CD]"
                  required
                />
                <input type="password" name="code3" id="code3"
                  onChange={(e) => setCode3(e.target.value)}
                  value={code3}
                  className="md:w-[100px] text-center bg-[#F2F4F8] border border-[#C1C7CD]"
                  required
                />
                <input type="password" name="code4" id="code4"
                  onChange={(e) => setCode4(e.target.value)}
                  value={code4}
                  className="md:w-[100px] text-center bg-[#F2F4F8] border border-[#C1C7CD]"
                  required
                />
              </div>
              <button
                type="submit"
                className="rounded-none border bg-[#174568] w-full p-2 md:w-[430px] xl:h-10 xl:w-[590px] text-white mt-10"
              >
                Verify OTP
              </button>



            </form>
            <div className="text-center py-5 text-sm font-light text-[#174568] md:py-0 md:pl-10 mt-5">
              Didn’t get the OTP?
              <span className="pl-2 font-bold cursor-pointer" onClick={resendOTP}>
                Click to resend
              </span>
            </div>

          </div>
        </div>

        <div className="auth-image">
          <img src={file.image} alt="image" className="max-h-screen" />
        </div>
      </div>
    </>
  );
}
