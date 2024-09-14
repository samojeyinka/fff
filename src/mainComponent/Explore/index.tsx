import { data } from "./data";
import Paginate from "./paginate";

export default function Index() {
  return (
    <>
      <div className="mx-5 mt-5 flex justify-between sm:mx-5 sm:mb-5 sm:mt-0 sm:pb-0 sm:pt-5 md:mx-5 md:pl-5 lg:mx-14 lg:pb-0 xl:mt-0 xl:pb-0">
        <div className="mt-1 font-medium text-[#174568] sm:pl-0 sm:text-xl xl:ml-20">
          EXPLORE
        </div>
        <a href="/AllGigs">
          <div className="flex xl:mr-40">
          <div className="mr-2 pr-2 pt-2 text-xl text-[#174568]">See All</div>
            <div>
              <img src={data.image1} alt="image" />
            </div>
          </div>
        </a>
      </div>
      <div className="ml-5">
        <Paginate />
      </div>
    </>
  );
}
