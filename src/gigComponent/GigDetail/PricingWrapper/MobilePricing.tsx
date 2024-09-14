import { AiOutlineCheck } from "react-icons/ai";
import { Carousel } from "antd";

export default function Pricing() {
  return (
    <>
      <section className="bg-white md:hidden">
        <div className="pb-3 pt-10 text-xl font-bold">Pricing</div>

        <div>
          <Carousel autoplay>
            <div>
              {/* BASIC PRICE */}
              <h3>
                <div className="mb-5">
                  <div className="flex max-w-lg flex-col border border-black bg-white px-5">
                    <div className="flex justify-between py-5 text-2xl font-semibold text-black">
                      <div>Basic</div>
                      <div>$60</div>
                    </div>
                    <div className="text-xs text-[#606f7b]">
                      <div>Responsive Web design</div>
                      <div className="py-2">2 Reviews</div>
                      <div>Static web page</div>
                      <div className="pb-4 pt-2">Mobile friendly design</div>
                    </div>
                  </div>

                  <div className="border border-black border-t-transparent bg-white px-5">
                    <div className="flex justify-between pt-4">
                      <div className="text-[#727272]">
                        <div>Unlimited Reviews</div>
                        <div className="py-5">Technical Support</div>
                        <div>Deployment</div>
                        <div className="py-5">Documentation</div>
                        <div> Delivery Timeframe</div>
                      </div>

                      <div className="text-2xl font-semibold">
                        <div>
                          <AiOutlineCheck />
                        </div>
                        <div className="pt-4">
                          <AiOutlineCheck />
                        </div>
                        <div className="pt-[106px] text-xs">2 Days</div>
                      </div>
                    </div>

                    <div>
                      <button
                        type="button"
                        className="mb-3 mt-14 w-full rounded bg-[#174568] py-2 text-xl font-medium text-white"
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                </div>
              </h3>
            </div>
            <div>
              {/* STANDARD PRICING */}
              <h3>
                <div>
                  <div className="flex max-w-lg flex-col border border-black bg-white px-5">
                    <div className="flex justify-between py-5 text-2xl font-semibold text-black">
                      <div>Standard</div>
                      <div>$90</div>
                    </div>
                    <div className="text-xs text-[#606f7b]">
                      <div>Responsive Web design</div>
                      <div className="py-2">2 Reviews</div>
                      <div>Static web page</div>
                      <div className="pb-4 pt-2">Mobile friendly design</div>
                    </div>
                  </div>

                  <div className="border border-black border-t-transparent bg-white px-5">
                    <div className="flex justify-between pt-4">
                      <div className="text-[#727272]">
                        <div>Unlimited Reviews</div>
                        <div className="py-5">Technical Support</div>
                        <div>Deployment</div>
                        <div className="py-5">Documentation</div>
                        <div> Delivery Timeframe</div>
                      </div>

                      <div className="text-2xl font-semibold">
                        <div>
                          <AiOutlineCheck />
                        </div>
                        <div className="pt-14">
                          <AiOutlineCheck />
                        </div>
                        <div className="pt-5">
                          <AiOutlineCheck />
                        </div>
                        <div className="pt-5 text-xs">4 Days</div>
                      </div>
                    </div>

                    <div>
                      <button
                        type="button"
                        className="mb-3 mt-14 w-full rounded bg-[#174568] py-2 text-xl font-medium text-white"
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                </div>
              </h3>
            </div>
            <div>
              {/* ADVANCED PRICING */}
              <h3>
                <div>
                  <div className="flex max-w-lg flex-col border border-black bg-white px-5">
                    <div className="flex justify-between py-5 text-2xl font-semibold text-black">
                      <div>Advanced</div>
                      <div>$100</div>
                    </div>
                    <div className="text-xs text-[#606f7b]">
                      <div>Responsive Web design</div>
                      <div className="py-2">2 Reviews</div>
                      <div>Static web page</div>
                      <div className="pb-4 pt-2">Mobile friendly design</div>
                    </div>
                  </div>

                  <div className="border border-black border-t-transparent bg-white px-5">
                    <div className="flex justify-between pt-4">
                      <div className="text-[#727272]">
                        <div>Unlimited Reviews</div>
                        <div className="py-5">Technical Support</div>
                        <div>Deployment</div>
                        <div className="py-5">Documentation</div>
                        <div> Delivery Timeframe</div>
                      </div>

                      <div className="text-2xl font-semibold">
                        <div>
                          <AiOutlineCheck />
                        </div>
                        <div className="pt-4">
                          <AiOutlineCheck />
                        </div>
                        <div className="pt-5">
                          <AiOutlineCheck />
                        </div>
                        <div className="pt-16 text-xs">5 Days</div>
                      </div>
                    </div>

                    <div>
                      <button
                        type="button"
                        className="mb-3 mt-14 w-full rounded bg-[#174568] py-2 text-xl font-medium text-white"
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                </div>
              </h3>
            </div>
            <div>
              {/* PRO PRICING */}
              <h3>
                <div>
                  <div className="flex max-w-lg flex-col border border-black bg-white px-5">
                    <div className="flex justify-between py-5 text-2xl font-semibold text-black">
                      <div>Pro</div>
                      <div>$120</div>
                    </div>
                    <div className="text-xs text-[#606f7b]">
                      <div>Responsive Web design</div>
                      <div className="py-2">2 Reviews</div>
                      <div>Static web page</div>
                      <div className="pb-4 pt-2">Mobile friendly design</div>
                    </div>
                  </div>

                  <div className="border border-black border-t-transparent bg-white px-5">
                    <div className="flex justify-between pt-4">
                      <div className="text-[#727272]">
                        <div>Unlimited Reviews</div>
                        <div className="py-5">Technical Support</div>
                        <div>Deployment</div>
                        <div className="py-5">Documentation</div>
                        <div> Delivery Timeframe</div>
                      </div>

                      <div className="text-2xl font-semibold">
                        <div>
                          <AiOutlineCheck />
                        </div>
                        <div className="pt-4">
                          <AiOutlineCheck />
                        </div>
                        <div className="pt-14">
                          <AiOutlineCheck />
                        </div>
                        <div className="pt-6 text-xs">10 Days</div>
                      </div>
                    </div>

                    <div>
                      <button
                        type="button"
                        className="mb-3 mt-14 w-full rounded bg-[#174568] py-2 text-xl font-medium text-white"
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                </div>
              </h3>
            </div>
            <div>
              {/* PREMIUM PRICING */}
              <h3>
                <div>
                  <div className="flex max-w-lg flex-col border border-black bg-white px-5">
                    <div className="flex justify-between py-5 text-2xl font-semibold text-black">
                      <div>Premium</div>
                      <div>$200</div>
                    </div>
                    <div className="text-xs text-[#606f7b]">
                      <div>Responsive Web design</div>
                      <div className="py-2">2 Reviews</div>
                      <div>Static web page</div>
                      <div className="pb-4 pt-2">Mobile friendly design</div>
                    </div>
                  </div>

                  <div className="border border-black border-t-transparent bg-white px-5">
                    <div className="flex justify-between pt-4">
                      <div className="text-[#727272]">
                        <div>Unlimited Reviews</div>
                        <div className="py-5">Technical Support</div>
                        <div>Deployment</div>
                        <div className="py-5">Documentation</div>
                        <div> Delivery Timeframe</div>
                      </div>

                      <div className="text-2xl font-semibold">
                        <div>
                          <AiOutlineCheck />
                        </div>
                        <div className="pt-4">
                          <AiOutlineCheck />
                        </div>
                        <div className="pt-4">
                          <AiOutlineCheck />
                        </div>
                        <div className="pt-4">
                          <AiOutlineCheck />
                        </div>
                        <div className="pt-5 text-xs">20 Days</div>
                      </div>
                    </div>

                    <div>
                      <button
                        type="button"
                        className="mb-3 mt-14 w-full rounded bg-[#174568] py-2 text-xl font-medium text-white"
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                </div>
              </h3>
            </div>
          </Carousel>
        </div>
      </section>
    </>
  );
}
