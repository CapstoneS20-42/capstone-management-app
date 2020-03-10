import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./Login.css";
const axios = require('axios').default;


class Login extends Component {
  constructor(props){
    super(props);

    this.state = {
      NetID: '',
      password: ''
    };

    this.onChangeNetID = this.onChangeNetID.bind(this)
    this.onChangepassword = this.onChangepassword.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  onChangeNetID(e) {
    this.setState({
        NetID: e.target.value
    });
}

onChangepassword(e) {
  this.setState({
      password: e.target.value
  });
}

  validateForm() {
    const {NetID,password} = this.state;
    return NetID.length > 0 && password.length > 0;
  }

  handleSubmit = async event => {
    event.preventDefault();

    const loginUser = {
      NetID: this.state.NetID,
      password: this.state.password
    }

    console.log(loginUser);
    if (!this.validateForm()) {
      alert("Login Failed");
    } else {
      axios({
        method: 'get',
        url: '/api/login',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({data: loginUser})
      }).then((resultAxios) => {
        console.log('Results!', resultAxios)
      });
      this.props.history.push("/");
    }
  }

  render(){
    const { NetID, password} = this.state;
  return (
    <div className="Login">
      <form onSubmit={this.handleSubmit}>
        <FormGroup controlId="NetID" bssize="large">
          <FormLabel>NetID</FormLabel>
          <FormControl
            autoFocus
            type="NetID"
            value={NetID}
            onChange={this.onChangeNetID}
          />
        </FormGroup>
        <FormGroup controlId="password" bssize="large">
          <FormLabel>Password</FormLabel>
          <FormControl
            value={password}
            onChange={this.onChangepassword}
            type="password"
          />
        </FormGroup>
        <Button block bssize="large" disabled={!this.validateForm()} type="submit">
          Login
        </Button>
      </form>
    </div>
  );
}
}

export default Login;