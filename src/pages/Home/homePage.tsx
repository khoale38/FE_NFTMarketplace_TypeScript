import React from "react";
import Navbar from "../../component/Home/navbar";
import Herobar from "../../component/Home/herobar";
import Category from "../../component/Home/category";
import Collectionlistview from "../../component/Home/collectionlistview";
const Home: React.FC = () => {
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
