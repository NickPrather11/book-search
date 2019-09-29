import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
      <a className="navbar-brand" href="/search">
        Search Books
      </a>
      <h1 className="text-light">|</h1>
      <a className="navbar-brand" href="/saved">
        My Books
      </a>
    </nav>
  );
}

export default Nav;
