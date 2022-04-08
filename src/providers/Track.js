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
      console.log(data)
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
      const response = await axiosInstance(options)
      console.log(response)
    } catch (error) {
      throw error
    }
  }
}
