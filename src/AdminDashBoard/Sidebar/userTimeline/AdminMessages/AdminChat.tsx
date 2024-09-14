import { Button } from "flowbite-react";
import Sidebar from "../../";
import AdminMessages from "../../../MobileSidebar/MobileuserTimeline/AdminMessages";
import {
  Image,
  chat,
  displayChat,
  profile,
  notifications,
  recentFiles,
  imagesFiles,
} from "./data";
import { FaPlus } from "react-icons/fa6";
import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

// FIRST NOTIFICAION
const FIRSTNOTIF = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

export default function AdminChat() {
  return (
    <Sidebar>
      <div className="hidden md:block">
        <div className="mt-10 flex">
          {/* FIRST COMPONENT */}
          <div className="ml-3 w-[320px]">
            <div className="flex justify-between">
              <div>Messages</div>
              <div>
                <img src={Image.more} alt="image" />
              </div>
            </div>

            <div className="relative mt-4">
              <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                <svg
                  className="size-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full rounded-full border border-[#E3E8E7] px-4 ps-10 text-sm text-[#758A88]  focus:ring-transparent "
                placeholder="Search for chats..."
                required
              />
            </div>

            <div>
              <Button className="mt-4 flex w-full justify-center rounded-xl border bg-[#7295B8] text-white">
                <div className="pr-2 pt-1">
                  <FaPlus />
                </div>
                <div>Start New Chat</div>
              </Button>
            </div>

            <div>
              {chat.map((data, index) => {
                return (
                  <div key={index} className="mt-5">
                    <div className="pb-2">
                      <hr />
                    </div>

                    <div className="flex">
                      <div>
                        <div className="pt-2">
                          <img src={data.displayPicture} alt="image" />
                        </div>
                      </div>

                      <div className="pl-2 pr-16 pt-1">
                        <div className="text-[12px] font-semibold">
                          {data.name}
                        </div>
                        <div className="text-[10px] text-[#465352]">
                          {data.message}
                        </div>
                      </div>

                      <div>
                        <div>{data.time}</div>
                        <div className="mt-3">
                          <img
                            src={data.NumbOfMessages}
                            alt="image"
                            className="size-4"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* SECOND CATEGORY */}
          <div>
            <div className="ml-8 flex w-[320px] justify-between">
              <div className="flex">
                <div>
                  <img
                    src={displayChat.image}
                    alt="image"
                    className="mr-3 size-8"
                  />
                </div>

                <div>
                  <div className="text-[12px] font-semibold">Robert Fox</div>
                  <div className="flex justify-between">
                    <div className="pt-1">
                      <img
                        src={displayChat.frame4}
                        alt="image"
                        className="pr-1"
                      />
                    </div>
                    <div className="text-[12px]">Active Now</div>
                  </div>
                </div>
              </div>
              <div className="flex">
                <div>
                  <button>
                    <img
                      src={displayChat.audio}
                      alt="image"
                      className="size-8"
                    />
                  </button>
                </div>
                <div className="px-2">
                  <button>
                    <img
                      src={displayChat.video}
                      alt="image"
                      className="size-8"
                    />
                  </button>
                </div>

                {/* MORE */}
                <div>
                  <button
                    id="dropdownNotificationButton"
                    data-dropdown-toggle="dropdownNotification"
                    className="relative inline-flex items-center text-center text-sm font-medium text-gray-500 hover:text-gray-900 focus:outline-none dark:text-gray-400 dark:hover:text-white"
                    type="button"
                  >
                    <img
                      src={displayChat.moreOption}
                      alt="image"
                      className="size-8"
                    />
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
              </div>
            </div>
          </div>

          {/* THIRD COMPONENT */}
          <div className="ml-10 w-[350px]">
            <div className="grid justify-items-center">
              <div className="py-3">
                <img src={profile.display} alt="image" className="size-12" />
              </div>
              <div className="font-semibold">{profile.name}</div>
              <div className="text-[#cacacc]">{profile.skill}</div>
            </div>

            <div className="py-3">
              <hr />
            </div>

            {/*NOTIFICATIONS */}
            <div className="flex justify-between">
              <div className="pt-2">Notification</div>
              <div>
                <FormGroup>
                  <FormControlLabel
                    control={<FIRSTNOTIF sx={{ m: 1 }} />}
                    label=""
                  />
                </FormGroup>
              </div>
            </div>

            <div className="py-3">
              <hr />
            </div>
            <div className="flex justify-between pb-2 pt-3">
              <div>{displayChat.recent}</div>
              <div>
                <img src={displayChat.upArrow} alt="image" />
              </div>
            </div>
            <div>
              {recentFiles.map((data, index) => {
                return (
                  <div key={index} className="flex justify-between pt-4">
                    <div className="flex">
                      <div className="pr-2">
                        <img src={data.pdfLogo} alt="image" />
                      </div>
                      <div>{data.skill}</div>
                    </div>
                    {/* MORE */}
                    <div>
                      <button
                        id="dropdownNotificationButton"
                        data-dropdown-toggle="dropdownNotification"
                        className="relative inline-flex items-center text-center text-sm font-medium text-gray-500 hover:text-gray-900 focus:outline-none dark:text-gray-400 dark:hover:text-white"
                        type="button"
                      >
                        <div>
                          <img
                            src={data.moreSkill}
                            alt="image"
                            className="pt-2"
                          />
                        </div>
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
                  </div>
                );
              })}
            </div>
            <div className="pt-4">
              <button>Show more</button>
            </div>
            <div className="py-4">
              <hr />
            </div>

            <div>
              <div>{imagesFiles.images}</div>
              <div className="flex pt-5">
                <div>
                  <img
                    src={imagesFiles.firstImage}
                    alt="image"
                    className="size-28"
                  />
                </div>
                <div className="px-3">
                  <img
                    src={imagesFiles.secondImage}
                    alt="image"
                    className="size-28"
                  />
                </div>
                <div>
                  <img
                    src={imagesFiles.thirdImage}
                    alt="image"
                    className="size-28"
                  />
                </div>
              </div>

              <div className="flex pt-3">
                <div>
                  <img
                    src={imagesFiles.fourthImage}
                    alt="image"
                    className="size-28"
                  />
                </div>
                <div className="px-3">
                  <img
                    src={imagesFiles.fifthImage}
                    alt="image"
                    className="size-28"
                  />
                </div>
                <div>
                  <img
                    src={imagesFiles.sixthImage}
                    alt="image"
                    className="size-28"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <AdminMessages />
      </div>
    </Sidebar>
  );
}