import { useState } from "react";
import { text_data } from "./data";
import ReactPaginate from "react-paginate";
import "../../../index.css";
import { FaLessThan, FaGreaterThan } from "react-icons/fa6";
import Header from "../../../Headers/OtherPage_Header";
import Footer from "../../Footer";

export default function Index() {
  const [users] = useState(text_data);
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 24;
  const pagesVisited = pageNumber * usersPerPage;

  const displayUsers = users
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((text_data) => {
      return (
        <div
          className="max-w-md px-4 pb-5 sm:max-w-xs sm:py-5"
          key={text_data.id}
        >
          <a href="/GigDetail">
            <div>
              <img className="w-full" src={text_data.display} alt="image" />
            </div>
            <div className="px-3 pt-2 sm:pt-3">
              <div>{text_data.name}</div>
              <div className="flex justify-between">
                <div className="text-[14px] text-[#9D9D9D] sm:text-base ">
                  {text_data.work}
                </div>
                <div>{text_data.arrow}</div>
              </div>
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
      <div className="bg-[#f5f5f5] pb-10">
        {/* SM/MD/LG/XL SCREEN */}
        <div className="hidden sm:block md:px-10 lg:px-28">
          <div className="pt-3 text-4xl font-semibold text-[#174568]">
            All Services
          </div>
        </div>

        {/* MOBILE DEVICES */}
        <div className="text-xs sm:hidden">
          <div className="pl-6 pt-3 text-lg font-semibold text-[#174568]">
            All Services
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4">
          {displayUsers}
          <ReactPaginate
            previousLabel={
              <div className="ml-48 mt-[-32px] rounded-full border border-[#d3dbe1] p-4 text-[#d3dbe1] sm:ml-0">
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
