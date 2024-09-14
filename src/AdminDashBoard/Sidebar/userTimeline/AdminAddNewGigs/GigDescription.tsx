import Sidebar from "../..";
import AdminHeader from "../../../../Headers/AdminHeader";
import AdminClientsData from "../../../MobileSidebar/MobileuserTimeline/AdminClientsData";
import { SetStateAction, useState } from "react";
import Editor from "react-simple-wysiwyg";
import { Button } from "flowbite-react";

export default function Index({nextStep,description,setDescription,prevStep}) {


  function onChange(e: { target: { value: SetStateAction<string> } }) {
    setDescription(e.target.value);
  }

  return (
    <div>
      <div className="hidden md:block">
        <Sidebar>
          <div className="w-[610px] pb-[87px] pt-10 dark:bg-black lg:w-[1000px] lg:pl-6 lg:pr-16 xl:pl-12">
            <div className="flex justify-between">
              <div className="pt-3 text-2xl font-semibold text-[#174568] dark:text-white">
                Gig Description
              </div>

              <div>
                <AdminHeader />
              </div>
            </div>
            <div className="mt-10 rounded-lg border px-4 pt-8">
              <Editor value={description} onChange={onChange} />
              <div className="flex justify-between mt-5 mb-5">

              <Button
                    type="submit"
                    className="justify-center bg-[#174568] px-5 dark:bg-[#f5f5f5] dark:text-black"
                    onClick={prevStep}
                  >
                    Previous
                  </Button>
                
                  <Button
                    type="submit"
                    className="justify-center bg-[#174568] px-5 dark:bg-[#f5f5f5] dark:text-black"
                    onClick={nextStep}
                  >
                    Proceed
                  </Button>
                
              </div>
            </div>
          </div>
        </Sidebar>
      </div>
      <div>
        <AdminClientsData />
      </div>
    </div>
  );
}
