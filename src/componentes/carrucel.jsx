import React from 'react'



export const Carrucel = () => {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src='../img/slider-1.jpg' className="d-block w-100" alt="productos con descuentos"/>
      </div>
      <div className="carousel-item">
        <img src='../img/slider-2.png' className="d-block w-100" alt="spiderman"/>
      </div>
      <div className="carousel-item">
        <img src='../img/slider-3.png' className="d-block w-100" alt="fifa 21"/>
      </div>
      <div className="carousel-item">
        <img src='../img/slider-4.png' className="d-block w-100" alt="call of duty"/>
      </div> 
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  )
}
