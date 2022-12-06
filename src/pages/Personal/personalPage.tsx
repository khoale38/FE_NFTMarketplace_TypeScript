import React from "react";
import NavBar from "../../component/Home/navbar";
import PersonalBody from "component/Personal/personalbody";
import PersonalFilterBar from "component/Personal/personalFilterBar";
const personalPage = () => {
  return (
    <div>
      <NavBar />
      <PersonalBody/>
      <PersonalFilterBar/>
    </div>
  );
};

export default personalPage;
