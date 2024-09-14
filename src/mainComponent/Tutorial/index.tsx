import { data, image } from "./data";
import Header from "../../Headers/OtherDashboardHeader";
import Footer from "../Footer";

export default function Index() {
  return (
    <>
      <Header />
      <div className="bg-[#EEF5F0] px-4 text-justify text-xs sm:px-20 sm:text-base">
        <div className="py-10 text-center text-2xl font-semibold">
          Introduction
        </div>
        <div>{data.intro}</div>
        <div className="my-10 text-2xl font-semibold"> Sign Up & Log In</div>
        <div className="mb-10 w-full rounded-md border bg-[#174568] py-3 text-center text-white">
          Complete Guide on how to Sign Up an account{" "}
        </div>
        <div>{data.Sign_up}</div>
        <div className="my-10">
          <img src={image.image1} alt="image" className="w-full sm:h-[500px]" />
        </div>

        <div className="mb-10 w-full rounded-md border bg-[#174568] py-3 text-center text-white">
          Complete Guide on how to Log In your account{" "}
        </div>
        <div>{data.login}</div>
        <div className="my-10">
          <img src={image.image2} alt="image" className="w-full sm:h-[500px]" />
        </div>

        <div className="mb-10 w-full rounded-md border bg-[#174568] py-3 text-center text-white">
          {" "}
          Find out more on how to set up an account{" "}
        </div>

        <div className="my-10 text-2xl font-semibold"> Dashboard</div>
        <div className="mb-10 w-full rounded-md border bg-[#174568] py-3 text-center text-white">
          Your complete Guide on Dashboard{" "}
        </div>
        <div>{data.DashboardFirst_paragraph}</div>
        <div className="pl-5 pt-2">
          <div>1. {data.Dashboard1}</div>
          <div>2. {data.Dashboard2}</div>
          <div>3. {data.Dashboard3}</div>
          <div>4. {data.Dashboard4}</div>
          <div className="pb-2">5. {data.Dashboard5}</div>
          <div>{data.DashboardSecond_paragraph}</div>
        </div>
        <div className="my-10">
          <img src={image.image3} alt="image" className="w-full sm:h-[500px]" />
        </div>

        <div className="my-10 text-2xl font-semibold"> Explore Gigs</div>
        <div className="mb-10 w-full rounded-md border bg-[#174568] py-3 text-center text-white">
          Find more about Gigs and Services rendered
        </div>
        <div>{data.explore}</div>
        <div className="my-10">
          <img src={image.image4} alt="image" className="w-full sm:h-[500px]" />
        </div>

        <div className="my-10 text-2xl font-semibold">Projects</div>
        <div className="mb-10 w-full rounded-md border bg-[#174568] py-3 text-center text-white">
          Complete Guide on how projects work
        </div>
        <div>{data.project}</div>
        <div className="my-10">
          <img src={image.image5} alt="image" className="w-full sm:h-[500px]" />
        </div>
        <div className="mb-10 w-full rounded-md border bg-[#7295B8] py-3 text-center text-white">
          Find out more about projects
        </div>

        <div className="my-10 text-2xl font-semibold">Payment Settings</div>
        <div className="mb-10 w-full rounded-md border bg-[#174568] py-3 text-center text-white">
          Your Guide about payment settings
        </div>
        <div>{data.paymentFirst_paragraph}</div>
        <div className="my-10">
          <img src={image.image6} alt="image" className="w-full sm:h-[500px]" />
        </div>
        <div>{data.paymentSecond_paragraph}</div>
        <div className="my-10">
          <img src={image.image7} alt="image" className="w-full sm:h-[500px]" />
        </div>
        <div className="mb-10 w-full rounded-md border bg-[#7295B8] py-3 text-center text-white">
          Your Guide to Select your preferred payment method
        </div>

        <div className="my-10 text-2xl font-semibold">Settings</div>
        <div className="mb-10 w-full rounded-md border bg-[#174568] py-3 text-center text-white">
          Your Guide to Edit Your Profile
        </div>
        <div>{data.settingsFirst_paragraph}</div>
        <div className="my-10">
          <img src={image.image8} alt="image" className="w-full sm:h-[500px]" />
        </div>

        <div className="mb-10 w-full rounded-md border bg-[#174568] py-3 text-center text-white">
          Your Guide on how to Set New Preferences
        </div>
        <div>{data.settingsSecond_paragraph}</div>
        <div className="my-10">
          <img src={image.image9} alt="image" className="w-full sm:h-[500px]" />
        </div>

        <div className="mb-10 w-full rounded-md border bg-[#174568] py-3 text-center text-white">
          Your Guide on how to check existing payment method
        </div>
        <div>{data.settingsThird_paragraph}</div>
        <div className="my-10">
          <img
            src={image.image10}
            alt="image"
            className="w-full sm:h-[500px]"
          />
        </div>

        <div className="mb-10 w-full rounded-md border bg-[#174568] py-3 text-center text-white">
          Your Guide on how to add new Payment method
        </div>
        <div>{data.settingsFourth_paragraph}</div>
        <div className="my-10">
          <img
            src={image.image11}
            alt="image"
            className="w-full sm:h-[500px]"
          />
        </div>

        <div>{data.settingsFifth_paragraph}</div>
        <div className="my-10">
          <img
            src={image.image12}
            alt="image"
            className="w-full sm:h-[500px]"
          />
        </div>

        <div className="mb-10 w-full rounded-md border bg-[#174568] py-3 text-center text-white">
          Your Guide to Security
        </div>
        <div>{data.settingsSixth_paragraph}</div>
        <div className="my-10">
          <img
            src={image.image13}
            alt="image"
            className="w-full sm:h-[500px]"
          />
        </div>

        <div className="mb-10 w-full rounded-md border bg-[#7295B8] py-3 text-center text-white">
          Need more guide about Settings?
        </div>

        <div className="my-10 text-2xl font-semibold"> Project Details </div>
        <div className="mb-10 w-full rounded-md border bg-[#174568] py-3 text-center text-white">
          Tell us what you need done
        </div>
        <div>{data.projectDetails}</div>
        <div className="my-10">
          <img
            src={image.image14}
            alt="image"
            className="w-full sm:h-[500px]"
          />
        </div>

        <div className="mb-10 w-full rounded-md border bg-[#7295B8] py-3 text-center text-white">
          What else do you need to know?
        </div>

        <div className="my-10 text-2xl font-semibold"> Help Center </div>
        <div className="mb-10 w-full rounded-md border bg-[#174568] py-3 text-center text-white">
          How can I locate Help Center?
        </div>
        <div>{data.helpCenter}</div>

        <div className="mb-10 w-full rounded-md border bg-[#174568] py-3 text-center text-white">
          Contact Us
        </div>
        <div>{data.contactUs}</div>
        <div className="my-10">
          <img
            src={image.image15}
            alt="image"
            className="w-full sm:h-[500px]"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
