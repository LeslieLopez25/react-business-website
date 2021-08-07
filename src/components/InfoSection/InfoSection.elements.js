import styled from "styled-components";

export const InfoSec = styled.div`
  color: #fff;
  padding: 10rem 0;
  background: ${({ lightBg }) => (lightBg ? "#fff" : "#101522")};
`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -0.9375rem -0.9375rem -0.9375rem;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
`;

export const InfoColumn = styled.div`
  margin-bottom: 0.9375rem;
  padding-right: 0.9375rem;
  padding-left: 0.9375rem;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 48em) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 33.75rem;
  padding-top: 0;
  padding-bottom: 3.75rem;

  @media screen and (max-width: 48em) {
    padding-bottom: 4.0625rem;
  }
`;

export const TopLine = styled.div`
  color: ${({ lightTopLine }) => (lightTopLine ? "#a9b3c1" : "#4b59f7")};
  font-size: 1.125rem;
  line-height: 1rem;
  font-weight: 700;
  letter-spacing: 0.0875rem;
  margin-bottom: 1rem;
`;

export const Heading = styled.h1`
  margin-bottom: 1.5rem;
  font-size: 3rem;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#1c2237")};
`;

export const Subtitle = styled.p`
  max-width: 27.5rem;
  margin-bottom: 2.1875rem;
  font-size: 1.125rem;
  line-height: 1.5rem;
  color: ${({ lightTextDesc }) => (lightTextDesc ? "#a9b3c1" : "#1c2237")};
`;

export const ImgWrapper = styled.div`
  max-width: 34.6875rem;
  display: flex;
  justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")};
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 31.25rem;
`;
