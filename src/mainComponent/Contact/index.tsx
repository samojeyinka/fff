import Header from "../../Headers/DashboardHeader";
import Contact from "./ContactUs";

export default function Index() {
  return (
    <>
      <Header />
      <div className="bg-[#f5f5f5]">
        {/* WHY WE ARE UNIQUE COMPONENT*/}
        <div id="Contact">
          <Contact />
        </div>
      </div>
    </>
  );
}
