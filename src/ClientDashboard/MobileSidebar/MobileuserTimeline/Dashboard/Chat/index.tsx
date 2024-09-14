import MobileSidebar from "../../../../MobileSidebar";
import { FaEllipsisH, FaSearch, FaPlus } from "react-icons/fa";
import { BiCheckDouble } from "react-icons/bi";
import { chats } from "./data.tsx";

export default function index() {
  return (
    <MobileSidebar>
      <div className="mt-[-100px]">
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
                className="border-transparent bg-[transparent] px-10 text-[#758A88]"
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

                <div className="flex">
                  <div>
                    <h1 className="font-semibold text-[#171C1B]">
                      {chat.firstName + " " + chat.lastName}{" "}
                    </h1>
                    <p className="text-[.9rem] text-[#465352]">
                      {chat.lastMessage}
                    </p>
                  </div>

                  <div className="pl-[80px]">{chat.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MobileSidebar>
  );
}
