import React from "react";
import { Navbar as NavbarBs } from "react-bootstrap";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <div>
      <h1>Navbar</h1>
      {/* <NavbarBs className="bg-white shadow">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/registration">Registration</Link>
          </li>
        </ul>
      </NavbarBs> */}
    </div>
  );
}
