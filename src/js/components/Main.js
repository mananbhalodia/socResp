'use strict';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as firebase from 'firebase';
import { Navbar, Jumbotron, Button, Nav, NavItem, navInstance, NavDropdown, MenuItem, FormGroup, InputGroup, FormControl, DropdownButton, Col, ControlLabel } from 'react-bootstrap';
import { scroller } from 'react-scroll';

// import { Checkbox, Form, Input, Radio, Select, TextArea } from 'semantic-ui-react'

import { Image, List, Checkbox, Form, Input, Radio, Select, TextArea } from 'semantic-ui-react'
// import Form from './Form';
// import MyForm from './form.class';
// import DevTools from 'mobx-react-form-devtools';
// import MobxReactForm from 'mobx-react-form';
// import validatorjs from 'validatorjs';



class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      conditions: "",
      medications: "",
      gender: "",
      medicalHistory: "",
      family: "",
      about: "",
      copyData: "", 
      currentData: "", 
      immediateAttn: "", 
      clinicList: "",
      suggestedResources: [],
      currentResources: [],
      age: "",
      toggleHs: false,
      toggleFp: false,
      toggleFc: false

    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
    this.handleChange4 = this.handleChange4.bind(this);
    this.handleChange5 = this.handleChange5.bind(this);
    this.handleChange6 = this.handleChange6.bind(this);
    this.handleChange7 = this.handleChange7.bind(this);
    this.handleChangeRet1 = this.handleChangeRet1.bind(this);
    this.handleChangeRet2 = this.handleChangeRet2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitRet = this.handleSubmitRet.bind(this);
    this.toggleHs = this.toggleHs.bind(this);
    this.toggleFp = this.toggleFp.bind(this);
    this.toggleFc = this.toggleFc.bind(this);
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
  handleChangeRet1(event) {
    this.setState({ name: event.target.value });
  }
  handleChangeRet2(event) {
    this.setState({ about: event.target.value });
  }
  toggleHs(event) {
    this.setState({ toggleHs: !this.state.toggleHs });
  }
  toggleFp(event) {
    this.setState({ toggleFp: !this.state.toggleFp });
  }
  toggleFc(event) {
    this.setState({ toggleFc: !this.state.toggleFc });
  }

  handleSubmit(event) {
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
    
    this.forceUpdate();
    console.log("conditions::::  ", this.state.conditions);

    var clinics = this.state.clinicList;
    var conditionList = this.state.conditions.split(" ");
    console.log("conditions  ", conditionList);
    for(let clinic in clinics) {
      var clinicTags = clinics[clinic].tags;
      console.log("clinic tags  ", clinicTags);
    }
    console.log("condition:  ", clinics);

    document.getElementById("newPatient").style.display = "none";
    document.getElementById("patientDataRecs").style.display = "block";
    scroller.scrollTo('patientDataRecs', {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -60
    })

  }
searchStringInArray (str, strArray) {
    for (var j=0; j<strArray.length; j++) {
        if (strArray[j].match(str)) return 1;
    }
    return 0;
}

compArrays (Arr1, Arr2) {
  var count = 0;
  for (var j = 0; j<Arr1; j++) {
  count += searchStringInArray(Arr1[j],Arr2);
  }
  return count;
}
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

        <div id="patientDataRecs">
          <p id="welcomePatientTitle" style={{ fontSize: 40 }}>Welcome {this.state.name}</p>
          <div>
            <List divided verticalAlign='middle'>
              <List.Item>
                <List.Content floated='right'>
                </List.Content>
                <Form id="Important">
                  <div>
                    <p style={{fontSize:20, paddingBottom:"10px", marginLeft:"25px", marginTop:"15px"}}>Recommended Care</p>
                  </div>
                  <Form.Group style={{fontSize:16, marginLeft:"15px"}}>
                    <Form.Field control={TextArea} label='Immediate Attention' style={{ width: "47vw" }} placeholder="Immediate Attention" value={this.state.immediateAttn} readOnly />
                    <Form.Field control={TextArea} label='Suggested Resources' style={{ width: "47vw" }} placeholder="Temp suggested resources" value={this.state.suggestedResources} readOnly />
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
                    <p style={{fontSize:20, paddingBottom:"10px", marginLeft:"25px", marginTop:"15px"}}>Current Resources</p>
                  </div>
                  <Form.Group style={{fontSize:16, marginLeft:"15px"}}>
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
                    <p style={{fontSize:20, paddingBottom:"10px", marginLeft:"25px", marginTop:"15px"}}>Medical Records</p>
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
                    <p style={{fontSize:20, paddingBottom:"10px", marginLeft:"25px", marginTop:"15px"}}>Special Accomodations</p>
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



        <div id="shelters">
          <p id="sheltersTitle"> Shelters </p>

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

