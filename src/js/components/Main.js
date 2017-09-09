'use strict';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as firebase from 'firebase';
import { Navbar, Jumbotron, Button, Nav, NavItem, navInstance, NavDropdown, MenuItem, FormGroup, InputGroup, FormControl, DropdownButton, Col, ControlLabel } from 'react-bootstrap';
import { scroller } from 'react-scroll';
import { Checkbox, Form, Input, Radio, Select, TextArea } from 'semantic-ui-react'
// import Form from './Form';
// import MyForm from './form.class';
// import DevTools from 'mobx-react-form-devtools';
// import MobxReactForm from 'mobx-react-form';
// import validatorjs from 'validatorjs';

// const form = new MyForm();

// const plugins = { dvr: validatorjs };



// const fields = {
//   email: {
//     label: 'Email',
//     placeholder: 'Insert Email',
//     rules: 'required|email|string|between:5,25',
//   },
//   password: {
//     label: 'Password',
//     placeholder: 'Insert Password',
//     rules: 'required|string|between:5,25',
//   },
// };

// const hooks = {

//   onSuccess(form) {
//     alert('Form is valid! Send the request here.');
//     // get field values
//     console.log('Form Values!', form.values());
//   },

//   onError(form) {
//     // get all form errors
//     console.log('All form errors', form.errors());
//     // invalidate the form with a custom error message
//     form.invalidate('This is a generic error message!');
//   },

// };

// DevTools.register({ form });
// DevTools.select('form');


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


  handleChangeForm = (e, { value }) => this.setState({ value })

  handleChange(event) {
    this.setState({ name: event.target.value });
  }
  handleChange2(event) {
    this.setState({ conditions: event.target.value });
  }
  handleChange3(event) {
    this.setState({ medications: event.target.value });
  }

  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.name + " " + this.state.conditions + " " + this.state.medications);
    event.preventDefault();
  }

showNP = (e) => {
  console.log("inside show new");
  document.getElementById("newPatient").style.display="block";
  document.getElementById("returningPatient").style.display="none";
}

showRP = (e) => {
  console.log("inside show returning");
  document.getElementById("newPatient").style.display="none";
  document.getElementById("returningPatient").style.display="block";
}

  componentWillMount() {
    this.props.dispatch({ type: 'HELLO' });
  }

  handleHover = (e) => {
    this.style = { opacity: 1 };
  }

  scrollShelter = (e) => {
    scroller.scrollTo('shelters', {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -60
    })
  }

  scrollNP = (e) => {
    console.log("bye");
    this.showNP();
    scroller.scrollTo('newPatient', {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -60
    })
  }

  scrollRP = (e) => {
    console.log("hello");
    this.showRP();
    scroller.scrollTo('returningPatient', {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -60
    })
  }

  componentDidMount() {
    //   const rootRef = firebase.database().ref();
    //   const speedRef = rootRef.child('speed');
    //   speedRef.on('value', snap => {
    //     this.setState({
    //       speed: snap.val()
    //     });
    //   });
  }

  componentWillMount() {

  }




  render() {
    console.log(this.props.test)
    var Scroll = require('react-scroll');
    var Element = Scroll.Element;
    var scroller = Scroll.scroller;
    // const form = new MyForm();
    const options = [
      { key: 'm', text: 'Male', value: 'male' },
      { key: 'f', text: 'Female', value: 'female' },
    ]

    // const form = new MobxReactForm({ fields }, { plugins, hooks });
    // DevTools.register({ form });
    // DevTools.select('form');
    const { value } = this.state

    return (
      <div className="WebPage">
        <div id="menu">
          <Navbar id="navBarMenu" fixedTop={true} onMouseEnter={this.handleHover} style={{ opacity: 0.7 }} >
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
            <Button bsStyle="primary" bsSize="lg" onClick={this.scrollNP}>New Patient</Button>
            <Button bsStyle="success" bsSize="lg" onClick={this.scrollRP}>Returning</Button>
          </div>


        </div>

        <div id="newPatient">
          <p id="newPatientTitle">New Patient Form</p>
          <Form>
            <Form.Group widths='equal'>
              <Form.Field control={Input} label='First name' placeholder='First name' />
              <Form.Field control={Input} label='Last name' placeholder='Last name' />
              <Form.Field control={Select} label='Gender' options={options} placeholder='Gender' />
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.Field control={Input} label='Conditions' placeholder="Enter any medical conditions you're experiencing "/>
              <Form.Field control={Input} label='Medications' placeholder='Enter any over or under the counter medications you are currently taking' />
              <Form.Field control={Input} label='Medical History' placeholder="Enter your medical history "/>
            </Form.Group>
            <Form.Field control={TextArea} label='About' placeholder='Tell us more about you...' />
            <Form.Field control={Checkbox} label='I agree to the Terms and Conditions' />
            {/* <Form.Field control={Button}>Submit</Form.Field> */}
          </Form>
        </div>

        <div id="returningPatient" >
          <p id="returningPatientTitle">Returning Patient Form</p>
          <Form>
            <Form.Group widths='equal'>
              <Form.Field control={Input} label='First name' placeholder='First name' />
              <Form.Field control={Input} label='Last name' placeholder='Last name' />
              <Form.Field control={Select} label='Gender' options={options} placeholder='Gender' />
            </Form.Group>
            {/* <Form.Group inline>
              <label>Quantity</label>
              <Form.Field control={Radio} label='One' value='1' checked={value === '1'} onChange={this.handleChange} />
              <Form.Field control={Radio} label='Two' value='2' checked={value === '2'} onChange={this.handleChange} />
              <Form.Field control={Radio} label='Three' value='3' checked={value === '3'} onChange={this.handleChange} />
            </Form.Group> */}
            <Form.Field control={TextArea} label='About' placeholder='Reason for your visit...' />
            {/* <Form.Field control={Button}>Submit</Form.Field> */}
          </Form>
        </div>
        {/* <div>
          <DevTools.UI />
          <Form form={form} />
        </div> */}
        {/* <div>
          <MobxReactForm form={form} />
          </div> */}

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

