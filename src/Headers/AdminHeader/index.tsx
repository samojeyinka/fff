import info from "/Images/info.png";
import slide31 from "/Images/slide31.png";
import notificationsNone from "/Images/notificationsNone.png";
import { DarkThemeToggle } from "flowbite-react";

export default function Index() {
  return (
    <div>
      <div className="mx-1 rounded-full border bg-white dark:bg-black md:mx-0">
        <div className="flex p-2">
          <div>
            {" "}
            <form>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                  <svg
                    className="size-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block rounded-full border border-transparent bg-[#f5f5f5] px-4 ps-10 text-sm text-[#7295B8] focus:border-transparent focus:ring-transparent "
                  placeholder="Search here"
                  required
                />
              </div>
            </form>
          </div>

          {/* ICONS ARRANGEMENT FOR MD / LG / XL SCREENS */}
          <div className="hidden md:block">
            <div className="flex pl-3 pt-3">
              <div>
                <img src={notificationsNone} alt="image" className="size-4" />
              </div>
              <div className="mt-[-14px] px-4">
                <DarkThemeToggle />
              </div>
              <div className="pr-4">
                <img src={info} alt="image" className="size-3" />
              </div>
              <div className="mt-[-5px]">
                <img src={slide31} alt="image" className="size-6" />
              </div>
            </div>
          </div>

          {/* ICONS ARRANGEMENT FOR SM / MOBILE DEVICES SCREENS */}
          <div className=" md:hidden">
            <div className="flex">
              <div className="pl-2 pt-2">
                <img src={notificationsNone} alt="image" className="size-6" />
              </div>
              <div className="pr-1">
                <DarkThemeToggle />
              </div>
              <div className="pr-3 pt-2">
                <img src={info} alt="image" className="size-6" />
              </div>
              <div className="pt-1">
                <img src={slide31} alt="image" className="size-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
