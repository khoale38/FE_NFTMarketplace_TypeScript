import React, { useEffect } from "react";
import NavBar from "../../component/Home/navbar";
import PersonalBody from "component/Personal/personalbody";
import PersonalFilterBar from "component/Personal/personalFilterBar";
import PersonalFilterAndNFTS from "component/Personal/personalFilterAndNFTS";
import { useParams, useSearchParams } from "react-router-dom";
import GetNFTInfomation from "../../service/NFTApi"
const PersonalPage = () => {
  const { userId } = useParams();
  useEffect(() => {
    console.log(userId);
    GetNFTInfomation.findNFTWithAddress(userId!);
  }, [userId]);




  return (
    <div>
      <NavBar />
      <PersonalBody />
      <PersonalFilterBar />
      <PersonalFilterAndNFTS />
    </div>
  );
};

export default PersonalPage;
