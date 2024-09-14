/* eslint-disable tailwindcss/no-custom-classname */
import { data } from "./data";
import Header from "../../Headers/DashboardHeader";
import Footer from "../Footer";

export default function index() {
  return (
    <>
      <Header />

      {/* SM/ MD/ LG/ XL SCREEN */}
      <div className="hidden bg-[#EEF5F0] pt-10 sm:block sm:text-xs md:text-base">
        {/* MISSION */}
        <div>
          <div className="pb-10 text-center text-2xl font-semibold">
            About Us
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="text-justify sm:mt-4 sm:px-2 md:mt-3 md:px-6 lg:mt-14 lg:px-20 xl:mt-28 xl:px-36">
              <div className="pb-4 text-2xl font-semibold">{data.Mission}</div>
              <div>{data.MissionFirst_paragraph}</div>
              <div className="pt-2">{data.MissionSecond_paragraph}</div>
            </div>
            <div className="order-first sm:order-last">
              <img src={data.image1} alt="image" className="h-4/5 lg:pr-20" />
            </div>
          </div>
        </div>

        {/* APPROACH */}

        <div className="mt-[-120px] sm:mt-[-60px]">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div>
              <img
                src={data.image2}
                alt="image"
                className="md:h-5/5 sm:h-4/5 md:pl-4 lg:h-4/5 lg:pl-20"
              />
            </div>

            <div className="md:px- text-justify md:mt-3 lg:mt-14 lg:px-0 lg:pr-36 xl:mt-28">
              <div className="pb-4 text-2xl font-semibold">{data.Approach}</div>
              <div>{data.ApproachFirst_paragraph}</div>
              <div className="pt-2">{data.ApproachSecond_paragraph}</div>
              <div className="pt-2">{data.ApproachThird_paragraph}</div>
            </div>
          </div>
        </div>

        {/* TEAM */}
        <div className="lg:mt-[-50px] xl:mt-[-120px]">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="text-justify sm:mt-4 sm:px-2 md:mt-10 md:px-14 lg:mt-14 lg:px-20 xl:mt-28 xl:px-36">
              <div className="pb-4 text-2xl font-semibold">{data.Team}</div>
              <div>{data.TeamFirst_paragraph}</div>
              <div className="pt-2">{data.TeamSecond_paragraph}</div>
            </div>
            <div>
              <img src={data.image3} alt="image" className="h-4/5 lg:pr-20" />
            </div>
          </div>
        </div>

        <div className="bg-[#D9D9D9] md:mt-[-100px] lg:mt-[-80px] xl:mt-[-120px]">
          <div className="pt-20 text-center text-2xl font-semibold text-black">
            MEET THE TEAM
          </div>
          <div className="py-24">
            <div className="flex pl-10">
              <div className="pr-5">
                <img src={data.image4} alt="image" />
              </div>

              <div className="md:pr-10 xl:pr-0">
                <img src={data.image5} alt="image" />
              </div>
            </div>

            <div className="flex pl-10 pt-5">
              <div className="pr-5">
                <img src={data.image6} alt="image" />
              </div>

              <div className="md:pr-10 xl:pr-0">
                <img src={data.image7} alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE SCREEN */}
      <div className="px-5 text-sm sm:hidden">
        {/* MISSION */}
        <div>
          <div className="pb-5 text-center text-2xl font-normal">About Us</div>

          <div>
            <div className="text-justify">
              <div className="pb-3 text-2xl font-normal">{data.Mission}</div>

              <div className="pb-6">
                <img src={data.image1} alt="image" className="h-80 w-full" />
              </div>

              <div>{data.MissionFirst_paragraph}</div>
              <div className="pb-6 pt-2">{data.MissionSecond_paragraph}</div>
            </div>
          </div>
        </div>

        {/* APPROACH */}

        <div>
          <div className="pb-3 text-2xl font-normal">{data.Approach}</div>
          <div>
            <img src={data.image2} alt="image" className="h-80 w-full" />
          </div>

          <div className="text-justify">
            <div className="pt-3">{data.ApproachFirst_paragraph}</div>
            <div className="pt-2">{data.ApproachSecond_paragraph}</div>
            <div className="pb-5 pt-2">{data.ApproachThird_paragraph}</div>
          </div>
        </div>

        {/* TEAM */}
        <div>
          <div>
            <div className="text-justify">
              <div className="pb-2 text-2xl font-normal">{data.Team}</div>
              <div>
                <img src={data.image3} alt="image" className="h-80 w-full" />
              </div>
              <div className="pt-3">{data.TeamFirst_paragraph}</div>
              <div className="pb-5 pt-2">{data.TeamSecond_paragraph}</div>
            </div>
          </div>
        </div>

        <div className="bg-[#D9D9D9] ">
          <div className="pt-12 text-center text-2xl font-semibold text-black">
            MEET THE TEAM
          </div>
          <div className="py-12">
            <div className="flex px-4">
              <div className="pr-3">
                <img src={data.image4} alt="image" />
              </div>

              <div>
                <img src={data.image5} alt="image" />
              </div>
            </div>

            <div className="flex px-4 pt-3">
              <div className="pr-3">
                <img src={data.image6} alt="image" />
              </div>

              <div className="md:pr-10 xl:pr-0">
                <img src={data.image7} alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </>
  );
}
