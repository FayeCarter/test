import React, { useEffect, useState }  from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";

import Join from "./components/Join.js";
import Dashboard from "./components/Dashboard.js";

const App = () => {

  return (
    <Router>
      <Route path="/" exact component={Join} />
      <Route path="/dashboard" exact component={Dashboard} />
    </Router>
  );
}

export default App;
