import axios from "axios"

const URL = "https://api.spotify.com/v1/"

export const axiosInstance = axios.create({
  baseURL: URL,
  headers: {
    "Content-type": "application/json",
  },
})

const NAME_STORAGE = "token"

export const GET_TOKEN = () => window.localStorage.getItem(NAME_STORAGE)
export const SET_TOKEN = token =>
  window.localStorage.setItem(NAME_STORAGE, token)
export const REMOVE_TOKEN = () => window.localStorage.removeItem(NAME_STORAGE)
