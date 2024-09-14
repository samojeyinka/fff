import avatar from "/Images/avatar.png";
import { Button, TextInput, FileInput, Label } from "flowbite-react";
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
      <form className="grid grid-cols-[20%_80%] md:pl-5 lg:pl-0 xl:px-10" onSubmit={handleSubmit}>
        <div style={{ width: "110px", height: "110px", borderRadius: "50%", overflow: "hidden" }}>
          <input type="file" ref={fileRef} accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            hidden />
          <img src={formData.profilePicture || currentUser.profilePicture} alt="Profile"
            style={{ width: "100%", height: "100%" }}
            onClick={() => fileRef.current.click()}
          />
        
        </div>
        <div className="md:pl-10 lg:pl-2 xl:pl-5">
          <div>
            <div className="flex max-w-md flex-col gap-4 text-xs text-[#174568]">
              {/* NAME*/}
              <div className="pt-5">
                <div>
                  <div className="mb-2 block">
                    <div className="dark:text-[#f5f5f5]">First Name</div>
                  </div>
                  <TextInput
                    id="firstName"
                    type="name"
                    defaultValue={currentUser.firstName}
                    required
                    className="md:w-[405px] xl:w-[620px]"
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* EMAIL AND USERNAME */}
              <div className="flex pt-5">
                <div>
                  <div className="mb-2 block">
                    <div className="dark:text-[#f5f5f5]">Last Name</div>
                  </div>
                  <TextInput
                    id="lastName"
                    type="text"
                    defaultValue={currentUser.lastName}
                    required
                    className="lg:w-[240px] xl:w-[300px]"
                    onChange={handleChange}
                  />
                </div>

                <div className="pl-5">
                  <div className="mb-2 block">
                    <div className="dark:text-[#f5f5f5]">Email</div>{" "}
                  </div>
                  <TextInput
                    id="email"
                    type="email"
                    defaultValue={currentUser.email}
                    required
                    className="lg:w-[240px] xl:w-[300px]"
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* PERMANENT ADDRESS AND CITY*/}
              <div className="flex pt-5">
                <div>
                  <div className="mb-2 block">
                    <div className="dark:text-[#f5f5f5]">Permanent Address</div>
                  </div>
                  <TextInput
                    defaultValue={currentUser.permanentAddress}
                    id="permanentAddress"
                    type="Country"
                    placeholder="San Jose, California, USA"
                    required
                    className="lg:w-[240px] xl:w-[300px]"
                    onChange={handleChange}
                  />
                </div>

                <div className="pl-5">
                  <div className="mb-2 block">
                    <div className="dark:text-[#f5f5f5]">City</div>{" "}
                  </div>
                  <TextInput
                    defaultValue={currentUser.city}
                    id="city"
                    type="text"
                    placeholder="San Jose"
                    required
                    className="lg:w-[240px] xl:w-[300px]"
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* POSTAL CODE AND COUNTRY */}
              <div className="flex pt-5">
                <div>
                  <div className="mb-2 block">
                    <div className="dark:text-[#f5f5f5]">Postal Code</div>{" "}
                  </div>
                  <TextInput
                    defaultValue={currentUser.postalCode}
                    id="postalCode"
                    type="number"
                    placeholder="45962"
                    required
                    className="lg:w-[240px] xl:w-[300px]"
                    onChange={handleChange}
                  />
                </div>

                <div className="pl-5">
                  <div className="mb-2 block">
                    <div className="dark:text-[#f5f5f5]">Country</div>{" "}
                  </div>
                  <TextInput
                    defaultValue={currentUser.country}
                    id="country"
                    type="text"
                    placeholder="USA"
                    required
                    className="lg:w-[240px] xl:w-[300px]"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className=" grid justify-end pt-10 lg:mr-[-255px]">
                <Button
                  type="submit"
                  className="justify-center bg-[#174568] px-5 dark:bg-[#f5f5f5] dark:text-black"
                >
                  Save
                </Button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
