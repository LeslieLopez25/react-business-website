import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Source Sans Pro", sans-serif;
}
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 81.25rem;
  margin-right: auto;
  margin-left: auto;
  padding-right: 3.125rem;
  padding-left: 3.125rem;

  @media screen and (max-width: 61.9375em) {
    padding-right: 1.875em;
    padding-left: 1.875em;
  }
`;

export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? "#4b59f7" : "#0467fb")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "0.75rem 4rem" : "0.625rem 1.25rem")};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? "1.25rem" : "1rem")};
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background: ${({ primary }) => (primary ? "#0467fb" : "#4b59f7")};
  }

  @media screen and (max-width: 60em) {
    width: 100%;
  }
`;

export default GlobalStyle;
