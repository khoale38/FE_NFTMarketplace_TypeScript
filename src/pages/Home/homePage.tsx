import React, { useCallback, useEffect, useState } from "react";
import Navbar from "../../component/Home/navbar";
import Herobar from "../../component/Home/herobar";
import Category from "../../component/Home/category";
import Collectionlistview from "../../component/Home/collectionlistview";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { connect } from '../../features/connect_wallet/connectWalletAPI';

const Home: React.FC = () => {
  const blockchain = useAppSelector((state) => state.account);
  const dispatch = useAppDispatch();

  console.log(blockchain.account);

  const fetch = useCallback(() => {
    dispatch(connect())
  }, [])

  useEffect(() => {
    fetch();
  }, [fetch])

  return (
    <div>
      <Navbar />
      <Herobar />
      <Category />
      <Collectionlistview />
    </div>
  );
};

export default Home;
