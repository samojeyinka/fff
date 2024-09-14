import { file } from "./data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../index.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/categories");
      const data = response.data.categories;
      setCategories(data);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchCategories();
  })
  return (
    <div className="m-auto w-4/5">
      <div className="ml-[-5px] mt-5 sm:ml-0">
        <Slider {...settings}>
          {categories.map(category => (
            <div className="w-full px-2" >
              <Link to={`/services/${category.name.replace(/ /g,'-')}`} className="relative">
                <img className="" src={category.banner} alt="" width="90%" style={{height:"18rem",borderRadius:"1rem",opacity:".9"}}/>
                <img className="absolute left-[25%] top-10" src={category.icon} alt="" style={{height:"5rem",width:"5rem"}}/>
                
                <h2 className="w-[55%] absolute left-8 bottom-8 text-center text-white" style={{fontSize:"20px",fontWeight:"600",textTransform:"uppercase"}}>{category.name}</h2>
              </Link>
            </div>
          ))
          }
        </Slider>
      </div>
    </div>
  );
}
