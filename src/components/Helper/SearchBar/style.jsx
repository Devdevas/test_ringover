import { styled } from "styled-components";
import * as colors from "../../Helper/utils";

export const SearchBarWrapper = styled.div`
   display: flex;
   align-items: center;
   margin: 20px 40px;
   background-color: transparent;
   margin-left: auto;
   & input {
      border: none;
      border-bottom: 1px solid ${colors.primaryColor};
      padding: 5px 10px;
      width: "220px";
      background-color: transparent;
      &::placeholder {
         color: #8f9aab;
      }
      &:focus {
         outline: none;
         border-bottom: 1.5px solid ${colors.secondaryColor};
      }
   }
   @media screen and (max-width: 680px) {
      margin: 20px 0;
   }
`;
