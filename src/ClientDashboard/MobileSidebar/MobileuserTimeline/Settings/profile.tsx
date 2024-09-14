import avatar from "/Images/avatar.png";
import { Button, Label, TextInput, FileInput } from "flowbite-react";
import { useSelector } from "react-redux";
import { useRef, useState, useEffect } from "react";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { app } from "../../../../firebase";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {  updateUserStart,
  updateUserSuccess,
  updateUserFailure,} from "../../../../redux/user/userSlice"



export default function Profile() {

  const fileRef = useRef(null);
  const [image, setImage] = useState(undefined);
  const [imagePercent, setImagePercent] = useState(0);
  const [imageError, setImageError] = useState(false);
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  console.log(formData)


  const { currentUser } = useSelector((state) => state.user)


  useEffect(() => {
    if (image) {
      handleFileUpload(image)
    }
  }, [image])




  const handleFileUpload = async (image) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + image.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, image);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImagePercent(Math.round(progress));

        setTimeout(() => {
          
        })
        if (progress > 0 && progress < 100) {
          // toast.info(`Uploading: ${Math.round(progress)}%`, { autoClose: false });
        }
      },
      (error) => {
        setImageError(true);
        toast.error("Error uploading image (file size must be less than 3 MB)");
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setFormData({ ...formData, profilePicture: downloadURL });
          toast("Profile picture uploaded. Don't forget to save your updates!");
        });
      }
    );
  };



  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateUserStart());
      const res = await fetch(`http://localhost:8080/api/user/settings/edit-profile/${currentUser._id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(updateUserFailure(data));
        return;
      }
      dispatch(updateUserSuccess(data));
      setUpdateSuccess(true);
      toast.info("Your profile has been updated!")
      console.log("success hfhf")
    } catch (error) {
      dispatch(updateUserFailure(error));
      toast.error("Network error! Please check your connection and try again!")
      console.log(error)

    }
  };




  return (
    <>
      <div className="">
        <div className="">
          <div>
            <form className="text-xs text-[#174568]" onSubmit={handleSubmit}>
            {/* <div className="grid justify-items-center pb-3">
          <Label htmlFor="dropzone-file">
            <img src={avatar} alt="image" className="bg-white" />
            <FileInput
              id="dropzone-file"
              className="hidden bg-white dark:bg-black"
            />
          </Label>
        </div> */}

<div style={{ width: "110px", height: "110px", borderRadius: "50%", overflow: "hidden", margin:"auto" }}>
          <input type="file" ref={fileRef} accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            hidden />
          <img src={formData.profilePicture || currentUser.profilePicture} alt="Profile"
            style={{ width: "100%", height: "100%" }}
            onClick={() => fileRef.current.click()}
          />
        
        </div>
              {/* NAME AND USERNAME */}
              <div className="pt-5">
                <div className="pb-5">
                  <div className="mb-3">
                    <div className="dark:text-[#f5f5f5]">First Name</div>{" "}
                  </div>
                  <TextInput
                    id="firstName"
                    type="name"
                    required
                    className="w-full"
                    defaultValue={currentUser.firstName}
                    onChange={handleChange}
                  />
                </div>

                <div className="">
                  <div className="mb-3">
                    <div className="dark:text-[#f5f5f5]">Last Name</div>{" "}
                  </div>
                  <TextInput
                    id="lastName"
                    type="text"
                    required
                    className="w-full"
                    defaultValue={currentUser.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* EMAIL */}
              <div className="pt-5">
                <div className="mb-3">
                  <div className="dark:text-[#f5f5f5]">Email</div>{" "}
                </div>
                <TextInput
                  id="email"
                  type="email"
                  required
                  className="w-full"
                  defaultValue={currentUser.email}
                  onChange={handleChange}
                />
              </div>

              {/* PERMANENT ADDRESS AND CITY*/}
              <div className="pt-5">
                <div className="pb-5">
                  <div className="mb-3">
                    <div className="dark:text-[#f5f5f5]">Permanent Address</div>{" "}
                  </div>
                  <TextInput
                    id="permanentAddress"
                    type="Country"
                    placeholder="San Jose, California, USA"
                    required
                    className="w-full"
                    defaultValue={currentUser.permanentAddress}
                    onChange={handleChange}
                  />
                </div>

                <div className="">
                  <div className="mb-3">
                    <div className="dark:text-[#f5f5f5]">City</div>{" "}
                  </div>
                  <TextInput
                    id="city"
                    type="text"
                    placeholder="San Jose"
                    required
                    className="w-full"
                    defaultValue={currentUser.city}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* POSTAL CODE AND COUNTRY */}
              <div className="pt-5">
                <div className="pb-5">
                  <div className="mb-3">
                    <div className="dark:text-[#f5f5f5]">Postal Code</div>{" "}
                  </div>
                  <TextInput
                    id="postalCode"
                    type="number"
                    placeholder="45962"
                    required
                    className="w-full"
                    defaultValue={currentUser.postalCode}
                    onChange={handleChange}
                  />
                </div>

                <div className="">
                  <div className="mb-3">
                    <div className="dark:text-[#f5f5f5]">Country</div>{" "}
                  </div>
                  <TextInput
                    id="country"
                    type="text"
                    placeholder="USA"
                    required
                    className="w-full"
                    defaultValue={currentUser.country}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="pt-10">
                <Button type="submit" className=" w-full bg-[#174568]">
                  Save
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
