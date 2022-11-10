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
    <div>
      <div className="mint-text-style mint-heading2">Blockchain</div>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img src={chain.image} className="mint-dropdown-icon" /> {chain.name}
        </button>
        <ul className="dropdown-menu">
          {props.blockchain.map((e) => {
            return (
              <li>
                <a className="dropdown-item" onClick={() => setChain(e)}>
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
      <img src={props.image} className="mint-dropdown-icon" />
      <text>{props.name}</text>
    </div>
  );
};

export default MintDropdownComponent;
