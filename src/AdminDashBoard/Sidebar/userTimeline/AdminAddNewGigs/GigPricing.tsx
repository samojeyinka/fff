import { SetStateAction, useState } from "react";
import Sidebar from "../..";
import AdminHeader from "../../../../Headers/AdminHeader";
import AdminClientsData from "../../../MobileSidebar/MobileuserTimeline/AdminClientsData";
import { CiEdit } from "react-icons/ci";
import { FaRegSave } from "react-icons/fa";

export default function Index({
  prevStep,
  // basic plan
  basicTitle, setBasicTitle,
  basicDescription, setBasicDescription,
  basicDeliveryTimeframe, setBasicDeliveryTimeframe,
  basicPrice, setBasicPrice,

  // standard plan
  standardTitle, setStandardTitle,
  standardDescription, setStandardDescription,
  standardDeliveryTimeframe, setStandardDeliveryTimeframe,
  standardPrice, setStandardPrice,

  // advanced plan
  advancedTitle, setAdvancedTitle,
  advancedDescription, setAdvancedDescription,
  advancedDeliveryTimeframe, setAdvancedDeliveryTimeframe,
  advancedPrice, setAdvancedPrice,

  // pro plan
  proTitle, setProTitle,
  proDescription, setProDescription,
  proDeliveryTimeframe, setProDeliveryTimeframe,
  proPrice, setProPrice,

  // premium plan
  premiumTitle, setPremiumTitle,
  premiumDescription, setPremiumDescription,
  premiumDeliveryTimeframe, setPremiumDeliveryTimeframe,
  premiumPrice, setPremiumPrice,

  addons,
  setAddons,
  handleAddAddon,
  handleRemoveAddon,

}) {
  const [isEditing, setIsEditing] = useState({
    basicTitle: false,
    basicDescription: false,
    basicDeliveryTimeframe: false,
    basicPrice: false,
    standardTitle: false,
    standardDescription: false,
    standardDeliveryTimeframe: false,
    standardPrice: false,
    advancedTitle: false,
    advancedDescription: false,
    advancedDeliveryTimeframe: false,
    advancedPrice: false,
    proTitle: false,
    proDescription: false,
    proDeliveryTimeframe: false,
    proPrice: false,
    premiumTitle: false,
    premiumDescription: false,
    premiumDeliveryTimeframe: false,
    premiumPrice: false,
  });


  
  const handleEditClick = (field) => {
    setIsEditing((prevState) => ({ ...prevState, [field]: true }));
  };

  const handleSaveClick = (field) => {
    setIsEditing((prevState) => ({ ...prevState, [field]: false }));
  };


  return (
    <div>
      <div className="hidden md:block">
        <Sidebar>
          <div className="w-[610px] bg-[#f5f5f5] pb-[280px] pt-10 dark:bg-black lg:w-[1144px] lg:pl-6">
            <div className="flex justify-between">
              <div className="pt-3 text-2xl font-semibold text-[#174568] dark:text-white">
                Gig Pricing
              </div>

              <div>
                <AdminHeader />
              </div>
            </div>

            <div className="overflow-x-auto pt-14">
              <table className="min-w-full divide-x divide-y divide-gray-200 border">
                <thead className="bg-gray-50">
                  <tr className="divide-x divide-y border">
                    <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500"></th>
                    <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                      Basic
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                      Standard
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                      Advanced
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                      Pro
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                      Premium
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  <tr className="divide-x divide-y border">
                    <td className="whitespace-nowrap"></td>

                    <td className="whitespace-nowrap h-[50px]">
                      <div>
                        {isEditing.basicTitle ? (
                          <div>
                            <input
                              type="text"
                              onChange={(e) => setBasicTitle(e.target.value)}
                              className="h-20px"

                            />
                            <button  type="button" onClick={() => handleSaveClick("basicTitle")} className="pl-1">
                              <FaRegSave />
                            </button>
                          </div>
                        ) : (
                          <div>
                            <span className="text-[13px]">{basicTitle}</span>
                            <button
                             type="button"
                              onClick={() => handleEditClick("basicTitle")}
                              className="pl-1"
                            >
                              <CiEdit />
                            </button>
                          </div>
                        )}
                      </div>
                    </td>

                    <td className="whitespace-nowrap">
                      <div>
                        {isEditing.standardTitle ? (
                          <div>
                            <input
                              type="text"
                              onChange={(e) => setStandardTitle(e.target.value)}

                            />
                            <button
                             type="button"
                              onClick={() => handleSaveClick("standardTitle")}
                              className="pl-1"
                            >
                              <FaRegSave />
                            </button>
                          </div>
                        ) : (
                          <div>
                            <span className="text-[13px]">
                              {standardTitle}
                            </span>
                            <button
                             type="button"
                              onClick={() => handleEditClick("standardTitle")}
                              className="pl-1"
                            >
                              <CiEdit />
                            </button>
                          </div>
                        )}
                      </div>
                    </td>

                    <td className="whitespace-nowrap">
                      <div>
                        {isEditing.advancedTitle ? (
                          <div>
                            <input
                              type="text"
                              onChange={(e) => setAdvancedTitle(e.target.value)}

                            />
                            <button
                             type="button"
                              onClick={() => handleSaveClick("advancedTitle")}
                              className="pl-1"
                            >
                              <FaRegSave />
                            </button>
                          </div>
                        ) : (
                          <div>
                            <span className="text-[13px]">
                              {advancedTitle}
                            </span>
                            <button
                             type="button"
                              onClick={() => handleEditClick("advancedTitle")}
                              className="pl-1"
                            >
                              <CiEdit />
                            </button>
                          </div>
                        )}
                      </div>
                    </td>

                    <td className="whitespace-nowrap">
                      <div>
                        {isEditing.proTitle ? (
                          <div>
                            <input
                              type="text"
                              onChange={(e) => setProTitle(e.target.value)}

                            />
                            <button
                             type="button"
                              onClick={() => handleSaveClick("proTitle")}
                              className="pl-1"
                            >
                              <FaRegSave />
                            </button>
                          </div>
                        ) : (
                          <div>
                            <span className="text-[13px]">{proTitle}</span>
                            <button
                             type="button"
                              onClick={() => handleEditClick("proTitle")}
                              className="pl-1"
                            >
                              <CiEdit />
                            </button>
                          </div>
                        )}
                      </div>
                    </td>

                    <td className="whitespace-nowrap">
                      <div>
                        {isEditing.premiumTitle ? (
                          <div>
                            <input
                              type="text"
                              onChange={(e) => setPremiumTitle(e.target.value)}

                            />
                            <button
                             type="button"
                              onClick={() => handleSaveClick("premiumTitle")}
                              className="pl-1"
                            >
                              <FaRegSave />
                            </button>
                          </div>
                        ) : (
                          <div>
                            <span className="text-[13px]">
                              {premiumTitle}
                            </span>
                            <button
                             type="button"
                              onClick={() => handleEditClick("premiumTitle")}
                              className="pl-1"
                            >
                              <CiEdit />
                            </button>
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                  <tr className="divide-x divide-y border">
                    <td className="whitespace-nowrap px-6 py-4"></td>
                    <td className="whitespace-nowrap h-[125px]" >
                      <div>
                        {isEditing.basicDescription ? (
                          <div>
                            <textarea
                              onChange={(e) => setBasicDescription(e.target.value)}
                              className="h-[115px]"
                              

                            />
                            <button
                            type="button"
                              onClick={() => handleSaveClick("basicDescription")}
                              className="pl-1"
                            >
                              <FaRegSave />
                            </button>
                          </div>
                        ) : (
                          <div>
                            <span className="text-[13px]">
                             {basicDescription}
                            </span>
                            <button
                            type="button"
                              onClick={() => handleEditClick("basicDescription")}
                              className="pl-1"
                            >
                              <CiEdit />
                            </button>
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 h-[125px]">
                    <div>
                        {isEditing.standardDescription ? (
                          <div>
                            <textarea
        
                              onChange={(e) => setStandardDescription(e.target.value)}
                               className="h-[115px]"

                            />
                            <button
                            type="button"
                              onClick={() => handleSaveClick("standardDescription")}
                              className="pl-1"
                            >
                              <FaRegSave />
                            </button>
                          </div>
                        ) : (
                          <div>
                            <span className="text-[13px]">
                             {standardDescription}
                            </span>
                            <button
                            type="button"
                              onClick={() => handleEditClick("standardDescription")}
                              className="pl-1"
                            >
                              <CiEdit />
                            </button>
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                    <div>
                        {isEditing.advancedDescription ? (
                          <div>
                            <textarea
                       
                              onChange={(e) => setAdvancedDescription(e.target.value)}
                               className="h-[115px]"

                            />
                            <button
                            type="button"
                              onClick={() => handleSaveClick("advancedDescription")}
                              className="pl-1"
                            >
                              <FaRegSave />
                            </button>
                          </div>
                        ) : (
                          <div>
                            <span className="text-[13px]">
                             {advancedDescription}
                            </span>
                            <button
                            type="button"
                              onClick={() => handleEditClick("advancedDescription")}
                              className="pl-1"
                            >
                              <CiEdit />
                            </button>
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4"><div>
                        {isEditing.proDescription ? (
                          <div>
                            <textarea
                           
                              onChange={(e) => setProDescription(e.target.value)}
                               className="h-[115px]"

                            />
                            <button
                            type="button"
                              onClick={() => handleSaveClick("proDescription")}
                              className="pl-1"
                            >
                              <FaRegSave />
                            </button>
                          </div>
                        ) : (
                          <div>
                            <span className="text-[13px]">
                             {proDescription}
                            </span>
                            <button
                            type="button"
                              onClick={() => handleEditClick("proDescription")}
                              className="pl-1"
                            >
                              <CiEdit />
                            </button>
                          </div>
                        )}
                      </div></td>
                    <td className="whitespace-nowrap px-6 py-4">
                    <div>
                        {isEditing.premiumDescription ? (
                          <div>
                            <textarea
                         
                              onChange={(e) => setPremiumDescription(e.target.value)}
                               className="h-[115px]"

                            />
                            <button
                            type="button"
                              onClick={() => handleSaveClick("premiumDescription")}
                              className="pl-1"
                            >
                              <FaRegSave />
                            </button>
                          </div>
                        ) : (
                          <div>
                            <span className="text-[13px]">
                             {premiumDescription}
                            </span>
                            <button
                            type="button"
                              onClick={() => handleEditClick("premiumDescription")}
                              className="pl-1"
                            >
                              <CiEdit />
                            </button>
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                  <tr className="divide-x divide-y border">
                    <td className="whitespace-nowrap px-6 py-4 text-[13px]">
                      Delivery Timeframe
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                    <div>
                        {isEditing.basicDeliveryTimeframe ? (
                          <div>
                            <input
                              type="text"
                              onChange={(e) => setBasicDeliveryTimeframe(e.target.value)}

                            />
                            <button
                             type="button"
                              onClick={() => handleSaveClick("basicDeliveryTimeframe")}
                              className="pl-1"
                            >
                              <FaRegSave />
                            </button>
                          </div>
                        ) : (
                          <div>
                            <span className="text-[13px]">
                             {basicDeliveryTimeframe}
                            </span>
                            <button
                             type="button"
                              onClick={() => handleEditClick("basicDeliveryTimeframe")}
                              className="pl-1"
                            >
                              <CiEdit />
                            </button>
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                    <div>
                        {isEditing.standardDeliveryTimeframe ? (
                          <div>
                            <input
                              type="text"
                              onChange={(e) => setStandardDeliveryTimeframe(e.target.value)}

                            />
                            <button
                             type="button"
                              onClick={() => handleSaveClick("standardDeliveryTimeframe")}
                              className="pl-1"
                            >
                              <FaRegSave />
                            </button>
                          </div>
                        ) : (
                          <div>
                            <span className="text-[13px]">
                             {standardDeliveryTimeframe}
                            </span>
                            <button
                             type="button"
                              onClick={() => handleEditClick("standardDeliveryTimeframe")}
                              className="pl-1"
                            >
                              <CiEdit />
                            </button>
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                    <div>
                        {isEditing.advancedDeliveryTimeframe ? (
                          <div>
                            <input
                              type="text"
                              onChange={(e) => setAdvancedDeliveryTimeframe(e.target.value)}

                            />
                            <button
                             type="button"
                              onClick={() => handleSaveClick("advancedDeliveryTimeframe")}
                              className="pl-1"
                            >
                              <FaRegSave />
                            </button>
                          </div>
                        ) : (
                          <div>
                            <span className="text-[13px]">
                             {advancedDeliveryTimeframe}
                            </span>
                            <button
                             type="button"
                              onClick={() => handleEditClick("advancedDeliveryTimeframe")}
                              className="pl-1"
                            >
                              <CiEdit />
                            </button>
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                    <div>
                        {isEditing.proDeliveryTimeframe ? (
                          <div>
                            <input
                              type="text"
                              onChange={(e) => setProDeliveryTimeframe(e.target.value)}

                            />
                            <button
                             type="button"
                              onClick={() => handleSaveClick("proDeliveryTimeframe")}
                              className="pl-1"
                            >
                              <FaRegSave />
                            </button>
                          </div>
                        ) : (
                          <div>
                            <span className="text-[13px]">
                             {proDeliveryTimeframe}
                            </span>
                            <button
                             type="button"
                              onClick={() => handleEditClick("proDeliveryTimeframe")}
                              className="pl-1"
                            >
                              <CiEdit />
                            </button>
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                    <div>
                        {isEditing.premiumDeliveryTimeframe ? (
                          <div>
                            <input
                              type="text"
                              onChange={(e) => setPremiumDeliveryTimeframe(e.target.value)}

                            />
                            <button
                             type="button"
                              onClick={() => handleSaveClick("premiumDeliveryTimeframe")}
                              className="pl-1"
                            >
                              <FaRegSave />
                            </button>
                          </div>
                        ) : (
                          <div>
                            <span className="text-[13px]">
                             {premiumDeliveryTimeframe}
                            </span>
                            <button
                             type="button"
                              onClick={() => handleEditClick("premiumDeliveryTimeframe")}
                              className="pl-1"
                            >
                              <CiEdit />
                            </button>
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                  <tr className="divide-x divide-y border">
                    <td className="whitespace-nowrap px-6 py-4 text-[13px]">
                      Price
                    </td>
                    <td className="whitespace-nowrap px-6 py-4"> 
                       <div>
                        {isEditing.basicPrice ? (
                          <div>
                            <input
                              type="text"
                              onChange={(e) => setBasicPrice(e.target.value)}

                            />
                            <button
                             type="button"
                              onClick={() => handleSaveClick("basicPrice")}
                              className="pl-1"
                            >
                              <FaRegSave />
                            </button>
                          </div>
                        ) : (
                          <div>
                            <span className="text-[13px]">
                             {basicPrice}
                            </span>
                            <button
                             type="button"
                              onClick={() => handleEditClick("basicPrice")}
                              className="pl-1"
                            >
                              <CiEdit />
                            </button>
                          </div>
                        )}
                      </div></td>
                    <td className="whitespace-nowrap px-6 py-4">
                    <div>
                        {isEditing.standardPrice ? (
                          <div>
                            <input
                              type="text"
                              onChange={(e) => setStandardPrice(e.target.value)}

                            />
                            <button
                             type="button"
                              onClick={() => handleSaveClick("standardPrice")}
                              className="pl-1"
                            >
                              <FaRegSave />
                            </button>
                          </div>
                        ) : (
                          <div>
                            <span className="text-[13px]">
                             {standardPrice}
                            </span>
                            <button
                             type="button"
                              onClick={() => handleEditClick("standardPrice")}
                              className="pl-1"
                            >
                              <CiEdit />
                            </button>
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                    <div>
                        {isEditing.advancedPrice ? (
                          <div>
                            <input
                              type="text"
                              onChange={(e) => setAdvancedPrice(e.target.value)}

                            />
                            <button
                             type="button"
                              onClick={() => handleSaveClick("advancedPrice")}
                              className="pl-1"
                            >
                              <FaRegSave />
                            </button>
                          </div>
                        ) : (
                          <div>
                            <span className="text-[13px]">
                             {advancedPrice}
                            </span>
                            <button
                             type="button"
                              onClick={() => handleEditClick("advancedPrice")}
                              className="pl-1"
                            >
                              <CiEdit />
                            </button>
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                    <div>
                        {isEditing.proPrice ? (
                          <div>
                            <input
                              type="text"
                              onChange={(e) => setProPrice(e.target.value)}

                            />
                            <button
                             type="button"
                              onClick={() => handleSaveClick("proPrice")}
                              className="pl-1"
                            >
                              <FaRegSave />
                            </button>
                          </div>
                        ) : (
                          <div>
                            <span className="text-[13px]">
                             {proPrice}
                            </span>
                            <button
                             type="button"
                              onClick={() => handleEditClick("proPrice")}
                              className="pl-1"
                            >
                              <CiEdit />
                            </button>
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                    <div>
                        {isEditing.premiumPrice ? (
                          <div>
                            <input
                              type="text"
                              onChange={(e) => setPremiumPrice(e.target.value)}

                            />
                            <button type="button"
                              onClick={() => handleSaveClick("premiumPrice")}
                              className="pl-1"
                            >
                              <FaRegSave />
                            </button>
                          </div>
                        ) : (
                          <div>
                            <span className="text-[13px]">
                             {premiumPrice}
                            </span>
                            <button type="button"
                              onClick={() => handleEditClick("premiumPrice")}
                              className="pl-1"
                            >
                              <CiEdit />
                            </button>
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {addons.map((addon, index) => (
        <div key={index}>
          <input
            type="text"
            name="name"
            // value={addon.name}
            onChange={(event) => handleAddonChange(index, event)}
            placeholder="Addon name"
          />
          <input
            type="text"
            name="values.basic"
            // value={addon.values.basic}
            onChange={(event) => handleAddonChange(index, event)}
            placeholder="Basic value"
          />
          <input
            type="text"
            name="values.standard"
            // value={addon.values.standard}
            onChange={(event) => handleAddonChange(index, event)}
            placeholder="Standard value"
          />
          <input
            type="text"
            name="values.advanced"
            // value={addon.values.advanced}
            onChange={(event) => handleAddonChange(index, event)}
            placeholder="Advanced value"
          />
          <input
            type="text"
            name="values.pro"
            // value={addon.values.pro}
            onChange={(event) => handleAddonChange(index, event)}
            placeholder="Pro value"
          />
          <input
            type="text"
            name="values.premium"
            // value={addon.values.premium}
            onChange={(event) => handleAddonChange(index, event)}
            placeholder="Premium value"
          />
          <button type="button" onClick={() => handleRemoveAddon(index)}>
            Remove
          </button>
        </div>
      ))}

      {/* The add addons */}

      <button type="button" onClick={handleAddAddon}>
        Add Addon
      </button>



            <div className="flex justify-between mt-[3rem]">
            <button
                    type="submit"
                    className="justify-center bg-[#174568] px-5 dark:bg-[#f5f5f5] text-white p-2 rounded rounded-md"
                    onClick={prevStep}
                  >
                    Previous
                  </button>
            <button 
            type="submit"
                            className="justify-center bg-[#174568] px-5 dark:bg-[#f5f5f5] text-white p-2 rounded rounded-md mr-5"
            >save</button>
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
