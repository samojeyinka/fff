import Sidebar from "../..";
import { image, savedProjects, profileProjects } from "./data";
import Project from "../../../MobileSidebar/MobileuserTimeline/Project";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";
import {BiChat} from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";

export default function Index() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [ongoingProjects, setOgoingProjects] = useState([]);
  const [gigCreator, setGigCreator] = useState("");
  


  // console.log(ongoingProjects.orders.gigCreatorId)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, []);
  const { currentUser } = useSelector((state) => state.user);

  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
  const activeProjects = async () => {
    try {
        const res = await axios.get(`http://localhost:8080/api/orders/myorders/${currentUser._id}`)
        setOgoingProjects(res.data.orders)
        res.data.orders.forEach(order => {
          setGigCreator(order.gigCreatorId);
         });
    } catch (error) {
      console.log(error)
    }
  }
  activeProjects();

},[])


  const startChat = async() => {
    try {
      const res = await axios.post("http://localhost:8080/api/conversation",{
        participant1:currentUser._id,
        participant2:gigCreator
      })
        navigate("/clientMessages")
      console.log(res)
    } catch (error) {
        console.log(error)
    }
}

  return (
    <>
      <div className="hidden sm:block">
        <Sidebar>
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
                  className="block border border-[#9d9d9d] bg-white px-4 ps-10 text-sm text-[#7295B8] focus:border-[#9d9d9d] focus:ring-transparent sm:w-[370px] md:w-[490px] lg:w-[720px] xl:w-[960px] "
                  placeholder="Search here"
                  required
                />
              </div>
            </form>
          </div>

          <div className="grid pt-3 lg:grid-cols-[65%_35%]">
            <div className="rounded-lg border-transparent  bg-[#F3FDFE] pr-5">
              <div className="flex rounded-lg bg-[#174568] px-10 pt-5 text-white">
                <div className=" xl:pr-10">
                  <div className="py-8 text-2xl font-medium">
                    Welcome back, {currentUser && currentUser.lastName}
                  </div>
                  <div className="pb-14 text-xs">
                    Your project: Hellocer website design is 70% completed.{" "}
                    <span className="underline">
                      <a href="">See details</a>
                    </span>
                  </div>
                </div>
                <div className="lg:pt-5">
                  <img src={image.image1} alt="image" />
                </div>
              </div>

              <div className="flex pt-10">
                {/* Ongoing Projects */}
                <div className="sm:px-0 md:px-5">
                  <div>Ongoing Projects</div>
                  {ongoingProjects.map((project) => {
                     const categories = project.gigCategory.join('.');
                     const truncatedCategories = categories.length > 30 ? categories.substring(0, 30) + '...' : categories;
                   
                    return (
                      <div
                        key={project._id}
                        className="mt-3 flex justify-around rounded-lg border bg-white px-5 py-3 text-xs lg:py-2 xl:py-4 xl:text-sm"
                      >
                        <div className="pt-3">
                          <img src={project.img} alt="image" className="w-[40px] h-[60px]" />
                        </div>
                        <div className="pl-5">
                          <div className="text-[#5d7d95]">{truncatedCategories}</div>
                          <div className="py-1 text-[#174568]">
                            {project.title}
                          </div>
                          <div className="flex justify-between py-1">
                            <div className="pr-5">${project.price}</div>
                            <div>
                            <Link onClick={startChat}>
                               <BiChat/>
                               </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Saved Projects */}
                <div>
                  <div>Saved Projects</div>
                  {savedProjects.map((data, index) => {
                    return (
                      <div
                        key={index}
                        className="mt-3 flex justify-around rounded-lg border bg-white px-5 py-3 text-xs lg:py-2 xl:py-4 xl:text-sm"
                      >
                        <div className="pt-3">
                          <img src={data.image} alt="image" />
                        </div>
                        <div className="pl-5">
                          <div className="text-[#5d7d95]">{data.skill}</div>
                          <div className="py-1 text-[#174568]">
                            {data.workType}
                          </div>
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
            </div>

            {/* Profile  */}
            <div className="mx-10 mt-10 rounded-lg border-transparent bg-[#f5f5f8] lg:mt-0">
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
                  <img
                    src={currentUser && currentUser.profilePicture}
                    alt="image"
                    className="size-24 rounded-full"
                  />
                </div>
                <div>
                  {currentUser && currentUser.firstName} {currentUser && currentUser.lastName}
                </div>
                <div className="text-[12px] text-[#174568]">
                  {currentDateTime.toLocaleString()}
                </div>
              </div>

              {/* profile Projects */}
              <div>
                <div className="flex justify-between px-10 pb-1 pt-4 lg:px-2 xl:px-7">
                  <div>Your Project History</div>
                  <div>
                    <a href="#">
                      <img src={image.more} alt="image" />
                    </a>
                  </div>
                </div>
                <div className="px-10 lg:px-0">
                  {profileProjects.map((data, index) => {
                    return (
                      <div
                        key={index}
                        className="mt-3 flex justify-around rounded-lg border bg-white px-5 py-3 text-xs lg:py-2 xl:py-4 xl:text-sm"
                      >
                        <div className="pt-3">
                          <img src={data.image} alt="image" />
                        </div>
                        <div className="pl-5">
                          <div className="text-[#5d7d95]">{data.skill}</div>
                          <div className="py-2 text-[#174568] lg:py-1">
                            {data.workType}
                          </div>
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
            </div>
          </div>

          <div className="flex justify-end pb-10 pr-10 pt-14">
            <div className="flex border bg-[#174568] px-4 py-3">
              <div className="pr-24 pt-2 text-2xl text-white">Messages</div>
              <div className="flex">
                <div className="pr-3">
                  <a href="#">
                    {" "}
                    <img src={image.notif2} alt="image" />
                  </a>
                </div>
                <div>
                  <a href="#">
                    {" "}
                    <img src={image.image2} alt="image" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Sidebar>
      </div>

      <div>
        <Project />
      </div>
    </>
  );
}
