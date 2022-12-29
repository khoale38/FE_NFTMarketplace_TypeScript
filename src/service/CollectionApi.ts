
import { WalletNFT } from "model/NFT";
import axios from "./axios";

class GetCollectionInfo{
    findCollectionWithAddress(address: string): Promise<WalletNFT> {
        return axios.post(`/contract/${address}`);
      }
}

export default new GetCollectionInfo()