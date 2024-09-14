import slide72 from "/Images/slide72.png";
import upload from "/Images/upload.png";
import { Button, Label, TextInput, Textarea, FileInput } from "flowbite-react";

export default function Index() {
  return (
    <div className="bg-[#f5f5f5]">
      <div className="grid grid-cols-1 sm:grid-cols-[60%_40%]">
        <div className="px-5 pt-10 md:pt-52 xl:px-40 xl:pt-10">
          <div className="text-lg xl:py-5">
            <span className="text-[#174568]">Hello</span>
            <span className="text-[#7295B8]">cer</span>
          </div>
          <div className="text-3xl font-semibold text-[#174568]">
            <div>Tell us what </div>
            <div> you need done</div>
          </div>

          <div className="pt-4">
            <form className="flex max-w-md flex-col gap-4">
              <div>
                <div className="mb-2 block">
                  <div className="text-sm">Project name</div>
                </div>
                <TextInput
                  id="text"
                  type="text"
                  placeholder="Enter project name"
                  required
                />
              </div>

              <div className="max-w-md">
                <div className="mb-2 block">
                  <div className="text-sm">Project description</div>
                </div>
                <Textarea
                  id="description"
                  placeholder="Enter project description"
                  required
                  rows={7}
                />
              </div>

              <div>
                <div className="mb-2 block">
                  <div className="text-sm">Skills</div>
                </div>
                <TextInput
                  id="text"
                  type="text"
                  placeholder="Search"
                  required
                />
              </div>

              <div className="flex w-full items-center justify-center">
                <Label
                  htmlFor="dropzone-file"
                  className="flex w-full cursor-pointer flex-col items-center justify-center rounded-lg border border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div className="flex px-4 py-3">
                    <div className="pt-2">
                      <img src={upload} alt="" />
                    </div>
                    <div className="pl-3 text-[12px] text-[#9D9D9D]">
                      Drag & drop any images or documents that might be helpful
                      in explaining your brief here. (Max 25 MB)
                    </div>
                  </div>
                  <FileInput id="dropzone-file" className="hidden" />
                </Label>
              </div>

              <Button type="submit" className="mb-5 h-10 w-40 bg-[#174568]">
                <span className="mt-[-7px] text-xl font-medium"> Continue</span>
              </Button>
            </form>
          </div>
        </div>

        <div className="order-first px-3 md:order-last md:px-0">
          <img
            src={slide72}
            alt="image"
            className="h-96 w-full md:min-h-screen"
          />
        </div>
      </div>
    </div>
  );
}
