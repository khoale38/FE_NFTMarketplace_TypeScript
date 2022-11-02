import React, { useEffect, useRef, useState } from "react";
import "../../styles/pages/Mint/mintImage.scss";
import media from "../../asset/media.svg";
import close from "../../asset/close2.svg";
const MintImage = () => {
  const [selectedFile, setSelectedFile] = useState<any | null>();
  const [preview, setPreview] = useState<string>();
  const inputFile = useRef<any>(null);
  const onButtonClick = () => {
    // `current` points to the mounted file input element
    inputFile.current.click();
  };
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e: any) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(e.target.files[0]);
  };
  return (
    <div>
      <div>Image, Video, Audio, or 3D Model *</div>
      <div>
        File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB,
        GLTF. Max size: 100 MB
      </div>
      <input
        type="file"
        onChange={onSelectFile}
        ref={inputFile}
        style={{ display: "none" }}
      />
      <div className="image-placeholder d-flex" onClick={onButtonClick}>
        {selectedFile && (
          <div className="image-container">
            <img className="mint-image" src={preview} />
            <div className="overlay ">
              <img
                src={close}
                className="image-close-icon position-absolute top-0 end-0"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedFile(null);
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
