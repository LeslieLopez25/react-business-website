import { Link } from "react-router-dom";
import styled from "styled-components";

export const PricingSection = styled.div`
  padding: 6.25rem 0 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: hsl(300, 100%, 27.3%);
`;

export const PricingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  @media screen and (max-width: 60em) {
    margin: 0 1.875rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const PricingHeading = styled.h1`
  color: #fff;
  font-size: 3rem;
  margin-bottom: 1.5rem;
`;

export const PricingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 60em) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const PricingCard = styled(Link)`
  background: #242424;
  box-shadow: 0 0.375rem 1.25rem rgba(56, 125, 255, 0.2);
  width: 17.5rem;
  height: 31.25rem;
  text-decoration: none;
  border-radius: 0.25rem;

  &:nth-child(2) {
    margin: 1.5rem;
  }

  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: #1c2237;
  }

  @media screen and (max-width: 60em) {
    width: 90%;

    &:hover {
      transform: none;
    }
  }
`;

export const PricingCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 31.25rem;
  padding: 1.5rem;
  align-items: center;
  color: #fff;
`;

export const PricingCardIcon = styled.div`
  margin: 1.5rem 0;
`;

export const PricingCardPlan = styled.h3`
  margin-bottom: 0.3125rem;
  font-size: 1.5rem;
`;

export const PricingCardCost = styled.h4`
  font-size: 2.5rem;
`;

export const PricingCardLength = styled.p`
  font-size: 0.875rem;
  margin-bottom: 1.5rem;
`;

export const PricingCardFeatures = styled.ul`
  margin: 1rem 0 2rem;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #a9b3c1;
`;

export const PricingCardFeature = styled.li`
  margin-bottom: 0.625rem;
`;
