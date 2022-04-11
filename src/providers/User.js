import { axiosInstance, GET_TOKEN, REMOVE_TOKEN, SET_TOKEN } from "./api"
import { Track } from "./Track"
import axios from "axios"
export class User {
  constructor({ display_name, images }) {
    this.name = display_name
    this.image = images ? images.shift().url : null
  }
  static isTokenInStorage() {
    const isBrowser = typeof window !== "undefined"
    return isBrowser && GET_TOKEN()
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
  /**Save the token provided by Sppotify in the LocalStorage
   * @requires code Logued with Spotify
   */
  static async setToken(code) {
    try {
      const response = await axios.post("/api/spotify-login", {
        code,
      })
      SET_TOKEN(response.data.access_token)
    } catch (error) {
      throw error
    }
  }
  static async getUser() {
    try {
      const response = await axiosInstance.get("/me", {
        headers: {
          Authorization: `Bearer ${GET_TOKEN()}`,
        },
      })
      return new User({ ...response.data })
    } catch (error) {
      throw error
    }
  }
  static logOut() {
    REMOVE_TOKEN()
  }
  static async getFavoritesSongs(numTracks, numPages) {
    try {
      const response = await axiosInstance.get(
        `me/tracks?market=ES&limit=${numTracks}&offset=${numPages}`,
        {
          headers: {
            Authorization: `Bearer ${GET_TOKEN()}`,
          },
        }
      )
      const data = response.data.items
      return data.map(
        ({ track, added_at }) =>
          new Track({
            ...track.album,
            id: track.id,
            nameTrack: track.name,
            nameAlbum: track.album.name,
            totalTracks: response.data.total,
            added_at,
          })
      )
    } catch (error) {
      throw new Error(error)
    }
  }
}
