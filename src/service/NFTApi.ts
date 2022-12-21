import axios from "./axios";

 class GetNFTInfomation {
  async findNFTWithAddress(address:string): Promise<any> {
    return axios
      .post(`/owner/${address}`)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

export default new GetNFTInfomation()