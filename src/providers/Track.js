import { axiosInstance, GET_TOKEN } from "./api"
import { DUMB_TRACKS } from "./dumpTracks"
export class Track {
  constructor({ id, name, images, artists, totalTracks, added_at }) {
    this.id = id
    this.name = name
    this.images = images
    this.artists = artists.map(artist => artist.name)
    this.totalTracks = totalTracks
    this.liked = !!added_at
  }

  static async getTracks() {
    try {
      const response = await axiosInstance.get(
        `/recommendations?limit=20&market=ES&seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Ccountry&seed_tracks=0c6xIDDpzE81m2q797ordA`,
        {
          headers: {
            Authorization: `Bearer ${GET_TOKEN()}`,
          },
        }
      )
      const data = response.data.tracks.map(
        track => new Track({ ...track, images: track.album.images })
      )
      return data
    } catch (error) {
      console.error(error)
      return DUMB_TRACKS
    }
  }

  static async setLike(id, liked) {
    try {
      const options = {
        url: `/me/tracks?ids=${id}`,
        headers: {
          Authorization: `Bearer ${GET_TOKEN()}`,
        },
      }
      if (liked) {
        options.method = "DELETE"
      } else {
        options.method = "PUT"
      }
      await axiosInstance(options)
      this.query()
    } catch (error) {
      throw error
    }
  }

  static async query(name, numTracks, numPages) {
    try {
      const url = new URLSearchParams()
      url.append("q", name)
      url.append("type", "track")
      url.append("market", "ES")
      url.append("limit", numTracks)
      url.append("offset", numPages)
      console.log("Se hizo petición")
      const response = await axiosInstance(`/search?${url}`, {
        headers: {
          Authorization: `Bearer ${GET_TOKEN()}`,
        },
      })
      const data = response.data.tracks
      return data.items.map(
        track =>
          new Track({
            ...track.album,
            totalTracks: data.total,
            id: track.id,
          })
      )
    } catch (error) {
      throw error
    }
  }
}
