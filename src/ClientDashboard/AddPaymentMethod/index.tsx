import slide72 from "/Images/slide72.png";
import magneticCard from "/Images/magneticCard.png";
import collapseArrow from "/Images/collapseArrow.png";
import usa from "/Images/usa.png";
import { CiLock } from "react-icons/ci";
import { Modal } from "flowbite-react";
import { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";

export default function Index() {
  // Cancel payment modal
  const [cancel, setsetCancel] = useState(false);

  // confirm payment modal
  const [confirm, setsetConfirm] = useState(false);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-[60%_40%]">
        <div className="bg-[#f5f5f5] px-3 text-xs md:px-5 md:pt-10 md:text-base xl:px-20">
          <div className="pb-2 pt-5 text-lg xl:py-5">
            <span className="text-[#174568]">Hello</span>
            <span className="text-[#7295B8]">cer</span>
          </div>
          <div className="text-2xl font-semibold text-[#174568] md:text-3xl">
            <div>Set your</div>
            <div>payment method</div>
          </div>
          <div className="mt-4 bg-white p-5 md:mt-8">
            <div className="rounded-lg border ">
              <div className="flex justify-between px-5 pt-2">
                <div className="font-semibold">Link your card</div>
                <div>See plans</div>
              </div>
              <div className="flex px-8 pt-3 md:px-5">
                <div className="pr-16 text-[#8D9299]">Charged immediately</div>
                <div className="font-semibold">Billed monthly</div>
              </div>
              <div className="py-3">
                <hr />
              </div>
              <div className="pl-5 font-semibold">Billing information</div>

              <form>
                <div className="mx-3 mt-3 rounded-lg border">
                  <div className="flex px-5 py-2 md:px-20">
                    <div className="pr-16">Email</div>

                    <div className="pl-3">asankauiux.com@gmail.com</div>
                  </div>

                  <div className="pb-2">
                    <hr />
                  </div>

                  <div className="flex px-5 py-2 md:px-20">
                    <div className="pr-16">Address</div>
                    <div>1234 Test Dr, Clearwater, FL</div>
                  </div>

                  <div className="pb-2">
                    <hr />
                  </div>

                  <div className="flex px-5 py-2 md:px-20">
                    <div className="pr-20">City</div>
                    <div>Clearwater</div>
                  </div>

                  <div className="pb-2">
                    <hr />
                  </div>

                  <div className="flex px-5 py-2 md:px-20">
                    <div className="pr-14 md:pr-20">State</div>
                    <div className="pr-10 md:pr-28">NT</div>
                    <div className="pr-5 md:pr-7 md:pt-1">
                      <img src={collapseArrow} alt="image" />
                    </div>
                    <div className="pr-5 md:pr-5">ZIP</div>
                    <div>10000</div>
                  </div>

                  <div className="pb-2">
                    <hr />
                  </div>

                  <div className="flex px-5 py-2 md:px-20">
                    <div className="pr-10 md:pr-20"> Country</div>
                    <div className="md:pt-1">
                      <img src={usa} alt="image" />
                    </div>
                    <div className="pl-5 pr-10 md:pl-4 md:pr-24">
                      United States
                    </div>
                    <div className="md:pt-1">
                      <img src={collapseArrow} alt="image" />
                    </div>
                  </div>
                </div>

                <div className="px-3 pt-3">
                  <div className="mb-2 block">
                    <div className="flex justify-between">
                      <div className="font-semibold text-[#174568]">
                        Payment information
                      </div>
                      <div className="flex">
                        <div className="pt-1">
                          <CiLock />
                        </div>
                        <div className="pl-2 text-[#8D9299]">
                          Secured by Stripe
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border">
                    <div className="flex px-5 py-2 md:px-16">
                      <div className="pr-10 md:pr-20"> Card</div>
                      <div className="mt-[-2px]">
                        <img src={magneticCard} alt="image" />
                      </div>
                      <div className="pl-4 pr-8 md:pl-4 md:pr-24">
                        Card number
                      </div>
                      <div className="md:pt-1">MM / YY</div>
                    </div>
                  </div>

                  <div className="px-2 pt-8 text-justify text-sm md:px-5">
                    Please be informed that a token of $0.25 will be charged on
                    your card to confirm your payment method, kindly note that
                    the money will be automatically refunded to you. Thanks
                  </div>

                  <div className="flex justify-between py-8">
                    {/* CANCEL PAYMENT */}
                    <div>
                      <button
                        onClick={() => setsetCancel(true)}
                        className="mt-2 rounded-lg border border-[#CECECE] bg-white px-5 py-1 font-semibold text-[#5D5D5D] hover:bg-white md:mt-0"
                      >
                        Cancel
                      </button>
                      <Modal
                        show={cancel}
                        size="md"
                        onClose={() => setsetCancel(false)}
                        popup
                      >
                        <Modal.Header />
                        <Modal.Body>
                          <div className="text-center">
                            <HiOutlineExclamationCircle className="mx-auto mb-4 size-14 text-gray-400 dark:text-gray-200" />
                            <h3 className="mb-5 text-lg font-normal text-[#174568] dark:text-gray-400">
                              Are you sure you want to cancel the payment?
                            </h3>
                            <div className="flex justify-center gap-4">
                              <Link to="/Settings">
                                <button
                                  color="failure"
                                  onClick={() => setsetCancel(false)}
                                  className="rounded-xl bg-[#174568] p-2 text-sm text-white"
                                >
                                  {"Yes, I'm sure"}
                                </button>
                              </Link>

                              <Button
                                color="gray"
                                onClick={() => setsetCancel(false)}
                              >
                                No, cancel
                              </Button>
                            </div>
                          </div>
                        </Modal.Body>
                      </Modal>
                    </div>

                    <div className="flex md:pr-5">
                      <div className="pr-3 pt-3 text-[#8D9299] md:pt-0">
                        Terms
                      </div>
                      <div>
                        {/* CONTINUE THE PAYMENT */}
                        <div className="pt-1 md:pt-0">
                          <button
                            type="submit"
                            onClick={() => setsetConfirm(true)}
                            className="rounded-lg bg-[#1FA860] px-8 py-0.5 text-lg text-white md:px-14"
                          >
                            Pay now
                          </button>
                          <Modal
                            show={confirm}
                            size="md"
                            onClose={() => setsetConfirm(false)}
                            popup
                          >
                            <Modal.Header />
                            <Modal.Body>
                              <div className="text-center">
                                <HiOutlineExclamationCircle className="mx-auto mb-4 size-14 text-gray-400 dark:text-gray-200" />
                                <h3 className="mb-5 text-lg font-normal text-[#174568] dark:text-gray-400">
                                  Confirm the payment process
                                </h3>
                                <div className="flex justify-center gap-4">
                                  <Link to="/SuccessfulPayment">
                                    <button
                                      color="failure"
                                      onClick={() => setsetConfirm(false)}
                                      className="rounded-xl bg-[#174568] p-2 text-sm text-white"
                                    >
                                      {"Yes, I'm sure"}
                                    </button>
                                  </Link>

                                  <Button
                                    color="gray"
                                    onClick={() => setsetConfirm(false)}
                                  >
                                    No, cancel
                                  </Button>
                                </div>
                              </div>
                            </Modal.Body>
                          </Modal>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="order-first px-3 md:order-last md:px-0">
          <img src={slide72} alt="image" className="h-96 w-full md:h-[860px]" />
        </div>
      </div>
    </>
  );
}
