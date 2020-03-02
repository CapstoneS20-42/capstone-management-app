import React from "react";
import RutgersLogo from "../../images/rutgerslogo.png";
import {
  HeaderContainer,
  OptionsContainer,
  OptionLink,
  OptionDiv,
} from "./Header.styles";
import "./Header.css"
import { AuthContext } from "../../App";

function Header() {
  const { state, dispatch } = React.useContext(AuthContext);
  return (
    <HeaderContainer>
      <img src={RutgersLogo} alt="logo" className="Logo" />
      <OptionsContainer>
        <OptionLink to="/">Home</OptionLink>
        {state.isAuthenticated ? (
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
        )}
      </OptionsContainer>
    </HeaderContainer>
  );
}

export default Header;