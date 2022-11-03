import React from "react";
import MintHeader from "./mintHeader";
import MintImage from "./mintImage";
import MintComponent from "./mintComponent";
import MintDropdownComponent, { chain } from "./mintDropdownComponent";
import avatar from "../../asset/avatar.png";
import avatar2 from "../../asset/avatar2.png";
import MintCollectionDropdownComponent from "./mintCollectionDropdownComponent";
const description =
  "The description will be included on the item's detail page underneath its image. Markdown syntax is supported.";
const externalLink =
  "OpenSea will include a link to this URL on this item's detail page, so that users can click to learn more about it. You are welcome to link to your own webpage with more details.";
const supply = "The number of items that can be minted. No gas cost to you!";

const chain1 = { name: "Chain 1", image: avatar };
const chain2 = { name: "Chain 2", image: avatar2 };
const mintbody = () => {
  return (
    <div>
      <MintHeader />
      <MintImage />
      <MintComponent
        name={"Name"}
        requireField={true}
        placeholder={"Item name"}
        description={null}
        icon={false}
        textfield={true}
        tooltip={null}
      />
      <MintComponent
        name={"External link"}
        requireField={false}
        placeholder={"Discord, Website, Twitter, ..."}
        description={externalLink}
        icon={false}
        textfield={true}
        tooltip={null}
      />
      <MintComponent
        name={"Description"}
        requireField={false}
        placeholder={"Provide a detailed description for your item "}
        description={description}
        icon={false}
        textfield={false}
        tooltip={null}
      />
      <MintComponent
        name={"Supply"}
        requireField={false}
        placeholder={"Amount of item"}
        description={supply}
        icon={true}
        textfield={false}
        tooltip={"How many NFT do you want to mint"}
      />
      <MintDropdownComponent blockchain={[chain1, chain2]} />
      <MintCollectionDropdownComponent list={[chain1, chain2]}/>
    </div>
  );
};

export default mintbody;
