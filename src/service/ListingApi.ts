import { Axios, AxiosError, AxiosInstance } from "axios";
import { Http2ServerRequest } from "http2";
import { WalletNFT } from "model/NFT";
import axios from "./axios";

class ListingNFT {
    listingNFT(makerAddress: string, takerAddress: string, feeRecipient: string, _calldata: string, tokenId: number, target: string, basePrice: number, paymentToken: string, listingTime: number, expirationTime: number, sellSig: string, salt: number): Promise<any> {
        return axios.post(`/marketplace/listing`, {
            makerAddress,
            takerAddress,
            feeRecipient,
            _calldata,
            tokenId,
            target,
            basePrice,
            paymentToken,
            listingTime,
            expirationTime,
            sellSig,
            salt
        });
    }
    getAllListing() {
        return axios.get('marketplace/listing')
    };
}

export default new ListingNFT();