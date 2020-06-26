import React, { useState }  from 'react'
import User from "./User.js";
import Search from "./Search.js";
import "./NavBar.css"

const NavBar = ({ authToken, trackList, setTrackList }) => {

  return (
    <div className="NavBar">
      { authToken ? <Search authToken={ authToken } trackList={ trackList } setTrackList={ setTrackList } /> : null }
      { authToken ? <User authToken={ authToken } /> : null }
    </div>
  )
}
      
export default NavBar
