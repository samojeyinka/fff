import masterCard from "/Images/masterCard.png";
import visa from "/Images/visa.png";
import paystack from "/Images/paystack.png";
import flutterWave from "/Images/flutterWave.png";
import btc from "/Images/btc.png";
import perfectmoney from "/Images/perfectmoney.png";
import paypal from "/Images/paypal.png";
import Footer from "../../mainComponent/Footer";
import slide31 from "/Images/slide31.png";
import { AiOutlineCheck } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Index() {
  const { currentUser } = useSelector((state) => state.user);
  const { currentOrder } = useSelector((state) => state.order);
  const [tax, setTax] = useState(0)
  const navigate = useNavigate();

  const calcTax = () => {
    setTax((0.16) * currentOrder.package.price)
  }


  const order = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:8080/api/orders/${currentOrder.gigId}`, {
        clientId: currentUser._id,
        pricingPackage: currentOrder.package.name,
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      navigate("/Project");
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }




  useEffect(() => {
    calcTax();
  })


  return (
    <>
      <div className="bg-[#f5f5f5]">
        <div className="grid md:grid-cols-[60%_50%] xl:grid-cols-[70%_33%]">
          <div className="pb-5 pt-[60px] md:px-20 md:pb-10 lg:px-[40px] xl:px-40">
            <div>
              <div className="pl-2 text-xl md:pl-0">
                <span className="font-semibold text-[#174568] dark:text-black">
                  Hello
                </span>
                <span className="text-[#9d9d9d]">cer</span>
              </div>
              <div className="pl-2 text-3xl  font-semibold md:pl-0">
                <div className="pt-4">Choose</div>
                <div>payment method</div>
              </div>

              <div className="mr-10 flex pl-2 pt-3 md:mr-0 md:pl-0">
                <div>
                  <img src={masterCard} alt="image" className="w-14" />
                </div>

                <div className="px-4 pt-2">
                  <img src={visa} alt="image" className="w-14" />
                </div>

                <div className="pt-2">
                  <img src={paypal} alt="image" className="w-20" />
                </div>

                <div className="px-4 pt-2">
                  <img src={btc} alt="image" className="w-20" />
                </div>

                <div className="pt-2">
                  <img src={perfectmoney} alt="image" className="w-20" />
                </div>
              </div>

              <div className="flex pl-2 pt-3 md:pl-0">
                <div className="pt-1">
                  <img src={paystack} alt="image" className="w-24" />
                </div>

                <div className="pl-4 pt-1">
                  <img src={flutterWave} alt="image" className="w-28" />
                </div>
              </div>

              <div className="ml-3 pt-3 md:ml-0 md:pt-0">
                <div className=" mb-5 pr-5 pt-5 md:pr-0">
                  <label
                    htmlFor="name"
                    className="mb-2 block text-[#174568] dark:text-white"
                  >
                    Name on Card
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="block w-full rounded-lg border border-gray-200 bg-white py-3 text-xs text-[#174568] focus:border-[#174568] focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 md:w-[400px] lg:w-[600px]"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="flex">
                  <div className="mb-5">
                    <label
                      htmlFor="name"
                      className="mb-2 block text-[#174568] dark:text-white"
                    >
                      Card number
                    </label>
                    <input
                      type="email"
                      id="email"
                      className=" block rounded-l-lg border border-gray-200 bg-white py-3 text-xs text-[#174568] focus:border-[#174568] focus:ring-blue-500 md:w-[200px]"
                      placeholder="0000 0000 0000"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="number"
                      id="card"
                      className="mt-8 block rounded-r-lg border border-gray-200  border-l-transparent bg-white py-3 text-xs text-[#174568] focus:border-[#174568] focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                      placeholder="MM/YY/CVC"
                      required
                    />
                  </div>
                </div>

                <div className=" mb-5 pr-5 pt-5 md:pr-0">
                  <label
                    htmlFor="name"
                    className="mb-2 block text-[#174568] dark:text-white"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="block  w-full rounded-lg border border-gray-200 bg-white py-3 text-xs text-[#174568] focus:border-[#174568] focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 md:w-[400px] lg:w-[600px]"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="mb-5 flex items-start">
                  <div className="flex h-5 items-center">
                    <input id="remember" type="checkbox" value="" required />
                  </div>
                  <label
                    htmlFor="remember"
                    className="ms-2 pt-1 text-xs text-[#174568]"
                  >
                    By confirming the order, I accept the terms of the user
                    agreement
                  </label>
                </div>
                <div className="flex pt-4">
                  <div className="pr-4">
                    <button
                      type="submit"
                      className="w-full rounded bg-[#174568] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#174568] focus:outline-none focus:ring-4 focus:ring-[#174568] sm:w-auto"
                      onClick={order}
                    >
                      CHECKOUT
                    </button>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full rounded bg-white px-5 py-2.5 text-center text-sm font-medium text-[#174568]"
                    >
                      CHECKOUT
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-5 ml-1 rounded-lg border bg-white px-3 text-xs md:mb-0 md:ml-0 md:mr-40 md:mt-20 md:h-[570px] xl:px-5 xl:text-base">
            <div className="flex md:pt-10 lg:pt-5">
              <div className="mr-[-10px] pt-3">
                <img src={currentUser.profilePicture} alt="image" className="w-[100px] h-[40px]" style={{ borderRadius: "50%" }} />
              </div>
              <div className="px-5 pt-5 font-medium md:pt-0">
                <div>{currentOrder.gigTitle}</div>
                <div>Brandly James</div>
              </div>
            </div>
            <div className="py-3">
              <hr />
            </div>

            <div className="flex justify-between  md:pb-4 lg:pb-0">
              <div>
                <div className="pr-5">Package:</div>
                <div className="pt-1">Delivery:</div>
              </div>
              <div>
                <div className="pl-4">{currentOrder.package.name}</div>
                <div className="pt-1">{currentOrder.package.deliveryTimeframe}</div>
              </div>
            </div>

            <div className="py-5">
              <hr />
            </div>

            <div className="text-lg font-semibold  md:pb-4 xl:pb-0">Addons</div>
            <div className="flex justify-between">
              <div>
                <div className="pr-5">Unlimited Revisions</div>
                <div className="pt-1">Technical Support</div>
                <div className="pt-1">Live Deployment</div>
              </div>
              <div>
                <div className="pl-7">
                  <AiOutlineCheck />
                </div>
                <div className="py-4 pl-7">
                  <AiOutlineCheck />
                </div>
                <div className="pl-7">
                  <AiOutlineCheck />
                </div>
              </div>
            </div>

            <div className="py-5">
              <hr />
            </div>

            <div className="text-lg font-semibold md:pb-4 lg:pb-0">
              Billing Details
            </div>
            <div className="flex justify-between">
              <div>
                <div className="pr-5">Services charge</div>
                <div className="pt-1">Tax</div>
                <div className="pt-1">Subtotal</div>
                <div className="pt-3 text-xl font-semibold">Total</div>
              </div>
              <div>
                <div className="pl-7">${currentOrder.package.price}</div>
                <div className="py-1 pl-7">${tax}</div>
                <div className="pl-7">${currentOrder.package.price + tax}</div>
                <div className="pl-7 pt-3 font-semibold">${currentOrder.package.price + tax}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
