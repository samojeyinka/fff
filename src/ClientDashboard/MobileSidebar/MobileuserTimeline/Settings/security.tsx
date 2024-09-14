import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { Button, TextInput } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailure, signOut
} from "../../../../redux/user/userSlice"

import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";





const AUTH = styled((props) => (
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

export default function CustomizedSwitches() {


  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const { currentUser } = useSelector((state) => state.user)



  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };


  const handleSignOut = async () => {
    try {
      await fetch('http://localhost:8080/api/auth/signout');
      dispatch(signOut())
    } catch (error) {
      console.log("Unable to sign out");
    }
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateUserStart());
      const res = await fetch(`http://localhost:8080/api/user/settings/security/${currentUser._id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(updateUserFailure(data));
        toast.error("Current password is incorrect. Please try again.")
        return;
      }
      dispatch(updateUserSuccess(data));
      handleSignOut();
      toast.info("Password changed successfully.Please sign in with your new credentials")
    } catch (error) {
      dispatch(updateUserFailure(error));
      toast.error("Network error! Please check your connection and try again!")
    }
  };


  return (
    <>
      <div>
        <div className="pb-3 text-xs text-[#B1B1B1]">
          Two-factor Authentication
        </div>
        <div className="flex py-5">
          <div>
            <FormGroup>
              <FormControlLabel control={<AUTH sx={{ m: 1 }} />} label="" />
            </FormGroup>
          </div>
          <div className="pt-3 text-sm dark:text-[#F2F2F2]">
            Enable or disable two factor authentication
          </div>
        </div>

        <div className="pb-3 pt-5 text-xs text-[#B1B1B1]">Change Password</div>

        <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <div className="mb-2">
              <div className="text-xs dark:text-[#f5f5f5]">
                Current Password
              </div>
            </div>
            <TextInput
              id="currentPassword"
              type="password"
              placeholder="**********"
              required
              className="w-full"
              onChange={handleChange}
            />

            <div className="mb-2 pt-5">
              <div className="text-xs dark:text-[#f5f5f5]">New Password</div>
            </div>
            <TextInput
              id="newPassword"
              type="password"
              placeholder="**********"
              required
              className="w-full"
              onChange={handleChange}
            />
          </div>
          <div className="pt-10">
            <Button type="submit" className=" w-full bg-[#174568]">
              Save
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
