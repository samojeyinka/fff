import { hire } from "./data";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-1 bg-[rgb(23,69,104)] px-10 pt-16 text-[#f2f2f2] sm:grid-cols-2 lg:px-20">
        <div className="pt-10 sm:pt-10 md:px-10">
          <div className="mt-[-30px] text-center text-2xl font-bold md:ml-[-25px] lg:ml-[-20px] lg:text-3xl">
            {hire.hire}
          </div>
        </div>

        <div className="pt-10 md:pt-0">
          <div className="flex  items-center justify-center px-5 sm:px-0">
            <img src={hire.image2} alt="image" className="" />
          </div>
        </div>

        <div className="sm:mt-[-40%] md:mt-[-70%] md:px-10 lg:px-12">
          <div className="pt-14 text-[#f2f2f2] sm:pr-20 sm:pt-5 sm:text-xs md:pt-14">
            {hire.platform}
          </div>
          <div className="grid grid-cols-1 pt-8 sm:grid-cols-2 sm:pt-5 md:pt-6">
            <div className="">
              <div className="font-bold">Efficient</div>
              <div className=" sm:text-xs">{hire.efficient}</div>
            </div>

            <div className="pt-5 sm:pt-0 md:pl-4">
              <div className="font-bold">Reliable</div>
              <div className=" sm:text-xs">{hire.reliable}</div>
            </div>
          </div>

          <div className="pb-8 pt-10 sm:pb-0 sm:pt-20 md:pb-5 md:pt-10 lg:pt-14 xl:pt-36">
            <form className="mx-auto max-w-md">
              <label
                htmlFor="default-search"
                className="sr-only mb-2 text-sm font-medium text-[#bcbbd1] dark:text-white"
              ></label>

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
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full rounded-3xl border border-gray-300 bg-gray-50 p-4 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Tell us what you need"
                  required
                />
                <button
                  type="submit"
                  className="absolute bottom-2.5 end-2.5 rounded-3xl bg-[#174568] px-4 py-2 text-sm font-medium text-white hover:bg-[#174568] focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                  Get started
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
