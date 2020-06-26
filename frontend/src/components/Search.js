import React, { useState }  from 'react'
import "./Search.css"

const Search = ({authToken, setTrackList}) => {
  const [input, setInput] = useState('')
  
  const searchTracks = async (e) => {
    e.preventDefault()
    setInput("")
    setTrackList([])
    try {
      const response = await fetch(`https://api.spotify.com/v1/search?q=${input}&type=track`, {
        method: "GET",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": `Bearer ${authToken}`
        }
      });
      const parseData = await response.json();   
      const result = parseData.tracks.items

      result.forEach(track => {
        let artists = [];
        track.artists.forEach(artist => {
          artists.push(artist.name)
        })
        setTrackList(trackList => [ ...trackList, {["name"]: track.name, ["url"]: track.album.images[0].url, ["uri"]: track.uri, ["artist"]: artists } ]);
      })
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="Search">
      <form 
        className="form" 
        id="searchBar"
        onSubmit= {searchTracks}
      >
        <input
          type="text"
          className="search-bar"
          placeholder="Search"
          value={input}
          onChange={(e) => setInput(e.target.value)}

        />
      </form>      
    </div>
  )
}
      
export default Search