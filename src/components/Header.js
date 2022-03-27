import React from 'react'

function Header() {
  return (
    <header id="header" className="d-flex align-items-center">
    <div className="container d-flex justify-content-between">

      <div id="logo">
        <h1><a href="index.html">R<span>global</span></a></h1>       
      </div>

      <nav id="navbar" className="navbar">
        <ul>
          <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
          <li><a className="nav-link scrollto" href="#about">About</a></li>
          <li><a className="nav-link scrollto" href="#services">Services</a></li>
          <li><a className="nav-link scrollto " href="#portfolio">Portfolio</a></li>
            <li><a className="nav-link scrollto" href="#team">Team</a></li>
            <li><a className="nav-link scrollto" href="#contact">Contact</a></li><br/><br></br>
          <li className="dropdown"><a href="#"><span>My Account</span> <i className="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="#">Login</a></li>
              <li><a href="#">Register</a></li>
            </ul>
          </li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>
    </div>
    </header>
  )
}

export default Header
