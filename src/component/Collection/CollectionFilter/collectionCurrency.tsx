import React from "react";
import "../../../styles/pages/Collection/collectionFilterAndNFTS.scss";
import CollectionCurrencyComponent from "./component/collectionCurrencyComponent";

const Currency = ["ETH", "WETH", "BTC"];

const collectionCurrency = () => {
  return (
    <div className="filter-heading">
      Currency
      {Currency.map((e) => {
        return( <CollectionCurrencyComponent name={e}/>);

      })}
    </div>
  );
};

export default collectionCurrency;
