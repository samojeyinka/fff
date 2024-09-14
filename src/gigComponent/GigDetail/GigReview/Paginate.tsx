import { useState } from "react";
import { text_data } from "./data";
import ReactPaginate from "react-paginate";
import "../../../index.css";
import { FaLessThan, FaGreaterThan } from "react-icons/fa6";
import Gigreview from "./Gigreview"
import Fulldate from "../../../utils/Fulldate";
import {FaStar} from "react-icons/fa"
import Sentiment from 'sentiment';


export default function Paginate({title,reviews,totalReviews, oneStar,twoStar,threeStar,fourStar,fiveStar}) {
  const [pageNumber, setPageNumber] = useState(0);
  const sentiment = new Sentiment();

  const usersPerPage = 3;
  const pagesVisited = pageNumber * usersPerPage;

  const displayUsers = reviews
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((review) => {
      const sentimentAnalysis = sentiment.analyze(review.desc); // Use analyze method
      const sentimentScore = sentimentAnalysis.score;
      let sentimentText;
      if (sentimentScore > 0) {
        sentimentText = 'Positive';
      } else if (sentimentScore < 0) {
        sentimentText = 'Negative';
      } else {
        sentimentText = 'Neutral';
      }

  
      return (
         
        <div className="my-4 rounded-xl border-2 p-2">
          <div className="flex">
            <div>
              <img
                src={review.user && review.user.profilePicture}
                alt="image"
                className="size-10 rounded-full"
              />
            </div>
            <div className="pl-2">
              <div className="text-[12px] font-semibold">{review.user && review.user.firstName + " " + review.user && review.user.lastName}</div>
              <div className="text-[12px] text-[#9D9D9D]">
                <Fulldate date={review.createdAt}/>
              </div>
            </div>
          </div>

          <div className="flex ml-10 mb-1">
          {Array(review.star)
          .fill()
          .map((item, i) => (
            <FaStar key={i} size={12}/>
          ))}
            {Array(5 - review.star)
          .fill()
          .map((item, i) => (
            <FaStar key={i} size={12} color="gray"/>
          ))}
          </div>

          <div className="pl-10 pr-5">
            <div className="text-[12px] font-semibold md:pb-2 md:text-[17px]">
              {title}
            </div>
            <div className="text-justify text-[10px] md:text-[13px]">
              {review.desc}
            </div>
            <div className="text-[10px] md:text-[12px]">
          <b>{sentimentText}</b>
        </div>
          </div>
        </div>
      );
    });

  const pageCount = Math.ceil(text_data.length / usersPerPage);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const changePage = ({ selected }: any) => {
    setPageNumber(selected);
  };

  return (
    <>

<Gigreview totalReviews={totalReviews}
 oneStar={oneStar}
 twoStar={twoStar}
 threeStar={threeStar}
 fourStar={fourStar}
 fiveStar={fiveStar}
/>

      <div className="grid grid-cols-1">
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
    </>
  );
}
