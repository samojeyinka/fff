import { file } from "./data";
import { Label, Textarea, Button } from "flowbite-react";
export default function Index() {
  return (
    <>
      <div className="grid grid-cols-1 bg-[#f5f5f5] px-6 sm:grid-cols-2 sm:px-0">
        <div className=" py-5 pl-3 text-2xl font-semibold sm:hidden">
          Contact Us
        </div>

        <div>
          <img
            src={file.image}
            alt="image"
            className="max-h-screen px-4 sm:px-0"
          />
        </div>
        <div className="hidden py-5 pl-3 text-2xl font-semibold sm:block sm:py-0 sm:pl-6 sm:pt-6 md:ml-12 md:mt-10 md:pl-0 lg:ml-12 lg:mt-20 xl:ml-[-70px] xl:mt-20">
          Contact Us
        </div>

        <div className="sm:ml-[370px] sm:mt-[-40%] md:ml-[500px] md:mt-[-70%] lg:ml-[600px] xl:ml-[550px]">
          <div className="sm:mt-[-260px] md:mt-[-200px] lg:mt-[-110px] xl:mt-0">
            <div>
              <label
                htmlFor="input-group-1"
                className="mb-2 block pt-8 text-sm font-medium text-[#174568] sm:w-20 sm:pt-0 md:w-48 lg:w-44"
              >
                Full name
              </label>
              <div className="relative mb-6">
                <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5"></div>
                <input
                  type="text"
                  id="input-group-1"
                  className=" block w-full rounded-xl border border-[#DFEAF2] bg-white p-2.5 ps-10 text-sm text-[#174568] sm:w-64 md:w-80 lg:w-96"
                  placeholder="Enter your name"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="input-group-1"
                className="mb-2 block text-sm font-medium text-[#174568] sm:w-20 md:w-48 lg:w-44"
              >
                E-mail
              </label>
              <div className="relative mb-6">
                <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5"></div>
                <input
                  type="text"
                  id="input-group-1"
                  className=" block w-full rounded-xl border border-[#DFEAF2] bg-white p-2.5 ps-10 text-sm text-[#174568] sm:w-64 md:w-80 lg:w-96"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="">
              <div className="mb-2 block">
                <Label htmlFor="comment" value="Message" />
              </div>
              <Textarea
                id="comment"
                placeholder="Your message"
                required
                rows={4}
                className="bg-white sm:w-64 md:w-80 lg:w-96"
              />
            </div>

            <div className="pb-5 pt-4 sm:pb-0">
              <Button className="w-full bg-[#174568] sm:w-52 ">
                <span className="sm:w-96">send Message</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
