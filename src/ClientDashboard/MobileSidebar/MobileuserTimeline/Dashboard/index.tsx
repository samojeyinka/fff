/* eslint-disable tailwindcss/no-custom-classname */
import { useState } from "react";
import Calendar from "react-calendar";
// THIS IS FOR THE SELECTOR OF THE WEEK
import { ChangeEventHandler } from "react";

import MobileSidebar from "../../../MobileSidebar";
import {
  data,
  topRated,
  explore,
  ongoingProject,
  paymentDetails,
} from "./data";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "react-calendar/dist/Calendar.css";
import { Progress, Button } from "flowbite-react";
import { useSelector } from "react-redux";

// CALENDAR
type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function Index(props: {
  // THIS IS FOR THE SELECTOR OF THE WEEK
  curentValue: string;
  onChange: ChangeEventHandler<HTMLSelectElement> | undefined;
}) {
  // CALENDAR
  const [value, onChange] = useState<Value>(new Date());

  // CIRCULAR PROGRESS
  const percentage = 45;

  // THIS IS FOR THE SELECTOR OF THE WEEK
  const currentValue = props.curentValue;

  const { currentUser } = useSelector((state) => state.user);

  return (
    <MobileSidebar>
      <div className="mx-3 mt-[-110px] sm:hidden">
        <div className="rounded-lg border-transparent bg-[#fafafa]">
          <div className="mt-6 flex justify-between px-5">
            <div>
              <div className="text-2xl font-semibold">
                Hi, {currentUser.lastName}
              </div>
              <div className="text-sm font-medium text-[#54577A]">
                {data.track}
              </div>
            </div>
          </div>

          <div className="pt-10">
            <div className="rounded-lg bg-[#174568] px-10 pt-5 text-white">
              <div>In progress</div>
              <div className="flex py-4">
                <div className="mr-5 w-20">
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                    styles={buildStyles({
                      rotation: 1,
                      strokeLinecap: "butt",
                      textSize: "24px",
                      pathTransitionDuration: 0.5,
                      pathColor: `#546FFF, ${percentage / 100})`,
                      textColor: "#ffffff",
                      trailColor: "#1d4977",
                      backgroundColor: "#3e98c7",
                    })}
                  />
                </div>
                <div className="pt-2">
                  <div>1</div>
                  <div className="text-[#8E92BC]">Project</div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex justify-between bg-[#f5f5f7] px-2 pt-8 text-xs">
                <div className="text-sm">Activity</div>

                <div className="mt-[-12px]">
                  <form>
                    <select
                      value={currentValue}
                      onChange={props.onChange}
                      id="countries"
                      className="block border-transparent bg-transparent p-2.5 text-sm text-[#141522] focus:border-transparent focus:ring-transparent md:w-[130px] lg:w-40"
                    >
                      <option value="DEFAULT">This Week</option>
                      <option value="SUN">Sunday</option>
                      <option value="MON">Monday</option>
                      <option value="TUE">Tuesday</option>
                      <option value="WED">Wednesday</option>
                      <option value="THU">Thursday</option>
                      <option value="FRI">Friday</option>
                      <option value="SAT">Saturday</option>
                    </select>
                  </form>
                </div>
              </div>

              <div>
                <img src={data.Activity} alt="image" />
              </div>
            </div>
          </div>

          <div className="flex justify-between px-3 pt-8 text-2xl font-medium">
            <div className="font-semibold">Top rated Hellocians</div>
            <div className="flex">
              <div className="pr-6">
                <a href="#">
                  <img src={data.arrowLeft} alt="image" />
                </a>
              </div>
              <div>
                <a href="#">
                  <img src={data.arrowRight} alt="image" />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-3">
            {topRated.map((data, index) => {
              return (
                <div
                  key={index}
                  className="mr-3 mt-3 w-full rounded-lg border bg-white py-4 pl-4 text-xs"
                >
                  <div className="flex justify-between pr-8">
                    <div className="flex">
                      <div>
                        <img src={data.display} alt="image" />
                      </div>
                      <div className="pl-2 pt-2">
                        <div className="pb-1 text-[15px]">{data.name}</div>
                        <div>{data.skill}</div>
                      </div>
                    </div>

                    <div className="pt-4">
                      <a href="#" className="text-[#546FFF]">
                        {data.message}
                      </a>
                    </div>
                  </div>

                  <div className="flex justify-between pr-6 pt-3">
                    <div className="flex">
                      <div>
                        <img src={data.taskIcon} alt="image" />
                      </div>
                      <div className="pl-2 pt-1">{data.task}</div>
                    </div>

                    <div className="flex">
                      <div className="pr-2">
                        <img src={data.rateStar} alt="image" />
                      </div>
                      <div className="pt-1">{data.review}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-between px-3 pt-8 text-2xl font-medium">
            <div className="font-semibold">Explore Gigs</div>
            <div className="flex">
              <div className="pr-6">
                <a href="#">
                  <img src={data.arrowLeft} alt="image" />
                </a>
              </div>
              <div>
                <a href="#">
                  <img src={data.arrowRight} alt="image" />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-6">
            {explore.map((data, index) => {
              return (
                <div
                  key={index}
                  className="mr-3 w-full rounded-lg border bg-white py-4 pl-4 text-xs"
                >
                  <div className="grid justify-items-center pr-4">
                    <img src={data.image} alt="image" className="w-68 h-40" />
                  </div>
                  <div className="px-6 py-5">
                    <div className="pb-2 text-[16px] font-semibold">
                      {data.skill}
                    </div>
                    <div className="flex justify-between">
                      <div>{data.names}</div>
                      <div>
                        <img src={data.groupPicture} alt="image" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ONGOING PROJECT  */}
        <div className="rounded-lg border-transparent bg-[#f5f5f8] lg:mt-0 xl:mx-10 xl:px-0 xl:pt-0">
          <div className="grid justify-items-center pt-5">
            <Calendar onChange={onChange} value={value} />
          </div>

          <div className="mt-5 rounded-lg border bg-white px-5 pt-5 text-xs">
            <div className="flex justify-between pb-2">
              <div className="text-sm font-semibold">Ongoing project</div>
              <div>
                <a href="#">
                  <img src={ongoingProject.more} alt="image" />
                </a>
              </div>
            </div>

            <div className="grid justify-items-center">
              <img
                src={ongoingProject.image}
                alt="image"
                className="w-68 h-40"
              />
            </div>
            <div className="pt-5">
              <div className="pb-2 text-sm font-semibold">
                {ongoingProject.name}
              </div>
              <div className="pb-4 ">{ongoingProject.skill}</div>
            </div>

            <div className="pb-2 text-sm">Progress</div>
            <Progress
              progress={50}
              progressLabelPosition="inside"
              textLabel=""
              size="lg"
              labelProgress
              labelText
            />

            <div className="flex pt-3">
              <div>
                <img src={data.timeCircle} alt="" />
              </div>
              <div className="pl-2 pt-1">1 Month</div>
            </div>

            <hr className="my-4 border-gray-200 " />

            <div>
              <div className="flex justify-between">
                <div>{paymentDetails.name}</div>
                <div className="text-[#54577A]">{paymentDetails.skill}</div>
              </div>

              <div className="pt-8">
                <span className="mr-2 rounded-lg border bg-[#F5F5F7] px-3 py-1 text-[17px]">
                  1
                </span>
                <span>{paymentDetails.initialPayment}</span>
              </div>

              <div className="pt-8">
                <span className="mr-2 rounded-lg border bg-[#F5F5F7] px-3 py-1 text-[17px]">
                  2
                </span>
                <span>{paymentDetails.remainingPayment}</span>
              </div>
            </div>

            <div className="py-10">
              <a href="/Chat">
                <Button className="w-full bg-[#174568]">Send message</Button>
              </a>
            </div>
          </div>
        </div>

        <div></div>
      </div>
    </MobileSidebar>
  );
}
