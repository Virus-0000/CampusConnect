import axios from "axios";

const api = axios.create({
  baseURL: "https://campusconnect-1tha.onrender.com"
});

export default api;