import React from "react";
import Info from "../../asset/info1.svg";
import "../../styles/pages/Mint/mintComponent.scss";
import ReactTooltip from 'react-tooltip';

interface mintComponent {
  name: string;
  requireField: boolean;
  placeholder: string;
  description: string | null;
  icon: boolean;
  textfield: boolean;
  tooltip: string | null;
  onChange: (a: string) => void;
}
const MintComponent = (props: mintComponent) => {
  return (
    <div className=" my-2">
      <div className="d-flex mint-text-style mint-heading2">
        {props.name}
        {props.requireField ? <b className="mint-red-text">*</b> : null}
      </div>
      <div className=" d-flex justify-content-between mint-text-style mint-explanation mint-grey-text ">
        {props.description}
        {props.icon ? (
         <div> <i className="bi bi-info-circle-fill mint-info-icon" data-tip={props.tooltip}>
          </i>
          <ReactTooltip /></div>
        ) : null}
      </div>
      {!props.textfield ? (
        <form>
          <textarea placeholder={props.placeholder} maxLength={1000} className="mint-max-width mint-text-field mt-2" onChange={e => {props.onChange(e.target.value)}}>
            This is the default comment...
          </textarea>
        </form>
      ) : (
        <form>
          <input type="text" className="mint-max-width mint-text-field mt-2" placeholder={props.placeholder} onChange={e => {props.onChange(e.target.value)}}/>
        </form>
      )}
    </div>
  );
};

export default MintComponent;
