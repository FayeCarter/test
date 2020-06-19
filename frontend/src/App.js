import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Join from "./components/Join.js";

const App = () => {
  // const [accessToken, setAccessToken] = useState("");
  // componentDidMount() {
  //   let parsed = queryString.parse(window.location.search);
  //   let accessToken = parsed.access_token;
  //   if (!accessToken)
  //     return;
  //   fetch('https://api.spotify.com/v1/me', {
  //     headers: {'Authorization': 'Bearer ' + accessToken}
  //   }).then(response => response.json())
  //   .then(data => this.setState({
  //     user: {
  //       name: data.display_name
  //     }
  //   }))
  // }
  return (
      <Router>
        <Route path="/" exact component={Join} />

      </Router>
  );
}

export default App;


