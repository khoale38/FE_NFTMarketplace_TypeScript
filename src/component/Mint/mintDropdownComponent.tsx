import React, { useState } from "react";
import "../../styles/pages/Mint/mintDropdownComponent.scss";
interface customOption {
  name: string;
  image: string;
}
export class chain {
  name!: string;
  image!: string;
}

interface blockchain {
  blockchain: chain[];
}

const MintDropdownComponent = (props: blockchain) => {
  const [chain, setChain] = useState<chain>(props.blockchain[0]);
  return (
    <div className='my-3'>
      <div className="mint-text-style mint-heading2">Blockchain</div>
      <div className="dropdown ">
        <button
          className="btn  mint_dropdown_style dropdown-toggle container-fluid d-flex flex-row align-items-center justify-content-between py-1"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <div className="d-inline mint-text-style mint-dropdown-text">
         
            <img src={chain.image} className="mint-dropdown-icon me-5" />
            {chain.name}
          </div>
        </button>
        <ul className="dropdown-menu container-fluid">
          {props.blockchain.map((e) => {
            return (
              <li>
                <a className="dropdown-item " onClick={() => setChain(e)}>
                  <CustomOption name={e.name} image={e.image} />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export const CustomOption = (props: customOption) => {
  return (
    <div className="d-flex align-items-center">
      <img src={props.image} className="mint-dropdown-icon me-3" />
      <text className="mint-text-style mint-dropdown-text">{props.name}</text>
    </div>
  );
};

export default MintDropdownComponent;
