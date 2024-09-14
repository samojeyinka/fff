import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./mainComponent/Home";
import Footer from "./mainComponent/Footer";
import ErrorPage from "./mainComponent/ErrorPage";
import Contact from "./mainComponent/Contact";
import AllServices from "./mainComponent/Services/AllServices";
import AllGigs from "./mainComponent/Explore/AllGigs";
import Login from "./mainComponent/Login";
import Verify from "./mainComponent/Verify";
import SignUP from "./mainComponent/SignUp";
import GigDetail from "./gigComponent/GigDetail";
import AboutUs from "./mainComponent/AboutUs";
import Tutorial from "./mainComponent/Tutorial";
import HandPicked from "./gigComponent/SearchGigs/HandPicked";
import WebDevelopment from "./gigComponent/SearchGigs/WebDevelopment";
import BestSellingGigs from "./gigComponent/SearchGigs/BestSellingGigs";
import UiUx from "./gigComponent/SearchGigs/UiUx";
import AiDevelopment from "./gigComponent/SearchGigs/AiDevelopment";
import BlockchainDevelopment from "./gigComponent/SearchGigs/BlockchainDevelopment";
import HelpCenter from "./mainComponent/HelpCenter";
import ClientDashboard from "./ClientDashboard/Sidebar/Features/Sidebar";
import Dashboard from "./ClientDashboard/Sidebar/userTimeline/Dashboard";
import ClientMessages from "./ClientDashboard/Sidebar/userTimeline/ClientMessages";
import PaymentSettings from "./ClientDashboard/Sidebar/userTimeline/PaymentSettings";
import Project from "./ClientDashboard/Sidebar/userTimeline/Project";
import Settings from "./ClientDashboard/Sidebar/userTimeline/Settings";
import AdminDashBoard from "./AdminDashBoard/Sidebar/Features/Sidebar";
import AdminAddNewGigs from "./AdminDashBoard/Sidebar/userTimeline/AdminAddNewGigs";
import AdminClientsData from "./AdminDashBoard/Sidebar/userTimeline/AdminClientsData";
import AdminBoard from "./AdminDashBoard/Sidebar/userTimeline/AdminBoard";
import AdminGigs from "./AdminDashBoard/Sidebar/userTimeline/AdminGigs";
import AdminHellocians from "./AdminDashBoard/Sidebar/userTimeline/AdminHellocians";
import AdminMessages from "./AdminDashBoard/Sidebar/userTimeline/AdminMessages";
import AdminChat from "./AdminDashBoard/Sidebar/userTimeline/AdminMessages/AdminChat";
import AdminProject from "./AdminDashBoard/Sidebar/userTimeline/AdminProject";
import AdminSettings from "./AdminDashBoard/Sidebar/userTimeline/AdminSettings";
import AdminLogin from "./AdminDashBoard/AdminLogin";
import ProjectDetails from "./mainComponent/ProjectDetails";
import AddPaymentMethod from "./ClientDashboard/AddPaymentMethod";
import SuccessfulPayment from "./ClientDashboard/AddPaymentMethod/SuccessfulPayment";
import AddHellocians from "./AdminDashBoard/Sidebar/userTimeline/AdminHellocians/AddHellocians";
import AddNewGigs from "./AdminDashBoard/Sidebar/userTimeline/AdminAddNewGigs/NewGig";
import GigDescription from "./AdminDashBoard/Sidebar/userTimeline/AdminAddNewGigs/GigDescription";
import GigPricing from "./AdminDashBoard/Sidebar/userTimeline/AdminAddNewGigs/GigPricing";
import TermsOfServices from "./mainComponent/Policies/TermsOfServices";
import PrivatePolicy from "./mainComponent/Policies/PrivatePolicy";
import Disclaimer from "./mainComponent/Policies/Disclaimer";
import RefundPolicy from "./mainComponent/Policies/RefundPolicy";
import AdminNewCategory from "./AdminDashBoard/Sidebar/userTimeline/AdminNewCategory";
import Chat from "./ClientDashboard/MobileSidebar/MobileuserTimeline/Dashboard/Chat";
import GigCheckout from "./gigComponent/GigCheckout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Setup from "./HellocianComponent/Setup";
import HellocianLogin from "./HellocianComponent/Login/index";

//Authorization
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Success from "./Payment/success";
import Cancelled from "./Payment/cancelled";

export default function App() {
  const { currentUser } = useSelector((state) => state.user);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },

    {
      path: "/Contact",
      element: <Contact />,
    },

    {
      path: "/AllServices",
      element: <AllServices />,
    },

    {
      path: "/Login",
      element: <Login />,
    },

    {
      path: "/verify",
      element: <Verify />,
    },

    {
      path: "/SignUP",
      element: <SignUP />,
    },

    {
      path: "/AllGigs",
      element: <AllGigs />,
    },

    {
      path: "/HandPicked",
      element: <HandPicked />,
    },

    {
      path: "/BestSellingGigs",
      element: <BestSellingGigs />,
    },

    {
      path: "/services/:id",
      element: <WebDevelopment />,
    },

    {
      path: "/UiUx",
      element: <UiUx />,
    },

    {
      path: "/AiDevelopment",
      element: <AiDevelopment />,
    },

    {
      path: "/BlockchainDevelopment",
      element: <BlockchainDevelopment />,
    },

    {
      path: "/:id",
      element: <GigDetail />,
    },

    {
      path: "/AboutUs",
      element: <AboutUs />,
    },

    {
      path: "/Tutorial",
      element: <Tutorial />,
    },

    // CLIENTS DASHBOARD
    {
      path: "/ClientDashboard",
      element: <ClientDashboard />,
    },

    {
      path: "/ClientMessages",
      element: <ClientMessages />,
    },

    {
      path: "/Footer",
      element: <Footer />,
    },

    {
      path: "/HelpCenter",
      element: <HelpCenter />,
    },

    {
      path: "/Dashboard",
      element: currentUser ? (
        <Dashboard curentValue={""} onChange={undefined} />
      ) : (
        <Navigate to="/login" />
      ),
    },

    {
      path: "/PaymentSettings",
      element: currentUser ? <PaymentSettings /> : <Navigate to="/login" />,
    },

    {
      path: "/Project",
      element: <Project />,
    },

    {
      path: "/Settings",
      element: currentUser ? <Settings /> : <Navigate to="/login" />,
    },

    // ADMIN COMPONENTS
    {
      path: "/AdminDashBoard",
      element: currentUser ? (
        <AdminDashBoard curentValue={""} onChange={undefined} />
      ) : (
        <Navigate to="/adminlogin" />
      ),
    },

    {
      path: "/AdminAddNewGigs",
      element: <AdminAddNewGigs />,
    },

    // {
    //   path: "/GigDescription",
    //   element: <GigDescription />,
    // },

    // {
    //   path: "/GigPricing",
    //   element: <GigPricing />,
    // },

    {
      path: "/AdminClientsData",
      element: <AdminClientsData />,
    },

    {
      path: "/AdminBoard",
      element: <AdminBoard />,
    },

    {
      path: "/AdminGigs",
      element: <AdminGigs />,
    },

    {
      path: "/AdminHellocians",
      element: <AdminHellocians />,
    },

    {
      path: "/AdminMessages",
      element: <AdminMessages />,
    },

    {
      path: "/AdminChat",
      element: <AdminChat />,
    },

    {
      path: "/AdminProject",
      element: <AdminProject />,
    },

    {
      path: "/AdminSettings",
      element: currentUser ? <AdminSettings /> : <Navigate to="/adminlogin" />,
    },

    {
      path: "/AdminLogin",
      element: <AdminLogin />,
    },

    {
      path: "/ProjectDetails",
      element: <ProjectDetails />,
    },

    {
      path: "/AddPaymentMethod",
      element: <AddPaymentMethod />,
    },

    {
      path: "/SuccessfulPayment",
      element: <SuccessfulPayment />,
    },

    {
      path: "/AddHellocians",
      element: <AddHellocians curentValue={""} onChange={undefined} />,
    },

    {
      path: "/TermsOfServices",
      element: <TermsOfServices />,
    },

    {
      path: "/PrivatePolicy",
      element: <PrivatePolicy />,
    },

    {
      path: "/Disclaimer",
      element: <Disclaimer />,
    },

    {
      path: "/RefundPolicy",
      element: <RefundPolicy />,
    },

    {
      path: "/AddNewGigs",
      element: <AddNewGigs />,
    },

    {
      path: "/AdminNewCategory",
      element: <AdminNewCategory />,
    },

    {
      path: "/GigCheckout",
      element: <GigCheckout />,
    },

    {
      path: "/Chat",
      element: <Chat />,
    },
    // Hellocians
    {
      path: "/setup",
      element: <Setup />,
    },
    {
      path: "/hellocian-login",
      element: <HellocianLogin />,
    },



    // Payment

    {
      path: "/success",
      element: <Success />,
    },

    {
      path: "/cancel",
      element: <Cancelled />,
    },
  ]);




  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        // eslint-disable-next-line tailwindcss/no-custom-classname
        theme="colored"
      />
    </>
  );
}
