import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';

function Carousel() {
    return (
      <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <a href='/projects'><img src="https://puu.sh/JpZCj/066207bced.png" class="d-block w-100 h-50" alt="project one"></img></a>
          </div>
          <div class="carousel-item">
          <a href='/projects'><img src="https://puu.sh/JpZCf/f533f76a0a.png" class="d-block w-100 h-100" alt="project two"></img></a>
          </div>
          <div class="carousel-item">
          <a href='/projects'><img src="https://puu.sh/JpnQk/9842f69e8c.png" class="d-block w-100 h-100" alt="project three"></img></a>
          </div>
          <div class="carousel-item">
          <a href='/projects'><img src="https://puu.sh/JqB2C/5362bd35ab.png" class="d-block w-100 h-100" alt="project four"></img></a>
          </div>
          <div class="carousel-item">
          <a href='/projects'><img src="https://puu.sh/JqB5x/c20c49b98c.png" class="d-block w-100 h-100" alt="project five"></img></a>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    );
  }

export default Carousel;

