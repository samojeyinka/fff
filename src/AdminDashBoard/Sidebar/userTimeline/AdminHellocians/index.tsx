import { Link } from "react-router-dom";
import redIcon from "/Images/redIcon.png";
import Sidebar from "../../";
import AdminHellocians from "../../../MobileSidebar/MobileuserTimeline/AdminHellocians";
import Header from "./Header"
import Dropdown from "@mui/joy/Dropdown";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";
import more from "/Images/more.png";
import Hellocians from "./Hellocians";
import AdminGigs from "../../../MobileSidebar/MobileuserTimeline/AdminGigs"
import axios from "axios";
import { useState, useEffect } from "react";

export default function index() {

  const [hellocians, setHellocians] = useState([]);


  const getHellocians = async () => {
    try {
      const allHellocians = await axios.get("http://localhost:8080/api/hellocian/hellocians");
      const data = allHellocians.data.hellocians;
      console.log(data)
      setHellocians(data);
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    getHellocians();
  })

  return (
    <Sidebar>
      {hellocians.length > 0 ? (
        <div className="hidden bg-[#f5f5f5] dark:bg-black md:block">
          <Header />

          <div>
            {/* ONGOING PROJECTS */}
            <div className="mx-4 mt-5 rounded-lg bg-white dark:bg-black">
              <div className="flex justify-between px-5">
                <div className="pt-3 text-[16px] font-semibold text-[#2B3674] dark:text-[#f5f5f5]">
                  Hellocians
                </div>
                <div className="py-2">
                  <Dropdown>
                    <MenuButton>
                      <img src={more} alt="image" />
                    </MenuButton>
                    <Menu>
                      <MenuItem>Completed</MenuItem>
                      <MenuItem>Cancel</MenuItem>
                      <MenuItem>Ongoing</MenuItem>
                    </Menu>
                  </Dropdown>
                </div>
              </div>
              <Hellocians hellocians={hellocians} />
            </div>
          </div>
        </div>) : (

        <div className="hidden md:block">
          <div className="bg-[#f5f5f5] pb-[256px] pr-[447px] dark:bg-black">
            <div className="flex justify-between pt-20"></div>
            <div className="grid w-80 justify-items-center border bg-white md:mt-20 md:h-60 md:w-[500px] xl:h-80 xl:w-[560px]  ml-[10%]">
              <div className="mt-5 md:mt-10">
                <div className="grid justify-center">
                  <img src={redIcon} alt="blank" className="size-14 md:size-20" />
                </div>
                <div className="grid justify-items-center pt-2 text-xs text-[#AFAFAF]">
                  <div>There are no hellocians here at the moment,</div>
                  <div>please check back later. Thank You!</div>
                </div>
                <div className="mb-10 grid justify-center pt-3 text-sm font-semibold underline dark:text-white md:mb-0">
                  <Link to="/AddHellocians">+ Add new</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div>
        <AdminGigs />
      </div>
    </Sidebar>
  );
}
