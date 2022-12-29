import React, { useCallback, useEffect, useState } from "react";
import NavBar from "../../component/Home/navbar";
import DisplayPersonal from "../../component/Collection/collectionDisplayPersonal";
import CollectionMarket from "../../component/Collection/CollectionMarket";
import { useParams } from "react-router-dom";
import GetCollectionInfo from "service/CollectionApi";
import { AxiosError } from "axios";
import { Collection, Nft } from "model/Collection";
import OnErrorPage from "pages/OnError/onErrorPage";
import ListingNFT from "service/ListingApi";
import { SellingNFT } from "model/temp";

const CollectionPage = () => {
  let [isValid, setIsValid] = useState<Boolean>(false);
  let [collectionState, setCollectionState] = useState<Collection>();
  let [sellingListState, setSellingListState] = useState<SellingNFT[]>();
  let [ownNftState, setOwnNftState] = useState<Nft[]>();
  let [searchState, setSearchState] = useState<string>("");
  const { collectionId } = useParams();
  let Error: string = "No Collection Found";

  const fetch = useCallback(() => {
    GetCollectionInfo.findCollectionWithAddress(collectionId!)
      .then((response: any) => {
        setCollectionState(response.data as Collection);
        setIsValid(true);
      })
      .catch((e: AxiosError) => {
        console.log(e);
        setIsValid(false);
      });
  }, [collectionId]);

  const fetchSellingNFT = useCallback(() => {
    ListingNFT.getAllListing()
      .then((response: any) => {
        setSellingListState(response.data as SellingNFT[]);
      })
      .catch((e: AxiosError) => {
        console.log(e);
      });
  }, []);

  function getSearchValue(input: string) {
    setSearchState(input);
  }

  const setListNFT = useCallback(() => {
    if (searchState === "") {
      setOwnNftState(collectionState?.nfts);
    } else {
      setOwnNftState(
        collectionState?.nfts.filter((e) => {
          return e.title.toLowerCase().includes(searchState!.toLowerCase());
        })
      );
    }
  }, [collectionState?.nfts, searchState]);

  useEffect(() => {
    fetch();
    fetchSellingNFT();
  }, [fetch, fetchSellingNFT]);

  useEffect(() => {
    setListNFT();
  }, [setListNFT]);

  return (
    <div>
      <NavBar />
      {isValid ? (
        <div>
          <DisplayPersonal />
          <CollectionMarket
            NFTs={ownNftState}
            searchState={getSearchValue}
            amount={ownNftState?.length}
            sellingList={sellingListState}
            collectionId={collectionId}
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

export default CollectionPage;
