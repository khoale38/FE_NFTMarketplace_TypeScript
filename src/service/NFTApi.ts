import { AxiosError } from "axios";
import { WalletNFT } from "model/NFT";
import axios from "./axios";

 class GetNFTInfomation {
  async findNFTWithAddress(address:string): Promise<WalletNFT> {
    let temp!:WalletNFT
    await axios
      .post(`/owner/${address}`)
      .then(function (response) {
        temp =response.data as WalletNFT

      })
      .catch(function (error:AxiosError) {
        temp.isError=true;
      });
      return temp
  }
}

export default new GetNFTInfomation()