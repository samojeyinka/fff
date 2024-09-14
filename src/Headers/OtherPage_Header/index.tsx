import { useEffect } from "react";
import { initFlowbite } from "flowbite";

// import { DarkThemeToggle } from "flowbite-react";
export default function Index() {
  useEffect(() => {
    initFlowbite();
  }, []);

  return (
    <>
      <nav className="border-gray-200 bg-white px-2 pt-3 md:mx-0 md:px-0 md:pt-3">
        <div className="flex max-w-screen-xl flex-wrap items-center justify-between sm:justify-start">
          <div className="ml-4 mt-[-20px] pt-5 sm:text-2xl md:ml-10 md:mt-[-10px] md:pl-5 md:pr-20 md:pt-2 lg:ml-14 lg:pl-10 lg:pr-32 lg:pt-0 xl:mr-[189px] xl:pl-16">
            <a href="/#top">
              <span className="text-[#174568] dark:text-white">Hello</span>
              <span className="text-[#7295B8]">cer</span>
            </a>
          </div>
          <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            className="mr-4 inline-flex size-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:mr-0 md:hidden"
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
                  className="flex w-full items-center justify-between rounded-md py-2 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:focus:text-white sm:px-0 md:w-auto md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
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

              <li className="py-5 sm:pl-0 md:pl-40 lg:pl-48 xl:pl-60">
                <a
                  href="/Login"
                  className="block rounded-md hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white sm:px-0 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                >
                  <span className="rounded-2xl border-solid border-[#FCF6F6] bg-[#174568] px-4 py-2 text-white">
                    Sign up/login
                  </span>
                </a>
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
