import React from 'react';
import '../css/nav.css';
import {Link} from 'react-router-dom'

export const Navegacion = () => {
  return (
    <div>
        
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2">
            <div className="container-fluid">
              <h1 className="navbar text-warning" href="http://www.google.com">somos gamers</h1>
              <button className="navbar-toggler" type="button"
               data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon "></span>
              </button>
              <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link text-white px-4" to="/">inicio</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white px-4" to="/juegos">juegos</Link>
                  </li>
               
                  <li className="nav-item">
                    <Link className="nav-link text-white px-4" to="/email">contacto</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white px-4" to="/footer">nosotros</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        
    </div>
  )
}
