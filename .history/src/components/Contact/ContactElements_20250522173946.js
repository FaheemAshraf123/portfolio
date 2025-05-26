// import styled from "styled-components";
import styled, { keyframes } from "styled-components";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
export const ContactWrapper = styled.div`
   background: #fff;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  animation: ${fadeInUp} 0.8s ease forwards;
  opacity: 0;
  transform: translateY(40px);
  
  &:nth-child(1) {
    animation-delay: 0.2s;
  }
  &:nth-child(2) {
    animation-delay: 0.4s;
  }
  &:nth-child(3) {
    animation-delay: 0.6s;
  }
`;

export const Email = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  span {
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }

  @media (min-width: 576px) {
    span {
      font-size: 1.5rem;
    }
  }
  @media (min-width: 992px) {
    flex-direction: row;
    span {
      margin-bottom: 0;
      font-size: 3rem;
    }
  }
`;

export const Whatsapp = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  span {
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }

  @media (min-width: 576px) {
    span {
      font-size: 1.5rem;
    }
  }
  @media (min-width: 992px) {
    flex-direction: row;
    span {
      margin-bottom: 0;
      font-size: 3rem;
    }
  }
`;
