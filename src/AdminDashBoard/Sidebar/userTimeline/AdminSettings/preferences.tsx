import { Button, TextInput } from "flowbite-react";
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

// SECOND NOTIFICATION
const SECONDNOTIF = styled((props) => (
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

export default function Preferences() {
  return (
    <>
      <div className="pr-[150px]">
        <form className="flex max-w-md flex-col gap-4 text-xs">
          {/* CURRENCY AND TIME ZONE */}
          <div className="flex pt-5">
            <div>
              <div className="mb-2 block">
                <div className="dark:text-[#f5f5f5]">Currency</div>
              </div>
              <TextInput
                id="Currency"
                type="number"
                placeholder="USD"
                required
                className="lg:w-[240px] xl:w-[300px]"
              />
            </div>

            <div className="pl-6">
              <div className="mb-2 block">
                <div className="text-xs dark:text-[#f5f5f5]">Time Zone</div>
              </div>
              <TextInput
                id="UserName"
                type="text"
                placeholder="(GMT-12:00) International Date Line West"
                required
                className="lg:w-[240px] xl:w-[300px]"
              />
            </div>
          </div>

          <div className="pt-5">
            <div className="text-[#B1B1B1]">Notification</div>

            {/* FIRST NOTIFICATIONS */}
            <div className="flex">
              <div>
                <FormGroup>
                  <FormControlLabel
                    control={<FIRSTNOTIF sx={{ m: 1 }} />}
                    label=""
                  />
                </FormGroup>
              </div>
              <div className="pt-3 text-sm dark:text-[#F2F2F2]">
                Send Email notifications for new message
              </div>
            </div>

            {/* SECOND NOTIFICATIONS */}
            <div className="flex">
              <div>
                <FormGroup>
                  <FormControlLabel
                    control={<SECONDNOTIF sx={{ m: 1 }} />}
                    label=""
                  />
                </FormGroup>
              </div>
              <div className="pt-3 text-sm dark:text-[#F2F2F2]">
                Allow Hellocians to message you directly
              </div>
            </div>

            {/* THIRD NOTIFICATIONS */}
            <div className="flex">
              <div>
                <FormGroup>
                  <FormControlLabel
                    control={<FIRSTNOTIF sx={{ m: 1 }} />}
                    label=""
                  />
                </FormGroup>
              </div>
              <div className="pt-3 text-sm dark:text-[#F2F2F2]">
                Hellocian activities
              </div>
            </div>

            {/* FOURTH NOTIFICATIONS */}
            <div className="flex">
              <div>
                <FormGroup>
                  <FormControlLabel
                    control={<SECONDNOTIF sx={{ m: 1 }} />}
                    label=""
                  />
                </FormGroup>
              </div>
              <div className="pt-3 text-sm dark:text-[#F2F2F2]">New order</div>
            </div>

            {/* FIFTH NOTIFICATIONS */}
            <div className="flex">
              <div>
                <FormGroup>
                  <FormControlLabel
                    control={<FIRSTNOTIF sx={{ m: 1 }} />}
                    label=""
                  />
                </FormGroup>
              </div>
              <div className="pt-3 text-sm dark:text-[#F2F2F2]">
                New client sign up
              </div>
            </div>

            {/* SIXTH NOTIFICATIONS */}
            <div className="flex">
              <div>
                <FormGroup>
                  <FormControlLabel
                    control={<SECONDNOTIF sx={{ m: 1 }} />}
                    label=""
                  />
                </FormGroup>
              </div>
              <div className="pt-3 text-sm dark:text-[#F2F2F2]">
                Email me when new payment arrives
              </div>
            </div>

            {/* SEVEN NOTIFICATIONS */}
            <div className="flex">
              <div>
                <FormGroup>
                  <FormControlLabel
                    control={<FIRSTNOTIF sx={{ m: 1 }} />}
                    label=""
                  />
                </FormGroup>
              </div>
              <div className="pt-3 text-sm dark:text-[#F2F2F2]">
                Email me with support tickets
              </div>
            </div>

            {/* EIGHT NOTIFICATIONS */}
            <div className="flex">
              <div>
                <FormGroup>
                  <FormControlLabel
                    control={<SECONDNOTIF sx={{ m: 1 }} />}
                    label=""
                  />
                </FormGroup>
              </div>
              <div className="pt-3 text-sm dark:text-[#F2F2F2]">
                Notify me when an Hellocian accepts projects assigned
              </div>
            </div>
          </div>

          <div className=" grid justify-end pt-10 lg:mr-[-255px]">
            <Button
              type="submit"
              className="justify-center bg-[#174568] px-5 dark:bg-[#f5f5f5] dark:text-black"
            >
              Save
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
