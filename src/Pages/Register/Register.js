import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import './Register.css';

export default function Register(props) {

  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [RUID, setRUID] = useState("");
  const [Email, setEmail] = useState("");

  function validateForm() {
    return FirstName.length > 0 && LastName.length > 0 && RUID.length > 0 && Email.length > 0;
  }

  async function handleSubmit(event) {
    if (!validateForm()) {
      alert("Register Failed");
    } else {
      props.history.push("/");
    }
  }

    return (
      <div className="Register">
      <h1 className="title">Register:</h1>
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="FirstName" bsSize="large">
          <FormLabel>First Name</FormLabel>
          <FormControl
            autoFocus
            type="FirstName"
            value={FirstName}
            onChange={e => setFirstName(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="LastName" bsSize="large">
          <FormLabel>Last Name</FormLabel>
          <FormControl
            value={LastName}
            type="LastName"
            onChange={e => setLastName(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="RUID" bsSize="large">
          <FormLabel>RUID</FormLabel>
          <FormControl
            type="RUID"
            value={RUID}
            onChange={e => setRUID(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="Email" bsSize="large">
          <FormLabel>Email</FormLabel>
          <FormControl
            value={Email}
            type="Email"
            onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
        <Button block bsSize="large" disabled={!validateForm()} type="submit">
          Register
        </Button>
      </form>
    </div>
    );
  }