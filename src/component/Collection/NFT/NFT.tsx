import React from 'react'
import popcat from "../../../asset/popcat.jpg";
import "../../../styles/pages/Home/collection.scss";
import avatar from "../../../asset/avatar.png"
const NFT = () => {
  return (
    <div className="card shadow">
    <img src={popcat} className="card-img-top collection-img" alt="..." />
    <div className="card-body card-cbody px-3 py-0 my-2 d-flex flex-row align-items-center">
      <div className="square shadow ">
        <img src={avatar} className="avatar-collection"  />
      </div>
      <div className="card-title home-collection-name m-0 p-2">Card title</div>
    </div>
  </div>
  )
}

export default NFT