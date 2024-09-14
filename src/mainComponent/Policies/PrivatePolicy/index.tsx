import { firstParagraph, secondParagraph } from "./data";
import OtherPage_Header from "../../../Headers/OtherPage_Header";
import Footer from "../../Footer";

export default function Index() {
  return (
    <div>
      <OtherPage_Header />
      <div className="bg-[#F5F5F5] pb-10 text-justify text-xs text-black md:pb-32 md:text-base">
        <div className="grid justify-items-center py-4 font-semibold text-[#53686A]">
          Privacy Policy
        </div>
        <div className="mx-3 border border-black md:mx-48">
          <div className="px-3 pt-5 md:px-7">
            <div className="pb-2">{firstParagraph.firstText}</div>

            <div>
              {secondParagraph.map((data, index) => {
                return (
                  <div key={index} className="py-1 md:py-3">
                    <div className="pb-2 font-semibold">{data.firstText}</div>
                    <div>{data.secondText}</div>
                    <div>{data.thirdText}</div>
                    <div className="pt-2">{data.fourthText}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
