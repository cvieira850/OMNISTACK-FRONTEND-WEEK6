import axios from "axios";

const api = axios.create({
  baseURL: "https://dropbox-omnistack.herokuapp.com"
});

export default api;
