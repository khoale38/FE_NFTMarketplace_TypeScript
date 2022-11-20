import React, { useState } from "react";
import "../../styles/pages/Mint/mintComponent.scss";
import { CustomOption } from "./mintDropdownComponent";
import ReactTooltip from "react-tooltip";
interface collection {
  image: string;
  name: string;
}
interface collectionList {
  list: collection[];
}

const MintCollectionDropdownComponent = (props: collectionList) => {
  const [collection, setCollection] = useState<collection>(props.list[0]);
  return (
    <div className='my-3'>
      <div className=" mint-text-style mint-heading2">Collection</div>
      <div className="d-flex  justify-content-between mint-text-style mint-explanation mint-grey-text">
        This is the collection where your item will appear.
        <i
          className="bi bi-info-circle-fill mint-info-icon"
          data-tip="This is tool tip for collection."
        ></i>
        <ReactTooltip />
      </div>
      <div className="dropdown d-flex flex-row align-items-center ">
        <button
          className="btn mint_dropdown_style dropdown-toggle container-fluid  d-flex flex-row align-items-center justify-content-between py-1"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <div className="d-inline mint-text-style mint-dropdown-text">
            <img src={collection.image} className="mint-dropdown-icon me-5" />
            {collection.name}
          </div>
        </button>
        <ul className="dropdown-menu container-fluid">
          {props.list.map((e) => {
            return (
              <li>
                <a className="dropdown-item " onClick={() => setCollection(e)}>
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

export default MintCollectionDropdownComponent;
