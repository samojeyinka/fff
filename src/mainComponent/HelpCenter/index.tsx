/* eslint-disable tailwindcss/no-custom-classname */
import { firstDetails, secondDetails } from "./data";
import OtherDashboardHeader from "../../Headers/OtherDashboardHeader";
import Footer from "../Footer";
export default function index() {
  return (
    <>
      <OtherDashboardHeader />

      <div className="bg-[#f5f5f5] pb-20">
        <div className="mx-auto max-w-md pt-5 text-center md:pt-10">
          <div className="text-xs text-[#53686A]">FAQs</div>
          <div className="py-2 text-xl font-semibold text-[#7295B8] sm:font-normal">
            Ask us anything
          </div>
          <div className="pb-3 text-xs text-[#53686A] sm:pb-6">
            Have any questions? We're here to assist you.
          </div>
          <div className="grid justify-items-center">
            <form>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                  <svg
                    className="size-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block rounded-lg border border-transparent bg-white px-4 ps-10 text-sm text-[#7295B8] focus:border-transparent focus:ring-transparent "
                  placeholder="Search here"
                  required
                />
              </div>
            </form>
          </div>
        </div>
        <div className="mx-3">
          <div className="grid pt-3 text-justify md:grid-cols-3 md:pt-10  lg:px-20 xl:px-40">
            {secondDetails.map((data) => {
              return (
                <div className="px-5 text-xs">
                  <div className="pt-5 md:pt-0">
                    <img src={data.second} alt="" />
                  </div>
                  <div className="py-3">{data.firstParagraph}</div>
                  <div className="text-[#53686A]">{data.secondParagraph}</div>
                </div>
              );
            })}
          </div>

          <div className="grid text-justify md:grid-cols-3 md:pt-10  lg:px-20 xl:px-40">
            {firstDetails.map((data) => {
              return (
                <div className="px-5 text-xs">
                  <div className="pt-5 md:pt-0">
                    <img src={data.first} alt="" />
                  </div>
                  <div className="py-3">{data.firstParagraph}</div>
                  <div className="text-[#53686A]">{data.secondParagraph}</div>
                </div>
              );
            })}
          </div>

          {/* MD/LG/XL SCREENS */}
          <div className="hidden sm:block">
            <div className="mt-8 flex justify-between rounded-md border bg-white p-3 text-[8px] md:mx-20 md:mt-16 md:px-10 md:text-xs lg:mx-40">
              <div>
                <div>Still have questions?</div>
                <div className="pt-1">
                  Can’t find the answer you’re looking for? Please chat to our
                  friendly team.
                </div>
              </div>

              <div className="pt-4 text-white">
                <a href="/Contact">
                  <span className="rounded-md border bg-[#174568] px-3 py-2">
                    Get in touch
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* MOBILE DEVICE SCREENS */}
          <div className="sm:hidden">
            <div className="mt-8 flex justify-between rounded-md border bg-white p-3 text-[8px] md:mx-20 md:mt-16 md:px-10 md:text-xs lg:mx-40">
              <div>
                <div>Still have questions?</div>
                <div className="pt-1">
                  Can’t find the answer you’re looking for? Please chat to our
                  friendly team.
                </div>
              </div>
            </div>
            <div className="pt-4 text-white">
              <a href="/Contact">
                <button className="w-full rounded-md border bg-[#174568] px-3 py-2">
                  Get in touch
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
