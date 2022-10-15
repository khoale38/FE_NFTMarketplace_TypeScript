import React from "react";
import NavBar from "../../component/Home/navbar";
import DisplayPersonal from "../../component/Collection/displayPersonal";
import CollectionMarket from "../../component/Collection/CollectionMarket";
const CollectionPage = () => {
  return (
    <div>
      <NavBar />
      <DisplayPersonal />
      <CollectionMarket/>
    </div>
  );
};

export default CollectionPage;
