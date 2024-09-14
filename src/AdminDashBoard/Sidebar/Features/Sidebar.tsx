import { Sidebar } from "flowbite-react";
import { AiFillHome } from "react-icons/ai";
import { IoGrid, IoSettingsOutline } from "react-icons/io5";
import { IoIosLogOut, IoMdPeople, IoMdPerson } from "react-icons/io";
import { NavLink } from "react-router-dom";
import MobileSidebar from "../../MobileSidebar/Features/MobileSidebar";
import { LuServer } from "react-icons/lu";
import { FaRegEnvelope } from "react-icons/fa";
import { signOut } from "../../../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Index() {
  const active = "relative flex items-center gap-x-4 text-base text-[#7290a8]";
  const inactive =
    "relative flex items-center gap-x-4 text-base text-[#9d9d9d]";
  // TO PREVENT USER TO GO BACK TO DASHBOARD WHEN THEY LOGOUT
  const dispatch = useDispatch();
  const handleSignOut = async () => {
    try {
      await fetch("http://localhost:8080/api/auth/signout");
      dispatch(signOut());
    } catch (error) {
      console.log("Unable to sign out");
      console.log(error);
    }
  };

  return (
    <>
      <div className="hidden md:block">
        <Sidebar aria-label="Default sidebar example" className="text-xs">
          <Sidebar.Items>
            <Sidebar.ItemGroup className="bg-white pb-20 dark:bg-black">
              <Sidebar.Item className="hover:bg-white ">
                <div className="text-lg">
                  <span className="font-semibold text-[#174568] dark:text-black">
                    Hello
                  </span>
                  <span className="text-[#9d9d9d]">cer</span>
                </div>
              </Sidebar.Item>
              <hr className="text-[#F4F7FE]" />

              <Sidebar.Item className="relative mt-5">
                <NavLink
                  to="/AdminBoard"
                  className={({ isActive }) => (isActive ? active : inactive)}
                >
                  {({ isActive }) => (
                    <>
                      <AiFillHome size={20} />
                      <div className="font-semibold">Dashboard</div>
                      {isActive && (
                        <span className="absolute right-[-21px] top-[-10x] h-[38px] w-[3px] rounded-2xl bg-[#1b4368]"></span>
                      )}
                    </>
                  )}
                </NavLink>
              </Sidebar.Item>

              <Sidebar.Item className="relative mt-1">
                <NavLink
                  to="/AdminGigs"
                  className={({ isActive }) => (isActive ? active : inactive)}
                >
                  {({ isActive }) => (
                    <>
                      <LuServer size={20} />
                      <div className="font-semibold">Gigs</div>
                      {isActive && (
                        <span className="absolute right-[-21px] top-[-10x] h-[38px] w-[3px] rounded-2xl bg-[#1b4368]"></span>
                      )}
                    </>
                  )}
                </NavLink>
              </Sidebar.Item>
              <Sidebar.Item className="relative mt-1">
                <NavLink
                  to="/AdminAddNewGigs"
                  className={({ isActive }) => (isActive ? active : inactive)}
                >
                  {({ isActive }) => (
                    <>
                      <LuServer size={20} />
                      <div className="font-semibold">Add New Gigs</div>
                      {isActive && (
                        <span className="absolute right-[-21px] top-[-10x] h-[38px] w-[3px] rounded-2xl bg-[#1b4368]"></span>
                      )}
                    </>
                  )}
                </NavLink>
              </Sidebar.Item>

              <Sidebar.Item className="relative mt-1">
                <NavLink
                  to="/AdminNewCategory"
                  className={({ isActive }) => (isActive ? active : inactive)}
                >
                  {({ isActive }) => (
                    <>
                      <LuServer size={20} />
                      <div className="font-semibold">Add New Category</div>
                      {isActive && (
                        <span className="absolute right-[-21px] top-[-10x] h-[38px] w-[3px] rounded-2xl bg-[#1b4368]"></span>
                      )}
                    </>
                  )}
                </NavLink>
              </Sidebar.Item>

              <Sidebar.Item className="relative mt-1">
                <NavLink
                  to="/AdminHellocians"
                  className={({ isActive }) => (isActive ? active : inactive)}
                >
                  {({ isActive }) => (
                    <>
                      <IoMdPeople size={20} />
                      <div className="font-semibold">Hellocians</div>
                      {isActive && (
                        <span className="absolute right-[-21px] top-[-10x] h-[38px] w-[3px] rounded-2xl bg-[#1b4368]"></span>
                      )}
                    </>
                  )}
                </NavLink>
              </Sidebar.Item>

              <Sidebar.Item className="relative mt-1">
                <NavLink
                  to="/AdminProject"
                  className={({ isActive }) => (isActive ? active : inactive)}
                >
                  {({ isActive }) => (
                    <>
                      <IoGrid size={20} />
                      <div className="font-semibold">Project</div>
                      {isActive && (
                        <span className="absolute right-[-21px] top-[-10x] h-[38px] w-[3px] rounded-2xl bg-[#1b4368]"></span>
                      )}
                    </>
                  )}
                </NavLink>
              </Sidebar.Item>

              <Sidebar.Item className="relative mt-1">
                <NavLink
                  to="/AdminClientsData"
                  className={({ isActive }) => (isActive ? active : inactive)}
                >
                  {({ isActive }) => (
                    <>
                      <IoMdPerson size={20} />
                      <div className="font-semibold">Clients Data</div>
                      {isActive && (
                        <span className="absolute right-[-21px] top-[-10x] h-[38px] w-[3px] rounded-2xl bg-[#1b4368]"></span>
                      )}
                    </>
                  )}
                </NavLink>
              </Sidebar.Item>

              <Sidebar.Item className="relative mt-1">
                <NavLink
                  to="/AdminMessages"
                  className={({ isActive }) => (isActive ? active : inactive)}
                >
                  {({ isActive }) => (
                    <>
                      <FaRegEnvelope size={20} />
                      <div className="font-semibold">Messages</div>
                      {isActive && (
                        <span className="absolute right-[-21px] top-[-10x] h-[38px] w-[3px] rounded-2xl bg-[#1b4368]"></span>
                      )}
                    </>
                  )}
                </NavLink>
              </Sidebar.Item>

              <Sidebar.Item className="relative mt-1">
                <NavLink
                  to="/AdminSettings"
                  className={({ isActive }) => (isActive ? active : inactive)}
                >
                  {({ isActive }) => (
                    <>
                      <IoSettingsOutline size={20} />
                      <div className="font-semibold">Settings</div>
                      {isActive && (
                        <span className="absolute right-[-21px] top-[-10x] h-[38px] w-[3px] rounded-2xl bg-[#1b4368]"></span>
                      )}
                    </>
                  )}
                </NavLink>
              </Sidebar.Item>

              <button onClick={handleSignOut}>
                <Sidebar.Item className="mb-40 text-xs text-[#9d9d9d] md:mb-72 lg:mb-60 xl:mb-64">
                  <div className="flex text-[13px] text-[#9d9d9d]">
                    <div className="text-[20px]">
                      <IoIosLogOut />
                    </div>
                    <div className="pl-3 pt-1 font-semibold"> Logout</div>
                  </div>
                </Sidebar.Item>
              </button>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>

      <div>
        <MobileSidebar />
      </div>
    </>
  );
}
