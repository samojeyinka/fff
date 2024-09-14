import { Button, TextInput, Select } from "flowbite-react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import axios from "axios"
import { useState ,useEffect} from "react";
import { toast } from "react-toastify";

// THIS IS FOR THE SELECTOR OF THE WEEK
import { ChangeEventHandler } from "react";

// FIRST NOTIFICAION
const FIRSTNOTIF = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

// SECOND NOTIFICATION
const SECONDNOTIF = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

export default function AddHellocians(props: {
  // THIS IS FOR THE SELECTOR OF THE WEEK
  curentValue: string;
  onChange: ChangeEventHandler<HTMLSelectElement> | undefined;
}) {
  // THIS IS FOR THE SELECTOR OF THE WEEK
  const currentValue = props.curentValue;


  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);


    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/categories");
        const fetchedCategories = response.data.categories;
        setCategories(fetchedCategories);
      } catch (error) {
        toast.error("Something went wrong")
      }
    }



    const handleFormSubmit = async (e) => {
      e.preventDefault();
      try {
        await axios.post("http://localhost:8080/api/auth-hellocian/signup", {
          firstName,
          lastName,
          email,
          phoneNumber,
          category,
        });
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhoneNumber('');
        setCategory('');
        toast.info("The invitation has been successfully sent to" + " " + email)
      } catch (error) {
        toast.error(error.response.data.message)
      }
    }


    useEffect(() => {
      fetchCategories();
    }, []);

  return (

 
    <>
      <div className="hidden pb-5 md:block  md:px-20 xl:px-40">
        <div className="pb-5 pt-20">
          <hr />
        </div>

        <div className="py-5 text-2xl font-semibold text-[#4B718F]">
          Hellocian Details
        </div>
        <form className="flex flex-col gap-4" onSubmit={handleFormSubmit}>
          <div className="flex">
            <div className="w-full pr-6">
              <div className="mb-2 block">
                <div className="pl-2">First Name</div>
              </div>
              <TextInput
                id="text"
                type="text"
                placeholder="Enter first name"
                required
                className="border border-none"
                value={firstName}
                onChange={(e) => { setFirstName(e.target.value) }}

              />
            </div>

            <div className="w-full">
              <div className="mb-2 block">
                <div className="pl-2">Last Name</div>
              </div>
              <TextInput
                id="text"
                type="text"
                placeholder="Enter last name"
                required
                value={lastName}
                onChange={(e) => { setLastName(e.target.value) }}
              />
            </div>
          </div>

          <div className="flex">
          <div className="w-full pr-6">
              <div className="mb-2 block">
                <div className="pl-2">Email Address</div>
              </div>
              <TextInput
                id="text"
                type="text"
                placeholder="Enter email address"
                required
                value={email}
                onChange={(e) => { setEmail(e.target.value) }}
              />
            </div>
            <div className="w-full">
              <div className="mb-2 block">
                <div className="pl-2">Phone Number</div>
              </div>
              <TextInput
                id="text"
                type="text"
                placeholder="Enter phone number"
                required
                value={phoneNumber}
                onChange={(e) => { setPhoneNumber(e.target.value) }}
              />
            </div>

        
          </div>

          <div className="flex">
          <div className="w-full pr-6">
              <div className="mb-2 block">
                <div className="pl-2">Skill</div>
              </div>
              <Select
                id="categories"
                required
                value={category}
                onChange={(e) => { setCategory(e.target.value) }}
              >
                <option value="DEFAULT">Please select</option>
                {categories.map((category) => (
                                            <option key={category._id} value={category._id}>
                                                {category.name}
                                            </option>
                                        ))}
              </Select>
            </div>             
            </div>


          <div className="pt-8">
            {/* FIRST NOTIFICATIONS */}
            <div className="text-[#B1B1B1]">Notification</div>

            <div className="flex">
              <div>
                <FormGroup>
                  <FormControlLabel
                    control={<FIRSTNOTIF sx={{ m: 1 }} />}
                    label=""
                  />
                </FormGroup>
              </div>
              <div className="pt-3 text-sm dark:text-[#F2F2F2]">
                Send Email notifications for new message
              </div>
            </div>

            <div className="flex justify-between">
              <div className="flex">
                <div>
                  <FormGroup>
                    <FormControlLabel
                      control={<SECONDNOTIF sx={{ m: 1 }} />}
                      label=""
                    />
                  </FormGroup>
                </div>
                <div className="pt-3 text-sm dark:text-[#F2F2F2]">
                  Allow Hellocians to message you directly
                </div>
              </div>
              <div className="pt-6">
                <Button type="submit" className="bg-[#174568] px-4">
                  Save
                </Button>
              </div>
            </div>
            {/* SECOND NOTIFICATIONS */}
          </div>
        </form>
      </div>
    </>
  );
}
