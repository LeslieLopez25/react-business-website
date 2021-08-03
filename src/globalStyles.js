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

export default GlobalStyle;
