import { Sidebar } from "flowbite-react";
import { AiFillHome } from "react-icons/ai";
import { IoGrid, IoSettingsOutline } from "react-icons/io5";
import { FiDollarSign } from "react-icons/fi";
import { IoIosLogOut } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import Question from "/Images/Question.png";
import MobileSidebar from "../../MobileSidebar/Features/MobileSidebar";
import { signOut } from "../../../redux/user/userSlice";
import { useDispatch } from "react-redux";

export default function Index() {
  // TO PREVENT USER TO GO BACK TO DASHBOARD WHEN THEY LOGOUT
  const active = "relative flex items-center gap-x-4 text-base text-[#7290a8]";
  const inactive =
    "relative flex items-center gap-x-4 text-base text-[#9d9d9d]";
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
                <Link to="/" className="text-lg">
                  <span className="font-semibold text-[#174568] dark:text-black">
                    Hello
                  </span>
                  <span className="text-[#9d9d9d]">cer</span>
                </Link>
              </Sidebar.Item>
              <hr className="text-[#F4F7FE]" />
              <Sidebar.Item className="relative mt-5">
                <NavLink
                  to="/Dashboard"
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

              <Sidebar.Item className="relative mt-5">
                <NavLink
                  to="/Project"
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
              <Sidebar.Item className="relative mt-5">
                <NavLink
                  to="/PaymentSettings"
                  className={({ isActive }) => (isActive ? active : inactive)}
                >
                  {({ isActive }) => (
                    <>
                      <FiDollarSign size={20} />
                      <div className="font-semibold">Payment settings</div>
                      {isActive && (
                        <span className="absolute right-[-21px] top-[-10x] h-[38px] w-[3px] rounded-2xl bg-[#1b4368]"></span>
                      )}
                    </>
                  )}
                </NavLink>
              </Sidebar.Item>

              <Sidebar.Item className="relative mt-5">
                <NavLink
                  to="/Settings"
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
                <Sidebar.Item
                  icon={IoIosLogOut}
                  className="mb-40 text-xs text-[#9d9d9d] md:mb-72 lg:mb-60 xl:mb-52"
                >
                  Logout
                </Sidebar.Item>
              </button>

              <div className="mr-10  rounded-xl border bg-[#174568] px-5 text-center font-medium">
                <div className="mt-[-40px] pl-8">
                  <img src={Question} alt="image" />
                </div>
                <div className="mt-[-10px] font-medium text-white">
                  <div className="pt-2">Help Center</div>
                  <div className="py-3">
                    Having trouble using the platform or did you encounter any
                    technical issue
                  </div>
                </div>

                <div className="pb-3">
                  <Link to="/HelpCenter">
                    <button
                      type="button"
                      className="rounded-lg border bg-white p-1 font-normal text-[#174568]"
                    >
                      Go To Help Center
                    </button>
                  </Link>
                </div>
              </div>
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
