import {
  FaEllipsisH,
  FaEllipsisV,
  FaSearch,
  FaPlus,
  FaChevronUp,
  FaBan,
} from "react-icons/fa";
import {
  BiCheckDouble,
  BiSolidCircle,
  BiSolidPhoneCall,
  BiSolidVideo,
  BiSolidSend,
  BiMicrophone,
  BiSmile,
  BiLinkAlt,
  BiPaste,
  BiX,
  BiFile,
} from "react-icons/bi";
import { AiOutlineVideoCamera } from "react-icons/ai";
import { pp1, slide81 } from "../../../../../../public/Images/image";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { chats } from "./data";

function Index() {
  const openChatRoomInfo = () => {
    const chatInfo = document.getElementById("chatInfo");
    chatInfo.style.maxWidth = "21rem";
    chatInfo.style.transition = ".1s ease-in-out";
  };

  const closeChatRoomInfo = () => {
    const chatInfo = document.getElementById("chatInfo");
    chatInfo.style.maxWidth = "0%";
  };

  const AUTH = styled((props) => (
    <Switch
      focusVisibleClassName=".Mui-focusVisible"
      disableRipple
      {...props}
    />
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
          backgroundColor:
            theme.palette.mode === "dark" ? "#1FA860" : "#1FA860",
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
      color: "#ffffff",
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

  return (
    <div className="main">
      <section className="chat__con h-full w-full">
        <div className="chat__con__flex w-full md:flex">
          <div className="chat__lists w-full border bg-[#FFFFFF] p-5 md:h-[100vh] md:w-[20rem]">
            <div className="chat__lists__header flex items-center justify-between">
              <h1 className="text-xl font-bold text-[#174568]">Messages</h1>
              <FaEllipsisH className="text-md cursor-pointer text-[#ACB9B8]" />
            </div>
            <div className="chat__lists__search__and__start_new_chat mt-4">
              <div className="search flex items-center rounded-full border pl-5">
                <FaSearch className="text-[#758A88]" />
                <input
                  type="search"
                  placeholder="Search for chats..."
                  className="bg-[transparent] text-[#758A88]"
                  style={{ border: "none", outline: "none" }}
                />
              </div>
              <div className="search mt-2 flex cursor-pointer items-center rounded-full border bg-[#7295B8]  py-3 pl-10">
                <FaPlus className="mr-2 text-white" />
                <input
                  type="button"
                  value="Start New Chat"
                  className=" text-white"
                  style={{ border: "none", outline: "none" }}
                />
              </div>
            </div>
            <div className="chat__lists__boxes mt-4 flex flex-col gap-3">
              {chats.map((chat) => (
                <div
                  className="flex h-[5rem] cursor-pointer items-center gap-2 px-2 py-3"
                  style={{ borderBottom: "2px solid #E3E8E7" }}
                >
                  <div>
                    <img src={chat.profilePic} width="48px" />
                  </div>
                  <div>
                    <h1 className="font-semibold text-[#171C1B]">
                      {chat.firstName + " " + chat.lastName}{" "}
                    </h1>
                    <p className="text-[.9rem] text-[#465352]">
                      {chat.lastMessage}
                    </p>
                  </div>
                  <div className="gap-1.4 flex flex-col">
                    <span>{chat.time}</span>
                    {chat.seen === true ? (
                      <i>
                        <BiCheckDouble />
                      </i>
                    ) : (
                      <span className="h-4 w-4 rounded-full bg-[#F50F0F] text-center text-[0.8rem] text-white">
                        1
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="active__chat">
            <div className="chat__room">
              <div className="chat__room__nav flex justify-between border-b-2 px-8">
                <div className="flex h-[5rem] cursor-pointer  items-center gap-2">
                  <div>
                    <img src={pp1} width="48px" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h1 className="text-[1.08rem] font-bold text-[#171C1B]">
                      Collins Marrimes
                    </h1>
                    <span className="flex items-center gap-1">
                      <i className="text-[.68rem] text-green-500">
                        <BiSolidCircle />
                      </i>
                      <span className="mt-[0.3rem] text-[.8rem]">
                        Active Now
                      </span>
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <i className="cursor-pointer rounded-full border p-2 text-2xl text-[#7295B8]">
                    <BiSolidPhoneCall />
                  </i>
                  <i className="cursor-pointer rounded-full border p-2 text-2xl text-[#7295B8]">
                    <BiSolidVideo />
                  </i>
                  <i
                    className="cursor-pointer rounded-full border p-2 text-2xl text-[#7295B8]"
                    onClick={openChatRoomInfo}
                  >
                    <FaEllipsisH />
                  </i>
                </div>
              </div>
              <div className="chat__room__chats h-full bg-[#f5f5f5]">
                <div className="chat__room__chats__messages mt-4 flex flex-col gap-2 p-5">
                  <div className="receive flex items-center gap-3">
                    <img src={pp1} width="40px" />
                    <div className="flex flex-col gap-3">
                      <div
                        className="w-[18rem] bg-white p-5"
                        style={{
                          borderRadius: "15px 15px 15px 0px",
                          height: "fit-content",
                        }}
                      >
                        <p>
                          Got it. And what's your take on incorporating
                          animations? I've seen them on many sites lately.
                        </p>
                      </div>
                      <small className="text-[#758A89]">11:20 AM</small>
                    </div>
                  </div>
                  <div className="send ml-[50%] flex items-center gap-3">
                    <div className="flex flex-col gap-3">
                      <div
                        className="w-[18rem] bg-[#7295B8] p-5 text-white"
                        style={{
                          borderRadius: "15px 15px 0px 15px",
                          height: "fit-content",
                        }}
                      >
                        <p>
                          Absolutely. More users access websites from mobile
                          devices. Design for mobile-first, ensuring that the
                          site looks and functions well on smaller screens.
                        </p>
                      </div>
                      <small className="text-right text-[#758A89]">
                        11:43 AM
                      </small>
                    </div>

                    <img src={pp1} width="40px" className="mt-[5.5rem]" />
                  </div>

                  <div className="receive flex items-center gap-3">
                    <img src={pp1} width="40px" />
                    <div className="flex flex-col gap-3">
                      <div
                        className="w-[18rem] bg-white p-5"
                        style={{
                          borderRadius: "15px 15px 15px 0px",
                          height: "fit-content",
                        }}
                      >
                        <p>
                          That makes sense. How about mobile responsiveness?
                          It's a must nowadays, right?
                        </p>
                      </div>
                      <small className="text-[#758A89]">11:20 AM</small>
                    </div>
                  </div>
                  <div className="send ml-[50%] flex items-center gap-3">
                    <div className="flex flex-col gap-3">
                      <div
                        className="w-[18rem] bg-[#7295B8] p-5 text-white"
                        style={{
                          borderRadius: "15px 15px 0px 15px",
                          height: "fit-content",
                        }}
                      >
                        <p>
                          Absolutely. More users access websites from mobile
                          devices. Design for mobile-first, ensuring that the
                          site looks and functions well on smaller screens.
                        </p>
                      </div>
                      <small className="text-right text-[#758A89]">
                        11:43 AM
                      </small>
                    </div>

                    <img src={pp1} width="40px" className="mt-[5.5rem]" />
                  </div>

                  <div className="receive flex items-center gap-3">
                    <img src={pp1} width="40px" />
                    <div className="flex flex-col gap-3">
                      <div
                        className="w-[18rem] bg-white p-5"
                        style={{
                          borderRadius: "15px 15px 15px 0px",
                          height: "fit-content",
                        }}
                      >
                        <p>
                          Good point. Typography is another aspect I'm curious
                          about. Any font suggestions for a modern look?
                        </p>
                      </div>
                      <small className="text-[#758A89]">11:20 AM</small>
                    </div>
                  </div>
                  <div className="receive flex items-center gap-3">
                    <img src={pp1} width="40px" />
                    <div className="flex flex-col gap-3">
                      <div
                        className="w-[18rem] bg-white p-5"
                        style={{
                          borderRadius: "15px 15px 15px 0px",
                          height: "fit-content",
                        }}
                      >
                        <p>Great Idea</p>
                      </div>
                      <small className="text-[#758A89]">11:20 AM</small>
                    </div>
                  </div>
                </div>
              </div>

              <div className="chat__room__tools flex h-[14rem] w-full items-center bg-[#f5f5f5]">
                <div className="chat__room__tools__box m-auto flex h-[11rem] w-[95%] flex-col gap-2 bg-white">
                  <textarea
                    className="p-4"
                    style={{
                      minHeight: "7rem",
                      maxHeight: "7rem",
                      border: "none",
                    }}
                  ></textarea>
                  <div className="flex justify-between border-t-2 px-3 py-2">
                    <div className="action__options flex items-center gap-5">
                      <i className="cursor-pointer p-2 text-2xl text-[#7295B8]">
                        <AiOutlineVideoCamera />
                      </i>
                      <i className="cursor-pointer p-2 text-2xl text-[#7295B8]">
                        <BiMicrophone />
                      </i>
                      <i className="cursor-pointer p-2 text-2xl text-[#7295B8]">
                        <BiSmile />
                      </i>
                      <i className="cursor-pointer p-2 text-2xl text-[#7295B8]">
                        <BiLinkAlt />
                      </i>
                      <i className="cursor-pointer p-2 text-2xl text-[#7295B8]">
                        <BiPaste />
                      </i>
                      <i className="cursor-pointer p-2 text-xl text-[#7295B8]">
                        <FaEllipsisV />
                      </i>
                    </div>
                    <button
                      type="submit"
                      className="cursor-pointer p-2 text-2xl text-[#7295B8]"
                    >
                      <BiSolidSend />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="chat__room__info absolute right-0 top-0 border-l-2 bg-white py-5"
              id="chatInfo"
            >
              <div className="chat__room__info__flex flex flex-col gap-4">
                <div className="close_nav w-[100%] px-5">
                  <i
                    className="cursor-pointer rounded-full border p-1 text-2xl text-[#000000]"
                    style={{ float: "right" }}
                    onClick={closeChatRoomInfo}
                  >
                    <BiX />
                  </i>
                </div>
                <div className="profile_box flex flex-col gap-1">
                  <img src={pp1} width="80px" className="m-auto" />
                  <h1 className="text-center text-[1.5rem] font-bold text-[#000000]">
                    Robert Fox
                  </h1>
                  <p className="font-md text-center text-[.9rem] text-[#465352]">
                    Joined: 2 years ago
                  </p>
                </div>
                <div className="notification_setting flex items-center justify-between border-b-2 border-t-2 py-2">
                  <span className="pl-2">Notifications</span>
                  <FormGroup>
                    <FormControlLabel
                      control={<AUTH sx={{ m: 1 }} />}
                      label=""
                    />
                  </FormGroup>
                </div>
                <div className="recent_files flex flex-col gap-2 border-b-2 px-3 py-2">
                  <div className="recent_files_nav flex items-center justify-between">
                    <div className="left flex items-center gap-1">
                      <h4 className="text-[1.03rem] font-bold">Recent Files</h4>
                      <p className="text-[#758A89]">(25 Files)</p>
                    </div>
                    <div className="right">
                      <i className="cursor-pointer pr-2 text-[#758A89]">
                        <FaChevronUp />
                      </i>
                    </div>
                  </div>
                  <div className="files-con flex flex-col gap-2">
                    <div className="each_file flex items-center justify-between">
                      <div className="left flex items-center gap-1">
                        <i className="text-[#ACB9B8]">
                          <BiFile />
                        </i>
                        <p className="text-[#ACB9B8]">Content.pdf</p>
                      </div>
                      <div className="right">
                        <i className="cursor-pointer text-[#ACB9B8]">
                          <FaEllipsisH />
                        </i>
                      </div>
                    </div>

                    <div className="each_file flex items-center justify-between">
                      <div className="left flex items-center gap-1">
                        <i className="text-[#ACB9B8]">
                          <BiFile />
                        </i>
                        <p className="text-[#ACB9B8]">Content.pdf</p>
                      </div>
                      <div className="right">
                        <i className="cursor-pointer text-[#ACB9B8]">
                          <FaEllipsisH />
                        </i>
                      </div>
                    </div>

                    <div className="each_file flex items-center justify-between">
                      <div className="left flex items-center gap-1">
                        <i className="text-[#ACB9B8]">
                          <BiFile />
                        </i>
                        <p className="text-[#ACB9B8]">Content.pdf</p>
                      </div>
                      <div className="right">
                        <i className="cursor-pointer text-[#ACB9B8]">
                          <FaEllipsisH />
                        </i>
                      </div>
                    </div>
                  </div>
                  <button className="my-2 text-left">Show more</button>
                </div>
                <div className="images flex flex-col gap-2 px-3 py-2">
                  <div className="images_nav flex items-center justify-between">
                    <div className="left flex items-center gap-1">
                      <h4 className="text-[1.03rem] font-bold">Images</h4>
                      <p className="text-[#758A89]">(12 Files)</p>
                    </div>
                  </div>
                  <div className="files-con m-auto grid grid-cols-3 gap-6">
                    <img src={slide81} width="80px" />
                    <img src={slide81} width="80px" />
                    <img src={slide81} width="80px" />
                    <img src={slide81} width="80px" />
                    <img src={slide81} width="80px" />
                    <img src={slide81} width="80px" />
                  </div>
                </div>
                <div className="my-5 block">
                  <button className="m-auto flex w-[90%] items-center gap-2  rounded-full border border-red-500 px-[5rem] py-2 text-red-600">
                    <i>
                      <FaBan />
                    </i>
                    <span>Block Robert</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Index;
