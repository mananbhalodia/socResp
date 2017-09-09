'use strict';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as firebase from 'firebase';
import { Navbar, Jumbotron, Button, Nav, NavItem, navInstance, NavDropdown, MenuItem, Form, FormGroup, InputGroup, FormControl, DropdownButton, Col, ControlLabel, Checkbox } from 'react-bootstrap';
import { scroller } from 'react-scroll';



class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      conditions: "",
      medications: ""

    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

   handleChange(event) {
    this.setState({name: event.target.value});
  }
  handleChange2(event) {
    this.setState({conditions: event.target.value});
  }
  handleChange3(event) {
    this.setState({medications: event.target.value});
  }

  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.name + " " + this.state.conditions + " " + this.state.medications);
    event.preventDefault();
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

  componentDidMount() {
    const rootRef = firebase.database().ref();
    const speedRef = rootRef.child('speed');
    speedRef.on('value', snap => {
      this.setState({
        speed: snap.val()
      });
    });
  }

  componentWillMount() {
  
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
            <Button bsStyle="primary" bsSize="lg">New Patient</Button>
            <Button bsStyle="success" bsSize="lg">Returning</Button>
          </div>


          <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <textarea value={this.state.name} onChange={this.handleChange} />
        </label>
        <label>
          Conditions:
          <textarea value={this.state.conditions} onChange={this.handleChange2} />
        </label>
        <label>
          Medications:
          <textarea value={this.state.medications} onChange={this.handleChange3} />
        </label>
        <input type="submit" value="Submit" />
      </form>

          
        </div>

        {/* <div>
          <Jumbotron>
            <h1>Give me your tired, your poor,...</h1>
            <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <p><Button bsStyle="primary">Learn more</Button></p>
          </Jumbotron>
        </div> */}

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

