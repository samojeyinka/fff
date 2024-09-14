import { Button, TextInput } from "flowbite-react";
import { CiLock } from "react-icons/ci";
import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { Link } from "react-router-dom";

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
                <div>Currency</div>
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
                <div>Time Zone</div>
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

          {/* PAYMENT METHOD */}
          <div className="flex pt-4">
            <div>
              <div className="mb-2 block">
                <div className="flex justify-between">
                  <div className="text-[#174568]">Payment method</div>
                  <div className="flex">
                    <div className="md:pl-2 lg:pl-0">
                      <CiLock />
                    </div>
                    <div className="pl-2 text-[#8D9299] md:pl-0 lg:pl-2">
                      Secured by Stripe
                    </div>
                  </div>
                </div>
              </div>
              <TextInput
                id="Currency"
                type="number"
                placeholder="USD"
                required
                className="md:w-[210px] lg:w-[240px] xl:w-[300px]"
              />
            </div>

            <div className="pt-6">
              <Link to="/AddPaymentMethod">
                <div className=" grid justify-end md:w-[215px] lg:w-[230px]">
                  <Button className="justify-center bg-[#174568]">
                    Add new payment method
                  </Button>
                </div>
              </Link>
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
              <div className="pt-3 text-sm">
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
              <div className="pt-3 text-sm">
                Allow Hellocians to message you directly
              </div>
            </div>
          </div>

          <div className=" grid justify-end pt-10 md:mr-[-130px] lg:mr-[-255px]">
            <Button type="submit" className="justify-center bg-[#174568] px-5">
              Save
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
