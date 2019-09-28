import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Books from "./pages/Books";
import Search from "./pages/Search";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Route exact path="/" component={Books} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/saved" component={Books} />
      </div>
    </Router>
  );
}

export default App;
