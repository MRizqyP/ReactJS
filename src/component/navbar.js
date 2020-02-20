import React from "react";

export default function navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
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
          <li class="nav-item">
            <a class="nav-link" href="/post">
              Post <span class="sr-only"></span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Get
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Put
            </a>
          </li>
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
