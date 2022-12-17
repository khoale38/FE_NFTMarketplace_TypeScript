import React from "react";
import Modal from "@mui/material/Modal";

import close from "../../../asset/close1.svg";
import "../../../styles/pages/Collection/collectionModal.scss";

import Box from "@mui/material/Box";
import Wallet from "../../../asset/wallet.svg";
import CollectionModalBuyItems from "./collectionBuyModalComponent";
import CollectionBuyModalComponentRadio from "./collectionBuyModalComponentRadio";
const CollectionBuyModal = (props: any) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "auto",
    bgcolor: "background.paper",
    borderRadius: 6,

    minWidth:"350px !important",
    p: 4,
  };
  const paymentMethod = ["ETH", "Card"];
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
                Price
              </div>
            </div>
            <div className="overflow-auto collection-list-item-modal container-fluid p-0">
              <CollectionModalBuyItems />
              <CollectionModalBuyItems />
              <CollectionModalBuyItems />
              <CollectionModalBuyItems />
            </div>

            <div className="d-flex container-fluid  collection-modal-border-solid p-0">
              <div className="collection-modal-style collection-modal-black-text collection-modal-title">
                Payment methods
              </div>
            </div>
            {paymentMethod.map((e) => {
              return <CollectionBuyModalComponentRadio method={e} />;
            })}
            <div className="d-flex container-fluid collection-modal-border-solid p-0 align-items-center">
              <div className="collection-modal-style collection-modal-black-text collection-modal-title me-2">
                Send to diffent wallet
              </div>
              <img
                src={Wallet}
                alt="wallet"
                className="collection-modal-wallet"
              />
            </div>

            <input
              type="text"
              className="container-fluid collection-modal-textfield mt-3"
              placeholder="e.g 0x8fac64d1...2klf8270b"
            />
            <div className="collection-modal-warning collection-modal-style my-2">
              Make sure you're sending to the correct address as lost items
              can't be recovered.
            </div>
            <button
              type="button"
              className="btn btn-primary container-fluid collection-save-btn py-2 "
            >
              Complete purchase
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default CollectionBuyModal;
