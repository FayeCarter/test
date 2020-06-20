import React, { useState }  from 'react'

const Search = ({authToken}) => {
  const [input, setInput] = useState('')

  const searchSongs = async (e) => {
    e.preventDefault()
    setInput("")
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
      console.log(parseData)
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="Join">
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