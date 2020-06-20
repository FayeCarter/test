import React, { useEffect, useState }  from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import cookie from 'react-cookies'

import Join from "./components/Join.js";
import Dashboard from "./components/Dashboard.js";

const App = () => {

  const [authToken, setAuthToken] = useState("");

  useEffect( () => {
    const token = cookie.load('access_token')
    setAuthToken(token)
  }, [])


  return (
    <Router>
      <Route path="/" exact component={Join} />
      <Route path="/dashboard" exact render={({ props }) => (
          <Dashboard {...props} authToken={authToken} setAuthToken={setAuthToken} />
        )}/>
    </Router>
  );
}

export default App;
