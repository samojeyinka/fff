import Table from "@mui/joy/Table";
import greenmark from "/Images/greenmark.png";
import cancelbutton from "/Images/cancelbutton.png";
import error from "/Images/error.png";
import { Progress } from "flowbite-react";

export default function OngoingProject() {
  return (
    <div className="pb-[135px] dark:bg-black">
      <Table aria-label="basic table">
        <thead>
          <tr>
            <td style={{ width: "40%" }}>
              <span className="text-[12px] text-[#A3AED0] dark:text-[#f5f5f5]">
                NAME
              </span>
            </td>
            <td>
              <span className="text-[12px] text-[#A3AED0] dark:text-[#f5f5f5]">
                STATUS
              </span>
            </td>
            <td>
              <span className="text-[12px] text-[#A3AED0] dark:text-[#f5f5f5]">
                DATE
              </span>
            </td>
            <td>
              <span className="text-[12px] text-[#A3AED0] dark:text-[#f5f5f5]">
                PROGRESS
              </span>
            </td>
          </tr>
        </thead>
        <tbody className="dark:text-[#f5f5f5]">
          <tr>
            <td>
              <span className="text-xs font-semibold text-[#2B3674] dark:text-[#f5f5f5]">
                Project Hellocer Front end dev...
              </span>
            </td>
            <td>
              <div className="flex">
                <div className="pr-1 pt-1">
                  <img src={greenmark} alt="image" className="size-4" />
                </div>
                <div>Completed</div>
              </div>
            </td>
            <td>18 Apr 2024</td>
            <td>
              <Progress progress={100} />
            </td>
          </tr>
          <tr>
            <td>
              {" "}
              <span className="text-xs font-semibold text-[#2B3674] dark:text-[#f5f5f5]">
                Project Weather App UI Design...
              </span>
            </td>
            <td>
              <div className="flex">
                <div className="pr-1 pt-0.5">
                  <img src={cancelbutton} alt="image" className="size-5" />
                </div>
                <div>Canceled</div>
              </div>
            </td>
            <td>18 Apr 2024</td>
            <td>
              {" "}
              <Progress progress={0} />
            </td>
          </tr>
          <tr>
            <td>
              {" "}
              <span className="text-xs font-semibold text-[#2B3674] dark:text-[#f5f5f5]">
                Project Hellocer Front end dev...
              </span>
            </td>
            <td>
              <div className="flex">
                <div className="pr-1 pt-0.5">
                  <img src={error} alt="image" className="size-5" />
                </div>
                <div>Ongoing</div>
              </div>
            </td>
            <td>20 May 2024</td>
            <td>
              {" "}
              <Progress progress={50} />
            </td>
          </tr>
          <tr>
            <td>
              {" "}
              <span className="text-xs font-semibold text-[#2B3674] dark:text-[#f5f5f5]">
                Project Hellocer Front end dev...
              </span>
            </td>
            <td>
              <div className="flex">
                <div className="pr-1 pt-0.5">
                  <img src={greenmark} alt="image" />
                </div>
                <div>Completed</div>
              </div>
            </td>
            <td>12 Jul 2024</td>
            <td>
              {" "}
              <Progress progress={100} />
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
