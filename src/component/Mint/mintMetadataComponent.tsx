import React, { useState } from "react";
import multiline from "../../asset/multiline.png";
import add from "../../asset/add.svg";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import close from "../../asset/close1.svg";
import "../../styles/pages/Mint/mintMetaData.scss";
import AddMetaDataTextfieldComponent from "./addMetaDataTextfieldComponent";

const MintMetadataComponent = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "max-content",
    bgcolor: "background.paper",
    borderRadius: 6,
    maxWidth: "500px",
    maxHeight: "500px",
    p: 4,
  };

  const [textFieldAmount, setTextFieldAmount] = useState(1);

  return (
    <div className="d-flex  justify-content-between my-1">
      <div>
        <div className="mint-text-style mint-heading2">
          <img src={multiline} className="mint-properties-icon" /> Properties
        </div>

        <div className="mint-text-style mint-explanation mint-grey-text">
          This is the metadata for the item
        </div>
      </div>
      <Button onClick={handleOpen}>
        <img src={add} />
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="d-flex flex-column align-items-center">
            <div className="d-flex align-items-center justify-items-center">
              Add Properties <img className="metadata-icon " src={close} />
            </div>
            <div>
              Properties show up underneath your item, are clickable, and can be
              filtered in your collection's sidebar.
            </div>
            <div className="add-metadata-model overflow-auto">
              {Array.from(Array(textFieldAmount)).map(() => {
                return <AddMetaDataTextfieldComponent />;
              })}
            </div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => setTextFieldAmount(textFieldAmount + 1)}
            >
              Primary
            </button>
            <button
              type="button"
              className="btn btn-primary container-fluid"
            
            >
              Save
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default MintMetadataComponent;
