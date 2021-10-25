import styled from "styled-components";

export const InfoSec = styled.div`
  background: ${({ lightBg }) =>
    lightBg ? "hsl(0,0%,100%)" : "hsl(247.5,80%,3.9%)"};
  color: hsl(0, 0%, 100%);
  padding: 10rem 0;
`;

export const InfoRow = styled.div`
  display: flex;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
  align-items: center;
  flex-wrap: wrap;
  margin: 0 -0.9375rem -0.9375rem -0.9375rem;
`;

export const InfoColumn = styled.div`
  flex: 1;
  flex-basis: 50%;
  margin-bottom: 0.9375rem;
  padding-right: 0.9375rem;
  padding-left: 0.9375rem;
  max-width: 50%;

  @media screen and (max-width: 48em) {
    display: flex;
    justify-content: center;
    flex-basis: 100%;
    max-width: 100%;
  }
`;

export const TextWrapper = styled.div`
  padding-top: 0;
  padding-bottom: 3.75rem;
  max-width: 33.75rem;

  @media screen and (max-width: 48em) {
    padding-bottom: 4.0625rem;
  }
`;

export const TopLine = styled.div`
  color: ${({ lightTopLine }) =>
    lightTopLine ? "hsl(0,0%,75.3%)" : "hsl(300,100%,27.3%)"};
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1rem;
  letter-spacing: 0.0875rem;
  margin-bottom: 1rem;
`;

export const Heading = styled.h1`
  color: ${({ lightText }) =>
    lightText ? "hsl(180,100%,97.1%)" : "hsl(0,0%,3.1%)"};
  font-size: 3rem;
  font-weight: 600;
  line-height: 1.1;
  margin-bottom: 1.5rem;
`;

export const Subtitle = styled.p`
  color: ${({ lightTextDesc }) =>
    lightTextDesc ? "hsl(0,0%,75.3%)" : "hsl(0,0%,3.1%)"};
  font-size: 1.125rem;
  line-height: 1.5rem;
  margin-bottom: 2.1875rem;
  max-width: 27.5rem;
`;

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")};
  max-width: 34.6875rem;
`;

export const Img = styled.img`
  display: inline-block;
  vertical-align: middle;
  padding-right: 0;
  max-width: 100%;
  max-height: 31.25rem;
  border: 0;
`;
