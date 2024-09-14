import { useEffect, useState } from "react";
import { text_data } from "./data";
import ReactPaginate from "react-paginate";
import "../../../index.css";
import { FaLessThan, FaGreaterThan } from "react-icons/fa6";
import Header from "../../../Headers/OtherPage_Header";
import Footer from "../../../mainComponent/Footer";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa"

export default function Index() {
  const [users] = useState(text_data);
  const [pageNumber, setPageNumber] = useState(0);
  const [category, setCategory] = useState([]);
  const [gigs, setGigs] = useState([]);
  const [gigId, setGigId] = useState("");
  const [gigRatings, setGigRatings] = useState({});



  const location = useLocation();
  const urlPath = location.pathname.split('/');
  const categoryName = urlPath[urlPath.length - 1].replace(/-/g, ' ')
  console.log(categoryName)


  const fectchCategory = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/api/categories/${categoryName}`)
      const data = res.data.category;
      setCategory(data)
    } catch (error) {
      console.log(error)
    }
  }


  const gigsIds = async () => {
    await Promise.all(gigs.map(async (gig) => {
      setGigId(gig._id);
      await getReviews();
    }));
  }




  const fetchGigs = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/cat_gig/${category._id}/gigs`)
      const data = response.data.gigs;
      console.log(data)
      setGigs(data);
    } catch (error) {
      console.log(error)
    }
  }

  const getReviews = async () => {
    try {
      const gigReviews = await axios.get(`http://localhost:8080/api/reviews/${gigId}`);
      const data = gigReviews.data
      setGigRatings((prevRatings) => ({ ...prevRatings, [gigId]: data.GigRating }));
    } catch (error) {
      console.log("gig errors", error)
    }
  }


  useEffect(() => {
    fectchCategory();
    fetchGigs();
    if (gigs.length > 0) {
      gigsIds();
    }
  })





  const usersPerPage = 12;
  const pagesVisited = pageNumber * usersPerPage;

  const displayUsers = gigs
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((gig) => {
      return (
        <div className="max-w-md py-5 pr-4 sm:max-w-xs" key={gig._id}>
        <Link to={`/${gig.title.replace(/ /g, '-')}`}>
          <div>
            <img
              className="w-full"
              src={gig.cover}
              alt="image"
            />
          </div>
          <div className="pl-3 pt-3">
            <div className="flex pb-1">
              <div className="w-[38px] h-[38px] rounded rounded-full" style={{ overflow: "hidden" }}>
                <img src={gig.cover} alt="image" className="w-full h-full" />
              </div>
              <div className="pl-1 text-sm text-[#9d9d9d]">
                {gig.title}
              </div>
            </div>

            <div className="flex py-2">
              <div className="pr-1 pt-1">
                <FaStar />
              </div>
              <div className="font-light">{gigRatings[gig._id]}</div>
              <div className="pl-1 text-[#9d9d9d]">
                ({gig.sales})
              </div>
            </div>
            <div>From ${gig.pricing.basic.price}</div>
          </div>
        </Link>
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
        <div className="hidden py-5 pl-5 text-3xl font-semibold uppercase text-[#174568] sm:block">
          {category.name}
        </div>

        {/* FOR MOBILE SCREENS */}
        <div className="pl-6 pt-3 text-[#174568] sm:hidden">
          {" "}
          WEB DEVELOPMENT
        </div>

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
      <Footer />
    </>
  );
}
