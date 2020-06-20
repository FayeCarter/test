import React from 'react'

import User from "./User.js";

const Dashboard = ({ authToken, setAuthToken }) => {

  return (
    <div className="Dashboard">
      <h1>Dash</h1>
      { authToken ? <User authToken={authToken}/> : null }
    </div>
  )
}
      
export default Dashboard
