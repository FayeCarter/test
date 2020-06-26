import React, { useState }  from 'react'
import User from "./User.js";
import Search from "./Search.js";

const NavBar = ({ authToken, trackList, setTrackList }) => {

  return (
    <div className="NavBar">
      { authToken ? <User authToken={ authToken } /> : null }
      { authToken ? <Search authToken={ authToken } trackList={ trackList } setTrackList={ setTrackList } /> : null }
    </div>
  )
}
      
export default NavBar
