import React from "react";
import wallet from "../../asset/wallet.svg";
import ErrAvatar from "../../asset/errAva.png";
import "../../styles/pages/Home/loggedUI.scss";
import { useAppSelector } from "app/hooks";
import { selectAccount } from "features/connect_wallet/connectWallet";
import { useNavigate } from "react-router-dom";
const Logged: React.FC = () => {
  const log = useAppSelector(selectAccount);
  const navigate = useNavigate();
  return (
    <div className="d-flex flex-row justify-content-center  with100">
      <div className="dropdown custom-dropdown with100">
        <div data-bs-toggle="dropdown">
          <img
            className="avatar"
            alt="avatar"
            src={ErrAvatar}
            onError={(e) => {
              e.currentTarget.src = ErrAvatar;
            }}
          />
        </div>

        <ul className="dropdown-menu custom-dropdown-menu avatardropdown width100">
          <li className="customLi">
            <div
              className="dropdown-item custom-dropdown-item"
              onClick={(e) => {

                e.preventDefault()
                navigate(`/personal/${log}`);
              }}
            >
              My Collection
            </div>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <div className="dropdown-item custom-dropdown-item">Setting</div>
          </li>
        
        
        </ul>
      </div>

      <img src={wallet} className="wallet" alt="wallet" />
    </div>
  );
};

export default Logged;
