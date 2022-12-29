import { Nft, Collection } from "model/Collection";
import React from "react";
import HomeCollection from "./homeCollection";

const Collectionlistview = (props: any) => {
  return (
    <div className="px-5 py-3">
      <div className="row">
        {props.collection?.map((item: Collection) => (
          <div className="col-xl-3 col-lg-4 col-md-6 py-3 ">
            <HomeCollection
              address={item.address}
              nfts={item.nfts}
              pageKey={item.pageKey}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collectionlistview;
