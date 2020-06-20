import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Join from "./components/Join.js";
import User from "./components/User.js";

const App = () => {

  return (
    <Router>
      <Route path="/" exact component={Join} />
      <Route 
        path="/user" 
        exact 
        render={({ props }) => (
          <User {...props} />
      )}
      />
    </Router>
  );
}

export default App;
