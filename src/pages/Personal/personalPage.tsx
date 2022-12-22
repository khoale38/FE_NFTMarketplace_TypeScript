import React, { useEffect, useState } from "react";
import NavBar from "../../component/Home/navbar";
import PersonalBody from "component/Personal/personalbody";
import PersonalFilterBar from "component/Personal/personalFilterBar";
import PersonalFilterAndNFTS from "component/Personal/personalFilterAndNFTS";
import { useParams, useSearchParams } from "react-router-dom";
import GetNFTInfomation from "../../service/NFTApi";
import { WalletNFT } from "model/NFT";

const PersonalPage = () => {
  const { userId } = useParams();
  let walletNFT!: WalletNFT;
  let [isValid, setIsValid] = useState<Boolean>(false);
  let [nftState, setNftState] = useState<WalletNFT>();
  useEffect(() => {
    test();
  }, [userId]);

  async function test() {
    await setNftState(await GetNFTInfomation.findNFTWithAddress(userId!));
    setIsValid(walletNFT.address === undefined);
  }

  return (
    <div>
      <NavBar />
      {!isValid ? (
        <div>
          <PersonalBody />
          <PersonalFilterBar />
          <PersonalFilterAndNFTS nft={nftState} />
        </div>
      ) : (
        <div>No Object </div>
      )}
    </div>
  );
};

export default PersonalPage;
