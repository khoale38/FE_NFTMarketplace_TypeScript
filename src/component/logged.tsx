import React from "react";
import wallet from "../asset/wallet.svg";
import ErrAvatar from "../asset/errAva.png";
import "../styles/pages/Home/loggedUI.scss";
const Logged: React.FC = () => {
  return (
    <div className="d-flex flex-row justify-content-center  with100">
    
      <div className="dropdown with100">
        <div data-bs-toggle="dropdown">
          <img
            className="avatar"
            src={ErrAvatar}
            onError={(e) => {
              e.currentTarget.src = ErrAvatar;
            }}
          />
           
        </div>
       
      
        <ul className="dropdown-menu avatardropdown width100">
          <li className="customLi">
            <a className="dropdown-item" href="#">
              My Collection
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="#">
               Setting
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="#">
               Sign Out
            </a>
          </li>
        </ul>
        </div>

        <img src={wallet}  className="wallet"/>
    </div>
  );
};

export default Logged;
