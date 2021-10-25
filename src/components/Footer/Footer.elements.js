import styled from "styled-components";
import { FaFire } from "react-icons/fa";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: hsl(247.5, 80%, 3.9%);
  padding: 4rem 0 2rem 0;

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
  color: hsl(0, 0%, 100%);
  margin-bottom: 1.5rem;
  padding: 1.5rem;
`;

export const FooterSubHeading = styled.p`
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
`;

export const FooterSubText = styled.p`
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
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
  font-size: 1rem;
  margin-right: 0.625rem;
  padding: 0.625rem 1.25rem;
  border: none;
  border-radius: 0.125rem;
  outline: none;
  border: 1px solid hsl(0, 0%, 100%);

  &::placeholder {
    color: hsl(0, 0%, 3.1%);
  }

  @media screen and (max-width: 51.25em) {
    margin: 0 0 1rem 0;
    width: 100%;
  }
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 62.5rem;
  width: 100%;

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
  color: hsl(0, 0%, 100%);
  text-align: left;
  margin: 1rem;
  width: 10rem;
  box-sizing: border-box;

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
  color: hsl(0, 0%, 100%);
  text-decoration: none;
  margin-bottom: 0.5rem;

  &:hover {
    color: hsl(195.1, 100%, 50%);
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
  max-width: 62.5rem;
  width: 90%;
  margin: 2.5rem auto 0 auto;

  @media screen and (max-width: 51.25rem) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  display: flex;
  justify-self: start;
  align-items: center;
  color: hsl(0, 0%, 100%);
  font-size: 2rem;
  text-decoration: none;
  margin-bottom: 1rem;
  cursor: pointer;
`;

export const SocialIcon = styled(FaFire)`
  margin-right: 0.625rem;
`;

export const WebsiteRights = styled.small`
  color: hsl(0, 0%, 100%);
  margin-bottom: 1rem;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 15rem;
`;

export const SocialIconLink = styled.a`
  color: hsl(0, 0%, 100%);
  font-size: 1.5rem;

  &:hover {
    color: hsl(302.2, 100%, 27.3%);
  }
`;
