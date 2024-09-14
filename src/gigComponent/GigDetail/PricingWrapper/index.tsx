/* eslint-disable tailwindcss/no-custom-classname */
import { AiOutlineCheck } from "react-icons/ai";
import MobilePricing from "./MobilePricing";
import { Link } from "react-router-dom";

export default function Index({gig,orderGig}) {
  return (
    <>
      <div className="hidden md:block">
        <div className="pl-28 pt-6 text-2xl font-bold md:pb-0">Pricing</div>
        {/*MD/LG/XL DEVICES */}
        <section className=" bg-white">
          <div className=" max-w-screen-xl pt-3 md:block">
            <div className="space-y-8 md:grid md:grid-cols-6 md:space-y-0">
              <div className="lg:pt-63 mx-[-7px] flex max-w-lg flex-col border border-[#c4c4c4] bg-white pl-4 pr-6 text-[#7e7e7e] md:pt-64 md:text-sm xl:pt-52 xl:font-semibold">
                <div>Unlimited Reviews</div>
                <div className="py-5">Technical Support</div>
                <div>Deployment</div>
                <div className="pb-7 pt-5">Documentation</div>
                <div>Delivery Timeframe</div>
              </div>

              {/* BASIC PRICING */}
              {gig.pricing && gig.pricing.basic && (
              <div className="ml-[-4px] flex max-w-lg flex-col border border-[#c4c4c4] bg-white px-6">
                <div className="pt-4 text-2xl font-extrabold">${gig.pricing.basic.price || ' '}</div>
                <div className="pb-3 text-xs">{gig.pricing.basic.name || ' '}</div>
                <div className="text-xs text-[#b6bdc3]">
                  <div>{gig.pricing.basic.title || ' '}</div>
                  <div>{gig.pricing.basic.description || ' '}</div>
                </div>

                <div className="grid justify-items-center">
                  <div className="lg:pb-14 lg:pt-12 xl:pb-0 xl:pt-9">
                    <div className="md:pt-14 lg:pt-0">
                      <AiOutlineCheck className="text-2xl" />
                    </div>
                    <div className="md:pt-8 lg:pt-10 xl:pt-4">
                      <AiOutlineCheck className="text-2xl" />
                    </div>
                    <div className="pb-14 pt-[110px] text-xs lg:pb-2 lg:pt-[103px]">
                    {gig.pricing.basic.deliveryTimeframe || ' '}
                    </div>
                  </div>
                </div>

                <div>
                  <Link to="/GigCheckout">
                      <button
                      onClick={() => orderGig('basic')}
                    type="button"
                    className="mb-3 rounded bg-[#174568] py-2 text-xs font-medium text-white md:px-5 lg:mt-14 lg:px-8 xl:px-10"
                  >
                    Continue
                  </button>
                  </Link>
               
                </div>
              </div>)}

              {/* STANDARD PRICING */}
              {gig.pricing && gig.pricing.standard && (
              <div className="ml-[-4px] flex max-w-lg flex-col border border-[#c4c4c4] bg-white px-6">
                <div className="pt-4 text-2xl font-extrabold">${gig.pricing.standard.price || ' '}</div>
                <div className="pb-3 text-xs">{gig.pricing.standard.name || ' '}</div>
                <div className="text-xs text-[#b6bdc3]">
                  <div>{gig.pricing.standard.title || ' '}</div>
                  <div>{gig.pricing.standard.description || ' '}</div>
                </div>

                <div className="grid justify-items-center">
                  <div className="lg:pt-9">
                    <div className="pt-14 md:pb-12 lg:pb-20 lg:pt-0 xl:pb-10">
                      <AiOutlineCheck className="text-2xl" />
                    </div>
                    <div className="pt-4 md:pb-6 lg:pb-9 xl:pb-3">
                      <AiOutlineCheck className="text-2xl" />
                    </div>
                    <div>
                      <AiOutlineCheck className="text-2xl" />
                    </div>
                    <div className="pb-9 pt-7 text-xs lg:pb-1 lg:pt-7">
                    {gig.pricing.standard.deliveryTimeframe || ' '}
                    </div>
                  </div>
                </div>

                <div>
                <Link to="/GigCheckout">
                  <button
                   onClick={() => orderGig('standard')}
                    type="button"
                    className="mb-3 rounded bg-[#174568] py-2 text-xs font-medium text-white md:mt-6 md:px-5 lg:mt-14 lg:px-8 xl:px-10"
                  >
                    Continue
                  </button>
                  </Link>
                </div>
              </div>
              )}

              {/* ADVANCED PRICING */}

{gig.pricing && gig.pricing.advanced && (
              <div className="ml-[-4px] flex max-w-lg flex-col border border-[#c4c4c4] bg-white px-6">
                <div className="pt-4 text-2xl font-extrabold">${gig.pricing.advanced.price || ' '}</div>
                <div className="pb-3 text-xs">{gig.pricing.advanced.name || ' '}</div>
                <div className="text-xs text-[#b6bdc3]">
                <div>{gig.pricing.advanced.title || ' '}</div>
                <div>{gig.pricing.advanced.description || ' '}</div>
                </div>

                <div className="grid justify-items-center">
                  <div>
                    <div className="pt-[70px] md:pb-3 lg:pb-10 lg:pt-8 xl:pb-0">
                      <AiOutlineCheck className="text-2xl" />
                    </div>
                    <div className="pt-4 md:pb-4 lg:pb-8 xl:pb-4">
                      <AiOutlineCheck className="text-2xl" />
                    </div>
                    <div>
                      <AiOutlineCheck className="text-2xl" />
                    </div>
                    <div className="pb-6 pt-[70px] text-xs lg:pb-2 lg:pt-16">
                    {gig.pricing.advanced.deliveryTimeframe || ' '}
                    </div>
                  </div>
                </div>

                <div>
                <Link to="/GigCheckout">
                  <button
                    type="button"
                    onClick={() => orderGig('advanced')}
                    className="mb-3 rounded bg-[#174568] py-2 text-xs font-medium text-white md:mt-10 md:px-5 lg:mt-14 lg:px-8 xl:px-10"
                  >
                    Continue
                  </button>
                  </Link>
                </div>
              </div>)}

              {/* PRO */}
              {gig.pricing && gig.pricing.pro && (
              <div className="ml-[-4px] flex max-w-lg flex-col border border-[#c4c4c4] bg-white px-6">
                <div className="pt-4 text-2xl font-extrabold">${gig.pricing.pro.price || ' '}</div>
                <div className="pb-3 text-xs">{gig.pricing.pro.name || ' '}</div>
                <div className="text-xs text-[#b6bdc3]">
                <div>{gig.pricing.pro.title || ' '}</div>
                <div>{gig.pricing.pro.description || ' '}</div>
                </div>

                <div className="grid justify-items-center">
                  <div>
                    <div className="pt-16 md:pb-4 lg:pb-10 lg:pt-8 xl:pb-0">
                      <AiOutlineCheck className="text-2xl" />
                    </div>
                    <div className="pt-4 md:pb-14 lg:pb-9 xl:pb-12">
                      <AiOutlineCheck className="text-2xl" />
                    </div>
                    <div className="lg:pt-10 xl:pt-0 ">
                      <AiOutlineCheck className="text-2xl" />
                    </div>
                    <div className="pb-[36px] pt-8 text-xs lg:pb-2">
                    {gig.pricing.pro.deliveryTimeframe || ' '}
                    </div>
                  </div>
                </div>

                <div>
                <Link to="/GigCheckout">
                  <button
                    type="button"
                    onClick={() => orderGig('pro')}
                    className="mb-3 rounded bg-[#174568] py-2 text-xs font-medium text-white md:mt-7 md:px-5 lg:mt-14 lg:px-8 xl:px-10"
                  >
                    Continue
                  </button>
                  </Link>
                </div>
              </div>
              )}

              {/* PREMIUM PRICING */}
              {gig.pricing && gig.pricing.premium && (
              <div className="ml-[-4px] flex max-w-lg flex-col border border-[#c4c4c4] bg-white px-6">
                <div className="pt-4 text-2xl font-extrabold">${gig.pricing.premium.price || ' '}</div>
                <div className="pb-3 text-xs">{gig.pricing.premium.name || ' '}</div>
                <div className="text-xs text-[#b6bdc3]">
                <div>{gig.pricing.premium.title || ' '}</div>
                <div>{gig.pricing.premium.description || ' '}</div>
                </div>

                <div className="grid justify-items-center">
                  <div>
                    <div className="pt-16 md:pb-4 lg:pb-10 lg:pt-8 xl:pb-0">
                      <AiOutlineCheck className="text-2xl" />
                    </div>
                    <div className="pt-4 md:pb-14 lg:pb-9 xl:pb-12">
                      <AiOutlineCheck className="text-2xl" />
                    </div>
                    <div className="lg:pt-10 xl:pt-0 ">
                      <AiOutlineCheck className="text-2xl" />
                    </div>
                    <div className="pb-[36px] pt-8 text-xs lg:pb-2">
                    {gig.pricing.premium.deliveryTimeframe || ' '}
                    </div>
                  </div>
                </div>

                <div>
                <Link to="/GigCheckout">
                  <button
                    type="button"
                    onClick={() => orderGig('premium')}
                    className="mb-3 rounded bg-[#174568] py-2 text-xs font-medium text-white md:mt-7 md:px-5 lg:mt-14 lg:px-8 xl:px-10"
                  >
                    Continue
                  </button>
                  </Link>
                </div>
              </div>
              )}
            </div>
          </div>
        </section>

        {/* SM/ MOBILE DEVICES */}
      </div>
      <div>
        <MobilePricing />
      </div>
    </>
  );
}
