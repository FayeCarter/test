import React from 'react'

const Join = () => {
  return (
    <div className="Join">
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
  )
}
      
export default Join