import { Collection } from "model/Collection";
import axios from "./axios";

class GetCollectionInfo {
  findCollectionWithAddress(address: string): Promise<Collection> {
    return axios.post(`/contract/${address}`);
  }

  getAllCollection(){
    return axios.get(`/contract/`);
  }
}

export default new GetCollectionInfo();
