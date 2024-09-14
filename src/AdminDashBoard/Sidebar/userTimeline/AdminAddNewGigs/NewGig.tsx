import { useEffect, useState, useRef } from 'react';
import Step1 from './AddNewGigs';
import Step2 from './GigDescription';
import Step3 from './GigPricing';
import axios from "axios"
import { toast } from "react-toastify";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { app } from "../../../../firebase";
import { useSelector } from 'react-redux';
import { image } from '../../../../ClientDashboard/MobileSidebar/MobileuserTimeline/Project/data';


const NewGig = () => {
  const [step, setStep] = useState(1);
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("Add new category");
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [hellocian, setHellocian] = useState("");
  const [hellocians, setHellocians] = useState([]);
  const [selectedHellocians, setSelectedHellocians] = useState([]);

  const fileRef = useRef(null);
  const FTRef = useRef(null);
  const STRef = useRef(null);
  const TTRef = useRef(null);
  const [cover, setCover] = useState("https://i.ibb.co/BwcvnsW/plus.png");
  const [coverFile, setCoverFile] = useState(null);
  const [firstThumbnail, setFirstThumbnail] = useState("https://i.ibb.co/BwcvnsW/plus.png");
  const [firstThumbnailFile, setFirstThumbnailFile] = useState(null);
  const [secondThumbnail, setSecondThumbnail] = useState("https://i.ibb.co/BwcvnsW/plus.png");
  const [secondThumbnailFile, setSecondThumbnailFile] = useState(null);
  const [thirdThumbnail, setThirdThumbnail] = useState("https://i.ibb.co/BwcvnsW/plus.png");
  const [thirdThumbnailFile, setThirdThumbnailFile] = useState(null);

  const [basicTitle, setBasicTitle] = useState('Add basic Package title');
  const [basicDescription, setBasicDescription] = useState('Add basic Package description');
  const [basicDeliveryTimeframe, setBasicDeliveryTimeframe] = useState('Input Day');
  const [basicPrice, setBasicPrice] = useState('Input Price($)');

  const [standardTitle, setStandardTitle] = useState('Add standard Package title');
  const [standardDescription, setStandardDescription] = useState('Add standard Package description');
  const [standardDeliveryTimeframe, setStandardDeliveryTimeframe] = useState('Input Day');
  const [standardPrice, setStandardPrice] = useState('Input Price($)');

  const [advancedTitle, setAdvancedTitle] = useState('Add advanced Package title');
  const [advancedDescription, setAdvancedDescription] = useState('Add advanced Package description');
  const [advancedDeliveryTimeframe, setAdvancedDeliveryTimeframe] = useState('Input Day');
  const [advancedPrice, setAdvancedPrice] = useState('Input Price($)');

  const [proTitle, setProTitle] = useState('Add pro Package title');
  const [proDescription, setProDescription] = useState('Add pro Package description');
  const [proDeliveryTimeframe, setProDeliveryTimeframe] = useState('Input Day');
  const [proPrice, setProPrice] = useState('Input Price($)');

  const [premiumTitle, setPremiumTitle] = useState('Add premium Package title');
  const [premiumDescription, setPremiumDescription] = useState('Add premium Package description');
  const [premiumDeliveryTimeframe, setPremiumDeliveryTimeframe] = useState('Input Day');
  const [premiumPrice, setPremiumPrice] = useState('Input Price($)');


  // The addons


  const [addons, setAddons] = useState([{ name: '', values: { basic: '', standard: '', advanced: '', pro: '', premium: '' } }]);

  const handleAddAddon = () => {
    setAddons([...addons, { name: '', values: { basic: '', standard: '', advanced: '', pro: '', premium: '' } }]);
  };

  const handleRemoveAddon = (index) => {
    setAddons(addons.filter((addon, i) => i !== index));
  };

  // const handleAddonChange = (index, event) => {
  //   const { name, value } = event.target;
  //   const updatedAddons = [...addons];
  //   updatedAddons[index][name] = value;
  //   setAddons(updatedAddons);
  // };
  
  const handleAddonChange = (index, event) => {
    const { name, value } = event.target;
    const updatedAddons = [...addons];
    
    if (name.startsWith("values.")) {
      const key = name.split(".")[1];
      updatedAddons[index].values[key] = value;
    } else {
      updatedAddons[index][name] = value;
    }
    
    setAddons(updatedAddons);
  };
  




  useEffect(() => {
    if (cover) {
      handleCoverUpload(cover);
    }
  }, [cover]);


  const handleCoverUpload = async (cover) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + cover.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, cover);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
      }, (error) => {
        toast.error("Error uploading image (file size must be less than 3 MB)");
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setCover(downloadURL);
          setCoverFile(downloadURL);
          toast("Gig cover uploaded!");
        });
      }
    );
  };



  useEffect(() => {
    if (firstThumbnail) {
      handleFirstThumbnailUpload(firstThumbnail);
    }
  }, [firstThumbnail]);


  const handleFirstThumbnailUpload = async (firstThumbnail) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + firstThumbnail.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, firstThumbnail);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
      }, (error) => {
        toast.error("Error uploading image (file size must be less than 3 MB)");
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setFirstThumbnail(downloadURL);
          setFirstThumbnailFile(downloadURL);
          toast("First thumbnail uploaded");
        });
      }
    );
  };





  useEffect(() => {
    if (secondThumbnail) {
      handleSecondThumbnailUpload(secondThumbnail);
    }
  }, [secondThumbnail]);


  const handleSecondThumbnailUpload = async (secondThumbnail) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + secondThumbnail.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, secondThumbnail);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
      }, (error) => {
        toast.error("Error uploading image (file size must be less than 3 MB)");
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setSecondThumbnail(downloadURL);
          setSecondThumbnailFile(downloadURL);
          toast("Second thumbnail uploaded");
        });
      }
    );
  };



  useEffect(() => {
    if (thirdThumbnail) {
      handleThirdThumbnailUpload(thirdThumbnail);
    }
  }, [thirdThumbnail]);


  const handleThirdThumbnailUpload = async (thirdThumbnail) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + thirdThumbnail.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, thirdThumbnail);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
      }, (error) => {
        toast.error("Error uploading image (file size must be less than 3 MB)");
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setThirdThumbnail(downloadURL);
          setThirdThumbnailFile(downloadURL);
          toast("Third thumbnail uploaded");
        });
      }
    );
  };



  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/categories");
      const fetchedCategories = response.data.categories;
      setCategories(fetchedCategories);
    } catch (error) {
      toast.error("Something went wrong")
    }
  }


  useEffect(()=> {
    fetchCategories();
  },[])



  const fetchHellocians = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/hellocian//hellocians");
      const fetchedHellocians = response.data.hellocians;
      setHellocians(fetchedHellocians);
    } catch (error) {
      toast.error("Something went wrong")
    }
  }

  useEffect(() => {
    fetchHellocians();
  });



  const { currentUser } = useSelector(state => state.user);

  

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!currentUser || !currentUser._id) {
      console.log("User not authenticated or ID not available");
      return;
    }
    const formData = {
      userId: currentUser._id,
      title,
      description,
      category: selectedCategories,
      hellocian:selectedHellocians,
      pricing: {
        basic: { title: basicTitle, description: basicDescription, deliveryTimeframe: basicDeliveryTimeframe, price: basicPrice },
        standard: { title: standardTitle, description: standardDescription, deliveryTimeframe: standardDeliveryTimeframe, price: standardPrice },
        advanced: { title: advancedTitle, description: advancedDescription, deliveryTimeframe: advancedDeliveryTimeframe, price: advancedPrice },
        pro: { title: proTitle, description: proDescription, deliveryTimeframe: proDeliveryTimeframe, price: proPrice },
        premium: { title: premiumTitle, description: premiumDescription, deliveryTimeframe: premiumDeliveryTimeframe, price: premiumPrice }
      },
      cover,
      addons,
      firstThumbnail,
      secondThumbnail,
      thirdThumbnail,
    };

    try {
      const response = await axios.post('http://localhost:8080/api/gigs/new', formData);
      toast.success("Gid created successfully")
      console.log('Gig created successfully:', response.data);

    } catch (error) {
      toast.error("Unable to create, please try again!")
      console.error('There was an error creating the gig!', error);
    }
  };







  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <Step1
          title={title}
          setTitle={setTitle}
          category={category}
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
          setCategory={setCategory}
          categories={categories}
          hellocian={hellocian}
          setHellocian={setHellocian}
          hellocians={hellocians}
          setHellocians={setHellocians}
          selectedHellocians={selectedHellocians}
          setSelectedHellocians={setSelectedHellocians}
          cover={cover}
          setCover={setCover}
          coverFile={coverFile}
          setCoverFile={setCoverFile}
          fileRef={fileRef}
          FTRef={FTRef}
          STRef={STRef}
          TTRef={TTRef}
          firstThumbnail={firstThumbnail}
          setFirstThumbnail={setFirstThumbnail}
          firstThumbnailFile={firstThumbnailFile}
          setFirstThumbnailFile={setFirstThumbnailFile}
          secondThumbnail={secondThumbnail}
          setSecondThumbnail={setSecondThumbnail}
          secondThumbnailFile={secondThumbnailFile}
          setSecondThumbnailFile={setSecondThumbnailFile}
          thirdThumbnail={thirdThumbnail}
          setThirdThumbnail={setThirdThumbnail}
          thirdThumbnailFile={thirdThumbnailFile}
          setThirdThumbnailFile={setThirdThumbnailFile}
          fileRef={fileRef}
          nextStep={nextStep}
          fetchCategories={fetchCategories}
        />;
      case 2:
        return <Step2
          description={description}
          setDescription={setDescription}
          nextStep={nextStep}
          prevStep={prevStep} />;
      case 3:
        return <Step3

          // basic plan
          basicTitle={basicTitle} setBasicTitle={setBasicTitle}
          basicDescription={basicDescription} setBasicDescription={setBasicDescription}
          basicDeliveryTimeframe={basicDeliveryTimeframe} setBasicDeliveryTimeframe={setBasicDeliveryTimeframe}
          basicPrice={basicPrice} setBasicPrice={setBasicPrice}

          // standard plan
          standardTitle={standardTitle} setStandardTitle={setStandardTitle}
          standardDescription={standardDescription} setStandardDescription={setStandardDescription}
          standardDeliveryTimeframe={standardDeliveryTimeframe} setStandardDeliveryTimeframe={setStandardDeliveryTimeframe}
          standardPrice={standardPrice} setStandardPrice={setStandardPrice}

          // advanced plan
          advancedTitle={advancedTitle} setAdvancedTitle={setAdvancedTitle}
          advancedDescription={advancedDescription} setAdvancedDescription={setAdvancedDescription}
          advancedDeliveryTimeframe={advancedDeliveryTimeframe} setAdvancedDeliveryTimeframe={setAdvancedDeliveryTimeframe}
          advancedPrice={advancedPrice} setAdvancedPrice={setAdvancedPrice}

          // pro plan
          proTitle={proTitle} setProTitle={setProTitle}
          proDescription={proDescription} setProDescription={setProDescription}
          proDeliveryTimeframe={proDeliveryTimeframe} setProDeliveryTimeframe={setProDeliveryTimeframe}
          proPrice={proPrice} setProPrice={setProPrice}

          // premium plan
          premiumTitle={premiumTitle} setPremiumTitle={setPremiumTitle}
          premiumDescription={premiumDescription} setPremiumDescription={setPremiumDescription}
          premiumDeliveryTimeframe={premiumDeliveryTimeframe} setPremiumDeliveryTimeframe={setPremiumDeliveryTimeframe}
          premiumPrice={premiumPrice} setPremiumPrice={setPremiumPrice}

          addons={addons}
          setAddons={setAddons}
          handleAddAddon={ handleAddAddon}
          handleRemoveAddon={handleRemoveAddon}
          prevStep={prevStep} />;


      default:
        return null;
    }
  };


  return (
    <form className="container" onSubmit={handleSubmit}>
      {renderStep()}
    </form>
  );
};

export default NewGig;
