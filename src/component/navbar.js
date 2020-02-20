import React from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

export default function navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <a class="navbar-brand" href="#">
        Perpustakaan
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <Link to="/get">
            <li class="nav-item">
              <a class="nav-link">
                Get <span class="sr-only"></span>
              </a>
            </li>
          </Link>
          <Link to="/post">
            <li class="nav-item">
              <a class="nav-link" href="#">
                Post
              </a>
            </li>
          </Link>
          <Link to="/getbyid">
            <li class="nav-item">
              <a class="nav-link" href="#">
                GetById
              </a>
            </li>
          </Link>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Delete
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Put
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
