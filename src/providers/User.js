import { axiosInstance } from "./api"
import { Track } from "./Track"
import axios from "axios"

export class User {
  constructor({ display_name, images }) {
    this.name = display_name
    this.image = images[0].url
  }
  static isLogged() {
    const isBrowser = typeof window !== "undefined"
    return isBrowser && window.localStorage.getItem("token")
  }
  static getAuth() {
    /**@returns URL to login in Spotify */
    const data = new URLSearchParams()
    data.append("response_type", "code")
    data.append("client_id", process.env.CLIENT_ID)
    data.append("scope", "user-read-private user-read-email user-library-read")
    data.append("redirect_uri", `${process.env.REDIRECT_URI}/login`)
    return "https://accounts.spotify.com/authorize?" + data
  }
  static async getToken(code) {
    try {
      const response = await axios.post("http://192.168.1.54:8001/login", {
        code,
      })
      window.localStorage.setItem("token", response.data.access_token)
      return response.data.access_token
    } catch (error) {
      throw error
    }
  }
  static async getUser() {
    try {
      const response = await axiosInstance.get("/me", {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("token")}`,
        },
      })
      return new User({ ...response.data })
    } catch (error) {
      throw error
    }
  }
  static logOut() {
    window.localStorage.removeItem("token")
  }
  static async getFavoritesSongs(numTracks, numPages) {
    console.log(window.localStorage.getItem("token"))
    try {
      const response = await axiosInstance.get(
        `me/tracks?market=ES&limit=${numTracks}&offset=${numPages}`,
        {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem("token")}`,
          },
        }
      )
      const data = response.data.items
      return data.map(
        ({ track }) =>
          new Track({
            ...track.album,
            id: track.id,
            name: track.name,
            totalTracks: response.data.total,
          })
      )
    } catch (error) {
      throw new Error(error)
    }
  }
}