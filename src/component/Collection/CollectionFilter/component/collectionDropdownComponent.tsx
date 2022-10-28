import React from "react";
import "../../../../styles/pages/Collection/collectionDropdownComponent.scss";
interface collectionDropdownComponentProps {
  metadata: string[];
  name: string;
}

const collectionDropdownComponent: React.FC<collectionDropdownComponentProps> = (
  props: collectionDropdownComponentProps
) => {
  return (
    <div className="py-2">
      <div className="dropdown">
        <button
          className="btn container-fluid  text-start dropdown-toggle metadata-dropdown-toggle metadata-dropdown"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          data-bs-display="static"
          data-bs-auto-close="inside"
        >
          {props.name}
        </button>
        <ul className="dropdown-menu metadata-dropdown-menu metadata-dropdown-menu">
          {props.metadata.map((e) => {
            return (
              <li>
                <div className="form-check metadata-dropdown-item">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    {e}
                  </label>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default collectionDropdownComponent;
