import { Link } from "react-router-dom";
import redIcon from "/Images/redIcon.png";
import Sidebar from "../..";
import AdminHeader from "../../../../Headers/AdminHeader";
import AdminClientsData from "../../../MobileSidebar/MobileuserTimeline/AdminClientsData";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import { ClientDatas } from "./data";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Index() {
  const [clients, setClients] = useState([]);

  const getClients = async () => {
    try {
      const allClients = await axios.get(
        "http://localhost:8080/api/user/admin/clients",
      );
      const data = allClients.data.clients;
      setClients(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getClients();
  });

  const reload = () => {
    window.location.reload();
  };

  return (
    <div>
      <div className="hidden bg-[#f5f5f5] md:block">
        <Sidebar>
          {clients.length > 0 ? (
            <div className="w-[610px]  pb-[87px] pt-10  dark:bg-black lg:w-[1000px] lg:pl-6 lg:pr-16 xl:pl-12">
              <div className="flex justify-between">
                <div className="pt-3 text-2xl font-semibold text-[#174568] dark:text-white">
                  Clients
                </div>

                <div>
                  <AdminHeader />
                </div>
              </div>
              <div className="mt-7 rounded-xl bg-white">
                <div className="mx-auto w-[94%] py-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-[#2B3674]">
                      Clients Data
                    </h3>
                    <PiDotsThreeOutlineFill color="#4318FF" size={26} />
                  </div>
                  <div className=" w-full overflow-hidden border-b   ">
                    <table className="mt-3 w-full">
                      <thead>
                        <tr>
                          <th className="border-b border-gray-200 bg-white  py-3 text-left text-xs font-medium uppercase leading-4 tracking-wider text-[#A3AED0]">
                            Name
                          </th>
                          <th className="border-b border-gray-200 bg-white  py-3 text-left text-xs font-medium uppercase leading-4 tracking-wider text-[#A3AED0]">
                            T/O
                          </th>
                          <th className="border-b border-gray-200 bg-white  py-3 text-left text-xs font-medium uppercase leading-4 tracking-wider text-[#A3AED0]">
                            T/S
                          </th>
                          <th className="border-b border-gray-200 bg-white  py-3 text-left text-xs font-medium uppercase leading-4 tracking-wider text-[#A3AED0]">
                            Email Address
                          </th>
                          <th className="border-b border-gray-200 bg-white  py-3 text-left text-xs font-medium uppercase leading-4 tracking-wider text-[#A3AED0]">
                            ACTIVE PROJECT
                          </th>
                          <th className="border-b border-gray-200 bg-white  py-3 text-left text-xs font-medium uppercase leading-4 tracking-wider text-[#A3AED0]">
                            Status
                          </th>

                          <th className="border-b border-gray-200 bg-white  py-3 text-left text-xs font-medium uppercase leading-4 tracking-wider text-[#A3AED0]">
                            LAST ACTIVITY
                          </th>
                        </tr>
                      </thead>
                      <tbody className="w-full bg-white">
                        {clients.map((data) => (
                          <tr key={data.id}>
                            <td className="px-6 py-4 text-sm text-[#2B3674]">
                              <div className="flex items-center gap-4">
                                <input
                                  type="checkbox"
                                  className="outline-none"
                                />
                                <p>{data.firstName + " " + data.lastName}</p>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-left text-sm text-[#2B3674]">
                              {data.to || 15}
                            </td>
                            <td className="px-6 py-4 text-left text-sm text-[#2B3674]">
                              ${data.ts || 50}
                            </td>
                            <td className="px-6 py-4 text-left text-sm text-[#2B3674]">
                              {data.email}
                            </td>
                            <td className="px-6 py-4 text-left text-sm text-[#2B3674]">
                              {data.activeProject ||
                                "Project Hellocer Front end dev..."}
                            </td>
                            <td className="px-6 py-4 text-left text-sm text-[#2B3674]">
                              <button className="rounded-2xl border border-[#1814F3] px-4 py-1 text-sm capitalize text-[#1814F3]">
                                {data.status || "Active"}
                              </button>
                            </td>
                            <td className="px-6 py-4 text-left text-sm text-[#2B3674]">
                              <div className="flex items-center gap-x-4">
                                <p>{data.date}</p>
                                <PiDotsThreeOutlineFill
                                  color="#4318FF"
                                  size={23}
                                />
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="hidden md:block">
              <div className="bg-[#f5f5f5] pb-[256px] pr-[447px] dark:bg-black">
                <div className="flex justify-between pt-20"></div>
                <div className="ml-[10%] grid w-80 justify-items-center border bg-white md:mt-20 md:h-60 md:w-[500px] xl:h-80  xl:w-[560px]">
                  <div className="mt-5 md:mt-10">
                    <div className="grid justify-center">
                      <img
                        src={redIcon}
                        alt="blank"
                        className="size-14 md:size-20"
                      />
                    </div>
                    <div className="grid justify-items-center pt-2 text-xs text-[#AFAFAF]">
                      <div>There are no clients here at the moment,</div>
                      <div>please check back later. Thank You!</div>
                    </div>
                    <div className="mb-10 grid justify-center pt-3 text-sm font-semibold underline dark:text-white md:mb-0">
                      <Link onClick={reload}>Reload</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Sidebar>
      </div>
      <div>
        <AdminClientsData />
      </div>
    </div>
  );
}
