import Explore from "./explore";
import { file } from "./data";
import Carousel from "./carousel";

export default function index() {
  return (
    <>
      <div className="mx-5 mt-5 flex justify-between pb-5 sm:mx-5 sm:mt-0 sm:pb-0 sm:pt-7 md:mx-5 md:mt-0 md:pb-0 md:pl-5  md:pt-8 lg:mx-14 lg:mt-0 lg:pb-0 lg:pt-10 xl:mt-0 xl:pb-0 xl:pt-8">
        <div className=" mt-1 font-medium text-[#174568] sm:pl-0 sm:text-xl xl:ml-20">
          <span className="text-[#00162f]">SERVICES</span>{" "}
          <span className="text-[#567a96]">WE OFFER</span>
        </div>
        <a href="/AllServices">
          <div className="flex xl:mr-40">
            <div className="mr-2 pr-2 pt-2 text-xl text-[#174568]">See All</div>
            <div>
              <img src={file.image9} alt="image" />
            </div>
          </div>
        </a>
      </div>

      <Carousel />

      <Explore />
    </>
  );
}
