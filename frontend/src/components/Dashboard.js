import React, { useState }  from 'react'

import User from "./User.js";
import Search from "./Search.js";
import Search_Results from './Search_Results';

const Dashboard = ({ authToken }) => {

  const [songList, setSongList] = useState([])

  return (
    <div className="Dashboard">
      <h1>Dash</h1>
      { authToken ? <User authToken={ authToken } /> : null }
      { authToken ? <Search authToken={ authToken } songList={ songList } setSongList={ setSongList } /> : null }
      { songList ? <Search_Results songList={ songList } /> : null }
    </div>
  )
}
      
export default Dashboard
