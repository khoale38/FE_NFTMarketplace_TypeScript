import "../../styles/pages/Home/collection.scss";
import avatar from "../../asset/avatar.png";
import { Collection } from "model/Collection";
import logo from "../../asset/logo.svg";
import { useNavigate } from "react-router-dom";
const HomeCollection = (props: Collection) => {
  const navigate = useNavigate();
  return (
    <div
      className="card shadow"
      onClick={(e) => {
        navigate(`/collection/${props.address}`);
      }}
    >
      <img
        src={props.nfts.length >= 1 ? props.nfts[0].media[0].gateway : logo}
        className=" collection-img"
        alt="..."
      />
      <div className=" card-cbody px-3 py-0 my-2 d-flex flex-row align-items-center">
        <div className="square shadow ">
          <img src={avatar} className="avatar-collection" alt="avatar" />
        </div>
        <div className="card-title home-collection-name m-0 p-2">
          {props.address}
        </div>
      </div>
    </div>
  );
};

export default HomeCollection;
