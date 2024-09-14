import { useEffect, useState } from "react";
import { initFlowbite } from "flowbite";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "../../redux/user/userSlice";
import { Link } from "react-router-dom";

// import { DarkThemeToggle } from "flowbite-react";
export default function Index() {
  const [toggle, setToggle] = useState(false);
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

  useEffect(() => {
    initFlowbite();
  }, []);

  const { currentUser } = useSelector((state) => state.user);

  return (
    <>
      <nav className="border-gray-200 bg-[#EEF5F0] pt-3">
        <div className="flex max-w-screen-xl flex-wrap items-center justify-between sm:justify-start">
          <div className="ml-4 mt-[-20px] pt-5 sm:text-2xl md:ml-10 md:mt-[-10px] md:pl-5 md:pr-20 md:pt-2 lg:ml-14 lg:pl-10 lg:pr-32 lg:pt-0 xl:mr-[200px]">
            <a href="/#top">
              <span className="text-[#174568] dark:text-white">Hello</span>
              <span className="text-[#7295B8]">cer</span>
            </a>
          </div>

          <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            className="mr-4 inline-flex size-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:mr-0 md:hidden"
            aria-controls="navbar-dropdown"
            aria-expanded="false"
          >
            <svg
              className="size-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-dropdown"
          >
            <ul className="ml-4 flex flex-col rounded-lg border border-gray-100 font-normal md:ml-0 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 md:dark:bg-gray-900 rtl:space-x-reverse">
              <li className="mt-4">
                <a href="/#Works" className="md:hover:text-blue-700">
                  <span>How it Works?</span>
                </a>
              </li>
              <li className="mt-4">
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  className="flex w-full items-center justify-between rounded-md py-2 pr-10 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:focus:text-white sm:px-0 md:w-auto md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                >
                  <span>Explore</span>
                  <svg
                    className="ms-2.5 size-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <div
                  id="dropdownNavbar"
                  className="z-10 hidden w-44 divide-y divide-gray-100 rounded-lg bg-white font-normal shadow dark:divide-gray-600 dark:bg-gray-700"
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-400"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <a
                        href="/#Services"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Services
                      </a>
                    </li>
                    <li>
                      <a
                        href="/#Explore"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Explore
                      </a>
                    </li>
                    <li>
                      <a
                        href="/#Unique"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        why we are unique?
                      </a>
                    </li>
                  </ul>
                  <div className="py-1">
                    <a
                      href="/#Started"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Ready to get started?
                    </a>
                  </div>
                </div>
              </li>
              <li className="mt-4 md:pr-10 lg:pr-0">
                <a
                  href="/AllServices"
                  className="dark:text-white md:hover:text-blue-700"
                >
                  Hire Talent
                </a>
              </li>

              <li className="py-5 md:pl-20 lg:pl-48 xl:pl-60">
                {currentUser ? (
                  <div>
                    <div
                      // to="/dashboard"
                      onClick={() => setToggle(!toggle)}
                      className=" relative block cursor-pointer rounded-md hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white sm:px-0 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                    >
                      <img
                        src={currentUser.profilePicture}
                        className="rounded-full"
                        alt="Profile picture"
                        width="40px"
                      />
                      {toggle && (
                        <div className="absolute bottom-[-80px] flex flex-col items-start justify-center rounded-lg bg-white px-5 py-3">
                          <Link
                            to="/dashboard"
                            className="mb-[6px] text-[#174568]"
                          >
                            Dashboard
                          </Link>
                          <button
                            onClick={handleSignOut}
                            className="text-[#174568]"
                          >
                            Logout
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <a
                    href="/Login"
                    className="block rounded-md hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white sm:px-0 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                  >
                    <span className="rounded-2xl border-solid border-[#FCF6F6] bg-[#174568] px-4 py-2 text-white">
                      Sign up/login
                    </span>
                  </a>
                )}
              </li>

              {/* <li className="ml-[-10px] mt-2">
                <DarkThemeToggle />
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
