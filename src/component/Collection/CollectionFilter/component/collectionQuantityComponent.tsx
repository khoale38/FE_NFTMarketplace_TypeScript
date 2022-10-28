import React from "react";
interface Quantity {
  name: string;
}
const collectionQuantityComponent: React.FC<Quantity> = (props: Quantity) => {
  return (
    <div className="form-check ms-1">
      <input
        className="form-check-input"
        type="radio"
        name="flexRadioDefault"
        id="flexRadioDefault1"
      />
      <label
        className="form-check-label filter-item"
        htmlFor="flexRadioDefault1"
      >
        {props.name}
      </label>
    </div>
  );
};

export default collectionQuantityComponent;
