import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import './Register.css';
const axios = require('axios').default;

class Register extends Component {

  constructor() {

    super()

    this.state = {
      FirstName: '',
      LastName: '',
      RUID: '',
      email: ''
    };

    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeRUID = this.onChangeRUID.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeFirstName(e) {
    this.setState({
        FirstName: e.target.value
    });
}

onChangeLastName(e) {
  this.setState({
      LastName: e.target.value
  });
}

onChangeRUID(e) {
  this.setState({
      RUID: e.target.value
  });
}

onChangeEmail(e) {
  this.setState({
      email: e.target.value
  });
}

  validateForm() {
    const { FirstName, LastName, RUID, email } = this.state;
    return FirstName.length > 0 && LastName.length > 0 && RUID.length > 0 && email.length > 0;
  }

  // handleChange = (event) => {
  //   this.setState({
  //     [event.target.name] : event.target.value
  //   })
  // } 

  //handleSubmit = async event => {
   onSubmit = async e => {
    e.preventDefault();

    const registerUser = {
      FirstName: this.state.FirstName,
      LastName: this.state.LastName,
      RUID: this.state.RUID,
      email: this.state.email
    }
    console.log(registerUser);

    if (!this.validateForm()) {
      alert("Register Failed");
    } else {
      axios({
        method: 'post',
        url: '/api/register',
        data: registerUser
      }).then((resultAxios) => {
        console.log('Results!', resultAxios)
      });
     // props.history.push("/");
    }
  }

  render() {
  //  const { firstName, lastName, RUID, email } = this.state;
    return (
      <div className="Register">
      <h1 className="title">Register:</h1>
      <form onSubmit={this.onSubmit}>
        <FormGroup controlId="FirstName" bssize="large">
          <FormLabel>First Name</FormLabel>
          <FormControl
            autoFocus
            type="FirstName"
            value={this.state.FirstName}
            onChange={this.onChangeFirstName}
            required
          />
        </FormGroup>
        <FormGroup controlId="LastName" bssize="large">
          <FormLabel>Last Name</FormLabel>
          <FormControl
            value={this.state.LastName}
            type="LastName"
            onChange={this.onChangeLastName}
            required
          />
        </FormGroup>
        <FormGroup controlId="RUID" bsSize="large">
          <FormLabel>RUID</FormLabel>
          <FormControl
            type="RUID"
            value={this.state.RUID}
            onChange={this.onChangeRUID}
            required
          />
        </FormGroup>
        <FormGroup controlId="Email" bsSize="large">
          <FormLabel>Email</FormLabel>
          <FormControl
            value={this.state.Email}
            type="Email"
            onChange={this.onChangeEmail}
            required
          />
        </FormGroup>
        <Button block bssize="large" disabled={!this.validateForm()} type="submit">
          Register
        </Button>
      </form>
    </div>
    );
  }
}

export default Register;