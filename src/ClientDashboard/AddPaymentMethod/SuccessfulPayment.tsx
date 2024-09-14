import { Link } from "react-router-dom";
import succesful from "/Images/succesful.png";

export default function SuccessfulPayment() {
  return (
    <div className="bg-[#f5f5f5] pb-32 pt-16 ">
      <div className="grid justify-items-center">
        <div className="py-5 pl-5 text-lg">
          <span className="text-[#174568]">Hello</span>
          <span className="text-[#7295B8]">cer</span>
        </div>

        <div className="grid w-80 justify-items-center border bg-white md:h-60 md:w-[500px] xl:h-80 xl:w-[700px]">
          <div className="mt-5 md:mt-10">
            <div className="pl-20">
              <img src={succesful} alt="blank" className="size-14 md:size-20" />
            </div>
            <div className="pt-2 text-xs text-[#AFAFAF]">
              Thank you, your payment method has been linked sucessfully
            </div>
            <div className="mb-10 pl-16 pt-3 text-sm font-semibold underline md:mb-0">
              <Link to="/Dashboard">Proceed to dashboard</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
