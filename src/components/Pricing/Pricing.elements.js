import { Link } from "react-router-dom";
import styled from "styled-components";

export const PricingSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: hsl(300, 100%, 27.3%);
  padding: 6.25rem 0 10rem;
`;

export const PricingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  @media screen and (max-width: 60em) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 1.875rem;
  }
`;

export const PricingHeading = styled.h1`
  color: hsl(0, 0%, 100%);
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
  background: hsl(30, 33.3%, 4.7%);
  text-decoration: none;
  width: 17.5rem;
  height: 31.25rem;
  box-shadow: 0 0.375rem 1.25rem hsl(219.2, 100%, 61%, 0.2);
  border-radius: 0.25rem;

  &:nth-child(2) {
    margin: 1.5rem;
  }

  &:hover {
    color: hsl(247.5, 80%, 3.9%);
    transform: scale(1.06);
    transition: all 0.3s ease-out;
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
  align-items: center;
  color: hsl(0, 0%, 100%);
  padding: 1.5rem;
  height: 31.25rem;
`;

export const PricingCardIcon = styled.div`
  margin: 1.5rem 0;
`;

export const PricingCardPlan = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.3125rem;
`;

export const PricingCardCost = styled.h4`
  font-size: 2.5rem;
`;

export const PricingCardLength = styled.p`
  font-size: 0.875rem;
  margin-bottom: 1.5rem;
`;

export const PricingCardFeatures = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: hsl(0, 0%, 100%);
  margin: 1rem 0 2rem;
  list-style: none;
`;

export const PricingCardFeature = styled.li`
  margin-bottom: 0.625rem;
`;
