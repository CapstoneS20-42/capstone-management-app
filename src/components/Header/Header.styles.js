import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const OptionContainerStyles = css`
  padding: 0.5rem 1rem;
  cursor: pointer;
  &:hover {
    color: #d8d8d8;
  }
  color: #d8d8d8;
  font-size: 1em;
`;

export const HeaderContainer = styled.div`
  background-color: #3b3a3c;
  height: 25%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  margin-top: 1rem;
  margin-right: 1.5rem;
  justify-content: flex-end;
`;
export const OptionLink = styled(Link)`
  ${OptionContainerStyles}
`;

export const OptionDiv = styled.div`
  ${OptionContainerStyles}
`;