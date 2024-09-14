import Sidebar from "../../";
import { notfication } from "./data";
import Header from "./Header";
import calendartoday from "/Images/calendartoday.png";
import arrowdropup from "/Images/arrowdropup.png";
import greenmark from "/Images/greenmark.png";
import OngoingProject from "./OngoingProject";
import Dropdown from "@mui/joy/Dropdown";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";
import more from "/Images/more.png";
import AdminBoard from "../../../MobileSidebar/MobileuserTimeline/AdminBoard";
import Chart2 from "../../../../mainComponent/Charts/Chart2";
import Barchart from "../../../../mainComponent/Charts/Barchart";

export default function index() {
  return (
    <div>
      <div className="hidden md:block">
        <Sidebar>
          <div className="bg-[#f5f5f5] dark:bg-black">
            <Header />
            <div className="mt-5 grid grid-cols-[50%_50%]">
              <div className="grid grid-cols-[25%_75%] rounded-md bg-white">
                <div className="pl-5 pt-4">
                  <div className="flex w-[90px] rounded-lg bg-[#F4F7FE] py-1 pl-2">
                    <div>
                      <img src={calendartoday} alt="image" className="size-3" />
                    </div>
                    <div className="pl-2 text-[10px] text-[#A3AED0]">
                      This month
                    </div>
                  </div>
                  <div className="pt-3 text-[25px] font-semibold text-[#2B3674]">
                    $37.5K
                  </div>
                  <div className="flex text-[10px]">
                    <div className="text-[#A3AED0]">Total income</div>
                    <div>
                      <img src={arrowdropup} alt="image" />
                    </div>
                    <div className="text-[#05CD99]">+2.45%</div>
                  </div>

                  <div className="flex pt-3">
                    <div>
                      <img src={greenmark} alt="image" className="size-3" />
                    </div>
                    <div className="pl-2 text-[10px] font-semibold text-[#05CD99]">
                      On track
                    </div>
                  </div>
                </div>

                <div>
                  <Chart2 />
                </div>
              </div>

              <div className="ml-10 w-full rounded-md bg-white px-20">
                <Barchart />
              </div>
            </div>

            <div className="grid lg:grid-cols-[60%_40%]">
              {/* ONGOING PROJECTS */}
              <div className="mt-5 bg-white dark:bg-black">
                <div className="pl-5">
                  <div className="flex justify-between px-5">
                    <div className="pt-3 text-[16px] font-semibold text-[#2B3674] dark:text-[#f5f5f5]">
                      Ongoing projects
                    </div>
                    <div className="py-2">
                      <Dropdown>
                        <MenuButton>
                          <img src={more} alt="image" className="size-3" />
                        </MenuButton>
                        <Menu>
                          <MenuItem>Completed</MenuItem>
                          <MenuItem>Cancel</MenuItem>
                          <MenuItem>Ongoing</MenuItem>
                        </Menu>
                      </Dropdown>
                    </div>
                  </div>

                  <OngoingProject />
                </div>
              </div>

              <div>
                <div className="mx-3 mt-5 rounded-lg bg-[#f9fbfc] dark:bg-black">
                  <div className="py-3 pl-5">
                    <div className="flex justify-between px-3">
                      <div className="text-[13px] text-[#1B2559] dark:text-[#f5f5f5]">
                        Unread Notifications
                      </div>
                      <div className="rounded-lg border bg-[#F4F7FE] px-3 py-0.5 dark:bg-black">
                        <button className="text-[#4318FF] dark:text-[#f5f5f5]">
                          {" "}
                          See all
                        </button>
                      </div>
                    </div>
                    {notfication.map((data, index) => {
                      return (
                        <div
                          key={index}
                          className="my-2 flex rounded-lg border bg-white px-3 py-5 pl-6 pt-3 dark:bg-black lg:py-2 lg:pl-0"
                        >
                          <div>
                            <img src={data.Notifipicture} alt="" />
                          </div>
                          <div className="pl-5">
                            <div>
                              <div className="font-semibold dark:text-[#f5f5f5]">
                                {data.amount}
                              </div>
                            </div>
                            <div className="flex pt-2">
                              <div className="text-[12px] text-[#A3AED0]">
                                {data.name}
                              </div>
                              <div className="pl-28 text-[12px] text-[#A3AED0]">
                                {data.time}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Sidebar>
      </div>
      <div>
        <AdminBoard />
      </div>
    </div>
  );
}
