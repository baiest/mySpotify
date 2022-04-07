import { axiosInstance } from "./api"
import { Track } from "./Track"
import axios from "axios"
console.log("CLIENT_ID", process.env.GATSBY_CLIENT_ID)
export class User {
  constructor({ display_name, images }) {
    this.name = display_name
    this.image = images[0].url
  }
  static isTokenInStorage() {
    const isBrowser = typeof window !== "undefined"
    return isBrowser && window.localStorage.getItem("token")
  }
  /**@returns URL to login in Spotify */
  static getAuth() {
    const data = new URLSearchParams()
    data.append("response_type", "code")
    data.append("client_id", process.env.GATSBY_CLIENT_ID)
    data.append(
      "scope",
      "user-read-private user-read-email user-library-read user-library-modify"
    )
    data.append("redirect_uri", `${process.env.GATSBY_REDIRECT_URI}/login`)
    return "https://accounts.spotify.com/authorize?" + data
  }
  static async setToken(code) {
    try {
      const response = await axios.post("/api/spotify-login", {
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
      console.log(process.env.GATSBY_REDIRECT_URI)
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
        ({ track, added_at }) =>
          new Track({
            ...track.album,
            id: track.id,
            name: track.name,
            totalTracks: response.data.total,
            added_at,
          })
      )
    } catch (error) {
      throw new Error(error)
    }
  }
}
