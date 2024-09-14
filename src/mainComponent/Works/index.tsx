import { first_text, Second_text, Third_text, first_slide } from "./data";
import { VscPassFilled } from "react-icons/vsc";


export default function Index() {
  return (
    <>
      <div>
        <div className="mx-5 mt-5 flex justify-between pb-5 sm:mx-5 sm:mt-0 sm:pb-0 sm:pt-7 md:mx-5 md:mt-0 md:pb-0 md:pl-5  md:pt-8 lg:mx-14 lg:mt-0 lg:pb-0 lg:pt-10 xl:mt-0 xl:pb-0 xl:pt-20">
          <div className=" mt-1 font-medium text-[#174568] sm:pl-0 sm:text-xl xl:ml-20">
            HOW IT WORKS?
          </div>
          <div className="flex xl:mr-40">
            <div className="pr-2 pt-2">Learn More</div>
            <div>
              <a href="/Tutorial">
                <img src={first_slide.fourth_img} alt="image" />
              </a>
            </div>
          </div>
        </div>

        <div className="mx-4 grid sm:mx-0 sm:grid-cols-2">
          <div className="order-last pt-10 sm:order-first sm:pt-0">
            {/* FIRST SLIDE */}
            <div className="mb-4 rounded-md border-solid border-transparent bg-[#e8ebef] sm:mr-5 sm:mt-3 sm:text-sm md:ml-10 md:mt-2 lg:mr-12 lg:mt-3 xl:mx-20 xl:mt-7">
              <div className="px-5">
                <div className="flex py-3 sm:py-1 md:py-2 xl:py-4">
                  <div className="pr-5">
                    <VscPassFilled className="text-[#edf2fe]" />
                  </div>
                  <div className="text-[#174568]"> {first_text.first_text}</div>
                </div>
                <div className="pb-2 pr-5 text-justify font-light sm:pr-2 xl:pb-5">
                  {first_text.second_text}
                </div>
              </div>
            </div>

            {/* SECOND SLIDE */}
            <div className="mb-4 rounded-md border-solid border-transparent bg-[#d3dbe1] sm:mr-5 sm:mt-2 sm:text-sm md:ml-10 md:mt-2 lg:ml-10 lg:mr-12 lg:mt-3 xl:mx-20 xl:mt-7">
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
                <div className="pb-4 pr-5 text-justify font-light sm:pr-2 xl:pb-5">
                  {Second_text.second_text}
                </div>
              </div>
            </div>

            {/* THIRD SLIDE */}
            <div className=" mb-4 rounded-md border-solid border-transparent bg-[#174568] sm:mr-5 sm:mt-2 sm:text-sm md:ml-10 md:mt-2 lg:ml-10 lg:mr-12 lg:mt-3 xl:mx-20 xl:mt-7">
              <div className="px-5">
                <div className="flex py-3 sm:py-2 md:py-2 xl:py-4">
                  <div className="pr-5 sm:pr-2">
                    <VscPassFilled className="text-white" />
                  </div>
                  <div className="text-white"> {Third_text.first_text}</div>
                </div>
                <div className="pb-4 pr-5 text-justify  text-[#d1dae1] sm:pr-2 xl:pb-5">
                  {Third_text.second_text}
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <div className="mx-8 mt-3">
              <img
                src={first_slide.first_img}
                alt="image"
                className="md:ml-7 md:w-4/5 lg:ml-10 lg:w-4/5 xl:ml-0 xl:w-4/5"
              />
            </div>
            <div className="flex pt-4 sm:px-10 md:pl-0 lg:pl-24 xl:pl-8">
              <div className="mx-2">
                <img
                  src={first_slide.second_img}
                  alt="image"
                  className="w-48 md:ml-10 md:w-36 lg:ml-0 lg:w-40 xl:w-48"
                />
              </div>
              <div className="mx-2 md:mx-0">
                <img
                  src={first_slide.third_img}
                  alt="image"
                  className="w-48 md:w-36 lg:w-40 xl:w-48"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
