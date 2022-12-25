import React from "react";
import Navbar from "component/Home/navbar";
import OnErrorPage from "./onErrorPage";
const redirectPage = () => {
    const Error ="404 Page not found"
  return (
    <div>
      <Navbar />
      <OnErrorPage input={Error}/>
    </div>
  );
};

export default redirectPage;
