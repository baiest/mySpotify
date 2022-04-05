const SpotifyWebApi = require("spotify-web-api-node")
export default function handler(req, res) {
  const code = req.body.code
  const spotifyApi = new SpotifyWebApi({
    redirectUri: `${process.env.REDIRECT_URI}/login`,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
  })
  spotifyApi
    .authorizationCodeGrant(code)
    .then(data => {
      res.json({
        access_token: data.body.access_token,
        refresh_token: data.body.refresh_token,
        expires_in: data.body.expires_in,
      })
    })
    .catch(error => {
      console.log(error)
      res.sendStatus(401)
    })
}
