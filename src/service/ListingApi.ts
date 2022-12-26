import { Axios, AxiosError, AxiosInstance } from "axios";
import { Http2ServerRequest } from "http2";
import { WalletNFT } from "model/NFT";
import axios from "./axios";

class ListingNFT {
    listingNFT(): Promise<WalletNFT> {
        return axios.post(`/marketplace/listing`);
    }
}

export default new ListingNFT();