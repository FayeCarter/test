import React, { useState }  from 'react'
import "./Dashboard.css"

import User from "./User.js";
import Search from "./Search.js";
import Search_Results from './Search_Results';

const Dashboard = ({ authToken }) => {

  const [trackList, setTrackList] = useState([])

  return (
    <div className="Dashboard">
      <h1>Dash</h1>
      { authToken ? <User authToken={ authToken } /> : null }
      { authToken ? <Search authToken={ authToken } trackList={ trackList } setTrackList={ setTrackList } /> : null }
      { trackList ? <Search_Results trackList={ trackList } /> : null }
    </div>
  )
}
      
export default Dashboard
