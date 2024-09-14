import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import { IoIosArrowDown } from "react-icons/io";
import Popover from "@mui/material/Popover";
import {
  firstgigreview,
  secondgigreview,
  thirdgigreview,
  fourthgigreview,
  fifthgigreview,
} from "./data";

export default function Gigreview({totalReviews,oneStar,twoStar,threeStar,fourStar,fiveStar}) {
  return (
    <div className="mt-20">
      <div className="font-semibold">Client Reviews</div>

      <div className="flex w-[700px] justify-between">
        <div className="text-[12px] md:text-[15px]">{totalReviews} total Reviews </div>

        <div>
          <div className="text-[12px] md:text-[15px]">Show Only</div>
          <div>
            <div>
              <PopupState variant="popover" popupId="demo-popup-popover">
                {(popupState) => (
                  <div>
                    <button
                      {...bindTrigger(popupState)}
                      className="rounded-md border border-[#174568] bg-[#F9F9FF] text-[#174568] hover:bg-[#174568] hover:text-white"
                    >
                      <div className="flex px-3 py-1">
                        <div>Positive Reviews</div>
                        <div>
                          <IoIosArrowDown className="ml-2 mt-1" />
                        </div>
                      </div>
                    </button>
                    <Popover
                      {...bindPopover(popupState)}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "center",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "center",
                      }}
                    >
                      dwdwod
                    </Popover>
                  </div>
                )}
              </PopupState>
            </div>
          </div>
        </div>
      </div>

      {/* FIRST SECTION */}
      <div className="flex justify-between">
        <div>
          <div>
            <div className="flex items-center">
              <span className="text-[12px] text-gray-700">
                {fiveStar}
              </span>
              <div className="mx-4 h-2.5 w-[200px] rounded-full bg-gray-200">
                <div className="h-2.5 w-[150px] rounded-full bg-[#174568]"></div>
              </div>
              <div className="flex ">
                <div>
                  <img src={firstgigreview.star} alt="" />
                </div>
                <div>
                  <img src={firstgigreview.star} alt="" />
                </div>
                <div>
                  <img src={firstgigreview.star} alt="" />
                </div>
                <div>
                  <img src={firstgigreview.star} alt="" />
                </div>
                <div>
                  <img src={firstgigreview.star} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECOND SECTION */}
      <div className="flex justify-between">
        <div>
          <div>
            <div className="flex items-center">
              <span className="pr-2 text-[12px] text-gray-700">
                {fourStar}
              </span>
              <div className="mx-4 h-2.5 w-[200px] rounded-full bg-gray-200">
                <div className="h-2.5 w-[120px] rounded-full bg-[#174568]"></div>
              </div>
              <div className="flex pl-5">
                <div>
                  <img src={secondgigreview.star} alt="" />
                </div>
                <div>
                  <img src={secondgigreview.star} alt="" />
                </div>
                <div>
                  <img src={secondgigreview.star} alt="" />
                </div>
                <div>
                  <img src={secondgigreview.star} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* THIRD SECTION */}
      <div className="flex justify-between">
        <div>
          <div>
            <div className="flex items-center">
              <span className="pr-2 text-[12px] text-gray-700">
                {threeStar}
              </span>
              <div className="mx-4 h-2.5 w-[200px] rounded-full bg-gray-200">
                <div className="h-2.5 w-[100px] rounded-full bg-[#174568]"></div>
              </div>
              <div className="flex pl-10">
                <div>
                  <img src={thirdgigreview.star} alt="" />
                </div>
                <div>
                  <img src={thirdgigreview.star} alt="" />
                </div>
                <div>
                  <img src={thirdgigreview.star} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOURTH SECTION */}
      <div className="flex justify-between">
        <div>
          <div>
            <div className="flex items-center">
              <span className="pr-4 text-[12px] text-gray-700">
                {twoStar}
              </span>
              <div className="mx-4 h-2.5 w-[200px] rounded-full bg-gray-200">
                <div className="h-2.5 w-[70px] rounded-full bg-[#174568]"></div>
              </div>
              <div className="flex pl-16 ">
                <div>
                  <img src={fourthgigreview.star} alt="" />
                </div>
                <div>
                  <img src={fourthgigreview.star} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FIFTH SECTION */}
      <div className="flex justify-between">
        <div>
          <div>
            <div className="flex items-center">
              <span className="pr-4 text-[12px] text-gray-700">
                {oneStar}
              </span>
              <div className="mx-4 h-2.5 w-[200px] rounded-full bg-gray-200">
                <div className="h-2.5 w-[30px] rounded-full bg-[#174568]"></div>
              </div>
              <div className="flex pl-20">
                <div>
                  <img src={fifthgigreview.star} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
