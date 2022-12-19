import axios from "axios";

export default axios.create({
  timeout: 2000,
  baseURL: "URL go here", //TODO: HTTP Go Here
  headers: {
    "Content-Type": "multipart/form-data",
  },
});
