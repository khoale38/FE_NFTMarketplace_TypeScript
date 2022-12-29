import { OwnedNft, WalletNFT } from "model/NFT";
import React, { useEffect, useState } from "react";
import "../../styles/pages/Collection/collectionFilterAndNFTS.scss";
import PersonalFilter from "./personalFilter";
import PersonalNFT from "./personalNFT";

const PersonalFilterAndNFTS = (props: any) => {
  //getting window size
  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);
  let [nftState, setNftState] = useState<OwnedNft[]>();

  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    setNftState(props.ownNft);
  }, [props.ownNft]);

  useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  });

  return (
    <div className="container-fluid">
      <div className="row px-5">
        <div className="col-lg-2 px-0 ">
          {/*this component can be found in CollectionFilter folder */}
          {width > 992 ? <PersonalFilter /> : <SmallFilter />}
        </div>
        <div className="col-lg-10 ">
          <div className="row">
            {nftState?.map((item: OwnedNft) => {
              return (
                <div className="col-xl-3 col-lg-4 col-md-6 py-3 ">
                  <PersonalNFT
                    findingAddress={props.address}
                    contract={item.contract}
                    tokenId={item.tokenId}
                    tokenType={item.tokenType}
                    title={item.title}
                    description={item.description}
                    timeLastUpdated={item.timeLastUpdated}
                    rawMetadata={item.rawMetadata}
                    media={item.media}
                    balance={item.balance}
                  />
                </div>
              );
            })}
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
        <PersonalFilter />
      </div>
    </div>
  );
};

export default PersonalFilterAndNFTS;
