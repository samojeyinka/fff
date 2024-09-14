import * as React from "react";
import Box from "@mui/material/Box";
import { Button } from "flowbite-react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Messages from "./Messages";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ChatMessage() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="pb-10 pt-20">
      <Button onClick={handleOpen} className="w-full bg-[#174568]">
        Send message
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-description">
            <Messages />
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
