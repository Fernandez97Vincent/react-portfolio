import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';

function Carousel() {
    return (
      <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://puu.sh/JpZCj/066207bced.png" class="d-block w-100 h-100" alt="..."></img>
          </div>
          <div class="carousel-item">
            <img src="https://puu.sh/JpZCf/f533f76a0a.png" class="d-block w-100 h-100" alt="..."></img>
          </div>
          <div class="carousel-item">
            <img src="https://puu.sh/JpnQk/9842f69e8c.png" class="d-block w-100 h-100" alt="..."></img>
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