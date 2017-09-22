'use strict';
/* import react and redix seetings */
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReactDOM from "react-dom"
/* import Firebase */
import * as firebase from 'firebase';
/* import bootstrap componenets here */
import { Navbar, Jumbotron, Button, Nav, NavItem, navInstance, NavDropdown, MenuItem, FormGroup, InputGroup, FormControl, DropdownButton, Col, ControlLabel } from 'react-bootstrap';
import { scroller } from 'react-scroll';
/* import Semantics UI components here */
import { Divider, Image, List, Checkbox, Form, Input, Radio, Select, TextArea } from 'semantic-ui-react'
/* import extra third party components */
import { Autosize, Autocomplete, DropDown, Mask, DatePicker, Combobox } from "react-input-enhancements"



class Main extends React.Component {
  constructor(props) {
  	/* initialize states that will be used throughout the application */
    super(props);
    this.state = {

    /* store initial for data that will be redisplayed from the new user page */
      name: "",
      conditions: "",
      medications: "",
      gender: "",
      medicalHistory: "",
      family: "",
      about: "",
      age: "",

    /* Data that is pulled from returning users database */
      copyData: "", 
      currentData: "", 
      immediateAttn: "", 
      clinicList: "",
      suggestedResources: "",
      suggesTitle: "",
      currentResources: [],

    /* initialize toggle buttons for new user form checkboxes */
      toggleHs: false,
      toggleFp: false,
      toggleFc: false

    };
    /* bind functions used in the new user form*/
    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
    this.handleChange4 = this.handleChange4.bind(this);
    this.handleChange5 = this.handleChange5.bind(this);
    this.handleChange6 = this.handleChange6.bind(this);
    this.handleChange7 = this.handleChange7.bind(this);

    /* bind functions used in the returning user form*/
    this.handleChangeRet1 = this.handleChangeRet1.bind(this);
    this.handleChangeRet2 = this.handleChangeRet2.bind(this);

    /* bind functions used in handle submit form for new and returning users form*/
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitRet = this.handleSubmitRet.bind(this);

    /* bind functions used in the new users checkboxes section of the form*/
    this.toggleHs = this.toggleHs.bind(this);
    this.toggleFp = this.toggleFp.bind(this);
    this.toggleFc = this.toggleFc.bind(this);
  }
  
/* Define Functions here */

  getInput() {
    return input;
  }
  /* Define functions used in the new user form*/
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
  handleChange4(event) {
    this.setState({ gender: event.target.value });
  }
  handleChange5(event) {
    this.setState({ medicalHistory: event.target.value });
  }
  handleChange6(event) {
    this.setState({ about: event.target.value });
  }
  handleChange7(event) {
    this.setState({ family: event.target.value });
  }

  /* Define functions used in the returning users form*/
  handleChangeRet1(event) {
    this.setState({ name: event.target.value });
  }
  handleChangeRet2(event) {
    this.setState({ about: event.target.value });
  }

  /* Define functions used in the returning user form for checkboxes */
  toggleHs(event) {
    this.setState({ toggleHs: !this.state.toggleHs });
  }
  toggleFp(event) {
    this.setState({ toggleFp: !this.state.toggleFp });
  }
  toggleFc(event) {
    this.setState({ toggleFc: !this.state.toggleFc });
  }

/* The handle submit function handles the new users sumbit form. 
	It stores the new user in the database using the appropriate 
	fields and updates the DOM to reflect the new data for the new page 
	that loads in the user's window. This function is resonponsible for
	parsing the data from the medical conditions input area and runing the 
	NLP to match the keywords in the database and show the medical clinincs
	that best match the input text*/

  handleSubmit(event) {
  	/* Update database*/
    event.preventDefault();
    const itemsRef = firebase.database().ref('users');
    const item = {
      name: this.state.name,
      conditions: this.state.conditions,
      medications: this.state.medications,
      gender: this.state.gender,
      medicalHistory: this.state.medicalHistory,
      family: this.state.family,
      about: this.state.about
    }
    
    itemsRef.push(item);
    
    /* Update DOM */
    this.forceUpdate();
    console.log("conditions::::  ", this.state.conditions);

    /* NLP */

    var clinics = this.state.clinicList;
    var conditionList = this.state.conditions.split(" ");
    console.log("conditions  ", conditionList);
    var index = "";
    var indexTitle ="";
    var count = 0;
    for(let clinic in clinics) {
      var clinicTags = clinics[clinic].tags;
      console.log("clinic tags  ", clinicTags);
      var countWords = this.compArrays(conditionList, clinicTags);
      if (countWords >= count) {
        count = countWords;
        index = clinics[clinic];
        indexTitle = clinic;
      }

    }
    this.setState({ suggestedResources : index });
    this.setState({ suggesTitle : indexTitle });
    console.log("condition:  ", clinics);
    console.log("count:  ", count);
    console.log("index:  ", index);
    console.log("index:  ", indexTitle);

    /* Display Form data */
    document.getElementById("newPatient").style.display = "none";
    document.getElementById("patientDataRecs").style.display = "block";
    scroller.scrollTo('patientDataRecs', {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -60
    })

  }

/* Returning user submit function that gets data corresponding to the user
 from the database and displays it in the loaded page from the DOM */

  handleSubmitRet(event) {
    event.preventDefault();
    let dataRep = this.state.copyData; 
      console.log("heyyyy: ", dataRep);
      for (let data in dataRep) {
        if (dataRep[data].name == this.state.name) {
          this.state.name = dataRep[data].name;
          this.state.conditions = dataRep[data].conditions;
          this.state.medications = dataRep[data].medications;
          this.state.family = dataRep[data].family;
          this.state.gender = dataRep[data].gender;
          this.state.medicalHistory = dataRep[data].medicalHistory;
          this.state.about = dataRep[data].about;
         console.log("LOGIN: ", this.state.name);
        }
      }

        this.forceUpdate();
         document.getElementById("returningPatient").style.display = "none";
    document.getElementById("patientDataRecs").style.display = "block";
    scroller.scrollTo('patientDataRecs', {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -60
    })
  }

/* Site functions that control functionality like auto scrolling  */
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

  /* Function to search array for matching strings to return number of matching items in an array */
searchStringInArray = (str, strArray) => {
    for (var j=0; j<strArray.length; j++) {
        if (strArray[j].match(str)) return 1;
    }
    return 0;
}

/* Function for compare to two arrays for matching strings using the searchStringInArray function NOTE: needs fixing. */
compArrays = (Arr1, Arr2) => {
  var count = 0;
  for (var j = 0; j<Arr1; j++) {
  count += searchStringInArray(Arr1[j], Arr2);
  }
  return count;
}
  // handleSubmitRP = (e) => {
  //   document.getElementById("returningPatient").style.display = "none";
  //   document.getElementById("patientDataRecs").style.display = "block";
  //   scroller.scrollTo('patientDataRecs', {
  //     duration: 1500,
  //     delay: 100,
  //     smooth: true,
  //     offset: -60
  //   })
  // }

/* hnadles displaying of display doc after submiting new user form */
  showNP = (e) => {
    console.log("inside show new");
    document.getElementById("newPatient").style.display = "block";
    document.getElementById("returningPatient").style.display = "none";
  }

/* hnadles displaying of display doc after submiting returning user form */
  showRP = (e) => {
    console.log("inside show returning");
    document.getElementById("newPatient").style.display = "none";
    document.getElementById("returningPatient").style.display = "block";
  }

  // componentWillMount() {
  //   this.props.dispatch({ type: 'HELLO' });
  // }

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


/* handles scrolling of web page as sbmit is clicked, clears states of any data since 
	form is already submited to the database */

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
    this.setState({
      name: '',
      conditions: '',
      medications: '',
      gender: '',
      medicalHistory: '',
      family: '',
      about: ''
    })
  }

  printEntry = (e) => {
    console.log(e.target.value);
  }

  /* handles scrolling of web page as sbmit is clicked, clears states of any data since 
	form is already submited to the database */

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
    this.setState({
      name: '',
      conditions: '',
      medications: '',
      gender: '',
      medicalHistory: '',
      family: '',
      about: ''
    })
  }

/* Gets data from the database before DOM is displayed */
  componentDidMount() {
      const rootRef = firebase.database().ref();
      const speedRef = rootRef.child('users');
      const tagRef = rootRef.child('clinics');
      tagRef.on('value', snap =>{
        let clinics = snap.val();
        this.state.clinicList = clinics;

      });
      speedRef.on('value', snap => {

        let items = snap.val();
        this.state.copyData = items;
        console.log("USERSCOPY: ", this.state.name);
        for (let item in items) {
          if (this.state.name == items[item].name) {
            this.state.currentData = items[item]
          }
        }
        this.forceUpdate();
  
      });


  }




  render() {
    console.log("render: ", this.state.currentData.gender)
    var genderLive = this.state.currentData.gender;
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
	//{ UI elements like headers and large picture fluid containers }
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

   		{/* NEW PATIENT form handling input and submitions */}

        <div id="newPatient">
          <p id="newPatientTitle">New Patient Form</p>
          <Form id="newPF">
            <Form.Group widths='equal'>
              <Form.Field control={Input} label='Full name' placeholder='Full name' onChange={this.handleChange} />
              <Form.Field control={Input} label='Gender' placeholder='Gender' onChange={this.handleChange4} />
            
            </Form.Group>
            <Form.Group style={{ padding: "15px" }}>
              <label>Needs: </label>
              <div style={{ fontSize: 14, paddingLeft: "15px", paddingTop: "18px", paddingBottom: "-10px" }}>
              <Checkbox label={<label>Homeless Shelter</label>} onChange={this.toggleHs}/>
              <Checkbox label={<label>Food Pantry</label>} onChange={this.toggleFp}/>
              <Checkbox label={<label>Free Clinics</label>} onChange={this.toggleFc}/>
              </div>
              <div style={{ width: "47vw", marginLeft: "70px", paddingBottom: "30px" }}>
                <Form.Field control={TextArea} label='Family' placeholder="How many members are in your family unit and are there any special conditons that need to be met?" onChange={this.handleChange7}/>
              </div>
            </Form.Group>
            <Form.Group>
              <Form.Field control={TextArea} label='Conditions' style={{ width: "47vw" }} placeholder="Enter any medical conditions you're experiencing" onChange={this.handleChange2}/>
              <Form.Field control={TextArea} label='Medications' style={{ width: "47vw" }} placeholder='Enter any over or under the counter medications you are currently taking' onChange={this.handleChange3} />
            </Form.Group>
            <Form.Group>
              <Form.Field control={TextArea} label='Medical History' style={{ width: "47vw" }} placeholder="Enter your medical history " onChange={this.handleChange5}/>
              <Form.Field control={TextArea} label='About' style={{ width: "47vw" }} placeholder='Tell us more about you...' onChange={this.handleChange6} />
            </Form.Group>
            <Form.Field control={Checkbox} label='I agree to the Terms and Conditions' />
            <Button bsStyle="primary" onClick={this.handleSubmit}>Submit</Button>
            {/* <Form.Field control={Button}>Submit</Form.Field> */}
          </Form>
        </div>

        {/* OUTPUT of patient data, displays all patient records and suggested medical clinics based on conditions */}

        <div id="patientDataRecs">
          <p id="welcomePatientTitle" style={{ fontSize: 40 }}>Welcome {this.state.name}</p>
          <div>
            <List divided verticalAlign='middle'>
              <List.Item>
                <List.Content floated='right'>
                </List.Content>
                <Form id="Important">
                  <div>
                    <p style={{ fontSize: 20, paddingBottom: "10px", marginLeft: "25px", marginTop: "15px" }}>Recommended Care</p>
                  </div>
                  <Form.Group style={{fontSize:16, marginLeft:"15px"}}>
                    <Form.Field control={TextArea} label='Immediate Attention' style={{ width: "47vw" }} placeholder="Immediate Attention" value={this.state.immediateAttn} readOnly />
                    <Form.Field control={TextArea} label='Suggested Resources' style={{ width: "47vw" }} placeholder="Temp suggested resources" value={this.state.suggesTitle + " - " + this.state.suggestedResources.address + "  " + this.state.suggestedResources.phone} readOnly />
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
                  <Form.Group style={{fontSize:16, marginLeft:"15px"}}>
                    <Form.Field control={TextArea} label='Conditions' style={{ width: "47vw" }} placeholder="Temp Active Health Conditions" value={this.state.conditions} readOnly />
                    <Form.Field control={TextArea} label='Medical History' style={{ width: "47vw" }} placeholder="Temp Medical Data" value={this.state.medicalHistory} readOnly />
                    </Form.Group>
                    <Form.Group style={{fontSize:16, marginLeft:"15px"}}>
                    <Form.Field control={Input} label='Age' style={{ width: "20vw" }} placeholder="Age" value={this.state.age} readOnly />
                    <Form.Field control={Input} label='Gender' style={{ width: "20vw" }} placeholder="gender" value={this.state.gender} readOnly />
                    <Form.Field control={Input} label='Medications' style={{ width: "54vw" }} placeholder="All Active Medicine" value={this.state.medications} readOnly />
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
                  <Form.Group style={{fontSize:16, marginLeft:"15px"}}>
                    <Form.Field control={TextArea} label='Family' style={{ width: "40vw" }} placeholder="All Present Family Members" value={this.state.family} readOnly />
                    <Form.Field control={TextArea} label='Personal Notes' style={{ width: "54vw" }} placeholder="Personal Notes/Requests" value={this.state.about} readOnly />
                    </Form.Group>
                    <Form.Group style={{fontSize:16, marginLeft:"15px"}}>
                    <Form.Field control={Input} label='Attendee Notes' style={{ width: "94vw" }} placeholder="Attendee Notes" readOnly />
                  </Form.Group>
                </Form>
                <List.Content>
                </List.Content>
              </List.Item>
            </List>
          </div>
        </div>

    {/* Returning Patient form submit */}

        <div id="returningPatient" >
          <p id="returningPatientTitle">Returning Patient Form</p>
          <Form>
            <Form.Group widths='equal'>      
              <Form.Field control={Input} label='Full name' placeholder='Full name' onChange={this.handleChangeRet1}/>
              
              
            </Form.Group>
            {/* <Form.Group inline>
              <label>Quantity</label>
              <Form.Field control={Radio} label='One' value='1' checked={value === '1'} onChange={} />
              <Form.Field control={Radio} label='Two' value='2' checked={value === '2'} onChange={} />
              <Form.Field control={Radio} label='Three' value='3' checked={value === '3'} onChange={} />
            </Form.Group> */}
            {/*<Form.Field control={TextArea} label='About' placeholder='Reason for your visit...' onChange={this.handleChangeRet2}/>*/}
            <Button bsStyle="primary" onClick={this.handleSubmitRet}>Submit</Button>
          </Form>
        </div>

    {/* FILTER FORMS UNDER CONSTRUCTION */}

        <div id="shelters">
          <p id="sheltersTitle"> Shelters </p>

          <div >
            <FormGroup style={{ marginLeft: "6vw", marginBottom: "70px" }}>
              <Col xs={2} style={{ width: "44vw" }}>
                <p style={{ width: "6vw", fontSize: 16, marginLeft: "25px", marginTop: "10px" }}>Location</p>
                <Combobox
                  value={value}
                  options={['North Baltimore', 'West Baltimore', 'East Baltimore', 'SouthEast Baltimore', 'South Baltimore', "Midtown", "Downtown", "Inner Harbor", "Fells Point"]}
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
                  options={['Family', 'Meals', 'Programs', 'Counseling', 'Mental-Illness', "disability", "Intensive-Care", "Medical Screenings", "Physical", "education", "Health", "Services", "Legal","GED", "Financial Assistance", "Clothing","shower"]}
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
                  options={['Men', 'Women', 'Adults', 'Children', 'Family', "Women & Children", "No Drug Abuse", "Temporary", "Elderly", "Transient", "Single"]}
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
                  options={['Emergency', 'Day', 'Overnight', 'Temporary', 'Permanent', "Week", "Month", "Year", "Meal", "Family"]}
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
                  options={['North Baltimore', 'West Baltimore', 'East Baltimore', 'SouthEast Baltimore', 'South Baltimore', "Midtown", "Downtown", "Inner Harbor", "Fells Point"]}
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
                  options={['Family', 'Pediatric', 'Internal Medicine', 'Nephrology', 'gynecology', "Breast Cancer Screning", "Dermatology", "Diabtic Care", "Endocrinology", "Neurology", "Orthapedics", "Opthapology", "Optometry", "Podietry", "Nutrional Counseling", "pulmonology", "Dental"]}
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
                  options={['Hepatitis A', 'Hepatitis B', 'Herpes Zoster', 'Human Papillomavirus', 'Influenza', "Measles", "Mumps", "Rubella", "Meningococcal", "Pneumococcal", "Tetanus", "Diphtheria", "Pertussis", "Varicella"]}
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
                  options={['Hour', 'Today', 'Tomorrow', 'Few Days', 'Week', "Month"]}
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
                  options={['North Baltimore', 'West Baltimore', 'East Baltimore', 'SouthEast Baltimore', 'South Baltimore', "Midtown", "Downtown", "Inner Harbor", "Fells Point"]}
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
                  options={['Vegeterian', 'Vegan', 'Gluten-Free', 'Nut-Allergy', 'Lactose-Intolerance',"Kosher"]}
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
                  options={['Fresh Groceries', 'Garden', 'Soup-Kitchen', 'Pantry', 'Financial Assistance', "Clothing", "Medical Screening", "Education", "Walk-in", "Hot-Meal"]}
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
                  options={['5-8AM', '8AM-12PM', '12-4PM', '4-8PM', '8-12PM', "Other"]}
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

