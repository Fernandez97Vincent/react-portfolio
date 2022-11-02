import React from 'react';

import './style.css'

function Header() {
    return (
        <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand" href="home.html">Welcome</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="home.html">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="about.html">About Me</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="projects.html">Projects</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        
    )
}

export default Header;