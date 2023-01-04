import React, { useEffect, useRef, useState } from "react";
import "../../styles/pages/Mint/mintImage.scss";
import media from "../../asset/media.svg";
import close from "../../asset/close2.svg";
import { create as ipfsHttpClient } from "ipfs-http-client";
import { Buffer } from "buffer";

const projectId = "2Jr08tvGRsfLQIYPcCB3DDYT8OF";
const projectSecret = "a1aed34009ac37fe79ca67d5a63e7d57";
const auth =
  "Basic " + Buffer.from(projectId + ":" + projectSecret).toString("base64");

const clientInfura = ipfsHttpClient({
  // url: "https://ipfs.infura.io:5001",
  host: "ipfs.infura.io",
  port: 5001,
  protocol: "https",
  headers: {
    authorization: auth,
  },
});

type Props = {
  mintImageToBody: (url: string) => void;
};

const MintImage: React.FC<Props> = ({ mintImageToBody }) => {
  const [preview, setPreview] = useState<string>();
  const [fileUrl, setFileUrl] = React.useState("");
  const inputFile = useRef<any>(null);
  const onButtonClick = () => {
    // `current` points to the mounted file input element
    inputFile.current.click();
  };
  useEffect(() => {
    if (!fileUrl) {
      setPreview("");
      return;
    }

   
    setPreview(fileUrl);

    // free memory when ever this component is unmounted
   
  }, [fileUrl]);



  const onChange = async (e: any) => {
    const file = e.target.files[0];
    try {
      const added = await clientInfura.add(file, {
        progress: (prog) => console.log(`received: ${prog}`),
      });
      const url = `https://ipfs.io/ipfs/${added.path}`;
      console.log(url);
      setFileUrl(url);
      mintImageToBody(url);
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
  };


  return (
    <div className="my-3">
      <div className="mint-text-style mint-black-text mint-heading2 ">
        Image, Video, Audio, or 3D Model<b className="mint-red-text">*</b>
      </div>
      <div className="mint-text-style mint-explanation mint-grey-text mb-3">
        File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB,
        GLTF. Max size: 100 MB
      </div>
      <input
        type="file"
        onChange={onChange}
        ref={inputFile}
        style={{ display: "none" }}
      />
      <div className="image-placeholder d-flex mx-auto" onClick={onButtonClick}>
        {preview && (
          <div className="image-container">
            <img className="mint-image" src={preview} alt="mint" />
            <div className="overlay ">
              <img
                alt="overlay"
                src={close}
                className="image-close-icon position-absolute top-0 end-0"
                onClick={(e) => {
                  e.stopPropagation();
                  setFileUrl("");
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MintImage;
