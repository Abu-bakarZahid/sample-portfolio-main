import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

import { Link } from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const updatePageToDisplay = (value) => {
    setActiveLink(value);

  }


  return (
      <Navbar expand="md" >
        <Container>
          <Navbar.Brand>
            <Link to="/">
            <button className="nav-text-heading" onClick={() => updatePageToDisplay('Home')}>abubakarzahid.</button>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link to="/" className={activeLink === 'Home' ? 'active navbar-link' : 'navbar-link'} onClick={() => updatePageToDisplay('Home')}>Home</Link>
              <Link to="/favourite-personality" className={activeLink === 'FavouritePersonality' ? 'active navbar-link' : 'navbar-link'} onClick={() => updatePageToDisplay('FavouritePersonality')}>Personality</Link>
              <Link to="/favourite-spots" className={activeLink === 'FavouriteSpots' ? 'active navbar-link' : 'navbar-link'} onClick={() => updatePageToDisplay('FavouriteSpots')}>Spots</Link>
              <Link to="/favourite-cities" className={activeLink === 'FavouriteCities' ? 'active navbar-link' : 'navbar-link'} onClick={() => updatePageToDisplay('FavouriteCities')}>Cities</Link>
            </Nav>
            <div className="navbar-text">
              <Link to="/contact" onClick={() => updatePageToDisplay('Contact')}>
                <button >Let's Connect</button>
              </Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}
