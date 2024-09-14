import { Modal } from "flowbite-react";
import { useState } from "react";
import CardDetails from "../CardDetails";
import masterCard from "/Images/masterCard.png";
import googlePay from "/Images/googlePay.png";
import visa from "/Images/visa.png";
import paystack from "/Images/paystack.png";
import flutterWave from "/Images/flutterWave.png";

export default function BankAndTransfer() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <div className="flex">
        <button onClick={() => setOpenModal(true)}>
          <div>
            <img src={masterCard} alt="image" className="w-16" />
          </div>
        </button>
        <Modal show={openModal} onClose={() => setOpenModal(false)}>
          <Modal.Header>
            <div className="bg-white">Card Details</div>
          </Modal.Header>
          <Modal.Body className="bg-[#f5f5f8]">
            <div className="space-y-6">
              <CardDetails />
            </div>
          </Modal.Body>
        </Modal>

        <div className="pt-1 md:px-5 lg:px-10">
          <button onClick={() => setOpenModal(true)}>
            <div>
              <img src={googlePay} alt="image" className="w-16" />
            </div>
          </button>
        </div>

        <button onClick={() => setOpenModal(true)}>
          <div className="pt-1">
            <img src={visa} alt="image" className="w-16" />
          </div>
        </button>

        <button onClick={() => setOpenModal(true)}>
          <div className="pt-1 md:px-5 lg:px-10">
            <img src={paystack} alt="image" className="w-24" />
          </div>
        </button>

        <button onClick={() => setOpenModal(true)}>
          <div className="pr-4 pt-1 lg:pr-0">
            <img src={flutterWave} alt="image" className="w-28" />
          </div>
        </button>
      </div>
    </div>
  );
}
