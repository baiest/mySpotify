const express = require("express")
const cors = require("cors")
const SpotifyWebApi = require("spotify-web-api-node")
require("dotenv").config({
  path: `.env.development`,
})
const app = express()

app.use(cors())
app.use(express.json())
app.post("/login", (req, res) => {
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
})

app.listen(8001, "0.0.0.0", () => console.log(`Server Spotify running`))
