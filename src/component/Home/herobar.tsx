import React from "react";
import Linearbtn from "../../component/Home/linearbtn";
import banner from "../../asset/hero.png";
import "../../styles/pages/Home/herobar.scss";
const Herobar = () => {
  return (
    <div>
      <img src={banner} className="img-fluid mx-auto d-block img-padding" />
      <Linearbtn />
    </div>
  );
};

export default Herobar;
