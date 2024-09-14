import { data } from "./data";

export default function Index() {
  return (
    <div className="pl-2 sm:pl-0">
      <div className=" mt-10 h-72 bg-[url('/Images/svgbackground.png')] bg-cover bg-center xl:h-80">
        <div className="flex justify-center pt-14">
          <div className="w-64 sm:w-96">
            <div className="text-[#E6E9F1] sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl">
              {data.header}
            </div>
            <div className="pt-5 text-xs text-[#ced3dc]">{data.body}</div>
          </div>
        </div>
        <div className="flex justify-center pt-10 ">
          <a
            href="/ProjectDetails"
            className="inline-flex items-center rounded-lg bg-[#eef5f0] px-3 py-2 text-center text-sm font-medium text-[#174568] "
          >
            Tell us what you need
          </a>
        </div>
      </div>
    </div>
  );
}
