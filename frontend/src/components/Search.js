import React, { useState }  from 'react'


const Search = ({authToken, setSongList}) => {
  const [input, setInput] = useState('')
  
  const searchSongs = async (e) => {
    e.preventDefault()
    setInput("")
    setSongList([])
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

      result.forEach(song => {
        let artists = [];
        song.artists.forEach(artist => {
          artists.push(artist.name)
        })
        setSongList(songList => [ ...songList, {["name"]: song.name, ["url"]: song.album.images[0].url, ["uri"]: song.uri, ["artist"]: artists } ]);
      })
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="Search">
      <form className="form" id="searchBar">
        <input
          type="text"
          className="input"
          placeholder="Search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="searchButton" onClick={searchSongs}>
          Search
        </button>
      </form>      
    </div>
  )
}
      
export default Search