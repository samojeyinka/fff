/* eslint-disable tailwindcss/migration-from-tailwind-2 */
/* eslint-disable tailwindcss/no-custom-classname */
import { useState } from "react";
import { text_data } from "../data";
import ReactPaginate from "react-paginate";
import "../../../index.css";
import { FaLessThan, FaGreaterThan } from "react-icons/fa6";
import Footer from "../../Footer";
import Header from "../../../Headers/OtherPage_Header";
import { Link } from "react-router-dom";
import SortGigs from "./SortGigs";

export default function Index() {
  const [users] = useState(text_data);
  const [pageNumber, setPageNumber] = useState(0);

  // increase the userPerPage number by 4 to increase the row
  const usersPerPage = 24;
  const pagesVisited = pageNumber * usersPerPage;

  const displayUsers = users
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((text_data) => {
      return (
        <div className="max-w-md p-5 pr-4 sm:max-w-xs" key={text_data.id}>
          <a href="">
            <div>
              <img
                className="w-full"
                src={text_data.display}
                alt="image"
              />
            </div>
            <div className="pl-3 pt-3">
              <div className="flex pb-1">
                <div>
                  <img src={text_data.image} alt="image" />
                </div>
                <div className="pl-1 text-sm text-[#9d9d9d]">
                  {text_data.name}
                </div>
              </div>

              <div>{text_data.work}</div>

              <div className="flex py-2">
                <div className="pr-1 pt-1">
                  <img src={text_data.star} alt="image" />
                </div>
                <div className="font-light">{text_data.star_text}</div>
                <div className="pl-1 text-[#9d9d9d]">
                  {text_data.star_number}
                </div>
              </div>
              <div>{text_data.price}</div>
            </div>
          </a>
        </div>
      );
    });

  const pageCount = Math.ceil(users.length / usersPerPage);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const changePage = ({ selected }: any) => {
    setPageNumber(selected);
  };

  return (
    <>
      <Header />
      <div className="bg-white pb-10">
        {/* SEARCH SPACE FOR ALL GIGS */}

        {/* SM/MD/LG/XL SCREEN DEVICES */}
        <div className="bg-[#EEF5F0]">
          <div className="relative hidden pl-3 pt-7 sm:mb-5 sm:ml-20 sm:block sm:w-[500px] md:mb-6 md:ml-36 md:w-[500px] lg:mb-0 lg:ml-56 lg:w-[650px] xl:ml-80 xl:w-[700px]">
            <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
              <svg
                className="size-12 pt-8 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full rounded-3xl border border-[#174568] bg-gray-50 p-4 ps-10 text-sm text-[#174568] focus:ring-[#174568]"
              placeholder="Search for service, hellocians"
              required
            />
            <button
              type="submit"
              className="absolute bottom-2.5 end-2.5 rounded-3xl bg-[#174568] px-4 py-2 text-sm font-medium text-white hover:bg-[#174568] focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              Go
            </button>
          </div>

          {/* MOBILE DEVICES */}
          <div className="relative mx-5 pt-3 sm:mb-5 sm:ml-20 sm:hidden">
            <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-4 pt-3">
              <svg
                className="size-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full rounded-3xl border border-gray-300 bg-gray-50 p-2 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Search for service, hellocians"
              required
            />
            <button
              type="submit"
              className="absolute bottom-1 end-2.5 rounded-2xl bg-[#174568] px-4 py-1 text-sm font-medium text-white hover:bg-[#174568] focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              Go
            </button>
          </div>

          {/*CLICK ON FAVORIYE GIG FOR SM/MD/LG/XL SCREEN */}
          <div className="hidden sm:block md:px-10 lg:px-28">
            <div className="text-sm lg:text-base">
              <div className="flex md:ml-10 md:mt-3 lg:ml-20 lg:mt-6 xl:ml-44">
                <div>
                  <Link to="/WebDevelopment">
                    <button className="rounded-full border border-transparent bg-white px-4 py-1 hover:bg-[#174568] hover:text-white">
                      Website Design
                    </button>
                  </Link>
                </div>
                <div className="px-2">
                  <Link to="/AiDevelopment">
                    <button className="rounded-full border border-transparent bg-white px-4 py-1 hover:bg-[#174568] hover:text-white">
                      Blockchain Development
                    </button>
                  </Link>
                </div>
                <div>
                  <Link to="/AiDevelopment">
                    <button className="rounded-full border border-transparent bg-white px-4 py-1 hover:bg-[#174568] hover:text-white">
                      AI Development
                    </button>
                  </Link>
                </div>
                <div className="pl-2">
                  <button className="rounded-full border border-transparent bg-white px-4 py-1 hover:bg-[#174568] hover:text-white">
                    Mobile App Development
                  </button>
                </div>
              </div>

              <div className="grid justify-items-center pb-3">
                <div className="flex md:ml-10 md:mt-3">
                  <div>
                    <button className="rounded-full border border-transparent bg-white px-4 py-1 hover:bg-[#174568] hover:text-white">
                      API Integration
                    </button>
                  </div>
                  <div className="px-2">
                    <Link to="/UIUX">
                      <button className="rounded-full border border-transparent bg-white px-4 py-1 hover:bg-[#174568] hover:text-white">
                        UI UX Design
                      </button>
                    </Link>
                  </div>
                  <div>
                    <button className="rounded-full border border-transparent bg-white px-4 py-1 hover:bg-[#174568] hover:text-white">
                      Deployment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*CLICK ON FAVORIYE GIG FOR MOBILE DEVICES */}
          <div className="pt-3 text-xs sm:hidden">
            <div className="grid justify-items-center">
              <div className="flex pt-2 text-[10px]">
                <div>
                  <Link to="/WebDevelopment">
                    <button className="rounded-full border bg-white px-2 py-1 hover:bg-[#174568] hover:text-white">
                      Website Design
                    </button>
                  </Link>
                </div>
                <div className="px-2">
                  <Link to="/BlockchainDevelopment">
                    <button className="rounded-full border bg-white px-2 py-1 hover:bg-[#174568] hover:text-white">
                      Blockchain Develpment
                    </button>
                  </Link>
                </div>

                <div>
                  <Link to="/AiDevelopment">
                    <button className="rounded-full border  bg-white px-2 py-1 hover:bg-[#174568] hover:text-white">
                      AI Development
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="grid justify-items-center">
              <div className="flex px-1 pt-2 text-[10px]">
                <div>
                  <Link to="/WebDevelopment">
                    <button className="rounded-full border bg-white px-2 py-1 hover:bg-[#174568] hover:text-white">
                      Mobile App Development
                    </button>
                  </Link>
                </div>
                <div className="px-2">
                  <Link to="/WebDevelopment">
                    <button className="rounded-full border bg-white px-2 py-1 hover:bg-[#174568] hover:text-white">
                      API Integration
                    </button>
                  </Link>
                </div>

                <div>
                  <Link to="/UiUx">
                    <button className="rounded-full border  bg-white px-2 py-1 hover:bg-[#174568] hover:text-white">
                      UI UX Design
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="grid justify-items-center">
              <div className="pb-4 pt-2 text-center text-xs">
                <Link to="/WebDevelopment">
                  <button className="rounded-full border  bg-white px-3 py-1 hover:bg-[#174568] hover:text-white">
                    Deployment
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <SortGigs />

        {/* SM/MD/LG/XL */}
        <div className="hidden sm:block">
          <div className="mx-10 mt-5 flex justify-between">
            <div className="text-4xl font-semibold text-[#174568]">
              All Services
            </div>
            <div className="mr-10">2140+ Services</div>
          </div>
        </div>

        {/* MOBILE DEVICES */}
        <div className="sm:hidden">
          <div className="mx-5 mt-5 flex justify-between ">
            <div className="text-sm font-semibold text-[#174568]">
              All Services
            </div>
            <div className="mr-10">2140+ Services</div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-4">
          {displayUsers}
          <ReactPaginate
            previousLabel={
              <div className="mt-[-32px] rounded-full border border-[#d3dbe1] p-4 text-[#d3dbe1]">
                <FaLessThan />
              </div>
            }
            nextLabel={
              <div className="mt-[-32px] rounded-full border border-[#d3dbe1] p-4 text-[#d3dbe1]">
                <FaGreaterThan />
              </div>
            }
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
        </div>

        {/* SM/MD/LG/XL SCREENS     */}
        <div className="hidden sm:block">
          <div className="flex justify-center bg-[#EEF5F0] py-14">
            <div className="flex justify-around rounded-full border border-gray-200 bg-[#174568] p-6 py-8 font-light text-white lg:w-3/5 ">
              <div className="text-xl text-[#EEF5F0]">
                <div>Got a unique project in mind or need a</div>
                <div>custom quote? We've got you covered</div>
              </div>

              <div className="pl-3 lg:pl-0">
                <a href="/AllServices">
                  <button
                    type="button"
                    className=" rounded-full border bg-[#174568] px-6 py-5 text-center text-xs text-white "
                  >
                    Get Started Now
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE SCREEN */}
        <div className="text-[10px] sm:hidden">
          <div className="flex justify-center bg-[#EEF5F0] py-5">
            <div className="flex justify-around  rounded-full border border-gray-200 bg-[#174568] p-6 font-light text-white">
              <div className=" pt-2 text-[#EEF5F0]">
                <div>Got a unique project in mind or need a</div>
                <div>custom quote? We've got you covered</div>
              </div>

              <div className="pl-3 pt-1">
                <a href="/AllServices">
                  <button
                    type="button"
                    className="rounded-full border bg-[#174568] px-2 py-3 text-center text-white "
                  >
                    Get Started Now
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
