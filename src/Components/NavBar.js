import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


class NavBar extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-primary ">
          <div className="container-fluid">
            <a className="navbar-brand text-light" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse text-light" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active text-light" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/contact">Contact</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/feachers">Feachers</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/pricing">Pricing</Link>
                </li>
             </ul>

            </div>
          </div>
        </nav>
      </>
    )
  }
}

export default NavBar;