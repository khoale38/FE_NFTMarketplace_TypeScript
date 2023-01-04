import React from "react";
import MintHeader from "./mintHeader";
import MintImage from "./mintImage";
import MintComponent from "./mintComponent";
import MintDropdownComponent, { chain } from "./mintDropdownComponent";
import avatar from "../../asset/avatar.png";
import avatar2 from "../../asset/avatar2.png";
import MintCollectionDropdownComponent from "./mintCollectionDropdownComponent";
import MintFreezeNFTComponent from "./mintFreezeNFTComponent";
import MintMetadataComponent from "./mintMetadataComponent";
import "../../styles/pages/Mint/mintComponent.scss";
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import pinJSONToIPFS from "service/MintAPI";
import { CHAIN_ADDRESSES } from "config/address";
import MinABI from "../../config/abi/mint_abi_erc721.json"

const description =
  "The description will be included on the item's detail page underneath its image. Markdown syntax is supported.";
const externalLink =
  "OpenSea will include a link to this URL on this item's detail page, so that users can click to learn more about it. You are welcome to link to your own webpage with more details.";
const supply = "The number of items that can be minted. No gas cost to you!";

const chain1 = { name: "Chain 1", image: avatar };
const chain2 = { name: "Chain 2", image: avatar2 };

const Mintbody = () => {
  const [fileUrl, setFileUrl] = React.useState("");
  const [name, setName] = React.useState("");
  const [inputExternalLink, setInputExternalLink] = React.useState("");
  const [inputDescription, setInputDescription] = React.useState("");
  const [inputSupply, setInputSupply] = React.useState("");

  const mintImageToBody = (childData: any) => {
    setFileUrl(childData);
  }

  const mintComponentToParent1 = (childData: any) => {
    setName(childData);
  }
  const mintComponentToParent2 = (childData: any) => {
    setInputExternalLink(childData);
  }
  const mintComponentToParent3 = (childData: any) => {
    setInputDescription(childData);
  }
  const mintComponentToParent4 = (childData: any) => {
    setInputSupply(childData);
  }
  
  const handleCreate = async () => {
    const web3Modal = new Web3Modal()
        const connection = await web3Modal.connect()
        const provider = new ethers.providers.Web3Provider(connection)
        const signer = provider.getSigner()
        var signerAddr = await signer.getAddress();
        console.log("Signer: ", signerAddr);

        //make metadata
        let metadata = { name: "",image: "", description: "", externalLink: "", supply: 1};
        metadata.image = fileUrl;
        metadata.name = name;
        metadata.description = inputDescription;
        metadata.externalLink = inputExternalLink;
        metadata.supply = Number(inputSupply);

        try {
          //make pinata call
          const pinataResponse = await pinJSONToIPFS(metadata)
          if(!pinataResponse.success) {
              return {
                  success: false,
                  status: "😢 Something went wrong while uploading your tokenURI."
              }
          }
          const tokenURI = pinataResponse.pinataUrl;
          console.log("TokenURI: ", tokenURI)
          createToken(tokenURI)
      } catch (error) {
          console.log('Error uploading file: ', error)
      }
  }

  const createToken = async (uri: string) => {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    var signerAddr = await signer.getAddress();

    // Create token
    let contract = new ethers.Contract(CHAIN_ADDRESSES.goerli.NFT, MinABI, signer);
    let transaction = await contract.mint(signerAddr, uri);
    await transaction.wait();
    alert("Create NFT successfully");
}

  return (
    <div className="d-flex flex-column  ">
      <div className="mint-min-width align-self-center  jusity-items-between">
   
        <MintHeader />
        <MintImage mintImageToBody={mintImageToBody}/>
        <MintComponent
          name={"Name"}
          requireField={true}
          placeholder={"Item name"}
          description={null}
          icon={false}
          textfield={true}
          tooltip={null}
          onChange={mintComponentToParent1}
        />
        <MintComponent
          name={"External link"}
          requireField={false}
          placeholder={"Discord, Website, Twitter, ..."}
          description={externalLink}
          icon={false}
          textfield={true}
          tooltip={null}
          onChange={mintComponentToParent2}
        />
        <MintComponent
          name={"Description"}
          requireField={false}
          placeholder={"Provide a detailed description for your item "}
          description={description}
          icon={false}
          textfield={false}
          tooltip={null}
          onChange={mintComponentToParent3}
        />
        <MintComponent
          name={"Supply"}
          requireField={false}
          placeholder={"Amount of item"}
          description={supply}
          icon={true}
          textfield={true}
          tooltip={"How many NFT do you want to mint"}
          onChange={mintComponentToParent4}
        />
        <MintDropdownComponent blockchain={[chain1, chain2]} />
        <MintCollectionDropdownComponent list={[chain1, chain2]} />
        <MintFreezeNFTComponent />
        <MintMetadataComponent />
        <button type="button" className=" mint-create-button container-fluid my-4" onClick={handleCreate}>
          Create
        </button>
      </div>
    </div>
  );
};

export default Mintbody;
