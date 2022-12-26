import { Axios, AxiosError, AxiosInstance } from "axios";
import { Http2ServerRequest } from "http2";
import { WalletNFT } from "model/NFT";
import axios from "./axios";

class GetNFTInfomation {
  findNFTWithAddress(address: string): Promise<WalletNFT> {
    return axios.post(`/owner/${address}`);
  }
}

export default new GetNFTInfomation();
