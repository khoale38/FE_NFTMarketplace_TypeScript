import React from "react";
import Navbar from "../../component/Home/navbar";
import Herobar from "../../component/Home/herobar";
import Category from "../../component/Home/category";
const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Herobar />
      <Category />
      <div style={{height:"100px"}}></div>
    </div>
  );
};

export default Home;
