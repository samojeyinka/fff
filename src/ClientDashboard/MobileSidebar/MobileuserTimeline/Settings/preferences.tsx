import { Button, TextInput } from "flowbite-react";
import { CiLock } from "react-icons/ci";
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
      <div>
        <form className="flex max-w-md flex-col gap-4 text-xs">
          {/* CURRENCY AND TIME ZONE */}
          <div className="pt-5">
            <div className="pb-5">
              <div className="mb-3">
                <div className="dark:text-[#f5f5f5]">Currency</div>
              </div>
              <TextInput
                id="Currency"
                type="number"
                placeholder="USD"
                required
                className="w-full"
              />
            </div>

            <div className="">
              <div className="mb-3">
                <div className="text-xs dark:text-[#f5f5f5]">Time Zone</div>
              </div>
              <TextInput
                id="UserName"
                type="text"
                placeholder="(GMT-12:00) International Date Line West"
                required
                className="w-full"
              />
            </div>
          </div>

          {/* PAYMENT METHOD */}
          <div className="pt-4">
            <div>
              <div className="mb-2">
                <div className="flex justify-between">
                  <div className="text-[#174568] dark:text-[#f5f5f5]">
                    Payment method
                  </div>
                  <div className="flex">
                    <div>
                      <CiLock />
                    </div>
                    <div className="pl-2 text-[#8D9299] dark:text-[#f5f5f5]">
                      Secured by Stripe
                    </div>
                  </div>
                </div>
              </div>
              <TextInput
                id="Currency"
                type="number"
                placeholder="Card Card number  MM / YY"
                required
                className="w-full"
              />
            </div>

            <div className="pt-6">
              <a href="/AddPaymentMethod">
                <div className="pt-4">
                  <div className=" w-full rounded-lg bg-[#174568] py-3 text-center text-white dark:bg-[#f5f5f5] dark:text-[#174568]">
                    Add new payment method
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="pt-16">
            {/* FIRST NOTIFICATIONS */}
            <div className="text-[#B1B1B1]">Notification</div>

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
          </div>

          <div className="pt-6">
            <Button type="submit" className=" w-full bg-[#174568]">
              Save
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
