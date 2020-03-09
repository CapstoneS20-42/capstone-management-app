import React, {Component} from "react";
import RutgersLogo from "../../images/rutgerslogo.png";
import {
  HeaderContainer,
  OptionsContainer,
  OptionLink,
  OptionDiv,
} from "./Header.styles";
import "./Header.css"

class Header extends Component {
  render(){
  return (
    <HeaderContainer>
      <img src={RutgersLogo} alt="logo" className="Logo" />
      <OptionsContainer>
        <OptionLink to="/">Home</OptionLink>
        {/* {state.isAuthenticated ? (
          <OptionDiv
            onClick={() =>
              dispatch({
                type: "LOGOUT",
              })
            }>
            Logout
          </OptionDiv>
        ) : (
          <OptionDiv>
            <OptionLink to="/register">Register</OptionLink>
            <OptionLink to="/login">Login</OptionLink>
          </OptionDiv>
        )} */}
      </OptionsContainer>
    </HeaderContainer>
  );
}
}

export default Header;