import axios from "axios";

const api = axios.create({
  baseURL: "https://todoapp-caique.herokuapp.com/api",
});

export default api;
