import React from "react";

const addMetaDataTextfieldComponent = () => {
  return (
    <div>
      <div className="input-group mb-3">
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon1"
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
    </div>
  );
};

export default addMetaDataTextfieldComponent;
