import { Axios, AxiosError, AxiosInstance } from "axios";
import { Http2ServerRequest } from "http2";
import { WalletNFT } from "model/NFT";
import axios from "./axios";

 class GetNFTInfomation {
   findNFTWithAddress(address:string): Promise<WalletNFT> {
    
     return axios
      .post(`/owner/${address}`)
      // .then(function (response) {
      //   temp =response.data as WalletNFT

      // })
      // .catch(function (error:AxiosError) {
      //   temp=error
      // });
     
  }
}

export default new GetNFTInfomation()