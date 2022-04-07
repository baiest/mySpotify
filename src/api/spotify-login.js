const SpotifyWebApi = require("spotify-web-api-node")
export default async function spotifyLoginHandler(req, res) {
  try {
    const code = req.body.code
    const spotifyApi = new SpotifyWebApi({
      redirectUri: `${process.env.GATSBY_REDIRECT_URI}/login`,
      clientId: process.env.GATSBY_CLIENT_ID,
      clientSecret: process.env.GATSBY_CLIENT_SECRET,
    })
    return spotifyApi
      .authorizationCodeGrant(code)
      .then(data => {
        return res.json({
          access_token: data.body.access_token,
          refresh_token: data.body.refresh_token,
          expires_in: data.body.expires_in,
        })
      })
      .catch(error => {
        console.log(error)
        return res.sendStatus(401)
      })
  } catch (error) {
    res.json({ error: error.message })
  }
}
