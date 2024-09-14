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
import { Link } from "react-router-dom";
import { IoCloseCircleOutline } from "react-icons/io5";
import { LuServer } from "react-icons/lu";
import { FaRegEnvelope } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { IoGrid, IoSettingsOutline } from "react-icons/io5";
import { IoIosLogOut, IoMdPeople, IoMdPerson } from "react-icons/io";

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
            <Sidebar.Items className="mt-[-40px]">
              <Sidebar.ItemGroup className="bg-white dark:bg-black">
                <Link to="/AdminBoard">
                  <Sidebar.Item className="mt-8 text-xs text-[#174568]">
                    <div className="flex py-1 text-[13px] text-[#4B718F]">
                      <div className="text-[20px]">
                        <AiFillHome />
                      </div>
                      <div className="pl-3 pt-1 font-semibold"> Dashboard</div>
                    </div>
                  </Sidebar.Item>
                </Link>

                <Link to="/AdminGigs">
                  <Sidebar.Item
                    labelColor="dark"
                    className="my-2 text-xs text-[#9d9d9d]"
                  >
                    <div className="flex py-1 text-[13px] text-[#9d9d9d]">
                      <div className="text-[20px]">
                        <LuServer />
                      </div>
                      <div className="pl-3 pt-1 font-semibold">Gigs</div>
                    </div>
                  </Sidebar.Item>
                </Link>

                <Link to="/AdminAddNewGigs">
                  <Sidebar.Item className="text-xs text-[#9d9d9d]">
                    <div className="flex py-1 text-[13px] text-[#9d9d9d]">
                      <div className="text-[20px]">
                        <LuServer />
                      </div>
                      <div className="pl-3 pt-1 font-semibold">
                        {" "}
                        Add New Gigs
                      </div>
                    </div>
                  </Sidebar.Item>
                </Link>

                <Link to="/AdminNewCategory">
                  <Sidebar.Item className="text-xs text-[#9d9d9d]">
                    <div className="flex py-1 text-[13px] text-[#9d9d9d]">
                      <div className="text-[20px]">
                        <LuServer />
                      </div>
                      <div className="pl-3 pt-1 font-semibold">
                        {" "}
                        Admin New Category
                      </div>
                    </div>
                  </Sidebar.Item>
                </Link>

                <Link to="/AdminHellocians">
                  <Sidebar.Item className="my-2 text-xs text-[#9d9d9d]">
                    <div className="flex py-1 text-[13px] text-[#9d9d9d]">
                      <div className="text-[20px]">
                        <IoMdPeople />
                      </div>
                      <div className="pl-3 pt-1 font-semibold">Hellocians</div>
                    </div>
                  </Sidebar.Item>
                </Link>

                <Link to="/AdminProject">
                  <Sidebar.Item className="my-2 text-xs text-[#9d9d9d]">
                    <div className="flex py-1 text-[13px] text-[#9d9d9d]">
                      <div className="text-[20px]">
                        <IoGrid />
                      </div>
                      <div className="pl-3 pt-1 font-semibold">Project</div>
                    </div>
                  </Sidebar.Item>
                </Link>

                <Link to="/AdminClientsData">
                  <Sidebar.Item
                    labelColor="dark"
                    className="my-2 text-xs text-[#9d9d9d]"
                  >
                    <div className="flex py-1 text-[13px] text-[#9d9d9d]">
                      <div className="text-[20px]">
                        <IoMdPerson />
                      </div>
                      <div className="pl-3 pt-1 font-semibold">
                        {" "}
                        Clients Data
                      </div>
                    </div>
                  </Sidebar.Item>
                </Link>

                <Link to="/AdminMessages">
                  <Sidebar.Item className="text-xs text-[#9d9d9d]">
                    <div className="flex py-1 text-[13px] text-[#9d9d9d]">
                      <div className="text-[20px]">
                        <FaRegEnvelope />
                      </div>
                      <div className="pl-3 pt-1 font-semibold"> Messages</div>
                    </div>
                  </Sidebar.Item>
                </Link>

                <Link to="/AdminSettings">
                  <Sidebar.Item className="my-2 text-xs text-[#9d9d9d]">
                    <div className="flex py-1 text-[13px] text-[#9d9d9d]">
                      <div className="text-[20px]">
                        <IoSettingsOutline />
                      </div>
                      <div className="pl-3 pt-1 font-semibold"> Settings</div>
                    </div>
                  </Sidebar.Item>
                </Link>

                <Link to="/AdminLogin">
                  <Sidebar.Item className="mb-40 text-xs text-[#9d9d9d] md:mb-72 lg:mb-60 xl:mb-52">
                    <div className="flex py-1 text-[13px] text-[#9d9d9d]">
                      <div className="text-[20px]">
                        <IoIosLogOut />
                      </div>
                      <div className="pl-3 pt-1 font-semibold"> Logout</div>
                    </div>
                  </Sidebar.Item>
                </Link>
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
