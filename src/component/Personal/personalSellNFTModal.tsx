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
              <div className=" col-lg">
                <div className="input-group mb-3 personal-sell-modal-input">
                  <input
                    type="text"
                    placeholder="Input a price"
                    className="form-control"
                    aria-label="Text input with dropdown button"
                  />
                  <button
                    className="btn btn-outline-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    ETH
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end">
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
                <div>
                  Summary
                  <div className="mt-3">
                    <div className="d-flex container-fluid justify-content-between">
                      <div>Listing Fee</div>
                      <div>12 ETH</div>
                    </div>
                    <div className="d-flex container-fluid justify-content-between">
                      <div>Service Fee</div>
                      <div>2.5 %</div>
                    </div>
                    <div className="d-flex container-fluid justify-content-between">
                      <div>Creator Fee</div>
                      <div>0 %</div>
                    </div>
                    <hr className="personal-sell-modal-divider container-fluid mt-2" />
                    <div className="d-flex container-fluid justify-content-between p-0">
                      <div>Potential Earning</div>
                      <div>12 ETH</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button
              type="button"
              className="btn btn-primary container-fluid collection-save-btn py-2 "
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
