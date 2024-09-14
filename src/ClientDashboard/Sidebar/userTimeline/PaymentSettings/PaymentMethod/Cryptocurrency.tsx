import { Modal } from "flowbite-react";
import { useState } from "react";
import CardDetails from "../CardDetails";
import bitcoin from "/Images/bitcoin.png";
import etherum from "/Images/etherum.png";
import coin from "/Images/coin.png";
import usdt from "/Images/usdt.png";

export default function BankAndTransfer() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <div className="flex">
        <div className="pt-4">
          <button onClick={() => setOpenModal(true)}>
            <div>
              <img src={usdt} alt="image" className="w-10" />
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

        <div className="pt-4 md:px-5 lg:px-10">
          <button onClick={() => setOpenModal(true)}>
            <div>
              <img src={bitcoin} alt="image" className="w-12" />
            </div>
          </button>
        </div>

        <div className="pt-4">
          <button onClick={() => setOpenModal(true)}>
            <div className="pt-1">
              <img src={etherum} alt="image" className="w-10" />
            </div>
          </button>
        </div>

        <div className="pt-4">
          <button onClick={() => setOpenModal(true)}>
            <div className="pt-1 md:px-5 lg:px-10">
              <img src={coin} alt="image" className="w-10" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
