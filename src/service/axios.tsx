import axios from "axios";

export default axios.create({
  timeout: 5000,
  baseURL: "http://ec2-54-249-223-125.ap-northeast-1.compute.amazonaws.com:3000/api/v1/", //TODO: HTTP Go Here
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
  },
});
