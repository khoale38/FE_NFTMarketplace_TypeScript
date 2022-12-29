export interface SellingNFT {
    id: number
    tokenId: number
    target: string
    makerAddress: string
    takerAddress: string
    feeRecipient: string
    callData: string
    basePrice: number
    paymentToken: string
    listingTime: number
    expirationTime: number
    sellSign: string
    salt: number
  }

 