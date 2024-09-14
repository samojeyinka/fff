import Sidebar from "../..";
import AdminHeader from "../../../../Headers/AdminHeader";
import { Link } from "react-router-dom";
import AdminProject from "../../../MobileSidebar/MobileuserTimeline/AdminProject";
import coloredBlank from "/Images/coloredBlank.png";

export default function Index() {
  return (
    <>
      <div className="hidden sm:block">
        <Sidebar>
          <div className="hidden md:block">
            <div className="bg-[#f5f5f5] pb-[256px] pr-[445px] dark:bg-black">
              <div className="flex justify-between pt-20">
                <div className="pl-5 pt-4 text-2xl font-semibold text-[#174568] dark:text-[#f5f5f5]">
                  Projects
                </div>

                <div>
                  <AdminHeader />
                </div>
              </div>
              <div className="grid w-80 justify-items-center border bg-white md:mt-20 md:h-60 md:w-[500px] xl:h-80 xl:w-[550px]">
                <div className="mt-5 md:mt-10">
                  <div className="grid justify-center">
                    <img
                      src={coloredBlank}
                      alt="blank"
                      className="size-14 md:size-20"
                    />
                  </div>
                  <div className="grid justify-items-center pt-2 text-xs text-[#AFAFAF]">
                    <div>There are no projects here at the moment,</div>
                    <div>please check back later. Thank You!</div>
                  </div>
                  <div className="mb-10 grid justify-center pt-3 text-sm font-semibold underline md:mb-0 dark:text-white">
                    <Link to="">Reload</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Sidebar>
      </div>

      {/* FOR MOBILE DEVICES */}
      <div>
        <AdminProject />
      </div>
    </>
  );
}
