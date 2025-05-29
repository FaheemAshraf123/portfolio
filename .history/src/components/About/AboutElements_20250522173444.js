// import styled from "styled-components";
import styled, { keyframes } from "styled-components";

export const ContactWrapper = styled.div`
  margin-top: 5rem;
`;

export const Image = styled.img`
  max-width: 120px;
  margin: 0 auto;
  margin-bottom: 1rem;
`;

// export const Technologies = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   margin-right: auto;
//   margin-left: auto;
//   margin-bottom: -2rem;
// `;

// export const Tech = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   max-width: 100px;
//   min-width: 100px;
//   margin-bottom: 2rem;
// `;

// export const TechImg = styled.img`
//   height: 50px;
//   width: 50px;
// `;

// export const TechName = styled.div`
//   font-size: 14px;
// `;


const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

export const ScrollWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  padding: 1rem 0;
`;

export const Technologies = styled.div`
  display: flex;
  width: max-content;
  animation: ${scroll} 20s linear infinite;
`;

export const Tech = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 1.5rem;
`;

export const TechImg = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
`;

export const TechName = styled.span`
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: #444;
`;