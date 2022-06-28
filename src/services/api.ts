import axios from "axios";

export default axios.create({
  baseURL: "https://api-hackaton-unialfa2022.herokuapp.com/api",
  headers: {
    "Content-type": "application/json"
  }
});