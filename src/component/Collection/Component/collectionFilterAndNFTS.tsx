import { template } from "@babel/core";
import { Nft } from "model/Collection";
import { SellingNFT } from "model/temp";
import React, { useEffect, useState } from "react";
import "../../../styles/pages/Collection/collectionFilterAndNFTS.scss";
import CollectionFilter from "../CollectionFilter/collectionFilter";
import CollectionNFT from "../NFT/collectionNFT";
const CollectionFilterAndNFTS = (props: any) => {
  //getting window size
  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);
  let [nftState, setNftState] = useState<Nft[]>();
  let [sellingListState, setSellingListState] = useState<SellingNFT[]>();
  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };
  React.useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  });

  useEffect(() => {
    setSellingListState(props.sellingList);

    setNftState(props.NFTs);
  }, [props]);

  function checkSell(item: Nft): boolean {
    let temp: boolean = false;
    sellingListState?.forEach((e) => {
      if (e.target != props.collectionId) {
        temp = false;
        return;
      } else {
        sellingListState?.forEach((e) => {
          if (e.tokenId.toString() === item.tokenId) {
            temp = true;
            return;
          } else {
            temp = false;
          }
        });
      }
    });
    return temp;
  }
  function getPrice(item: Nft): number {
    let temp: number = 0;
    sellingListState?.forEach((e) => {
      if (e.target != props.collectionId) {
        return;
      } else {
        sellingListState?.forEach((e) => {
          if (e.tokenId.toString() === item.tokenId) {
            temp = e.basePrice;
            return;
          } else {
            return;
          }
        });
      }
    });
    return temp;
  }

  return (
    <div className="container-fluid">
      <div className="row px-5">
        <div className="col-lg-2 px-0 ">
          {/*this component can be found in CollectionFilter folder */}
          {width > 992 ? <CollectionFilter /> : <SmallFilter />}
        </div>
        <div className="col-lg-10 ">
          <div className="row">
            {nftState?.map((item: Nft) => (
              <div className="col-xl-3 col-lg-4 col-md-6 py-3  ">
                <CollectionNFT
                  listingData={sellingListState}
                  price={getPrice(item)}
                  isSell={checkSell(item)}
                  contract={item.contract}
                  tokenId={item.tokenId}
                  tokenType={item.tokenType}
                  title={item.title}
                  description={item.description}
                  timeLastUpdated={item.timeLastUpdated}
                  rawMetadata={item.rawMetadata}
                  media={item.media}
                  tokenUri={item.tokenUri}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const SmallFilter = () => {
  return (
    <div className="dropdown filter-button">
      <button
        className="btn small-screen-filter dropdown-toggle container-fluid"
        type="button"
        data-bs-toggle="dropdown"
        data-bs-display="static"
        aria-expanded="false"
        data-bs-auto-close="false"
      >
        Filter
      </button>
      <div className="dropdown-menu mt-2 position-relative filter-container px-3">
        <CollectionFilter />
      </div>
    </div>
  );
};

export default CollectionFilterAndNFTS;
