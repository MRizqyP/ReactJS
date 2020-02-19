import React from "react";
import { Link } from "react-router-dom";

export default function navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">
        Navbar
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <Link class="nav-link" to="/">
              Home <span class="sr-only"></span>
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/about">
              <a>About</a>
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/profile">
              <a class="nav-link">Profile</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
