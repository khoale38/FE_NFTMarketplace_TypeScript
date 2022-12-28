import { useEffect, useState, useCallback } from "react";
import NavBar from "../../component/Home/navbar";
import PersonalBody from "component/Personal/personalbody";
import PersonalFilterBar from "component/Personal/personalFilterBar";
import PersonalFilterAndNFTS from "component/Personal/personalFilterAndNFTS";
import { useParams, useSearchParams } from "react-router-dom";
import GetNFTInfomation from "../../service/NFTApi";
import { OwnedNft, WalletNFT } from "model/NFT";
import OnErrorPage from "pages/OnError/onErrorPage";

const PersonalPage = () => {
  const { userId } = useParams();
  let [isValid, setIsValid] = useState<Boolean>(false);
  let [nftState, setNftState] = useState<WalletNFT>();
  let [ownNftState, setOwnNftState] = useState<OwnedNft[]>();
  let Error: string = "No User Found";
  let [searchState, setSearchState] = useState<string>("");

  const fetch = useCallback(() => {
    GetNFTInfomation.findNFTWithAddress(userId!)
      .then((response: any) => {
        setNftState(response.data as WalletNFT);
        setIsValid(true);
      })
      .catch(() => {
        setIsValid(false);
      });
  }, [userId]);

  function getSearchValue(input: string) {
    setSearchState(input);
  }

  const setListNFT = useCallback(() => {
    if (searchState === "") {
      setOwnNftState(nftState?.ownedNfts);
    } else {
      setOwnNftState(
        nftState?.ownedNfts.filter((e) => {
          return e.title.toLowerCase().includes(searchState!.toLowerCase());
        })
      );
    }
  }, [nftState?.ownedNfts, searchState]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  useEffect(() => {
    setListNFT();
  }, [setListNFT]);

  return (
    <div>
      <NavBar />
      {isValid ? (
        <div>
          <PersonalBody />
          <PersonalFilterBar
            amount={ownNftState?.length}
            onSearchChange={getSearchValue}
          />
          <PersonalFilterAndNFTS
            address={userId}
            ownNft={ownNftState}
            searchState={searchState}
          />
        </div>
      ) : (
        <div>
          <OnErrorPage input={Error} />
        </div>
      )}
    </div>
  );
};

export default PersonalPage;
