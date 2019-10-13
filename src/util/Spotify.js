let accessToken = "";

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }

    // check that access token is a match
    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

    if (accessTokenMatch && expiresInMatch) {
      accessToken = accessTokenMatch[1];
      const expiresIn = Number(expiresInMatch[1]);
    }

    // clears parameters, allows us to grab new access token
    window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
    window.history.pushState("Access Token", null, "/");
  }
};

export default Spotify;
