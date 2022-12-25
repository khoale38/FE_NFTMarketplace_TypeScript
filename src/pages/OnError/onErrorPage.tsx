import React from "react";
import "../../styles/pages/OnError/onError.scss";
import logo from "../../asset/logo.svg";
const onErrorPage = (props: any) => {
  return (
    <div>
      <div className="error-text display-1  center-error-text">
        <div className="d-flex flex-column align-items-center">
          <img src={logo} alt="logo"  className="error-img mb-3"/>
          {props.input}
        </div>
      </div>
    </div>
  );
};

export default onErrorPage;
