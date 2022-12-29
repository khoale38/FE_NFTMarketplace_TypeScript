import React, { useCallback, useEffect, useState } from "react";
import NavBar from "../../component/Home/navbar";
import DisplayPersonal from "../../component/Collection/collectionDisplayPersonal";
import CollectionMarket from "../../component/Collection/CollectionMarket";
import { useParams } from "react-router-dom";
import GetCollectionInfo from "service/CollectionApi";
import { AxiosError } from "axios";
import { WalletNFT } from "model/NFT";
const CollectionPage = () => {
  let [isValid, setIsValid] = useState<Boolean>(false);
  let [nftState, setNftState] = useState<WalletNFT>();
  const { collectionId } = useParams();

  
  const fetch = useCallback(() => {
    GetCollectionInfo.findCollectionWithAddress(collectionId!)
      .then((response: any) => {

        setNftState(response.data as WalletNFT);
        setIsValid(true);
        console.log(nftState)
      })
      .catch((e:AxiosError) => {
        console.log(e)
        setIsValid(false);
      });
  }, [collectionId]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return (
    <div>
      <NavBar />
      <DisplayPersonal />
      <CollectionMarket/>
    </div>
  );
};

export default CollectionPage;
