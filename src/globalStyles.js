import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    font-family: "Source Sans Pro", sans-serif;
    box-sizing: border-box;
}
`;

export const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding-right: 3.125rem;
  padding-left: 3.125rem;
  max-width: 81.25rem;
  width: 100%;
  z-index: 1;

  @media screen and (max-width: 61.9375em) {
    padding-right: 1.875em;
    padding-left: 1.875em;
  }
`;

export const Button = styled.button`
  background: ${({ primary }) =>
    primary ? "hsl(300,100%,27.3%)" : "hsl(195.1,100%,50%)"};
  color: hsl(0, 0%, 100%);
  font-size: ${({ fontBig }) => (fontBig ? "1.25rem" : "1rem")};
  padding: ${({ big }) => (big ? "0.75rem 4rem" : "0.625rem 1.25rem")};
  border: none;
  border-radius: 0.25rem;
  outline: none;
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    background: hsl(0, 0%, 100%);
    background: ${({ primary }) =>
      primary ? "hsl(195.1,100%,50%)" : "hsl(300,100%,27.3%)"};
    transition: all 0.3s ease-out;
  }

  @media screen and (max-width: 60em) {
    width: 100%;
  }
`;

export default GlobalStyle;
