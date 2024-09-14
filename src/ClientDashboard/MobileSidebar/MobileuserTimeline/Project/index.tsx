import { useSelector } from "react-redux";
import MobileSidebar from "../../../MobileSidebar";
import {
  profile,
  image,
  ongoingProjects,
  savedProjects,
  profileProjects,
} from "./data";

export default function Index() {

  const {currentUser} = useSelector(state => state.user)
  return (
    <MobileSidebar>
      <div className="mx-3 mt-[-110px] sm:hidden">
        <div className="mt-6">
          <form>
            <label
              htmlFor="default-search"
              className="sr-only mb-2 text-sm font-medium text-[#7295B8] "
            >
              Search
            </label>
            <div className="relative">
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full border border-[#9d9d9d] bg-white py-4 ps-10 text-sm text-[#7295B8] focus:border-[#9d9d9d] focus:ring-transparent"
                placeholder="Search"
                required
              />
            </div>
          </form>
        </div>

        <div className=" bg-[#F3FDFE] pt-3 text-xs">
          <div className=" flex justify-between rounded-lg border border-transparent bg-[#174568] pt-3 text-white">
            <div className="pl-7 pt-4">
              <div className="text-[20px] font-semibold">
                Welcome back, {currentUser && currentUser.lastName}
              </div>
              <div className="py-6">
                <div>Your project: Hellocer</div>
                <div>website design is 70% </div>
                <div>completed.See details</div>
              </div>
            </div>

            <div className="py-4 pr-3">
              <img src={image.image1} alt="image" className="h-20" />
            </div>
          </div>
        </div>

        {/* Profile */}
        <div className="mt-10 rounded-lg border-transparent bg-[#f5f5f8]">
          <div className="flex justify-between px-6 pt-5">
            <div>Profile</div>
            <div className="flex">
              <div className="pr-8">
                <a href="#">
                  <img src={image.notif} alt="image" />
                </a>
              </div>
              <div>
                <a href="#">
                  <img src={image.more} alt="image" />
                </a>
              </div>
            </div>
          </div>
          <div className="grid justify-items-center">
            <div className="py-3">
              <img src={currentUser &&currentUser.profilePicture} 
              alt="image" 
                 className="w-[6rem] h-[6rem] rounded rounded-full"
              />
            </div>
            <div>{currentUser && currentUser.firstName} {currentUser && currentUser.lastName}</div>
            <div className="text-[#cacacc]">{profile.skill}</div>
          </div>

          {/* Ongoing Projects */}
          <div className="px-3 pt-6">
            <div>Ongoing Projects</div>
            {ongoingProjects.map((data, index) => {
              return (
                <div
                  key={index}
                  className="mt-3 flex justify-around rounded-lg border bg-white px-5 py-3 text-sm"
                >
                  <div className="pt-3">
                    <img src={data.image} alt="image" className="size-16" />
                  </div>
                  <div className="pl-5">
                    <div className="text-[#5d7d95]">{data.skill}</div>
                    <div className="py-2 text-[#174568]">{data.workType}</div>
                    <div className="flex justify-between py-1">
                      <div className="pr-5">{data.amount}</div>
                      <div>
                        <a href="#">
                          <img src={data.chat} alt="image" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Saved Projects */}
        <div className="px-3 pt-6">
          <div>Ongoing Projects</div>
          {savedProjects.map((data, index) => {
            return (
              <div
                key={index}
                className="mt-3 flex justify-around rounded-lg border bg-white px-5 py-3 text-sm"
              >
                <div className="pt-3">
                  <img src={data.image} alt="image" className="size-16" />
                </div>
                <div className="pl-5">
                  <div className="text-[#5d7d95]">{data.skill}</div>
                  <div className="py-2 text-[#174568]">{data.workType}</div>
                  <div className="flex justify-between py-1">
                    <div className="pr-5">{data.amount}</div>
                    <div>
                      <a href="#">
                        <img src={data.chat} alt="image" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* profile Projects */}
        <div>
          <div className="flex justify-between px-10 pb-1 pt-8">
            <div>Your Project History</div>
            <div>
              <a href="#">
                <img src={image.more} alt="image" />
              </a>
            </div>
          </div>
          <div className="px-4">
            {profileProjects.map((data, index) => {
              return (
                <div
                  key={index}
                  className="mt-3 flex justify-around rounded-lg border bg-white px-5 py-3 text-sm"
                >
                  <div className="pt-3">
                    <img src={data.image} alt="image" className="size-16" />
                  </div>
                  <div className="pl-5">
                    <div className="text-[#5d7d95]">{data.skill}</div>
                    <div className="py-2 text-[#174568]">{data.workType}</div>
                    <div className="flex justify-between py-1">
                      <div className="pr-5">{data.amount}</div>
                      <div>
                        <a href="#">
                          <img src={data.chat} alt="image" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* MESSAGE NOTIFICATION */}
        <div className="flex justify-end py-14 pr-5">
          <div className="flex border bg-[#174568] px-4 py-3">
            <div className="pr-12 pt-1 text-sm text-white">Messages</div>
            <div className="flex">
              <div className="pr-1">
                <a href="#">
                  {" "}
                  <img src={image.notif2} alt="image" className="size-8" />
                </a>
              </div>
              <div>
                <a href="#">
                  {" "}
                  <img src={image.image2} alt="image" className="size-8" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MobileSidebar>
  );
}
