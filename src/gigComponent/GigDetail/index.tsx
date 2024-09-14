import MoreGigsCarousel from "./MoreGigsCarousel";
import PricingWrapper from "./PricingWrapper";
import {
  file,
  gigDetails,
} from "./data";
import Footer from "../../mainComponent/Footer";
import Header from "../../Headers/IndexPage_Header"
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa"
import Paginate from "./GigReview/Paginate"
import {
  orderPackageStart,
  orderPackageSuccess,
  orderPackageFailure,
  updateOrderStart,
  updateOrderSuccess,
  updateOrderFailure
} from "../../redux/order/orderSlice";
import { useDispatch } from "react-redux";

export default function Index() {
  const location = useLocation();
  const urlPath = location.pathname.split('/');
  const title = urlPath[urlPath.length - 1];
  const replacedTitle = title.replace(/-/g, ' ')
  const [gig, setGig] = useState("")
  const [reviews, setReviews] = useState([]);
  const [gigRating, setGigRating] = useState("");
  const [totalReviews, setTotalReviews] = useState(0);
  const [oneStar, setOneStar] = useState(0);
  const [twoStar, setTwoStar] = useState(0);
  const [threeStar, setThreeStar] = useState(0);
  const [fourStar, setFourStar] = useState(0);
  const [fiveStar, setFiveStar] = useState(0);
  const [hellocianId,setHellocianId] = useState("");
  const [hellocian,setHellocian] = useState([]);

  const dispatch = useDispatch();


useEffect(()=>{
  const getGig = async () => {
    try {
      const gigGotten = await axios.get(`http://localhost:8080/api/gigs/${replacedTitle}`);
      const data = gigGotten.data.gig;
      setGig(data)
      setHellocianId(data.hellocian[0])

    } catch (error) {
      console.log(error)
    }
  }
  getGig();
},[])
 


  const getUser = async (userId) => {
    try {
      const response = await axios.get(`http://localhost:8080/api/user/user-details/${userId}`);
      return response.data;
      console.log("user", response.data)
    } catch (error) {
      console.log("user error", error);
    }
  };



  useEffect(()=>{
    const getHellocian = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/hellocian/hellocian-details/66ae71b601a02ff14834273a`);
        setHellocian(response.data)
        return response.data;
      } catch (error) {
        console.log("hellocian error", error);
      }
    };

    getHellocian();
  },[])
 


  const getReviews = async () => {
    try {
      const gigReviews = await axios.get(`http://localhost:8080/api/reviews/${gig._id}`);
      const data = gigReviews.data;
      const reviewsWithUsers = await Promise.all(data.reviews.map(async (review) => {
        const user = await getUser(review.userId);
        return { ...review, user };
      }));
      setGigRating(data.GigRating);
      setReviews(reviewsWithUsers);
      setOneStar(data.oneStar)
      setTwoStar(data.twoStar)
      setThreeStar(data.threeStar)
      setFourStar(data.fourStar)
      setFiveStar(data.fiveStar)
      setTotalReviews(data.GigReviews);
    } catch (error) {
      console.log("gig errors", error);
    }
  };

  useEffect(() => {
    getReviews();
  })



  
  const orderGig = async (packageType) => {
    dispatch(orderPackageStart());
    try {
      const orderData = {
        gigId: gig._id,
        gigTitle: gig.title,
        package: gig.pricing[packageType],
      };
      dispatch(orderPackageSuccess(orderData));
      console.log(orderData);
    } catch (error) {
      dispatch(orderPackageFailure(error))
    }
  };
  

  return (
    <>
      <Header />
      <div className="mx-5 md:pr-10 lg:mx-24 lg:pr-0">
        <div className="pt-8 text-sm font-semibold sm:text-2xl">
          {replacedTitle}
        </div>

        {/* MD / LG / XL SCREENS */}
        <div className="hidden md:block">
          <div className="flex py-4">
            <div>
              <img src={hellocian.profilePicture} alt="image" className="w-[60px] h-[60px]" />
            </div>
            <div className="pl-2">
              <div>{hellocian.firstName + " " + hellocian.lastName}</div>
              <div className="flex">
                <div className="pr-1 pt-1">
                  <FaStar />
                </div>
                <div className="pr-1">{gigRating}</div>
                <div className="text-[#9d9d9d]">({gig.sales})</div>
              </div>
            </div>
          </div>
        </div>

        {/* SM / MOBILE DEVICES */}
        <div className="md:hidden">
          <div className="flex pb-1 pt-4">
            <div>
              <img src={file.image1} alt="image" className="size-7" />
            </div>
            <div className="pl-2 text-lg text-[#9D9D9D]">{file.name}</div>
          </div>
          <div className="flex">
            <div className="pb-6 pl-2 pr-1 pt-1">
              <img src={file.star} alt="image" className="size-4" />
            </div>
            <div className="pr-1">{file.rate}</div>
            <div className="text-[#9d9d9d]">{file.number}</div>
          </div>
        </div>

        <div>
          <img
            src={gig.cover}
            alt="image"
            className="w-full rounded-none border border-transparent md:h-80"
          />
        </div>


        <div className="grid grid-cols-3 pt-5 sm:pt-8">
          <div>
            <img src={gig.firstThumbnail} alt="image" className="h-36 w-full" />
          </div>
          <div className="px-3">
            <img src={gig.secondThumbnail} alt="image" className="h-36 w-full" />
          </div>
          <div>
            <img src={gig.thirdThumbnail} alt="image" className="h-36 w-full" />
          </div>
        </div>

        <div className="pb-2 pt-4 text-2xl font-semibold">{gigDetails.gig}</div>

        <div className="text-justify text-[17px]" dangerouslySetInnerHTML={{ __html: gig.description }}></div>



        <PricingWrapper gig={gig} orderGig={orderGig} />
        <Paginate title={gig.title} reviews={reviews} totalReviews={totalReviews}
          oneStar={oneStar}
          twoStar={twoStar}
          threeStar={threeStar}
          fourStar={fourStar}
          fiveStar={fiveStar}
        />
        <MoreGigsCarousel />
      </div>
      <Footer />
    </>
  );
}
