import { Link } from "react-router-dom";
import blank from "/Images/blank.png";
import Sidebar from "../../";
import AdminHeader from "../../../../Headers/AdminHeader";
import AdminAddNewGigs from "../../../MobileSidebar/MobileuserTimeline/AdminAddNewGigs";

export default function Index() {
  return (
    <Sidebar>
      <div className="hidden md:block">
        <div className="w-[610px] bg-[#f5f5f5] pb-[200px] pt-10 lg:w-[1000px] lg:pl-6 lg:pr-16 xl:pl-12 dark:bg-black">
          <div className="flex justify-between">
            <div className="pt-3 text-2xl font-semibold text-[#4B718F] dark:text-[#f5f5f5]">
              Add New Gig
            </div>
            <div>
              <AdminHeader />
            </div>
          </div>

          <div className="grid justify-items-center border-0 bg-white md:mt-10 md:h-60 md:w-[500px] xl:h-80 xl:w-[700px]">
            <div className="mt-10">
              <div className="grid justify-center">
                <img src={blank} alt="blank" className="size-14 md:size-20" />
              </div>
              <div className="pt-2 text-xs text-[#AFAFAF]">
                There are no gigs here at the moment
              </div>
              <div className="mb-10 grid justify-center pt-3 text-sm font-semibold underline md:mb-0 dark:text-white">
                <Link to="/AddNewGigs">ADD NEW GIG</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <AdminAddNewGigs />
      </div>
    </Sidebar>
  );
}
