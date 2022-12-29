export interface Collection {
    address: string
    nfts: Nft[]
    pageKey: any
  }
  
  export interface Nft {
    contract: Contract
    tokenId: string
    tokenType: string
    title: string
    description: string
    timeLastUpdated: string
    rawMetadata: RawMetadata
    tokenUri: TokenUri
    media: Medum[]
  }
  
  export interface Contract {
    address: string
    name: string
    symbol: string
    totalSupply: string
    tokenType: string
  }
  
  export interface RawMetadata {
    name: string
    description: string
    image: string
    attributes?: Attribute[]
    animation_url?: string
  }
  
  export interface Attribute {
    value: string
    key: string
    trait_type: string
  }
  
  export interface TokenUri {
    raw: string
    gateway: string
  }
  
  export interface Medum {
    raw: string
    gateway: string
    thumbnail?: string
    format?: string
    bytes?: number
  }
  