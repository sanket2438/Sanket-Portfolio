import React from 'react'
import { NavLink } from 'react-router-dom'
import './styles.css';


const Navbar = () => {
  return (
    <>
          <nav className="navbar navbar-expand-lg bg-body-light mt-5">
            <div className="container Navbar-section">
              <NavLink className="navbar-brand color-shift" to="/">SANKET KAMBLE</NavLink>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item mx-1">
                   <NavLink className="nav-link" activeClassName="active" to="/">MyWork</NavLink>
                </li>
                <li className="nav-item mx-1">
                  <NavLink className="nav-link" activeClassName="active" to="/About">About</NavLink>
                </li>
                <li className="nav-item mx-1">
                  <a href="/pdf/Sanket-Kamble.pdf" download="Sanket_Kamble_Resume.pdf" className="btn btn-dark fw-bold p-2">
                    Download CV
                  </a>
                </li>

              </ul>
            </div>
          </div>
          </nav>
    </>
  )
}

export default Navbar