import React, { useState } from "react";
import NavBar from "../../component/Home/navbar";
import Mintbody from "component/Mint/mintbody";
import LoadingOverlay from 'react-loading-overlay-ts';
const MintPage = () => {
  const [mintState, setMintState] = useState<boolean>(false);
  const setMintStateCallBack = (childData: any) => {
    setMintState(childData);
  };

  return (
    <div>
      <LoadingOverlay active={mintState} spinner text="Minting...">
        <NavBar />
        <Mintbody setMintStateCallBack={setMintStateCallBack} />
      </LoadingOverlay>
    </div>
  );
};

export default MintPage;
