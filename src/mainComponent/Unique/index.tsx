import { first_text, Second_text, Third_text, first_slide } from "./data";
import { VscPassFilled } from "react-icons/vsc";

export default function Index() {
  return (
    <>
      <div className="bg-[#f5f5f5]">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="">
            <div className="mx-8 sm:mt-14 md:mt-14 lg:mt-10 xl:mt-8">
              <img
                src={first_slide.first_img}
                alt="image"
                className="md:ml-7 md:w-4/5 lg:ml-10 lg:w-4/5 xl:ml-20 xl:w-4/5"
              />
            </div>
            <div className="flex pl-3 pt-4 md:pl-10 lg:pl-24 xl:pl-24 ">
              <div className="mx-2 xl:ml-14 xl:mr-0">
                <img
                  src={first_slide.second_img}
                  alt="image"
                  className="w-48 md:ml-10 md:w-36 lg:ml-0 lg:w-40 xl:w-48"
                />
              </div>
              <div className="mr-2 sm:mr-0 md:mr-0 lg:mr-0 xl:mr-0">
                <img
                  src={first_slide.third_img}
                  alt="image"
                  className="w-48 md:w-36 lg:w-40 xl:w-48"
                />
              </div>
            </div>
          </div>
          <div className="mx-5">
            <div className="pb-5 pt-10 font-medium text-[#174568] sm:pb-0 sm:pl-2 sm:pt-4 sm:text-xl md:pb-0 md:pl-2 md:pt-4 lg:pb-0 lg:pt-4 xl:pb-0 xl:pl-2 xl:pt-4">
              WHY WE ARE UNIQUE
            </div>

            {/* FIRST SLIDE */}
            <div className="mb-4 rounded-xl border-solid border-transparent bg-[#e8ebef] sm:mb-0 sm:mr-0 sm:mt-3 sm:text-sm md:mb-0 md:mt-2 lg:mb-0 lg:mr-14 lg:mt-3 xl:mb-0 xl:mr-44 xl:mt-7">
              <div className="px-5">
                <div className="flex py-3 sm:py-1 md:py-2 xl:py-4">
                  <div className="pr-5">
                    <VscPassFilled className="text-[#edf2fe]" />
                  </div>
                  <div className="text-[#174568]"> {first_text.first_text}</div>
                </div>
                <div className="pb-2 pr-5 text-justify font-light sm:pr-2 xl:pb-4">
                  {first_text.second_text}
                </div>
              </div>
            </div>

            {/* SECOND SLIDE */}
            <div className="mb-4 rounded-md border-solid border-transparent bg-[#d3dbe1] sm:mb-0 sm:mr-0 sm:mt-2 sm:text-sm md:mb-0 md:mt-2 lg:mb-0 lg:mr-14 lg:mt-3 xl:mb-0 xl:mr-44 xl:mt-7">
              <div className="px-5">
                <div className="flex py-3 sm:py-2 md:py-2 xl:py-4">
                  <div className="pr-5 sm:pr-2">
                    <VscPassFilled className="text-[#EDF2FE]" />
                  </div>
                  <div className="text-[#174568]">
                    {" "}
                    {Second_text.first_text}
                  </div>
                </div>
                <div className="pb-4 pr-5 text-justify font-light sm:pr-2 xl:pb-4">
                  {Second_text.second_text}
                </div>
              </div>
            </div>

            {/* THIRD SLIDE */}
            <div className="mr-0 rounded-md border-solid border-transparent bg-[#174568] sm:mr-0 sm:mt-2 sm:text-sm md:mt-2 lg:mr-14 lg:mt-3 xl:mr-44 xl:mt-7">
              <div className="px-5">
                <div className="flex py-3 sm:py-2 md:py-2 xl:py-4">
                  <div className="pr-5">
                    <VscPassFilled className="text-[#ffffff]" />
                  </div>
                  <div className="text-[#ffffff]"> {Third_text.first_text}</div>
                </div>
                <div className="pb-4 pr-5 text-justify  text-[#d1dae1] sm:pr-2 xl:pb-4">
                  {Third_text.second_text}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
