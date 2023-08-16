import styled, { keyframes } from "styled-components";
import * as colors from "../Helper/utils";

export const TaskContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   padding: 30px;
   border-radius: 8px;
   max-width: 515px;
   width: 100%;
   margin-bottom: 20px;
   background-color: white;
   box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
   @media screen and (max-width: 680px) {
      width: 100%;
      padding: 20px;
   }
   @media screen and (max-width: 820px) {
      max-width: none;
   }
`;

export const TaskHeader = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin-bottom: 20px;
   border-bottom: 1.5px solid ${colors.grayDark};
   padding-bottom: 20px;
   & h3 {
      font-size: 17px;
      max-width: 420px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-right: 15px;
      @media screen and (max-width: 680px) {
         max-width: 200px;
      }
   }
`;

export const TaskBody = styled.div`
   margin-bottom: 40px;
`;

export const TaskFooter = styled.div`
   display: flex;
   align-items: baseline;
   justify-content: space-between;
   & p {
      font-size: 13px;
   }
`;

export const Status = styled.div`
   display: flex;
   align-items: center;
   & p {
      padding: 4px 8px;
      border-radius: 15px;
      font-weight: bold;
      font-size: 10px;
      color: white;
   }
   & img {
      width: 30px;
      margin-right: -15px;
   }
`;

export const DoneStatus = styled.p`
   background-color: ${colors.secondaryColor};
   margin-top: 13px;
`;

export const ToDoStatus = styled.p`
   background-color: ${colors.primaryColor};
`;

export const CardDropDown = styled.div`
   position: relative;
`;

export const DropDownButton = styled.button`
   text-decoration: none;
   cursor: pointer;
   padding: 5px 7px;
   border: none;
   background-color: #f2f5fb;
   border-radius: 3px;
   &:hover {
      background-color: #dfe5ee;
   }
`;

const dropDownAnimation = keyframes`
     0% { top: 0%; opacity: 0}
     100% {top: 100%; opacity: 1}
   `;

export const DropDownMenu = styled.div`
   position: absolute;
   z-index: 1000;
   display: ${(props) => (props.open ? "block" : "none")};
   min-width: 150px;
   font-size: 13px;
   background-color: ${colors.grayLight};
   border-radius: 4px;
   box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.1);
   border: 1px solid #d9dfe8;
   animation: ${dropDownAnimation} 0.5s ease forwards;
   right: ${(props) => (props.open ? "0" : "")};
   margin-top: ${(props) => (props.open ? "8px" : "")};
`;

export const DropDownItem = styled.div`
   display: flex;
   align-items: center;
   padding: 5px 15px;
   font-weight: 500;
   cursor: pointer;
   border-bottom: 0.5px solid #e4eaf3;
   border-top: 0.5px solid #e4eaf3;
   & p {
      margin: 2px 0 0 10px;
      color: ${colors.primaryColor};
   }

   &:hover {
      background-color: ${colors.grayDark};
      border: 1px solid #e4eaf3;
   }
`;
