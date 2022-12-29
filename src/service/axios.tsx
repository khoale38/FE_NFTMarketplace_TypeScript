import axios from "axios";

export default axios.create({
  timeout: 2000,
  baseURL: "http://localhost:3000/api/v1/", //TODO: HTTP Go Here
  headers: {
    "Content-Type": "application/json",
  },
});
