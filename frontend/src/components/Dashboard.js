import React, { useState }  from 'react'
import "./Dashboard.css"

import NavBar from "./NavBar.js";
import Search_Results from './Search_Results';

const Dashboard = ({ authToken }) => {

  const [trackList, setTrackList] = useState([])

  return (
    <div className="Dashboard">
      { authToken ? <NavBar authToken={ authToken } trackList={ trackList } setTrackList={ setTrackList } /> : null }
      { trackList ? <Search_Results trackList={ trackList } /> : null }
    </div>
  )
}
      
export default Dashboard
