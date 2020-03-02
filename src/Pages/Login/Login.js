import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./Login.css";
import { AuthContext } from "../../App";

export default function Login(props) {
  const { dispatch } = React.useContext(AuthContext);
  const [NetID, setNetID] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return NetID.length > 0 && password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (!validateForm()) {
      alert("Login Failed");
    } else {
      dispatch({
        type: "LOGIN",
      });
      props.history.push("/");
    }
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="NetID" bsSize="large">
          <FormLabel>NetID</FormLabel>
          <FormControl
            autoFocus
            type="NetID"
            value={NetID}
            onChange={e => setNetID(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <FormLabel>Password</FormLabel>
          <FormControl
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <Button block bsSize="large" disabled={!validateForm()} type="submit">
          Login
        </Button>
      </form>
    </div>
  );
}