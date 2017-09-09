'use strict';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Navbar, Jumbotron, Button, Nav, NavItem, navInstance, NavDropdown, MenuItem, Form, FormGroup, InputGroup, FormControl, DropdownButton } from 'react-bootstrap';
import { scroller } from 'react-scroll'


class Main extends React.Component {
  constructor(props) {
    super(props);
  }


  componentWillMount() {
    this.props.dispatch({ type: 'HELLO' });
  }

  handleSelect = (e) => {
    scroller.scrollTo('shelters', {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -60
    })
  }

  render() {
    console.log(this.props.test)
    var Scroll = require('react-scroll');
    var Element = Scroll.Element;
    var scroller = Scroll.scroller;
    return (
      <div className="WebPage">
        <div id="menu">
          <Navbar fixedTop={true}>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#">Baltimore's Community Resources</a>
              </Navbar.Brand>
            </Navbar.Header>
            <Nav>
              <NavItem eventKey={1} onSelect={this.handleSelect} href="#">Shelters</NavItem>
              <NavItem eventKey={2} href="#">Health Clinics</NavItem>
              <NavItem eventKey={3} href="#">Food Pantries</NavItem>
              <NavDropdown eventKey={4} title="Other" id="basic-nav-dropdown">
                <MenuItem eventKey={4.1}>Family Planning</MenuItem>
                <MenuItem eventKey={4.2}>Financial Assistance</MenuItem>
                <MenuItem eventKey={4.3}>Volunteering</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={4.4}>Donations</MenuItem>
              </NavDropdown>
            </Nav>
          </Navbar>
        </div>

        <div id="Contents">
          <img src="/../../PathImage.png" id="path" />
          <div className='description'>
            <p className='description_content'><p id="aboutMe">Our Mission</p>
              We hope to bring Baltimore institutions to the people that need them. We want to connect our programs, to enable our people, and to create a community.
            </p>
          </div>
          <div id="shelters">
            <p id="shelterTitle">Shelters</p>
            <div>
              <DropdownButton bsStyle={"default"} title={"Shelter"} id={`dropdown-basic`}>
                <MenuItem eventKey="1">Action</MenuItem>
                <MenuItem eventKey="2">Another action</MenuItem>
                <MenuItem eventKey="3" active>Active Item</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey="4">Separated link</MenuItem>
              </DropdownButton>
            </div>
            <div>
              <DropdownButton bsStyle={"default"} title={"Location"} id={`dropdown-basic`}>
                <MenuItem eventKey="1">Action</MenuItem>
                <MenuItem eventKey="2">Another action</MenuItem>
                <MenuItem eventKey="3" active>Active Item</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey="4">Separated link</MenuItem>
              </DropdownButton>
            </div>
            <div>
              <DropdownButton bsStyle={"default"} title={"Benefits"} id={`dropdown-basic`}>
                <MenuItem eventKey="1">Action</MenuItem>
                <MenuItem eventKey="2">Another action</MenuItem>
                <MenuItem eventKey="3" active>Active Item</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey="4">Separated link</MenuItem>
              </DropdownButton>
            </div>
            <div>
              <DropdownButton bsStyle={"default"} title={"Occupancy"} id={`dropdown-basic`}>
                <MenuItem eventKey="1">Action</MenuItem>
                <MenuItem eventKey="2">Another action</MenuItem>
                <MenuItem eventKey="3" active>Active Item</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey="4">Separated link</MenuItem>
              </DropdownButton>
            </div>
            <div>
              <DropdownButton bsStyle={"default"} title={"Type"} id={`dropdown-basic`}>
                <MenuItem eventKey="1">Action</MenuItem>
                <MenuItem eventKey="2">Another action</MenuItem>
                <MenuItem eventKey="3" active>Active Item</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey="4">Separated link</MenuItem>
              </DropdownButton>
            </div>
          </div>
        </div>

        {/* <div>
          <Jumbotron>
            <h1>Give me your tired, your poor,...</h1>
            <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <p><Button bsStyle="primary">Learn more</Button></p>
          </Jumbotron>
        </div> */}

        <div>
          <p>Site Contents</p>
          <p>Site Contents</p>
          <p>Site Contents</p>
          <p>Site Contents</p>
          <p>Site Contents</p>
          <p>Site Contents</p>
          <p>Site Contents</p>
          <p>Site Contents</p>
          <p>Site Contents</p>
          <p>Site Contents</p>
          <p>Site Contents</p>
          <p>Site Contents</p>
          <p>Site Contents</p>
          <p>Site Contents</p>
          <p>Site Contents</p>
          <p>Site Contents</p>
          <p>Site Contents</p>
          <p>Site Contents</p>
          <p>Site Contents</p>
          <p>Site Contents</p>
          <p>Site Contents</p>
          <p>Site Contents</p>
          <p>Site Contents</p>
          <p>Site Contents</p>
          <p>Site Contents</p>
          <p>Site Contents</p>
          <p>Site Contents</p>
          <p>Site Contents</p>
          <p>Site Contents</p>
          <p>Site Contents</p>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    test: state.test
  }
}

export default withRouter(connect(mapStateToProps)(Main));

