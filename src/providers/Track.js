import { axiosInstance, GET_TOKEN } from "./api"

export class Track {
  constructor({ id, name, images, artists, totalTracks, added_at }) {
    this.id = id
    this.name = name
    this.images = images
    this.artists = artists
    this.totalTracks = totalTracks
    this.liked = !!added_at
  }

  static async getTracks() {
    try {
      const response = await axiosInstance.get(
        `/recommendations?limit=10&market=ES&seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Ccountry&seed_tracks=0c6xIDDpzE81m2q797ordA`,
        {
          headers: {
            Authorization: `Bearer ${GET_TOKEN()}`,
          },
        }
      )
      return response.data.tracks.map(
        track => new Track({ ...track, images: track.album.images })
      )
    } catch (error) {
      throw error
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
