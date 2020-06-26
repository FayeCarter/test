import React, { useState }  from 'react'
import User from "./User.js";

const NavBar = ({ authToken }) => {

  return (
    <div className="NavBar">
      { authToken ? <User authToken={ authToken } /> : null }
    </div>
  )
}
      
export default NavBar
