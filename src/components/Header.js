import React from "react";
import logo from "../logo.png";

export default function Header() {
  return (
    <>
      <div className="container">
        <nav class="navbar navbar-expand-lg">
          <div class="container-fluid d-flex">
            <div className="align-items-center">
              <a class="" href="#" className="text-decoration-none">
                <img src={logo} className="" width={50}></img>
              </a>
              <span className="fs-4 fw-bold">Beyond</span>
            </div>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="custom-toggler-icon"></span>
            </button>
            <div
              class="collapse navbar-collapse justify-content-end"
              id="navbarNav"
            >
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="#home">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#about">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#services">
                    Services
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
