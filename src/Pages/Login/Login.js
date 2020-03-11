import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./Login.css";
const axios = require('axios').default;


class Login extends Component {
  constructor(props){
    super(props);

    this.state = {
      username: '',
      password: ''
    };

    this.onChangeNetID = this.onChangeNetID.bind(this)
    this.onChangepassword = this.onChangepassword.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  onChangeNetID(e) {
    this.setState({
        username: e.target.value
    });
}

onChangepassword(e) {
  this.setState({
      password: e.target.value
  });
}

  validateForm() {
    const {username,password} = this.state;
    return username.length > 0 && password.length > 0;
  }

  handleSubmit = async event => {
    event.preventDefault();

    const loginUser = {
      username: this.state.username,
      password: this.state.password
    }

    console.log(loginUser);
    if (!this.validateForm()) {
      alert("Login Failed");
    } else {

      axios.post('api/login', loginUser)
      .then(function(response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error.response);
      });

      // axios({
      //   method: 'post',
      //   url: '/api/login',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({data: loginUser})
      // }).then((resultAxios) => {
      //   console.log('Results!', resultAxios)
      // });
      // this.props.history.push("/");
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