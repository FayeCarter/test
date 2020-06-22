import React from 'react'

const Search_Results = ({ songList }) => {

  return (
    <div className="Search-Results">
      <div className="song-list">
        {songList.map((song, index) => {
          return(
            <div className="song" key={index}>
              <p className="track-name">{song.name}</p>
              <img className="track-art" src={song.url} alt="Album art"></img>
              <div className="artists-list">
                {song.artist.map((artist, index) => {
                  return (
                  <div className="track-artists" key={index}>
                    <p className="artist">{artist}</p>
                  </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
      
export default Search_Results