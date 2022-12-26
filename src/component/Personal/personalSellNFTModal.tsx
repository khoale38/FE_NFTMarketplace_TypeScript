import React from "react";
import Modal from "@mui/material/Modal";
import popcat from "../../asset/popcat.jpg";
import close from "../../asset/close1.svg";
import Box from "@mui/material/Box";
import "../../styles/pages/Personal/personalNFT.scss";

const personalSellNFTModal = (props: any) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "auto",
    bgcolor: "background.paper",
    borderRadius: 6,

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
              Selling NFT
            </div>
            <img
              alt="close"
              className="metadata-icon position-absolute top-0 end-0 me-3 mt-3"
              src={close}
              onClick={props.handleClose}
            />
            <div className="my-3 row">
              <img
                src={popcat}
                alt="avatar"
                className="personal-sell-modal-image me-3 col-lg"
              />
              <div className=" col-lg mt-3 mt-md-0">
                <div className="d-flex flex-column mb-3">
                  <div className="personal-sell-modal-text personal-sell-modal-bold">
                    Type of sale </div>
                  <div className="d-flex mb-2 mt-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault2"
                      id="flexRadioDefault2"
                    />
                    <label
                      className="form-check-label filter-item"
                      htmlFor="flexRadioDefault2"
                    >
                      List for sale
                    </label>
                  </div>
                  <div className="d-flex">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault2"
                      id="flexRadioDefault2"
                    />
                    <label
                      className="form-check-label filter-item"
                      htmlFor="flexRadioDefault2"
                    >
                      List for auction
                    </label>
                  </div>
                </div>
                <div className="input-group mb-3 personal-sell-modal-input">
                  <input
                    type="text"
                    placeholder="Input a price"
                    className="form-control personal-sell-modal-text personal-modal-textfield "
                  />
                  <div className="dropdown-center personal-sell-modal-text">
                    <button
                      className="btn btn-outline-secondary dropdown-toggle  personal-NFT-more-dropdown-open"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      ETH
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end personal-NFT-more-dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          ETH
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          WETH
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
         
              </div>
            </div>
            <div className="container-fluid">
                  <div className="personal-sell-modal-text personal-sell-modal-bold ">
                  
                    Summary
                  </div>
                  <div className="mt-2">
                    <div className="d-flex container-fluid justify-content-between personal-sell-modal-text">
                      <div className=" ">Listing Fee</div>
                      <div>12 ETH</div>
                    </div>
                    <div className="d-flex container-fluid justify-content-between personal-sell-modal-text">
                      <div>Service Fee</div>
                      <div>2.5 %</div>
                    </div>
                    <div className="d-flex container-fluid justify-content-between personal-sell-modal-text">
                      <div>Creator Fee</div>
                      <div>0 %</div>
                    </div>
                    <hr className="personal-sell-modal-divider container-fluid mt-2" />
                    <div className="d-flex container-fluid justify-content-between p-0 personal-sell-modal-text align-items-center">
                      <div className="personal-sell-modal-bold">
                        Total Earning
                      </div>
                      <div>12 ETH</div>
                    </div>
                  </div>
                </div>
            <button
              type="button"
              className="btn btn-primary container-fluid collection-save-btn py-2 mt-3"
            >
              List For Sale
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default personalSellNFTModal;