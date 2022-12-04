import React, { useState } from "react";
import multiline from "../../asset/multiline.png";
import add from "../../asset/add.svg";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import close from "../../asset/close1.svg";
import "../../styles/pages/Mint/mintMetaData.scss";
import AddMetaDataTextfieldComponent from "./addMetaDataTextfieldComponent";


interface metadata{
  type:string,
  name:string,
}

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

    p: 4,
  };

  const [textFieldAmount, setTextFieldAmount] :any = useState(1);

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
            <div className="d-flex align-items-center justify-items-center mint-text-style mint-heading2 mint-black-text">
              Add Properties 
            </div>
            <img className="metadata-icon position-absolute top-0 end-0 me-3 mt-3" src={close} onClick={handleClose} />
            <div className="mint-text-style  ">
              Properties show up underneath your item, are clickable, and can be
              filtered in your collection's sidebar.
            </div>
            <div className="add-metadata-modal overflow-auto mt-3">
              {Array.from(Array(textFieldAmount)).map((e,index) => {
                return <AddMetaDataTextfieldComponent />;
              })}
            </div>
            <button
              type="button"
              className="btn btn-primary  align-self-start add-metadata-add-more-btn my-3"
              onClick={() => setTextFieldAmount(textFieldAmount + 1)}
            >
              Add More
            </button>
            <button
              type="button"
              className="btn btn-primary container-fluid add-metadata-save-btn py-2"
            
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
