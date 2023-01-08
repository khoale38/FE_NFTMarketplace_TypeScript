import React, { useEffect } from "react";
import Modal from "@mui/material/Modal";

import close from "../../../asset/close1.svg";
import "../../../styles/pages/Collection/collectionModal.scss";

import Box from "@mui/material/Box";
import Wallet from "../../../asset/wallet.svg";
import CollectionModalBuyItems from "./collectionBuyModalComponent";
import CollectionBuyModalComponentRadio from "./collectionBuyModalComponentRadio";
import { ethers, constants, BigNumber } from "ethers";
import Web3Modal from "web3modal";
import { MockERC721 } from "utils/typechain-types";
import minAbiERC721 from "../../../config/abi/mint_abi_erc721.json";
import { makeOrder, hashOrder } from "utils/utils";
import { CHAIN_ADDRESSES } from "config/address";
import { REPLACEMENT_PATTERN } from "config/replacement_pattern";
import exchangeABI from "config/abi/WyvernExchange.json";
import tokenABI from "config/abi/MockERC20.json";
import Web3 from "web3";

const CollectionBuyModal = (props: any) => {
  const [contractProp, setContractProp] = React.useState({ contract: { address: ""}, tokenId: -1, price: 0, listingData: [{sellSign: "", makerAddress: "", takerAddress: "", feeRecipient: "", target: "", paymentToken: "", basePrice: 1, listingTime: 0, expirationTime: 0, salt: 0, callData: ""}]});

  useEffect(() => {
    setContractProp(props.contract);
  }, [props.contract]);

  const handleBuy = async () => {
    console.log("contractProp:", contractProp.listingData[0]);
    const web3modal = new Web3Modal();
    const connection = await web3modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const signerAddress = await signer.getAddress();

    const web3 = new Web3(connection);

    let wyvernExchangeContract = new ethers.Contract(
      CHAIN_ADDRESSES.goerli.ExchangeContractAddress, 
      exchangeABI.abi, 
      signer
    );

    let tokenContract = new ethers.Contract(
      CHAIN_ADDRESSES.goerli.MockERC20ContractAddress, 
      tokenABI.abi, 
      signer
    );
    let approveTransaction = await tokenContract.approve(CHAIN_ADDRESSES.goerli.TokenTransferProxyContractAddress, 1000);
    await approveTransaction.wait();

    let contract: MockERC721 = new ethers.Contract(
      contractProp.contract.address,
      minAbiERC721,
      signer
    ) as MockERC721

        let overrides = {
            gasLimit: 2100000,
            gasPrice: 8000000000
        };

    const buyCallData = contract.interface.encodeFunctionData('transferFrom', [
      constants.AddressZero,
      signerAddress,
      contractProp.tokenId
    ]);
    
    const buy = makeOrder(
      CHAIN_ADDRESSES.goerli.ExchangeContractAddress,
      false,
      signerAddress,
      contract.address,
      buyCallData,
      REPLACEMENT_PATTERN.replacementPatternFrom,
  )
  buy.maker = signerAddress;
  buy.taker = contractProp.listingData[0].makerAddress;
  buy.target = contract.address;
  buy.basePrice = contractProp.price;
  buy.paymentToken = CHAIN_ADDRESSES.goerli.MockERC20ContractAddress;
  buy.listingTime = 0;
  buy.expirationTime = 0;
  buy.feeMethod = 1;

  const buyHash = hashOrder(buy);
  const buySig = await web3.eth.sign(buyHash, signerAddress);
  const splitBuySig = ethers.utils.splitSignature(buySig);
  const splitSellSig = ethers.utils.splitSignature(contractProp.listingData[0].sellSign);
  let transaction = await
                wyvernExchangeContract.atomicMatch_(
                    [
                        buy.exchange,
                        buy.maker,
                        buy.taker,
                        buy.feeRecipient,
                        buy.target,
                        buy.staticTarget,
                        buy.paymentToken,
                        wyvernExchangeContract.address,
                        contractProp.listingData[0].makerAddress,
                        contractProp.listingData[0].takerAddress,
                        contractProp.listingData[0].feeRecipient,
                        contractProp.listingData[0].target,
                        '0x0000000000000000000000000000000000000000',
                        contractProp.listingData[0].paymentToken,
                    ],
                    [
                        buy.makerRelayerFee,
                        buy.takerRelayerFee,
                        buy.makerProtocolFee,
                        buy.takerProtocolFee,
                        buy.basePrice,
                        buy.extra,
                        buy.listingTime,
                        buy.expirationTime,
                        buy.salt,
                        BigNumber.from(0),
                        BigNumber.from(0),
                        BigNumber.from(0),
                        BigNumber.from(0),
                        contractProp.listingData[0].basePrice,
                        0,
                        contractProp.listingData[0].listingTime,
                        contractProp.listingData[0].expirationTime,
                        contractProp.listingData[0].salt,
                    ],
                    [
                        buy.feeMethod,
                        buy.side,
                        buy.saleKind,
                        buy.howToCall,
                        1,
                        1,
                        0,
                        0,
                    ],
                    buy._calldata,
                    contractProp.listingData[0].callData,
                    buy.replacementPattern,
                    REPLACEMENT_PATTERN.replacementPatternTo,
                    buy.staticExtradata,
                    '0x',
                    [splitBuySig.v, splitSellSig.v],
                    [splitBuySig.r, splitBuySig.s, splitSellSig.r, splitSellSig.s, constants.HashZero],
                    overrides
                );
            await transaction.wait();
            alert("Buy successfully");
  }

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "auto",
    bgcolor: "background.paper",
    borderRadius: 6,

    minWidth:"350px !important",
    p: 4,
  };
  const paymentMethod = ["ETH", "Card"];
  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="d-flex flex-column align-items-center">
            <div className="d-flex align-items-center justify-items-center collection-modal-header collection-modal-style collection-modal-heading1">
              Complete checkout
            </div>
            <img
              alt="close"
              className="metadata-icon position-absolute top-0 end-0 me-3 mt-3"
              src={close}
              onClick={props.handleClose}
            />
            <div className="d-flex container-fluid justify-content-between collection-modal-border-solid p-0">
              <div className="collection-modal-style collection-modal-black-text collection-modal-title">
                Items
              </div>
              <div className="collection-modal-style collection-modal-black-text collection-modal-title">
                Price
              </div>
            </div>
            <div className="overflow-auto collection-list-item-modal container-fluid p-0">
              <CollectionModalBuyItems />
              <CollectionModalBuyItems />
              <CollectionModalBuyItems />
              <CollectionModalBuyItems />
            </div>

            <div className="d-flex container-fluid  collection-modal-border-solid p-0">
              <div className="collection-modal-style collection-modal-black-text collection-modal-title">
                Payment methods
              </div>
            </div>
            {paymentMethod.map((e) => {
              return <CollectionBuyModalComponentRadio method={e} />;
            })}
            <div className="d-flex container-fluid collection-modal-border-solid p-0 align-items-center">
              <div className="collection-modal-style collection-modal-black-text collection-modal-title me-2">
                Send to diffent wallet
              </div>
              <img
                src={Wallet}
                alt="wallet"
                className="collection-modal-wallet"
              />
            </div>

            <input
              type="text"
              className="container-fluid collection-modal-textfield mt-3"
              placeholder="e.g 0x8fac64d1...2klf8270b"
            />
            <div className="collection-modal-warning collection-modal-style my-2">
              Make sure you're sending to the correct address as lost items
              can't be recovered.
            </div>
            <button
              type="button"
              className="btn btn-primary container-fluid collection-save-btn py-2 "
              onClick={handleBuy}
            >
              Complete purchase
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default CollectionBuyModal;
