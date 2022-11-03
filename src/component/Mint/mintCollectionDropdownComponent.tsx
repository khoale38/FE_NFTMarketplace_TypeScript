import React, { useState } from "react";
import "../../styles/pages/Mint/mintComponent.scss";
import { CustomOption } from "./mintDropdownComponent";
interface collection {
  image: string;
  name: string;
}
interface collectionList{
    list:collection[]
}

const MintCollectionDropdownComponent = (props: collectionList) => {
  const [collection, setCollection] = useState<collection>(props.list[0]);
  return (
    <div>
      Collection
      <div>
        This is the collection where your item will appear.
        <i className="bi bi-info-circle-fill mint-info-icon custom-tooltip">
          <span className="tooltiptext">This is tool tip for collection.</span>
        </i>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img src={collection.image} className="mint-dropdown-icon" />
            {collection.name}
          </button>
          <ul className="dropdown-menu">
            {props.list.map((e) => {
              return (
                <li>
                  <a className="dropdown-item" onClick={() => setCollection(e)}>
                    <CustomOption name={e.name} image={e.image} />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MintCollectionDropdownComponent;
