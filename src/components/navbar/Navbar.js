import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import Geobutton from './Geobutton';
import logo from '../../assets/frontier-logo.svg';
import logoNegative from '../../assets/frontier-logo-negative.svg';

class HeaderBar extends React.Component {
  state = {
    location: '(Change)'
  };

  render() {
    return (
      <main>
        <Navbar  inverse className="ftr-nav">
          <Navbar.Toggle />

          <Navbar.Collapse  className="level-one">
            <Nav>
              <NavItem eventKey={1} href="#">
                Residential
              </NavItem>
              <NavItem eventKey={2} href="#">
                Small Business
              </NavItem>
              <NavItem eventKey={3} href="#">
                Enterprise
              </NavItem>
              <NavItem eventKey={4} href="#">
                Wholesale
              </NavItem>
            </Nav>

          </Navbar.Collapse>

          <Navbar.Brand className="brand visible-xs ">
            <a href="#home">
              <img alt="Brand" src={logoNegative} />
            </a>
          </Navbar.Brand>

          <Nav pullRight className="right-menu">
            <Geobutton></Geobutton>
            <NavItem eventKey={6} href="#">
              <i className="fa fa-globe fa-lg"></i> <span className="hidden-xs">Español</span>
            </NavItem>
          </Nav>

        </Navbar>

        <Navbar className="brand-nav hidden-xs">
          <Navbar.Header >
            <Navbar.Brand >
              <a href="#home">
                <img alt="Brand" className="app-logo" src={logo} />
              </a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </main>
    )
  }
}


export default HeaderBar;
