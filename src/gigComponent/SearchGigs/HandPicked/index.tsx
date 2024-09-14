import { useState } from "react";
import { text_data } from "./data";
import ReactPaginate from "react-paginate";
import "../../../index.css";
import { FaLessThan, FaGreaterThan } from "react-icons/fa6";
import Header from "../../../Headers/OtherPage_Header";
import Footer from "../../../mainComponent/Footer";
import { Link } from "react-router-dom";

export default function Index() {
  const [users] = useState(text_data);
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 12;
  const pagesVisited = pageNumber * usersPerPage;

  const displayUsers = users
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((text_data) => {
      return (
        <a href={text_data.link}>
          <div
            className="max-w-md px-4 pb-5 sm:max-w-xs sm:py-5"
            key={text_data.id}
          >
            <div>
              <button>
                <img
                  className="w-full"
                  src={text_data.display}
                  alt="image"
                />
              </button>
            </div>
            <div className="px-3 pt-2 sm:pt-3">
              <div>{text_data.name}</div>
              <div className="flex justify-between">
                <div className="text-[#9D9D9D]">{text_data.work}</div>
                <div>{text_data.arrow}</div>
              </div>
            </div>
          </div>
        </a>
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
        <div className="hidden py-5 pl-5 text-3xl font-semibold text-[#174568] sm:block">
          Handpicked Project
        </div>

        {/* MOBILE DEVICES */}
        <div className="text-xs sm:hidden">
          <div className="pl-6 pt-3 text-lg font-semibold text-[#174568]">
            Handpicked Project
          </div>

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
      </div>
      <Footer />
    </>
  );
}
