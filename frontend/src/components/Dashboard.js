import React from 'react'

import User from "./User.js";
import Search from "./Search.js";

const Dashboard = ({ authToken, setAuthToken }) => {

  return (
    <div className="Dashboard">
      <h1>Dash</h1>
      { authToken ? <User authToken={authToken}/> : null }
      { authToken ? <Search authToken={authToken}/> : null }
    </div>
  )
}
      
export default Dashboard
