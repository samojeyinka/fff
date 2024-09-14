import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../../index.css";
import { otherGigs } from "../data";

export default function Index() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <> 
      <div className="pl-28 pt-6 text-2xl font-semibold">More Services</div>
   
      <div className="hidden md:block">
        <div className="m-auto w-4/5">
          <div className="mt-5">
            <Slider {...settings}>
              {otherGigs.map((text_data) => {
                return (
                  <div
                    className="max-w-md py-5 pr-4 sm:max-w-xs"
                    key={text_data.id}
                  >
                    <a href="#">
                      <div>
                        <img
                          className="w-full"
                          src={text_data.display}
                          alt="image"
                        />
                      </div>

                      <div className="px-3">
                        <div>{text_data.name}</div>
                        <div className="flex justify-between">
                          <div className="text-[#9D9D9D]">{text_data.work}</div>
                          <div>{text_data.arrow}</div>
                        </div>
                      </div>
                    </a>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>

      {/* FOR MOBILE AND SM SCREEN */}
      <div className="grid grid-cols-2 md:hidden">
        {otherGigs.map((text_data) => {
          return (
            <div className="py-5" key={text_data.id}>
              <div className="pr-2">
                <a>
                  <img src={text_data.display} alt="" />
                </a>
              </div>
              <div></div>
            </div>
          );
        })}
      </div>
    </>
  );
}
