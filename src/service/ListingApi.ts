import { Axios, AxiosError, AxiosInstance } from "axios";
import { Http2ServerRequest } from "http2";
import { WalletNFT } from "model/NFT";
import axios from "./axios";

class ListingNFT {
    listingNFT(makerAddress: string, tokenId: number, target: string, basePrice: number, paymentToken: string, listingTime: number, expirationTime: number): Promise<WalletNFT> {
        return axios.post(`/contract/listing`, {
            makerAddress,
            tokenId,
            target,
            basePrice,
            paymentToken,
            listingTime,
            expirationTime
        });
    }
}

export default new ListingNFT();