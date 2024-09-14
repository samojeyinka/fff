import Table from "@mui/joy/Table";
import { Checkbox } from "flowbite-react";
import Dropdown from "@mui/joy/Dropdown";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";
import more from "/Images/more.png";

export default function OngoingProject({hellocians}) {


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
                GIG
              </span>
            </td>
            <td style={{ width: "20%" }}>
              <span className="text-[12px] text-[#A3AED0] dark:text-[#f5f5f5]">
                ACTIVE PROJECT
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
        {hellocians.map(hellocian => (
        <tbody className="dark:text-[#f5f5f5]">
          <tr>
            <td>
              <div className="flex items-center gap-2">
                <Checkbox id="accept" defaultChecked />
                <span className="text-[12px] font-semibold text-[#2B3674] dark:text-[#f5f5f5]">
                  {hellocian.firstName + " " + hellocian.lastName}
                </span>
              </div>
            </td>
            <td>
              <div className="text-[12px]">{hellocian.categoryName}</div>
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
               {hellocian.createdAt}
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
