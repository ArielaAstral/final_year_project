import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}}`}>
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">Home</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link" to="/test">Test</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/about">About Us</Link>
                    </li>
                </ul>
                <div>
                  <label class="switch">
                    <input type="checkbox" onClick={props.toggleMode}/>
                    <span class="slider"></span>
                  </label>
                </div>
            </div>
        </div>
    </nav>
  )
};
