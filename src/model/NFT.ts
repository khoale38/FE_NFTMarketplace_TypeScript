export interface WalletNFT {
    address: string
    ownedNfts: OwnedNft[]
    pageKey: any
    totalCount: number
  }
  
  export interface OwnedNft {
    contract: Contract
    tokenId: string
    tokenType: string
    title: string
    description: string
    timeLastUpdated: string
    metadataError?: string
    rawMetadata: RawMetadata
    media: Medum[]
    balance: number
    tokenUri?: TokenUri
  }
  
  export interface Contract {
    address: string
    name: string
    symbol: string
    tokenType: string
    totalSupply?: string
  }
  
  export interface RawMetadata {
    metadata?: any[]
    attributes?: Attribute[]
    name?: string
    image?: string
    description?: string
  }
  
  export interface Attribute {
    value: string
    trait_type: string
  }
  
  export interface Medum {
    raw: string
    gateway: string
    thumbnail?: string
    format?: string
    bytes?: number
  }
  
  export interface TokenUri {
    raw: string
    gateway: string
  }
  