import React from "react";
import { Link } from "react-router-dom";
import "../assets/style.css";

export default function navbar() {
  const token = JSON.parse(
    sessionStorage.getItem("persisted_state_hook:token")
  );

  function logout() {
    window.location.replace("/");
    sessionStorage.setItem("persisted_state_hook:token", "");
    sessionStorage.clear();
  }

  if (!token) {
    return (
      <header class="header_area">
        <div class="main-menu">
          <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <a class="navbar-brand">PERPUSTAKAAN</a>
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
                <Link to="/login">
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Login
                    </a>
                  </li>
                </Link>
                <Link to="/register">
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Register
                    </a>
                  </li>
                </Link>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    );
  } else if (token.token.Role === "ADMIN") {
    return (
      <header class="header_area">
        <div class="main-menu">
          <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <a class="navbar-brand">PERPUSTAKAAN</a>
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
              <div class="mr-auto"></div>
              <ul class="navbar-nav">
                <Link to="/get">
                  <li class="nav-item">
                    <a class="nav-link">
                      List Buku <span class="sr-only"></span>
                    </a>
                  </li>
                </Link>
                <Link to="/post">
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Tambah Buku
                    </a>
                  </li>
                </Link>
                <Link to="/getbyid">
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Cari Buku
                    </a>
                  </li>
                </Link>
                <Link to="/listuser">
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      List User
                    </a>
                  </li>
                </Link>
                <Link onClick={logout} to="/login">
                  <li class="nav-item">
                    <a class="nav-link">Logout</a>
                  </li>
                </Link>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    );
  } else if (token.token.Role === "USER") {
    return (
      <header class="header_area">
        <div class="main-menu">
          <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <a class="navbar-brand">PERPUSTAKAAN</a>
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
              <div class="mr-auto"></div>
              <ul class="navbar-nav">
                <Link to="/buku">
                  <li class="nav-item">
                    <a class="nav-link">Buku</a>
                  </li>
                </Link>
                <Link to="/listorder">
                  <li class="nav-item">
                    <a class="nav-link">List Order</a>
                  </li>
                </Link>

                <Link onClick={logout} to="/login">
                  <li class="nav-item">
                    <a class="nav-link">Logout</a>
                  </li>
                </Link>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}
