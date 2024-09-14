import Table from "@mui/joy/Table";
import { Checkbox } from "flowbite-react";
import Dropdown from "@mui/joy/Dropdown";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";
import more from "/Images/more.png";


export default function OngoingProject({gigs}) {


  return (
    <div className="mx-4 pb-[360px] dark:bg-black">
      <Table aria-label="basic table">
        <thead>
          <tr>
            <td style={{ width: "20%" }}>
              <span className="text-[12px] text-[#A3AED0] dark:text-[#f5f5f5]">
                NAME
              </span>
            </td>
            <td style={{ width: "20%" }}>
              <span className="text-[12px] text-[#A3AED0] dark:text-[#f5f5f5]">
                HELLOCIAN
              </span>
            </td>
            <td style={{ width: "20%" }}>
              <span className="text-[12px] text-[#A3AED0] dark:text-[#f5f5f5]">
                PRICING PLANS
              </span>
            </td>
            <td style={{ width: "20%" }}>
              <span className="text-[12px] text-[#A3AED0] dark:text-[#f5f5f5]">
                STATUS
              </span>
            </td>
            <td style={{ width: "13%" }}>
              <span className="text-[12px] text-[#A3AED0] dark:text-[#f5f5f5]">
                DATE ADDED
              </span>
            </td>
          </tr>
        </thead>
        {gigs.map(gig => (
        <tbody className="dark:text-[#f5f5f5]">
          <tr>
            <td>
              <div className="flex items-center gap-2">
                <Checkbox id="accept" defaultChecked />
                <span className="text-[12px] font-semibold text-[#2B3674] dark:text-[#f5f5f5]">
                  {gig.title}
                </span>
              </div>
            </td>
            <td>
              <div className="text-[12px]">Victor, vivian + 1 other</div>
            </td>
            <td>
              <div className="text-[12px]">Basic, Standard, Advance</div>
            </td>
            <td>
              <button className="rounded-lg border border-[#1814F3] px-5 text-[#1814F3] dark:text-[#f5f5f5]">
                Active
              </button>
            </td>
            <td>
              <div className="text-[#2B3674] dark:text-[#f5f5f5]">
               {gig.createdAt}
              </div>
            </td>
            <td>
              <div>
                <Dropdown>
                  <MenuButton>
                    <img src={more} alt="image" />
                  </MenuButton>
                  <Menu>
                    <MenuItem>Edit</MenuItem>
                    <MenuItem>Remove</MenuItem>
                    <MenuItem>Achieve</MenuItem>
                  </Menu>
                </Dropdown>
              </div>
            </td>
          </tr>
        </tbody>
))}
      </Table>
    </div>
  );
}
