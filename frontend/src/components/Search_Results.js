import React from 'react'
import "./Search_Results.css"

const Search_Results = ({ trackList }) => {

  return (
    <div className="Search-Results">
      <div className="track-list">
        {trackList.map((track, index) => {
          return(
            <div className="track" key={index}>
              <img className="track-art" src={track.url} alt="Album art"></img>
              <div className="track-details">
                <p className="track-name">{track.name}</p>
                  <div className="artists-list">
                    {track.artist.map((artist, index) => {
                      return (
                        <div className="artist-container" key={index}>
                          <div className="artist" key={index}>{artist} </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
          )
        })}
      </div>
    </div>
  )
}
      
export default Search_Results