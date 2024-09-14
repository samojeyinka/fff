import { useState } from "react";
import { text_data } from "./data";
import ReactPaginate from "react-paginate";
import "../../../index.css";
import { FaLessThan, FaGreaterThan } from "react-icons/fa6";
import Header from  "../../../Headers/OtherPage_Header";
import Footer from "../../../mainComponent/Footer"

export default function Index() {
  const [users] = useState(text_data);
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 12;
  const pagesVisited = pageNumber * usersPerPage;

  const displayUsers = users
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((text_data) => {
      return (
        <div className="max-w-md py-5 pr-4 sm:max-w-xs" key={text_data.id}>
          <a href="#">
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
      <div className="bg-[#f5f5f5]">
      {/* FOR SM/MD/LG/XL SCREENS */}
      <div className="hidden py-5 pl-5 text-3xl font-semibold text-[#174568] sm:block">
      UI/UX DESIGN
      </div>

      {/* FOR MOBILE SCREENS */}
      <div className="pl-6 pt-3 text-[#174568] sm:hidden"> UI/UX DESIGN</div>

      <div className="grid grid-cols-1 px-5 sm:grid-cols-4">
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
      </div>
      <Footer/>
    </>
  );
}
