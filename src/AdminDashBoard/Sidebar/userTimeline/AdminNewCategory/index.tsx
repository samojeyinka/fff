import { Link } from "react-router-dom";
import Sidebar from "../..";
import AdminHeader from "../../../../Headers/AdminHeader";
import AdminNewCategory from "../../../MobileSidebar/MobileuserTimeline/AdminNewCategory";
import Input from "@mui/joy/Input";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../../../../firebase";

export default function Index() {
  const fileRef = useRef(null);
  const iconRef = useRef(null);
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.ibb.co/BwcvnsW/plus.png");
  const [imageFile, setImageFile] = useState(null);
  const [icon, setIcon] = useState("https://i.ibb.co/BwcvnsW/plus.png");
  const [iconFile, setIconFile] = useState(null);
  const [imagePercent, setImagePercent] = useState(0);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    if (imageFile) {
      handleFileUpload(imageFile);
    }
  }, [imageFile]);

  const handleFileUpload = async (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImagePercent(Math.round(progress));
        if (progress > 0 && progress < 100) {
          toast.info(`Uploading: ${Math.round(progress)}%`, {
            autoClose: true,
          });
        }
      },
      (error) => {
        setImageError(true);
        toast.error("Error uploading image (file size must be less than 3 MB)");
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImage(downloadURL);
          toast("Profile picture uploaded. Don't forget to save your updates!");
        });
      },
    );
  };


  useEffect(() => {
    if (iconFile) {
      handleIconUpload(iconFile);
    }
  }, [iconFile]);

  const handleIconUpload = async (icond) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + icond.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, icond);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImagePercent(Math.round(progress));
        if (progress > 0 && progress < 100) {
          toast.info(`Uploading: ${Math.round(progress)}%`, {
            autoClose: true,
          });
        }
      },
      (error) => {
        setImageError(true);
        toast.error("Error uploading image (file size must be less than 3 MB)");
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setIcon(downloadURL);
          toast("Category icon uploaded. Don't forget to save your updates!");
        });
      },
    );
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/categories/new", {
        name,
        banner: image,
        icon: icon
      });
      setName("");
      toast.success("Category created successfully");
    } catch (error) {
      if (error.response.status === 400) {
        toast.error("Category already exists");
      } else {
        toast.error("Something went wrong, please try again!");
      }
    }
  };

  return (
    <div>
      <div className="hidden md:block">
        <Sidebar>
          <div className="w-[610px] bg-[#f5f5f5] pb-[280px] pt-10 dark:bg-black lg:w-[1000px] lg:pl-6 lg:pr-16 xl:pl-12">
            <div className="flex justify-between">
              <div className="pt-3 text-2xl font-semibold text-[rgb(23,69,104)] dark:text-white">
                Add New Category
              </div>
              <div>
                <AdminHeader />
              </div>
            </div>
            <form
              className="w-80 justify-items-center border bg-white md:mt-20 md:h-60 md:w-[500px] xl:h-[200px] xl:w-[700px]"
              onSubmit={handleFormSubmit}
            >
              <div className="pl-5 pt-5 font-semibold text-[#174568] dark:text-[#f5f5f5]">
                Gig Category
              </div>
              <div className="pt-1">
                <Input
                  placeholder="Write Gig Title"
                  className="mx-4 h-12 dark:bg-black dark:text-[#f5f5f5]"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>


<div className="flex">
              <div>
                <input
                  type="file"
                  ref={fileRef}
                  accept="image/*"
                  onChange={(e) => setImageFile(e.target.files[0])}
                  hidden
                />
                <img
                  src={image}
                  alt="Category Banner"
                  style={{
                    width: "80px",
                    height: "70px",
                    cursor: "pointer",
                    marginTop: "1rem",
                    marginLeft: "1.3rem",
                  }}
                  onClick={() => fileRef.current.click()}
                />
              </div>

              <div>
                <input
                  type="file"
                  ref={iconRef}
                  accept="image/*"
                  onChange={(e) => setIconFile(e.target.files[0])}
                  hidden
                />
                <img
                  src={icon}
                  alt="Category Icon"
                  style={{
                    width: "80px",
                    height: "70px",
                    cursor: "pointer",
                    marginTop: "1rem",
                    marginLeft: "1.3rem",
                  }}
                  onClick={() => iconRef.current.click()}
                />
              </div>

              </div>

              <button className="float-end mr-5 mt-8 grid w-28 justify-center rounded-xl border bg-[#174568] px-3 py-1.5 text-xs text-white">
                Save
              </button>
            </form>
          </div>
        </Sidebar>
      </div>
      <div>
        <AdminNewCategory />
      </div>
    </div>
  );
}
