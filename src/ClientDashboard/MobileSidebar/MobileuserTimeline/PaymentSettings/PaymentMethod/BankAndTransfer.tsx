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
      <div className="mt-[-20px] flex">
        <button onClick={() => setOpenModal(true)}>
          <div>
            <img src={masterCard} alt="image" className="w-10" />
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

        <div className="px-5 pt-4">
          <button onClick={() => setOpenModal(true)}>
            <div>
              <img src={googlePay} alt="image" className="w-12" />
            </div>
          </button>
        </div>

        <button onClick={() => setOpenModal(true)}>
          <div className="px-3 pt-3">
            <img src={visa} alt="image" className="w-12" />
          </div>
        </button>

        <button onClick={() => setOpenModal(true)}>
          <div className="px-4 pt-3">
            <img src={paystack} alt="image" className="w-[80px]" />
          </div>
        </button>
      </div>

      <button onClick={() => setOpenModal(true)}>
        <div className="pt-4">
          <img src={flutterWave} alt="image" className="w-32" />
        </div>
      </button>
    </div>
  );
}
