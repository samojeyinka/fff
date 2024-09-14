import AdminHeader from "../../../../Headers/AdminHeader";

export default function index() {
  return (
    <div className="hidden md:block">
      <div className="w-[610px] pt-10 dark:bg-black lg:w-[1000px] lg:pl-6 lg:pr-16 xl:pl-12">
        <div className="flex justify-between">
          <div className="pt-3 text-2xl font-semibold text-[#4B718F] dark:text-[#f5f5f5]">
            Gigs
          </div>
          <div>
            <AdminHeader />
          </div>
        </div>
      </div>
    </div>
  );
}
