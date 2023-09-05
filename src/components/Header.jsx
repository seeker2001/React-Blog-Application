import React from "react";
import { Link } from "react-router-dom";

/** Header component of the website **/
function Header() {
  return (
    <header className="header">
      <Link to="#" className="nav-app-title">
        <h4 style={{ fontWeight: 500 }}>Blog Application</h4>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog">Create</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
