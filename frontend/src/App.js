import React from 'react';
// import { Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Spotify App</h1>
      <button
          id="enter-button"
          onClick={() => {
            const url = "http://localhost:5000/api/login"
            // window.location.href = url
            window.location.assign(url)
          }}
        >
          Enter with Spotify
        </button>
    </div>
  );
}

export default App;
