import CollectionDropdownComponent from "component/Collection/CollectionFilter/component/collectionDropdownComponent";
import React from "react";
import "../../styles/pages/Collection/collectionPage.scss"
const personalFilter = () => {
  return (
    <div className="mx-0 overflow-auto">
      <CollectionDropdownComponent
        metadata={["Blue Hat", "Nike Hat", "Adidas Hat"]}
        name={"Hat"}
      />
      <CollectionDropdownComponent
        metadata={["Blue Hat", "Nike Hat", "Adidas Hat"]}
        name={"Hat"}
      />
      <CollectionDropdownComponent
        metadata={["Blue Hat", "Nike Hat", "Adidas Hat"]}
        name={"Hat"}
      />
    </div>
  );
};

export default personalFilter;
