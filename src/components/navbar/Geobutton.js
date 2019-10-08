import React from 'react';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';


class Geobutton extends React.Component {
  state = {
    location: '(Change)'
  };

  render() {
    return (
      <NavDropdown eventKey={3} className="location" title={this.state.location} id="basic-nav-dropdown">
        <li><h4>What is your service zip code?</h4></li>
        <li>Enter your zip code to find the products we offer in your area.</li>
        <MenuItem header>
          <div>
            <label className="small">Zip Code</label>
            <form className="form-inline" >

              <input className="form-control" id="zipcode" type="text" placeholder="" />
              <button className="btn btn-primary">Check Availability</button>
            </form>
          </div>
        </MenuItem>

      </NavDropdown>
    )
  }
}


export default Geobutton;
