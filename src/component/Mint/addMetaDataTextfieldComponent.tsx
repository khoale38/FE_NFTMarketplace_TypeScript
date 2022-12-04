import React, { useState } from "react";
import ReactDOM from "react-dom";

const AddMetaDataTextfieldComponent = () => {
  const [visible, setVisible] = useState(true);
  //Remove textfield rat la ta dao
  const removeElement = () => {
    setVisible((prev) => !prev);
  };

  return (
    <div>
      {visible ? (
        <div className="input-group mb-3">
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon1"
            onClick={removeElement}
          >
            X
          </button>

          <input
            type="text"
            aria-label="Type"
            placeholder="Type"
            className="form-control"
          />
          <input
            type="text"
            aria-label="Name"
            placeholder="Name"
            className="form-control"
          />
        </div>
      ):null}
    </div>
  );
};

export default AddMetaDataTextfieldComponent;
