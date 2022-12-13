import React from "react";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import close from "../../../asset/close1.svg";
import "../../../styles/pages/Collection/collectionModal.scss";
import popcat from "../../../asset/popcat.jpg";
import Box from "@mui/material/Box";
import Wallet from "../../../asset/wallet.svg"
import CollectionModalBuyItems from "./collectionBuyModalComponent";
const CollectionBuyModal = (props: any) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "500px",
    bgcolor: "background.paper",
    borderRadius: 6,

    maxWidth: "550px",
    p: 4,
  };
  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="d-flex flex-column align-items-center">
            <div className="d-flex align-items-center justify-items-center collection-modal-header collection-modal-style collection-modal-heading1">
              Complete checkout
            </div>
            <img
              alt="close"
              className="metadata-icon position-absolute top-0 end-0 me-3 mt-3"
              src={close}
              onClick={props.handleClose}
            />
            <div className="d-flex container-fluid justify-content-between collection-modal-border-solid p-0">
              <div className="collection-modal-style collection-modal-black-text collection-modal-title">
                Items
              </div>
              <div className="collection-modal-style collection-modal-black-text collection-modal-title">
                Total
              </div>
            </div>
            <CollectionModalBuyItems />
            <div className="d-flex container-fluid  collection-modal-border-solid p-0">
              <div className="collection-modal-style collection-modal-black-text collection-modal-title">
                Payment methods
              </div>
            </div>
            <div className="d-flex container-fluid collection-modal-border-solid p-0 align-items-center">
              <div className="collection-modal-style collection-modal-black-text collection-modal-title">
                Send to diffent wallet
              </div>
              <img src={Wallet} alt='wallet' className="collection-modal-wallet"/>
            </div>
            <button
              type="button"
              className="btn btn-primary container-fluid collection-save-btn py-2"
            >
              Save
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default CollectionBuyModal;
