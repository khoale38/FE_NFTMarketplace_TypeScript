import React from "react";
import "../../../styles/pages/Collection/collectionDropdownComponent.scss"
interface collectionDropdownComponentProps {
  metadata: string[];
  name: string;
}

const collectionDropdownComponent: React.FC<
  collectionDropdownComponentProps
> = (props: collectionDropdownComponentProps) => {
  return (
    <div>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          data-bs-display="static"
          data-bs-auto-close="inside"
        >
          {props.name}
        </button>
        <ul className="dropdown-menu collectionDropdown-menu">
          {props.metadata.map((e) => {
            return (
              <li>
                <a className="dropdown-item" href="#">
                  {e}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default collectionDropdownComponent;
