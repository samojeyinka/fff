import Works from "../Works";
import Services from "../Services";
import Explore from "../Explore";
import Unique from "../Unique";
import Started from "../Started";
import Home from "./homeData";
import Header from "../../Headers/IndexPage_Header";
import Footer from "../../mainComponent/Footer";
  
export default function Index() {
  return (
    <>
      <Header />
      <div className="bg-[#f5f5f5]">
        {/* HOME COMPONENT*/}
        <div className="bg-[#174568] text-[#f2f2f2]">
          <Home />
        </div>

        {/* SERVICES COMPONENT */}
        <div id="Services">
          <Services />
        </div>

        {/* EXPLORE COMPONENT*/}
        <div id="Explore">
          <Explore />
        </div>

        {/* WHY WE ARE UNIQUE COMPONENT*/}
        <div id="Unique">
          <Unique />
        </div>

        {/* HOW IT WORKS COMPONENT*/}
        <div id="Works">
          <Works />
        </div>

        {/* READY TO GET STARTED COMPONENT*/}

        <div id="Started">
          <Started />
        </div>
      </div>

      <Footer />
    </>
  );
}
