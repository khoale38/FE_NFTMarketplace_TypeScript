import React, { useCallback, useEffect, useState } from "react";
import Navbar from "../../component/Home/navbar";
import Herobar from "../../component/Home/herobar";
import Category from "../../component/Home/category";
import Collectionlistview from "../../component/Home/collectionlistview";
import GetCollectionInfo from "service/CollectionApi";
import { Collection } from "model/Collection";
import { AxiosError } from "axios";
const Home = () => {
  let [collectionState, setCollectionState] = useState<Collection>();

  const fetch = useCallback(() => {
    GetCollectionInfo.getAllCollection()
      .then((response: any) => {
        setCollectionState(response.data as Collection);
      })
      .catch((e: AxiosError) => {
        console.log(e);
      });
  }, []);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return (
    <div>
      <Navbar />
      <Herobar />
      <Category />
      <Collectionlistview collection={collectionState} />
    </div>
  );
};

export default Home;
