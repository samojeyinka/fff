import AdminHeader from "../../../../Headers/AdminHeader";
import { firstGrid, SecondGrid, ThirdGrid, FourthGrid } from "./data";

export default function Header() {
  return (
    <div>
      <div className="hidden md:block">
        <div className="w-[610px] pt-10 dark:bg-black lg:w-[1000px] lg:pl-6 lg:pr-16 xl:pl-12">
          <div className="flex justify-between">
            <div className="pt-3 text-2xl font-semibold text-[#4B718F] dark:text-[#f5f5f5]">
              Main Dashboard
            </div>
            <div>
              <AdminHeader />
            </div>
          </div>
          <div className=" mx-2 grid grid-cols-4 pt-4">
            {/* FIRST SLIDE */}
            <div className="flex justify-center rounded-xl border bg-white dark:bg-black md:pt-8 lg:pt-4">
              <div className="pr-3">
                <img src={firstGrid.image} alt="image" className="size-10" />
              </div>
              <div>
                <div className="text-[10px] text-[#A3AED0] dark:text-[#f5f5f5]">
                  {firstGrid.title}
                </div>
                <div className="text-[18px] font-semibold text-[#2B3674] dark:text-[#f5f5f5]">
                  {firstGrid.number}
                </div>
              </div>
            </div>

            {/* SECOND SLIDE */}
            <div className="mx-3 flex justify-center rounded-xl border bg-white dark:bg-black md:pt-8 lg:pt-4">
              <div className="pr-3">
                <img src={SecondGrid.image} alt="image" className="size-10" />
              </div>
              <div>
                <div className="text-[10px] text-[#A3AED0] dark:text-[#f5f5f5]">
                  {SecondGrid.title}
                </div>
                <div className="text-[18px] font-semibold text-[#2B3674] dark:text-[#f5f5f5]">
                  {SecondGrid.number}
                </div>
              </div>
            </div>

            {/* THIRD SLIDE */}
            <div className="flex justify-center rounded-xl border bg-white dark:bg-black md:pt-8 lg:pt-4">
              <div className="pr-3 pt-1">
                <img src={ThirdGrid.image} alt="image" className="size-10" />
              </div>
              <div>
                <div className="text-[10px] text-[#A3AED0] dark:text-[#f5f5f5]">
                  {ThirdGrid.title}
                </div>
                <div className="text-[18px] font-semibold text-[#2B3674] dark:text-[#f5f5f5]">
                  {ThirdGrid.number}
                </div>
              </div>
            </div>

            {/* FOURTH SLIDE */}
            <div className="ml-3 flex justify-center rounded-xl border bg-white py-3 dark:bg-black">
              <div className="pr-3 pt-1">
                <img src={FourthGrid.image} alt="image" className="size-10" />
              </div>
              <div>
                <div className="text-[10px] text-[#A3AED0] dark:text-[#f5f5f5]">
                  {FourthGrid.title}
                </div>
                <div className="text-[18px] font-semibold text-[#2B3674] dark:text-[#f5f5f5]">
                  {FourthGrid.number}
                </div>
                <div className="mt-[-8px]">
                  <span className="pr-1 text-[12px] text-[#05CD99]">
                    {FourthGrid.percentage}
                  </span>
                  <span className="text-[11px] dark:text-[#f5f5f5]">
                    {FourthGrid.month}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
