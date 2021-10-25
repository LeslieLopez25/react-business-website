import styled from "styled-components";
import { FaMagento } from "react-icons/fa";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
  background-color: #101522;
  padding: 4rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 51.25em) {
    position: absolute;
  }
`;

export const FooterSubscription = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 1.5rem;
  padding: 1.5rem;
  color: #fff;
`;

export const FooterSubHeading = styled.p`
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
`;

export const FooterSubText = styled.p`
  margin-bottom: 1.5rem;
  font-size: 1.25rem;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 51.25em) {
    flex-direction: column;
    width: 80%;
  }
`;

export const FormInput = styled.input`
  padding: 0.625rem 1.25rem;
  border-radius: 0.125rem;
  margin-right: 0.625rem;
  outline: none;
  border: none;
  font-size: 1rem;
  border: 1px solid #fff;

  &::placeholder {
    color: #242424;
  }

  @media screen and (max-width: 51.25em) {
    width: 100%;
    margin: 0 0 1rem 0;
  }
`;

export const FooterLinksContainer = styled.div`
  width: 100%;
  max-width: 62.5rem;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 51.25em) {
    padding-top: 2rem;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 51.25rem) {
    flex-direction: column;
  }
`;

export const FooterLinksItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 1rem;
  text-align: left;
  width: 10rem;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 26.25em) {
    margin: 0;
    padding: 0.625rem;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h2`
  margin-bottom: 1rem;
`;

export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;

  &:hover {
    color: #0467fb;
    transition: 0.3s ease-out;
  }
`;

export const SocialMedia = styled.section`
  max-width: 62.5rem;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 62.5rem;
  margin: 2.5rem auto 0 auto;

  @media screen and (max-width: 51.25rem) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

export const SocialIcon = styled(FaMagento)`
  margin-right: 0.625rem;
`;

export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 1rem;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 15rem;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 1.5rem;
`;
