import axios from "axios";

export default axios.create({
  baseURL: "https://api-test-robson.herokuapp.com/api",
  headers: {
    "Content-type": "application/json"
  }
});