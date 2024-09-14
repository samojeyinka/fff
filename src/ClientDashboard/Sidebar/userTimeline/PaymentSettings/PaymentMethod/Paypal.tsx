import { Modal } from "flowbite-react";
import { useState } from "react";
import CardDetails from "../CardDetails";
import paypal from "/Images/paypal.png";

export default function BankAndTransfer() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <div className="pt-4">
        <button onClick={() => setOpenModal(true)}>
          <div>
            <img src={paypal} alt="image" />
          </div>
        </button>
      </div>

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
    </div>
  );
}
