/* eslint-disable tailwindcss/no-custom-classname */
import { useState } from "react";
import Calendar from "react-calendar";
import { ChangeEventHandler } from "react";
import Sidebar from "../..";
import {
  data,
  topRated,
  explore,
  ongoingProject,
  paymentDetails,
  notifications,
} from "./data";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "react-calendar/dist/Calendar.css";
import { Progress } from "flowbite-react";
import Dashboard from "../../../MobileSidebar/MobileuserTimeline/Dashboard";
import ChatMessage from "./ChatMessage";
import { useSelector } from "react-redux";
import TinyChart from "../../../../mainComponent/Charts/TinyChart";

// CALENDAR
type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function Index(props: {
  curentValue: string;
  onChange: ChangeEventHandler<HTMLSelectElement> | undefined;
}) {
  // CALENDAR
  const [value, onChange] = useState<Value>(new Date());

  // CIRCULAR PROGRESS
  const percentage = 45;

  const currentValue = props.curentValue;

  const { currentUser } = useSelector((state) => state.user);

  return (
    <>
      <div className="hidden sm:block">
        <Sidebar>
          <div className="grid pt-3 xl:grid-cols-[70%_33%]">
            <div className="rounded-lg border-transparent bg-[#fafafa] pr-5">
              <div className="mt-6 flex justify-between px-5">
                <div>
                  <div className="text-lg">Hi, {currentUser.lastName}</div>
                  <div className="text-sm text-[#54577A]">{data.track}</div>
                </div>
                <div className="flex">
                  {/* NOTIFICATION */}
                  <div className="pt-3">
                    <button
                      id="dropdownNotificationButton"
                      data-dropdown-toggle="dropdownNotification"
                      className="relative inline-flex items-center text-center text-sm font-medium text-gray-500 hover:text-gray-900 focus:outline-none dark:text-gray-400 dark:hover:text-white"
                      type="button"
                    >
                      <svg
                        className="size-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 14 20"
                      >
                        <path d="M12.133 10.632v-1.8A5.406 5.406 0 0 0 7.979 3.57.946.946 0 0 0 8 3.464V1.1a1 1 0 0 0-2 0v2.364a.946.946 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C1.867 13.018 0 13.614 0 14.807 0 15.4 0 16 .538 16h12.924C14 16 14 15.4 14 14.807c0-1.193-1.867-1.789-1.867-4.175ZM3.823 17a3.453 3.453 0 0 0 6.354 0H3.823Z" />
                      </svg>

                      <div className="absolute -top-0.5 start-2.5 block size-3 rounded-full border-2 border-white bg-red-500 dark:border-gray-900"></div>
                    </button>

                    <div
                      id="dropdownNotification"
                      className="z-20 hidden w-[330px] max-w-sm divide-y divide-gray-100 rounded-lg bg-white shadow dark:divide-gray-700 dark:bg-gray-800"
                      aria-labelledby="dropdownNotificationButton"
                    >
                      <div className="block px-4 py-2 font-semibold text-[#1B2559] dark:bg-gray-800 dark:text-white">
                        Notifications
                      </div>

                      <div className="bg-[#fafbfc]">
                        {notifications.map((data, index) => {
                          return (
                            <div
                              key={index}
                              className="m-1 rounded-lg border-none bg-white py-3 pl-4"
                            >
                              <div className="flex">
                                <div>
                                  <img
                                    src={data.image}
                                    alt="image"
                                    className="mt-3 size-8"
                                  />
                                </div>
                                <div className="pl-6">
                                  <div className="pb-2 text-[15px] font-semibold">
                                    {data.payment}
                                  </div>
                                  <div className="flex justify-between text-[13px] text-[#A3AED0]">
                                    <div>{data.name}</div>
                                    <div className="pl-16">{data.time}</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  <div className="pl-6">
                    <img
                      src={currentUser.profilePicture}
                      alt="imageimage"
                      className="h-[3rem] w-[3rem]"
                      style={{ borderRadius: "50%" }}
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-[40%_60%] pt-10">
                <div className="rounded-lg bg-[#174568] px-10 pt-5 text-white">
                  <div>In progress</div>
                  <div className="pb-2 pt-3 text-4xl">03</div>
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
                  <div className="flex justify-between bg-[#f5f5f7] px-2 pt-3 text-xs">
                    <div className="text-sm">Activity</div>

                    <div className="mt-[-12px] sm:px-3 md:px-5">
                      <form className="mx-auto max-w-sm">
                        <select
                          value={currentValue}
                          onChange={props.onChange}
                          id="countries"
                          className="lg:w-w-42 block w-28 border-transparent bg-transparent p-2.5 text-sm text-[#141522] focus:border-transparent focus:ring-transparent md:w-[130px] lg:w-40"
                        >
                          <option value="DEFAULT" className="">
                            This Week
                          </option>
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
                    <TinyChart />
                  </div>
                </div>
              </div>

              <div className="flex justify-between px-3 pt-8 text-2xl font-medium">
                <div>Top rated Hellocians</div>
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

              <div className="flex pt-6">
                {topRated.map((data, index) => {
                  return (
                    <div
                      key={index}
                      className="mr-3 w-full rounded-lg border bg-white py-4 pl-4 text-xs"
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
                <div>Explore Gigs</div>
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

              <div className="flex pt-6">
                {explore.map((data, index) => {
                  return (
                    <div
                      key={index}
                      className="mr-3 w-full rounded-lg border bg-white py-4 pl-4 text-xs"
                    >
                      <div className="grid justify-items-center pr-4">
                        <img
                          src={data.image}
                          alt="image"
                          className="w-68 h-40"
                        />
                      </div>
                      <div className="px-6 pt-5">
                        <div className="pb-2 text-[16px]">{data.skill}</div>
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
            <div className="mt-10 rounded-lg border-transparent bg-[#f5f5f8] px-10 pt-10 lg:mt-0 xl:mx-10 xl:px-0 xl:pt-0">
              <div>
                <Calendar onChange={onChange} value={value} />
              </div>

              <div className="mt-5 rounded-lg border bg-white px-2 pt-5 text-xs">
                <div className="flex justify-between pb-2">
                  <div>Ongoing project</div>
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
                  <div className="pb-2 ">{ongoingProject.name}</div>
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
                    <span className="mr-2 rounded-lg border bg-[#F5F5F7] px-2 py-1 text-[17px]">
                      1
                    </span>
                    <span>{paymentDetails.initialPayment}</span>
                  </div>

                  <div className="pt-8">
                    <span className="mr-2 rounded-lg border bg-[#F5F5F7] px-2 py-1 text-[17px]">
                      2
                    </span>
                    <span>{paymentDetails.remainingPayment}</span>
                  </div>
                </div>

                <ChatMessage />
                
              </div>
            </div>
          </div>
        </Sidebar>
      </div>
      <div>
        <Dashboard curentValue={currentValue} onChange={props.onChange} />
      </div>
    </>
  );
}
