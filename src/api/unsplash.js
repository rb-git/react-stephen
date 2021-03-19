import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID SGe00EUvCEQ-qthGtcTEIVOMhb-mQ5bd6iI8Exn3XpE",
  },
});
