import React from 'react';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';

class NavJustified extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeKey: 0 }
  }

  handleSelect(selectedKey) {
    this.setState({activeKey: selectedKey});
  }

  navItems = this.props.services.map(({id, title}, index) => {
    return (
      <NavItem
        eventKey={index}
        key={`key${id}`}
        href={`#${id}`}
        className={id}
        >
        {title}
      </NavItem>
    )
  });

  render() {
    return (
      <nav className="support-nav">
        <div className="container">
          <Nav
            bsStyle="tabs"
            justified
            activeKey={this.state.activeKey}
            onSelect={key => this.handleSelect(key)}
          >
            {this.navItems}
          </Nav>
        </div>
      </nav>
    );
  }
}

export default NavJustified;
