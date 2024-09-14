import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import MobileSidebar from "../../../MobileSidebar";
import Profile from "./profile";
import Preferences from "./preferences";
import Security from "./security";

export default function Index() {
  // TAB
  const [value, setValue] = React.useState("1");
  const handleChange = (
    _event: unknown,
    newValue: React.SetStateAction<string>,
  ) => {
    setValue(newValue);
  };

  return (
    <MobileSidebar>
       <div className="bg-[#f5f5f5] dark:bg-black sm:hidden">
        <div className="mt-[-95px]">
          <div className="pl-5 pt-5 text-3xl font-semibold text-[#174568] dark:text-white">
            Setting
          </div>

          <div className="rounded-xl border bg-white dark:bg-black">
            <Box sx={{ width: "full", typography: "body1" }}>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                  >
                    <Tab label="Edit Profile" value="1" />
                    <div className="lg:mx-5 xl:mx-10"></div>
                    <Tab label="Preferences" value="2" />
                    <div className="lg:mx-5 xl:mx-10"></div>
                    <Tab
                      label="Security"
                      value="3"
                      className="text-xl font-semibold text-red-500"
                    />
                  </TabList>
                </Box>
                <TabPanel value="1">
                  <Profile />
                </TabPanel>
                <TabPanel value="2">
                  <Preferences />
                </TabPanel>
                <TabPanel value="3">
                  <Security />
                </TabPanel>
              </TabContext>
            </Box>
          </div>
        </div>
      </div>
    </MobileSidebar>
  );
}
