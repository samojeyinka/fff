import { useEffect, useState } from "react";
import { text_data } from "./data";
import ReactPaginate from "react-paginate";
import "../../index.css";
import { FaLessThan, FaGreaterThan } from "react-icons/fa6";
import axios from "axios";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Paginate() {
  const [pageNumber, setPageNumber] = useState(0);
  const [gigs, setGigs] = useState([]);
  const [gigId, setGigId] = useState("");
  const [gigRatings, setGigRatings] = useState({});

  const gigsIds = () => {
    gigs.forEach((gig) => {
      setGigId(gig._id);
      getReviews();
    });
  };

  const fetchGigs = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/gigs/latests",
      );
      const data = response.data.gigs;
      setGigs(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getReviews = async () => {
    try {
      const gigReviews = await axios.get(
        `http://localhost:8080/api/reviews/${gigId}`,
      );
      const data = gigReviews.data;
      setGigRatings((prevRatings) => ({
        ...prevRatings,
        [gigId]: data.GigRating,
      }));
    } catch (error) {
      console.log("gig errors", error);
    }
  };

  useEffect(() => {
    fetchGigs();
    gigsIds();
    getReviews();
  });

  const usersPerPage = 12;
  const pagesVisited = pageNumber * usersPerPage;

  const displayUsers = gigs
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((gig) => {
      return (
        <div className="max-w-md py-5 pr-4 sm:max-w-xs" key={gig._id}>
          <Link to={`/${gig.title.replace(/ /g, "-")}`}>
            <div>
              <img className="w-full" src={gig.cover} alt="image" />
            </div>
            <div className="pl-3 pt-3">
              <div className="flex pb-1">
                <div
                  className="h-[38px] w-[38px] rounded rounded-full"
                  style={{ overflow: "hidden" }}
                >
                  <img src={gig.cover} alt="image" className="h-full w-full" />
                </div>
                <div className="pl-1 text-sm text-[#9d9d9d]">{gig.title}</div>
              </div>

              <div className="flex py-2">
                <div className="pr-1 pt-1">
                  <FaStar />
                </div>
                <div className="font-light">{gigRatings[gig._id] || 0}</div>
                <div className="pl-1 text-[#9d9d9d]">({gig.sales})</div>
              </div>
              <div>From ${gig.pricing.basic.price}</div>
            </div>
          </Link>
        </div>
      );
    });

  const pageCount = Math.ceil(gigs.length / usersPerPage);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const changePage = ({ selected }: any) => {
    setPageNumber(selected);
  };

  return (
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
  );
}
