import React, { Component } from 'react';
import  {Link}  from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary ">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">NewsMonkey</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                
                <li className="nav-item">
                  <Link className="nav-link" to="/health">Health</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/lifestyle">Lifestyle</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/world">World</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/politics">Politics</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/science">Science</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sports">Sports</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/technology">Technology</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/tourism">Tourism</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/other">Other</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
