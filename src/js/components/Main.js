'use strict';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as firebase from 'firebase';
import { Navbar, Jumbotron, Button, Nav, NavItem, navInstance, NavDropdown, MenuItem, FormGroup, InputGroup, FormControl, DropdownButton, Col, ControlLabel } from 'react-bootstrap';
import { scroller } from 'react-scroll';
import { Divider, Image, List, Checkbox, Form, Input, Radio, Select, TextArea } from 'semantic-ui-react'
import { Autosize, Autocomplete, DropDown, Mask, DatePicker, Combobox } from "react-input-enhancements"
import ReactDOM from "react-dom"


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



  getInput() {
    return input;
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

  handleSubmitNP = (e) => {
    document.getElementById("newPatient").style.display = "none";
    document.getElementById("patientDataRecs").style.display = "block";
    scroller.scrollTo('patientDataRecs', {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -60
    })
  }

  scrollResults = (e) => {
    scroller.scrollTo('patientDataRecs', {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -60
    })
  }

  scrollShelterRadios = (e) => {
    scroller.scrollTo('radiosShelter', {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -60
    })
  }

  scrollPantryRadios = (e) => {
    scroller.scrollTo('radiosPantries', {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -60
    })
  }

  scrollPantries = (e) => {
    scroller.scrollTo('foodPantriesTitle', {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -60
    })
  }

  scrollHealthClinic = (e) => {
    scroller.scrollTo('healthClinicsTitle', {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -60
    })
  }

  scrollClinicRadios = (e) => {
    scroller.scrollTo('radiosHealthClinic', {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -60
    })
  }

  showNP = (e) => {
    console.log("inside show new");
    document.getElementById("newPatient").style.display = "block";
    document.getElementById("returningPatient").style.display = "none";
  }

  showRP = (e) => {
    console.log("inside show returning");
    document.getElementById("newPatient").style.display = "none";
    document.getElementById("returningPatient").style.display = "block";
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
    document.getElementById("patientDataRecs").style.display = "none";
    scroller.scrollTo('newPatient', {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -60
    })
  }

  printEntry = (e) => {
    console.log(e.target.value);
  }

  scrollRP = (e) => {
    console.log("hello");
    this.showRP();
    document.getElementById("patientDataRecs").style.display = "none";
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
    let input;


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
              <NavItem eventKey={1} onClick={this.scrollShelter} href="#">Shelters</NavItem>
              <NavItem eventKey={2} onClick={this.scrollHealthClinic} href="#">Health Clinics</NavItem>
              <NavItem eventKey={3} onClick={this.scrollPantries} href="#">Food Pantries</NavItem>
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
          <Form id="newPF">
            <Form.Group widths='equal'>
              <Form.Field control={Input} label='First name' placeholder='First name' />
              <Form.Field control={Input} label='Last name' placeholder='Last name' />
              <Form.Field control={Select} label='Gender' options={options} placeholder='Gender' />
            </Form.Group>
            <Form.Group style={{ padding: "15px" }}>
              <label>Needs: </label>
              <div style={{ fontSize: 14, paddingLeft: "15px", paddingTop: "18px", paddingBottom: "-10px" }}>
                <Form.Field control={Radio} label='Homeless Shelter' onClick={this.toggle} />

                <Form.Field control={Radio} label='Food Pantry' onClick={this.toggle} />

                <Form.Field control={Radio} label='Free Clinic' onClick={this.toggle} />
              </div>
              <div style={{ width: "47vw", marginLeft: "70px", paddingBottom: "30px" }}>
                <Form.Field control={TextArea} label='Family' placeholder="How many members are in your family unit and are there any special conditons that need to be met?" />
              </div>
            </Form.Group>
            <Form.Group>
              <Form.Field control={TextArea} label='Conditions' style={{ width: "47vw" }} placeholder="Enter any medical conditions you're experiencing" />
              <Form.Field control={TextArea} label='Medications' style={{ width: "47vw" }} placeholder='Enter any over or under the counter medications you are currently taking' />
            </Form.Group>
            <Form.Group>
              <Form.Field control={TextArea} label='Medical History' style={{ width: "47vw" }} placeholder="Enter your medical history " />
              <Form.Field control={TextArea} label='About' style={{ width: "47vw" }} placeholder='Tell us more about you...' />
            </Form.Group>
            <Form.Field control={Checkbox} label='I agree to the Terms and Conditions' />
            <Button bsStyle="primary" onClick={this.handleSubmitNP}>Submit</Button>
            {/* <Form.Field control={Button}>Submit</Form.Field> */}
          </Form>
        </div>

        <div id="patientDataRecs">
          <p id="welcomePatientTitle" style={{ fontSize: 40 }}>Welcome Noam Dorogoyer</p>
          <div>
            <List divided verticalAlign='middle'>
              <List.Item>
                <List.Content floated='right'>
                </List.Content>
                <Form id="Important">
                  <div>
                    <p style={{ fontSize: 20, paddingBottom: "10px", marginLeft: "25px", marginTop: "15px" }}>Recommended Care</p>
                  </div>
                  <Form.Group style={{ fontSize: 16, marginLeft: "15px" }}>
                    <Form.Field control={TextArea} label='Immediate Attention' style={{ width: "47vw" }} placeholder="Temp critical data" readOnly />
                    <Form.Field control={TextArea} label='Suggested Resources' style={{ width: "47vw" }} placeholder="Temp suggested resources" readOnly />
                  </Form.Group>
                </Form>
                <List.Content>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content floated='right'>
                </List.Content>
                <Form id="currentResources">
                  <div>
                    <p style={{ fontSize: 20, paddingBottom: "10px", marginLeft: "25px", marginTop: "15px" }}>Current Resources</p>
                  </div>
                  <Form.Group style={{ fontSize: 16, marginLeft: "15px" }}>
                    <Form.Field control={Input} label='Name' style={{ width: "20vw" }} placeholder="Name" readOnly />
                    <Form.Field control={Input} label='Type' style={{ width: "20vw" }} placeholder="Type" readOnly />
                    <Form.Field control={Input} label='Location' style={{ width: "54vw" }} placeholder="Location" readOnly />
                  </Form.Group>
                </Form>
                <List.Content>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content floated='right'>
                </List.Content>
                <Form id="medicalRecords">
                  <div>
                    <p style={{ fontSize: 20, paddingBottom: "10px", marginLeft: "25px", marginTop: "15px" }}>Medical Records</p>
                  </div>
                  <Form.Group style={{ fontSize: 16, marginLeft: "15px" }}>
                    <Form.Field control={TextArea} label='Conditions' style={{ width: "47vw" }} placeholder="Temp Active Health Conditions" readOnly />
                    <Form.Field control={TextArea} label='Medical History' style={{ width: "47vw" }} placeholder="Temp Medical Data" readOnly />
                  </Form.Group>
                  <Form.Group style={{ fontSize: 16, marginLeft: "15px" }}>
                    <Form.Field control={Input} label='Age' style={{ width: "20vw" }} placeholder="Age" readOnly />
                    <Form.Field control={Input} label='Gender' style={{ width: "20vw" }} placeholder="gender" readOnly />
                    <Form.Field control={Input} label='Medications' style={{ width: "54vw" }} placeholder="All Active Medicine" readOnly />
                  </Form.Group>
                </Form>
                <List.Content>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content floated='right'>
                </List.Content>
                <Form id="specialConditions">
                  <div>
                    <p style={{ fontSize: 20, paddingBottom: "10px", marginLeft: "25px", marginTop: "15px" }}>Special Accomodations</p>
                  </div>
                  <Form.Group style={{ fontSize: 16, marginLeft: "15px" }}>
                    <Form.Field control={TextArea} label='Family' style={{ width: "40vw" }} placeholder="All Present Family Members" readOnly />
                    <Form.Field control={TextArea} label='Personal Notes' style={{ width: "54vw" }} placeholder="Personal Notes/Requests" readOnly />
                  </Form.Group>
                  <Form.Group style={{ fontSize: 16, marginLeft: "15px" }}>
                    <Form.Field control={Input} label='Attendee Notes' style={{ width: "94vw" }} placeholder="Attendee Notes" readOnly />
                  </Form.Group>
                </Form>
                <List.Content>
                </List.Content>
              </List.Item>
            </List>
          </div>
        </div>

        <div id="returningPatient" >
          <p id="returningPatientTitle">Returning Patient Form</p>
          <Form>
            <Form.Group widths='equal'>
              <Form.Field control={Input} label='First name' placeholder='First name' onChange={this.printEntry} />
              <Form.Field control={Input} label='Last name' placeholder='Last name' />
              <Form.Field control={Select} label='Gender' options={options} placeholder='Gender' />
            </Form.Group>
            <Form.Field control={TextArea} label='About' placeholder='Reason for your visit...' />
          </Form>
        </div>



        <div id="shelters">
          <p id="sheltersTitle"> Shelters </p>

          <div >
            <FormGroup style={{ marginLeft: "6vw", marginBottom: "70px" }}>
              <Col xs={2} style={{ width: "44vw" }}>
                <p style={{ width: "6vw", fontSize: 16, marginLeft: "25px", marginTop: "10px" }}>Location</p>
                <Combobox
                  value={value}
                  options={['Apple', 'Banana', 'Orange', 'Manan', 'One Of These Is Not Like The Other']}
                  dropdownProps={{ style: { width: '100%' } }}
                  onSelect={this.handleSubmit}
                  autocomplete
                  id="locCombo"
                >
                  {(inputProps, otherProps, registerInput) =>
                    <FormControl id="locationCombo"
                      {...inputProps}
                      ref={c => registerInput(ReactDOM.findDOMNode(c))}
                      type='text'
                      placeholder='No Preference'
                    />
                  }
                </Combobox>


              </Col>
            </FormGroup>

          </div>

          <div >
            <FormGroup >
              <Col xs={2} style={{ width: "44vw", marginBottom: "70px" }}>
                <p style={{ width: "6vw", fontSize: 16, marginLeft: "25px", marginTop: "10px" }}>Benefits</p>
                <Combobox
                  value={value}
                  options={['Apple', 'Banana', 'Orange', 'Manan', 'One Of These Is Not Like The Other']}
                  dropdownProps={{ style: { width: '100%' } }}
                  onSelect={this.handleSubmit}
                  autocomplete
                  id="locCombo"
                >
                  {(inputProps, otherProps, registerInput) =>
                    <FormControl id="locationCombo"
                      {...inputProps}
                      ref={c => registerInput(ReactDOM.findDOMNode(c))}
                      type='text'
                      placeholder='No Preference'
                    />
                  }
                </Combobox>


              </Col>
            </FormGroup>

          </div>

          <div style={{ marginLeft: "6vw" }}>
            <FormGroup >
              <Col xs={2} style={{ width: "44vw" }}>
                <p style={{ width: "6vw", fontSize: 16, marginLeft: "25px", marginTop: "10px" }}>Restrictions</p>
                <Combobox
                  value={value}
                  options={['Apple', 'Banana', 'Orange', 'Manan', 'One Of These Is Not Like The Other']}
                  dropdownProps={{ style: { width: '100%' } }}
                  onSelect={this.handleSubmit}
                  autocomplete
                  id="locCombo"
                >
                  {(inputProps, otherProps, registerInput) =>
                    <FormControl id="locationCombo"
                      {...inputProps}
                      ref={c => registerInput(ReactDOM.findDOMNode(c))}
                      type='text'
                      placeholder='No Preference'
                    />
                  }
                </Combobox>


              </Col>
            </FormGroup>

          </div>

          <div style={{ marginBottom: "70px" }}>
            <FormGroup >
              <Col xs={2} style={{ width: "44vw" }}>
                <p style={{ width: "6vw", fontSize: 16, marginLeft: "25px", marginTop: "10px" }}>Type</p>
                <Combobox
                  value={value}
                  options={['Apple', 'Banana', 'Orange', 'Manan', 'One Of These Is Not Like The Other']}
                  dropdownProps={{ style: { width: '100%' } }}
                  onSelect={this.handleSubmit}
                  autocomplete
                  id="locCombo"
                >
                  {(inputProps, otherProps, registerInput) =>
                    <FormControl id="locationCombo"
                      {...inputProps}
                      ref={c => registerInput(ReactDOM.findDOMNode(c))}
                      type='text'
                      placeholder='No Preference'
                    />
                  }
                </Combobox>


              </Col>
            </FormGroup>

          </div>

          <div>
            <FormGroup id="radiosShelter" style={{ marginLeft: "6vw", marginTop: "30px", display: "inline-block" }}>
              <div style={{ display: "inline-block", fontSize: 14, paddingLeft: "15px", paddingTop: "30px", paddingBottom: "-10px" }}>
                <label style={{ display: "inline-block" }}>Medical Assistance </label>
                <div style={{ fontSize: 14, paddingLeft: "15px", paddingTop: "18px", paddingBottom: "-10px" }}>
                  <Form.Field control={Radio} label='Yes' onClick={this.toggle} />
                  <Form.Field control={Radio} label='No' onClick={this.toggle} />
                </div>
              </div>
              <div style={{ display: "inline-block", fontSize: 14, paddingLeft: "100px", paddingTop: "30px", paddingBottom: "-10px" }}>
                <label style={{ display: "inline-block" }}>Drug Rehabitilation </label>
                <div style={{ fontSize: 14, paddingLeft: "15px", paddingTop: "18px", paddingBottom: "-10px" }}>
                  <Form.Field control={Radio} label='Yes' onClick={this.toggle} />
                  <Form.Field control={Radio} label='No' onClick={this.toggle} />
                </div>
              </div>
              <div style={{ display: "inline-block", fontSize: 14, paddingLeft: "100px", paddingTop: "30px", paddingBottom: "-10px" }}>
                <label style={{ display: "inline-block" }}>Family Accomodation </label>
                <div style={{ fontSize: 14, paddingLeft: "15px", paddingTop: "18px", paddingBottom: "-10px" }}>
                  <Form.Field control={Radio} label='Yes' onClick={this.toggle} />
                  <Form.Field control={Radio} label='No' onClick={this.toggle} />
                </div>
              </div>

              <div style={{ marginBottom: "40px", display: "inline-block", marginLeft: "20px" }}>
                <Col xs={2} style={{ width: "44vw" }}>
                  <p style={{ width: "6vw", fontSize: 16, marginLeft: "25px", marginTop: "10px" }}>Services</p>
                  <Combobox
                    value={value}
                    options={['Food Pantry', 'Free Clinic', 'Homeless Shelter', 'Family Services']}
                    dropdownProps={{ style: { width: '100%' } }}
                    onSelect={this.handleSubmit}
                    autocomplete
                    id="locCombo"
                  >
                    {(inputProps, otherProps, registerInput) =>
                      <FormControl id="locationCombo"
                        {...inputProps}
                        ref={c => registerInput(ReactDOM.findDOMNode(c))}
                        type='text'
                        placeholder='No Preference'
                      />
                    }
                  </Combobox>


                </Col>

              </div>
            </FormGroup>
            <div>

            </div>
          </div>
          <FormGroup >
            <div >
              <p style={{ fontSize: 14, fontWeight: 700, marginLeft: "6vw", marginTop: "30px", display: "inline-block" }}>Your Resources</p>
              <Button bsStyle="primary" style={{ display: "inline-block", marginLeft: "850px" }} bsSize="lg" onClick={this.scrollShelterRadios}>Filter Shelters</Button>
              <Form.Field style={{ fontSize: 14, width: "50vw", marginLeft: "6vw", marginTop: "10px", height: "120px" }} control={TextArea} placeholder="Resources that best match your filter" readOnly />

            </div>
            <div >

            </div>
          </FormGroup>





        </div>

        <div id="healthClinics" style={{marginTop:"60px"}}>
          <p id="healthClinicsTitle"> Health Clinics </p>

          <div >
            <FormGroup style={{ marginLeft: "6vw", marginBottom: "70px" }}>
              <Col xs={2} style={{ width: "44vw" }}>
                <p style={{ width: "6vw", fontSize: 16, marginLeft: "25px", marginTop: "10px" }}>Location</p>
                <Combobox
                  value={value}
                  options={['Apple', 'Banana', 'Orange', 'Manan', 'One Of These Is Not Like The Other']}
                  dropdownProps={{ style: { width: '100%' } }}
                  onSelect={this.handleSubmit}
                  autocomplete
                  id="locCombo"
                >
                  {(inputProps, otherProps, registerInput) =>
                    <FormControl id="locationCombo"
                      {...inputProps}
                      ref={c => registerInput(ReactDOM.findDOMNode(c))}
                      type='text'
                      placeholder='No Preference'
                    />
                  }
                </Combobox>


              </Col>
            </FormGroup>

          </div>

          <div >
            <FormGroup >
              <Col xs={2} style={{ width: "44vw", marginBottom: "70px" }}>
                <p style={{ width: "6vw", fontSize: 16, marginLeft: "25px", marginTop: "10px" }}>Speciality</p>
                <Combobox
                  value={value}
                  options={['Apple', 'Banana', 'Orange', 'Manan', 'One Of These Is Not Like The Other']}
                  dropdownProps={{ style: { width: '100%' } }}
                  onSelect={this.handleSubmit}
                  autocomplete
                  id="locCombo"
                >
                  {(inputProps, otherProps, registerInput) =>
                    <FormControl id="locationCombo"
                      {...inputProps}
                      ref={c => registerInput(ReactDOM.findDOMNode(c))}
                      type='text'
                      placeholder='No Preference'
                    />
                  }
                </Combobox>


              </Col>
            </FormGroup>

          </div>

          <div style={{ marginLeft: "6vw" }}>
            <FormGroup >
              <Col xs={2} style={{ width: "44vw" }}>
                <p style={{ width: "6vw", fontSize: 16, marginLeft: "25px", marginTop: "10px" }}>Vaccines</p>
                <Combobox
                  value={value}
                  options={['Apple', 'Banana', 'Orange', 'Manan', 'One Of These Is Not Like The Other']}
                  dropdownProps={{ style: { width: '100%' } }}
                  onSelect={this.handleSubmit}
                  autocomplete
                  id="locCombo"
                >
                  {(inputProps, otherProps, registerInput) =>
                    <FormControl id="locationCombo"
                      {...inputProps}
                      ref={c => registerInput(ReactDOM.findDOMNode(c))}
                      type='text'
                      placeholder='No Preference'
                    />
                  }
                </Combobox>


              </Col>
            </FormGroup>

          </div>

          <div style={{ marginBottom: "70px" }}>
            <FormGroup >
              <Col xs={2} style={{ width: "44vw" }}>
                <p style={{ width: "6vw", fontSize: 16, marginLeft: "25px", marginTop: "10px" }}>Urgency</p>
                <Combobox
                  value={value}
                  options={['Apple', 'Banana', 'Orange', 'Manan', 'One Of These Is Not Like The Other']}
                  dropdownProps={{ style: { width: '100%' } }}
                  onSelect={this.handleSubmit}
                  autocomplete
                  id="locCombo"
                >
                  {(inputProps, otherProps, registerInput) =>
                    <FormControl id="locationCombo"
                      {...inputProps}
                      ref={c => registerInput(ReactDOM.findDOMNode(c))}
                      type='text'
                      placeholder='No Preference'
                    />
                  }
                </Combobox>


              </Col>
            </FormGroup>

          </div>

          <div>
            <FormGroup id="radiosHealthClinic" style={{ marginLeft: "6vw", marginTop: "30px", display: "inline-block" }}>
              <div style={{ display: "inline-block", fontSize: 14, paddingLeft: "15px", paddingTop: "30px", paddingBottom: "-10px" }}>
                <label style={{ display: "inline-block" }}>Sliding Scale Fee</label>
                <div style={{ fontSize: 14, paddingLeft: "15px", paddingTop: "18px", paddingBottom: "-10px" }}>
                  <Form.Field control={Radio} label='Yes' onClick={this.toggle} />
                  <Form.Field control={Radio} label='No' onClick={this.toggle} />
                </div>
              </div>
              <div style={{ display: "inline-block", fontSize: 14, paddingLeft: "140px", paddingTop: "30px", paddingBottom: "-10px" }}>
                <label style={{ display: "inline-block" }}>Insurance </label>
                <div style={{ fontSize: 14, paddingLeft: "15px", paddingTop: "18px", paddingBottom: "-10px" }}>
                  <Form.Field control={Radio} label='Yes' onClick={this.toggle} />
                  <Form.Field control={Radio} label='No' onClick={this.toggle} />
                </div>
              </div>
              <div style={{ display: "inline-block", fontSize: 14, paddingLeft: "140px", paddingTop: "30px", paddingBottom: "-10px" }}>
                <label style={{ display: "inline-block" }}>Family</label>
                <div style={{ fontSize: 14, paddingLeft: "15px", paddingTop: "18px", paddingBottom: "-10px" }}>
                  <Form.Field control={Radio} label='Yes' onClick={this.toggle} />
                  <Form.Field control={Radio} label='No' onClick={this.toggle} />
                </div>
              </div>

              <div style={{ marginBottom: "40px", display: "inline-block", marginLeft: "105px" }}>
                <Col xs={2} style={{ width: "44vw" }}>
                  <p style={{ width: "6vw", fontSize: 16, marginLeft: "25px", marginTop: "10px" }}>Services</p>
                  <Combobox
                    value={value}
                    options={['Food Pantry', 'Free Clinic', 'Homeless Shelter', 'Family Services']}
                    dropdownProps={{ style: { width: '100%' } }}
                    onSelect={this.handleSubmit}
                    autocomplete
                    id="locCombo"
                  >
                    {(inputProps, otherProps, registerInput) =>
                      <FormControl id="locationCombo"
                        {...inputProps}
                        ref={c => registerInput(ReactDOM.findDOMNode(c))}
                        type='text'
                        placeholder='No Preference'
                      />
                    }
                  </Combobox>


                </Col>

              </div>
            </FormGroup>
            <div>

            </div>
          </div>
          <FormGroup >
            <div >
              <p style={{ fontSize: 14, fontWeight: 700, marginLeft: "6vw", marginTop: "30px", display: "inline-block" }}>Your Resources</p>
              <Button bsStyle="primary" style={{ display: "inline-block", marginLeft: "850px" }} bsSize="lg" onClick={this.scrollClinicRadios}>Filter Clinics</Button>
              <Form.Field style={{ fontSize: 14, width: "50vw", marginLeft: "6vw", marginTop: "10px", height: "120px" }} control={TextArea} placeholder="Resources that best match your filter" readOnly />

            </div>
            <div >

            </div>
          </FormGroup>
        </div>

        <div id="foodPantries" style={{marginTop:"60px"}}>
          <p id="foodPantriesTitle"> Food Pantries </p>

          <div >
            <FormGroup style={{ marginLeft: "6vw", marginBottom: "70px" }}>
              <Col xs={2} style={{ width: "44vw" }}>
                <p style={{ width: "6vw", fontSize: 16, marginLeft: "25px", marginTop: "10px" }}>Location</p>
                <Combobox
                  value={value}
                  options={['Apple', 'Banana', 'Orange', 'Manan', 'One Of These Is Not Like The Other']}
                  dropdownProps={{ style: { width: '100%' } }}
                  onSelect={this.handleSubmit}
                  autocomplete
                  id="locCombo"
                >
                  {(inputProps, otherProps, registerInput) =>
                    <FormControl id="locationCombo"
                      {...inputProps}
                      ref={c => registerInput(ReactDOM.findDOMNode(c))}
                      type='text'
                      placeholder='No Preference'
                    />
                  }
                </Combobox>


              </Col>
            </FormGroup>

          </div>

          <div >
            <FormGroup >
              <Col xs={2} style={{ width: "44vw", marginBottom: "70px" }}>
                <p style={{ width: "6vw", fontSize: 16, marginLeft: "25px", marginTop: "10px" }}>Dietary</p>
                <Combobox
                  value={value}
                  options={['Apple', 'Banana', 'Orange', 'Manan', 'One Of These Is Not Like The Other']}
                  dropdownProps={{ style: { width: '100%' } }}
                  onSelect={this.handleSubmit}
                  autocomplete
                  id="locCombo"
                >
                  {(inputProps, otherProps, registerInput) =>
                    <FormControl id="locationCombo"
                      {...inputProps}
                      ref={c => registerInput(ReactDOM.findDOMNode(c))}
                      type='text'
                      placeholder='No Preference'
                    />
                  }
                </Combobox>


              </Col>
            </FormGroup>

          </div>

          <div style={{ marginLeft: "6vw" }}>
            <FormGroup >
              <Col xs={2} style={{ width: "44vw" }}>
                <p style={{ width: "6vw", fontSize: 16, marginLeft: "25px", marginTop: "10px" }}>Benefits</p>
                <Combobox
                  value={value}
                  options={['Apple', 'Banana', 'Orange', 'Manan', 'One Of These Is Not Like The Other']}
                  dropdownProps={{ style: { width: '100%' } }}
                  onSelect={this.handleSubmit}
                  autocomplete
                  id="locCombo"
                >
                  {(inputProps, otherProps, registerInput) =>
                    <FormControl id="locationCombo"
                      {...inputProps}
                      ref={c => registerInput(ReactDOM.findDOMNode(c))}
                      type='text'
                      placeholder='No Preference'
                    />
                  }
                </Combobox>


              </Col>
            </FormGroup>

          </div>

          <div style={{ marginBottom: "70px" }}>
            <FormGroup >
              <Col xs={2} style={{ width: "44vw" }}>
                <p style={{ width: "6vw", fontSize: 16, marginLeft: "25px", marginTop: "10px" }}>Hours</p>
                <Combobox
                  value={value}
                  options={['Apple', 'Banana', 'Orange', 'Manan', 'One Of These Is Not Like The Other']}
                  dropdownProps={{ style: { width: '100%' } }}
                  onSelect={this.handleSubmit}
                  autocomplete
                  id="locCombo"
                >
                  {(inputProps, otherProps, registerInput) =>
                    <FormControl id="locationCombo"
                      {...inputProps}
                      ref={c => registerInput(ReactDOM.findDOMNode(c))}
                      type='text'
                      placeholder='No Preference'
                    />
                  }
                </Combobox>


              </Col>
            </FormGroup>

          </div>

          <div>
            <FormGroup id="radiosPantries" style={{ marginLeft: "6vw", marginTop: "30px", display: "inline-block" }}>
              <div style={{ display: "inline-block", fontSize: 14, paddingLeft: "15px", paddingTop: "30px", paddingBottom: "-10px" }}>
                <label style={{ display: "inline-block" }}>Baltimore City Resident</label>
                <div style={{ fontSize: 14, paddingLeft: "15px", paddingTop: "18px", paddingBottom: "-10px" }}>
                  <Form.Field control={Radio} label='Yes' onClick={this.toggle} />
                  <Form.Field control={Radio} label='No' onClick={this.toggle} />
                </div>
              </div>
              <div style={{ display: "inline-block", fontSize: 14, paddingLeft: "115px", paddingTop: "30px", paddingBottom: "-10px" }}>
                <label style={{ display: "inline-block" }}>Clothing </label>
                <div style={{ fontSize: 14, paddingLeft: "15px", paddingTop: "18px", paddingBottom: "-10px" }}>
                  <Form.Field control={Radio} label='Yes' onClick={this.toggle} />
                  <Form.Field control={Radio} label='No' onClick={this.toggle} />
                </div>
              </div>
              <div style={{ display: "inline-block", fontSize: 14, paddingLeft: "115px", paddingTop: "30px", paddingBottom: "-10px" }}>
                <label style={{ display: "inline-block" }}>Financial Assistance</label>
                <div style={{ fontSize: 14, paddingLeft: "15px", paddingTop: "18px", paddingBottom: "-10px" }}>
                  <Form.Field control={Radio} label='Yes' onClick={this.toggle} />
                  <Form.Field control={Radio} label='No' onClick={this.toggle} />
                </div>
              </div>

              <div style={{ marginBottom: "40px", display: "inline-block", marginLeft: "35px" }}>
                <Col xs={2} style={{ width: "44vw" }}>
                  <p style={{ width: "6vw", fontSize: 16, marginLeft: "25px", marginTop: "10px" }}>Services</p>
                  <Combobox
                    value={value}
                    options={['Food Pantry', 'Free Clinic', 'Homeless Shelter', 'Family Services']}
                    dropdownProps={{ style: { width: '100%' } }}
                    onSelect={this.handleSubmit}
                    autocomplete
                    id="locCombo"
                  >
                    {(inputProps, otherProps, registerInput) =>
                      <FormControl id="locationCombo"
                        {...inputProps}
                        ref={c => registerInput(ReactDOM.findDOMNode(c))}
                        type='text'
                        placeholder='No Preference'
                      />
                    }
                  </Combobox>


                </Col>

              </div>
            </FormGroup>
            <div>

            </div>
          </div>
          <FormGroup >
            <div >
              <p style={{ fontSize: 14, fontWeight: 700, marginLeft: "6vw", marginTop: "30px", display: "inline-block" }}>Your Resources</p>
              <Button bsStyle="primary" style={{ display: "inline-block", marginLeft: "850px" }} bsSize="lg" onClick={this.scrollPantryRadios}>Filter Pantries</Button>
              <Form.Field style={{ fontSize: 14, width: "50vw", marginLeft: "6vw", marginTop: "10px", height: "120px" }} control={TextArea} placeholder="Resources that best match your filter" readOnly />

            </div>
            <div >

            </div>
          </FormGroup>
        </div>

        <div id="bottomFeeders" style={{marginTop:"275px"}}>
        <Divider clearing />
        <p style={{paddingBottom:"5px", paddingRight:"10px", float:"right"}}>Noam Dorogoyer/Manan Bhalodia 2017</p>
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

