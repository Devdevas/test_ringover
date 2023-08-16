import styled, { keyframes } from "styled-components";
import * as colors from "../utils";

const loadingAnimation = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(0.7);
    opacity: 0.7;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

export const LoadingPoints = styled.div`
   display: inline-block;
   width: 60px;
   height: 20px;
`;

export const Point = styled.div`
   display: inline-block;
   border-radius: 50%;
   border: 5px solid ${colors.secondaryColor};
   margin: 0 4px;

   animation: ${loadingAnimation} 1s ease-in-out infinite;

   &:nth-child(1) {
      animation-delay: 0.25s;
   }

   &:nth-child(2) {
      animation-delay: 0.5s;
   }
   &:nth-child(3) {
      animation-delay: 0.75s;
   }
`;
