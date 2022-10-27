import React from "react";
import CollectionFilterStatus from "./collectionFilterStatus";
import CollectionPrice from "./colllectionPrice";
import CollectionQuantity from "./collectionQuantity";
import CollectionCurrency from "./collectionCurrency";
import CollectionDropdownComponent from "./collectionDropdownComponent";
import "../../../styles/pages/Collection/collectionPage.scss"
const collectionFilter = () => {
  return (
    //All child component can be found in COllectionFilter  folder
    <div className="mx-0 overflow-auto">
      <CollectionFilterStatus/>
      <CollectionPrice/>
      <CollectionQuantity/>
      <CollectionCurrency/>
      <hr className="rounded collection-divider" ></hr>
      <CollectionDropdownComponent metadata={["Blue Hat","Nike Hat","Adidas Hat"]} name={"Hat"}/>
      <CollectionDropdownComponent metadata={["Blue Hat","Nike Hat","Adidas Hat"]} name={"Hat"}/>
      <CollectionDropdownComponent metadata={["Blue Hat","Nike Hat","Adidas Hat"]} name={"Hat"}/>
    </div>
  );
};

export default collectionFilter;
