import axios from "axios"

const URL = "https://api.spotify.com/v1/"

export const axiosInstance = axios.create({
  baseURL: URL,
  headers: {
    "Content-type": "application/json",
  },
})

export const GET_TOKEN = () => window.localStorage.getItem("token")
export const SET_TOKEN = token => window.localStorage.setItem("token", token)
export const REMOVE_TOKEN = token => window.localStorage.removeItem("token")
