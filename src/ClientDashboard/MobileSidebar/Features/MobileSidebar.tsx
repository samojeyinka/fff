import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Sidebar } from "flowbite-react";
import { AiFillHome } from "react-icons/ai";
import { IoGrid, IoSettingsOutline } from "react-icons/io5";
import { FiDollarSign } from "react-icons/fi";
import { IoIosLogOut } from "react-icons/io";
import { Link } from "react-router-dom";
import Question from "/Images/Question.png";
import { IoCloseCircleOutline } from "react-icons/io5";
import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  signOut,
} from "../../../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

const drawerWidth = 259;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft() {
  // TO PREVENT USER TO GO BACK TO DASHBOARD WHEN THEY LOGOUT
  const dispatch = useDispatch();
  const handleSignOut = async () => {
    try {
      await fetch("http://localhost:8080/api/auth/signout");
      dispatch(signOut());
    } catch (error) {
      console.log("Unable to sign out");
      console.log(error);
    }
  };

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className="sm:hidden">
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
            <div className="bg-transparent">
              <Typography></Typography>
            </div>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <div className="pr-16 text-2xl font-semibold">
              <span className="text-[#174568] dark:text-black">Hello</span>
              <span className="text-[#9d9d9d]">cer</span>
            </div>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <IoCloseCircleOutline className="size-8" />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <Sidebar aria-label="Default sidebar example" className="text-xs">
            <Sidebar.Items className="mt-[-21px] ">
              <Sidebar.ItemGroup className="bg-white dark:bg-black">
                <Link to="/Dashboard">
                  <Sidebar.Item
                    icon={AiFillHome}
                    className="pt-8 text-sm text-[#174568]"
                  >
                    Dashboard
                  </Sidebar.Item>
                </Link>

                <Link to="/Project">
                  <Sidebar.Item
                    icon={IoGrid}
                    labelColor="dark"
                    className="my-2 text-sm text-[#9d9d9d]"
                  >
                    Projects
                  </Sidebar.Item>
                </Link>

                <Link to="/PaymentSettings">
                  <Sidebar.Item
                    icon={FiDollarSign}
                    className="text-sm text-[#9d9d9d]"
                  >
                    Payment settings
                  </Sidebar.Item>
                </Link>

                <Link to="/Settings">
                  <Sidebar.Item
                    icon={IoSettingsOutline}
                    className="my-2 text-sm text-[#9d9d9d]"
                  >
                    Settings
                  </Sidebar.Item>
                </Link>

                <button onClick={handleSignOut}>
                  <Sidebar.Item
                    icon={IoIosLogOut}
                    className="mb-40 text-sm text-[#9d9d9d] md:mb-72 lg:mb-60 xl:mb-52"
                  >
                    Logout
                  </Sidebar.Item>
                </button>

                <div className="mr-10  rounded-xl border bg-[#174568] px-5 text-center font-medium">
                  <div className="mt-[-40px] pl-8">
                    <img src={Question} alt="image" />
                  </div>
                  <div className="mt-[-10px] font-medium text-white">
                    <div className="pt-2">Help Center</div>
                    <div className="py-3">
                      Having trouble using the platform or did you encounter any
                      technical issue
                    </div>
                  </div>

                  <div className="pb-3">
                    <Link to="/HelpCenter">
                      <button
                        type="button"
                        className="rounded-lg border bg-white p-1 font-normal text-[#174568]"
                      >
                        Go To Help Center
                      </button>
                    </Link>
                  </div>
                </div>
              </Sidebar.ItemGroup>
            </Sidebar.Items>
          </Sidebar>
        </Drawer>
        <Main open={open}>
          <DrawerHeader />
          <Typography paragraph></Typography>
        </Main>
      </Box>
    </div>
  );
}
