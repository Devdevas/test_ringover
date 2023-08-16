import styled from "styled-components";
import * as colors from "../../Helper/utils";

export const Container = styled.div`
   position: fixed;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   z-index: 1001;
   text-align: center;
   padding: 30px 5px;
   font-size: 18px;
   box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
   max-width: 500px;
   width: 100%;
   background-color: #fff;
   border-radius: 8px;
   margin: 0 30px;
   @media screen and (max-width: 680px) {
      padding: 20px;
      max-width: 320px;
      margin: auto;
   }
`;

export const Title = styled.p`
   display: inline-block;
   margin-top: 10px;
   font-weight: bold;
`;

export const BodyContainer = styled.div`
   & button {
      padding: 8px 15px;
      border-radius: 4px;
      font-size: 14px;
      font-weight: 600;
      width: 100px;
      margin: 25px 20px 10px 20px;
      border: none;
      cursor: pointer;
   }
`;

export const CancelButton = styled.button`
   background-color: ${colors.grayDark};
   color: ${colors.primaryColor};
   &:hover {
      background-color: #dadee6;
   }
`;

export const ConfirmButton = styled.button`
   background-color: ${colors.secondaryColor};
   color: white;
   &:hover {
      background-color: #20b7b4;
   }
`;
