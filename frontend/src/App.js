import React, { useEffect, useState }  from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";

import Join from "./components/Join.js";
import Dashboard from "./components/Dashboard.js";

const App = () => {

  const [authToken, setAuthToken] = useState("");
  const [userName, setUserName] = useState("");
  const [avatar, setAvatar] = useState("");

  return (
    <Router>
      <Route path="/" exact component={Join} />
      <Route 
        path="/dashboard" 
        exact 
        render={({ props }) => (
          <Dashboard {...props} />
      )}
      />
    </Router>
  );
}

export default App;
