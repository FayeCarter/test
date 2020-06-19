import React from 'react';
// import { Route, Link } from "react-router-dom";

function App() {

  componentDidMount() {
    let parsed = queryString.parse(window.location.search);
    let accessToken = parsed.access_token;
    if (!accessToken)
      return;
    fetch('https://api.spotify.com/v1/me', {
      headers: {'Authorization': 'Bearer ' + accessToken}
    }).then(response => response.json())
    .then(data => this.setState({
      user: {
        name: data.display_name
      }
    }))
  }

  return (
    <div className="App">
      <h1>Spotify App</h1>
      <button
          id="enter-button"
          onClick={() => {
            const url = "http://localhost:5000/api/login"
            window.location.assign(url)
          }}
        >
          Enter with Spotify
        </button>
    </div>
  );
}

export default App;
