import React from "react";
interface Currency {
  name: string;
}
const collectionCurrencyComponent: React.FC<Currency> = (props: Currency) => {
  return (
    <div className="form-check ms-1">
      <input
        className="form-check-input"
        type="checkbox"
        value=""
        id="flexCheckDefault"
      />
      <label
        className="form-check-label filter-item"
        htmlFor="flexCheckDefault"
      >
        {props.name}
      </label>
    </div>
  );
};

export default collectionCurrencyComponent;
