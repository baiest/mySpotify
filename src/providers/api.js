import axios from "axios"

const URL = "https://api.spotify.com/v1/"

console.log(window.localStorage.getItem("token"))

export const axiosInstance = axios.create({
  baseURL: URL,
  headers: {
    "Content-type": "application/json",
  },
})
