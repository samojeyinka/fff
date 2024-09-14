import upload1 from "/Images/upload1.png";
import upload2 from "/Images/upload2.png";
import plus from "/Images/plus.png";
import Input from "@mui/joy/Input";
import Dropdown from "@mui/joy/Dropdown";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";
import Sidebar from "../../";
import AdminHeader from "../../../../Headers/AdminHeader";
import AdminAddNewGigs from "../../../MobileSidebar/MobileuserTimeline/AdminAddNewGigs";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import { FileInput, Label, Select, Option } from "flowbite-react";
import { useEffect } from "react";

export default function Index({ nextStep, title, setTitle, cover, coverFile,
  setCover, fileRef, firstThumbnail, setFirstThumbnail, firstThumbnailFile, secondThumbnailFile, thirdThumbnailFile, secondThumbnail,
  setSecondThumbnail, thirdThumbnail, setThirdThumbnail, category,
  setCategory, categories, hellocians, hellocian, setHellocian, FTRef, STRef, TTRef ,  selectedCategories,setSelectedCategories,
  selectedHellocians,setSelectedHellocians}) {

    console.log(selectedHellocians)

  return (
    <Sidebar>
      <div className="hidden md:block">
        <div className="w-[610px] bg-[#f5f5f5] pb-[200px] pt-10 lg:w-[1005px] lg:pl-6 lg:pr-16 xl:pl-12 dark:bg-black">
          <div className="flex justify-between">
            <div className="pt-3 text-2xl font-semibold text-[#4B718F] dark:text-[#f5f5f5]">
              Add New Gig
            </div>
            <div>
              <AdminHeader />
            </div>
          </div>

          <form>
            <div className="flex pt-10">

              {/* The hellocians */}
              <div>
                <Dropdown>
                  <MenuButton>
                    <span className="pr-2">Select Hellocian</span>
                    <span>
                      <IoIosArrowDown size={20} />
                    </span>
                  </MenuButton>
                  <Menu>
      {
        hellocians.map((eachhellocian) => (
          <div key={eachhellocian._id} value={eachhellocian._id} className="p-2">
            <input
              type="checkbox"
              checked={selectedHellocians.includes(eachhellocian._id)}
              onChange={(e) => {
                if (e.target.checked) {
                  setSelectedHellocians([...selectedHellocians, eachhellocian._id]);
                } else {
                  setSelectedHellocians(selectedHellocians.filter((id) => id !== eachhellocian._id));
                }
              }}
            />
            {eachhellocian.firstName + " " + eachhellocian.lastName}
          </div>
        ))
      }
    </Menu>
                </Dropdown>
              </div>


              {/* The categories */}
           
<div>
  <Dropdown>
    <MenuButton>
      <span className="pr-2">Select Categories</span>
      <span>
        <IoIosArrowDown size={20} />
      </span>
    </MenuButton>
    <Menu>
      {
        categories.map((eachcategory) => (
          <div key={eachcategory._id} value={eachcategory._id} className="p-2">
            <input
              type="checkbox"
              checked={selectedCategories.includes(eachcategory._id)}
              onChange={(e) => {
                if (e.target.checked) {
                  setSelectedCategories([...selectedCategories, eachcategory._id]);
                } else {
                  setSelectedCategories(selectedCategories.filter((id) => id !== eachcategory._id));
                }
              }}
            />
            {eachcategory.name}
          </div>
        ))
      }
    </Menu>
  </Dropdown>
</div>


            </div>

            <div className="mt-5 w-80 border-0 bg-white md:h-60 md:w-[500px] xl:h-[450px] xl:w-[900px] dark:bg-black">
              <div className="pl-5 pt-5 font-semibold text-[#174568] dark:text-[#f5f5f5]">
                Gig Title
              </div>
              <div className="pt-1">
                <Input placeholder="Write Gig Title" className="mx-4 h-12 dark:bg-black dark:text-[#f5f5f5]"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="pl-5 pt-3 font-semibold text-[#174568] dark:text-[#f5f5f5]">
                Categories
              </div>
              <div>
              <div className={selectedCategories.length> 0 ? "mx-5 flex flex-wrap border py-2 pl-4 md:mt-3 lg:mt-6" : " "}>
  {selectedCategories.map((categoryId) => (
    <div key={categoryId} className="mr-2 mb-2">
      <button type="button" className="rounded-full border border-[#7295B8] bg-white px-4 py-1.5 hover:bg-[#174568] hover:text-white">
        {categories.find((category) => category._id === categoryId).name}
      </button>
    </div>
  ))}
</div>
              </div>
              <div className="flex pl-5 pt-4">

                <div style={{ width: "110px", height: "110px",overflow:"hidden",position:"relative" }}>
                  <input
                    type="file"
                    ref={fileRef}
                    accept="image/*"
                    onChange={(e) => setCover(e.target.files[0])}
                    hidden
                  />
                  <img
                    src={coverFile || cover}
                    alt="cover"
                    style={{ width: "100%", height: "100%" }}
                    onClick={() => fileRef.current.click()}
                  />
                  <p className="w-full bg-blue-200 absolute bottom-0 text-center font-bold">Cover</p>
                </div>


                <div className="mx-5" style={{ width: "110px", height: "110px", overflow: "hidden" }}>
                  <input type="file" ref={FTRef} accept="image/*"
                    onChange={(e) => setFirstThumbnail(e.target.files[0])}
                    hidden />
                  <img src={firstThumbnailFile || firstThumbnail} alt="Profile"
                    style={{ width: "100%", height: "100%" }}
                    onClick={() => FTRef.current.click()}
                  />
                </div>


                <div className="mx-5" style={{ width: "110px", height: "110px", overflow: "hidden" }}>
                  <input type="file" ref={STRef} accept="image/*"
                    onChange={(e) => setSecondThumbnail(e.target.files[0])}
                    hidden />
                  <img src={secondThumbnailFile || secondThumbnail} alt="Profile"
                    style={{ width: "100%", height: "100%" }}
                    onClick={() => STRef.current.click()}
                  />
                </div>

                <div className="mx-5" style={{ width: "110px", height: "110px", overflow: "hidden" }}>
                  <input type="file" ref={TTRef} accept="image/*"
                    onChange={(e) => setThirdThumbnail(e.target.files[0])}
                    hidden />
                  <img src={thirdThumbnailFile || thirdThumbnail} alt="Profile"
                    style={{ width: "100%", height: "100%" }}
                    onClick={() => TTRef.current.click()}
                  />
                </div>

              </div>
              <Link onClick={nextStep}>
                <div className="float-end mr-5 mt-8 grid w-28 justify-center rounded-xl border bg-[#174568] px-3 py-1.5 text-xs text-white">
                  Proceed
                </div>
              </Link>
            </div>
          </form>

        </div>
      </div>

      <div>
        <AdminAddNewGigs />
      </div>
    </Sidebar>
  );
}
