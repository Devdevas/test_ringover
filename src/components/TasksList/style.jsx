import styled from "styled-components";
import * as colors from "../Helper/utils";

export const Container = styled.div`
   margin: 20px auto;
   max-width: 1250px;
   @media screen and (max-width: 820px) {
      margin: 10px 30px;
   }
`;

export const Title = styled.h1`
   font-size: 26px;
   margin-bottom: 30px;
   padding: 20px 0;
   border-bottom: 1.5px solid #cdd5dd;
   color: ${colors.primaryColor};
`;

export const TasksListContainer = styled.div`
   padding: 40px;
   border-radius: 8px;
   box-shadow: 1px 2px 9px 1px rgba(0, 0, 0, 0.1);
   background-color: ${colors.grayDark};
   @media screen and (max-width: 680px) {
      padding: 20px;
   }
`;

export const TasksListHeader = styled.div`
   border-bottom: 2px solid #cdd5dd;
   padding-bottom: 20px;
   margin-bottom: 40px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   flex-wrap: wrap;
   & h2 {
      font-size: 22px;
      @media screen and (max-width: 680px) {
         display: none;
      }
   }
   & button {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${(props) => props.backgroundColor || `${colors.secondaryColor}`};
      color: white;
      padding: 8px 12px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 16px;
      font-weight: bold;
      transition: background-color 0.3s ease-in-out;

      &:hover {
         background-color: ${(props) => props.hoverColor || "#0fa8a6"};
      }
      @media screen and (max-width: 680px) {
         width: 100%;
      }
   }
`;

export const IconContainer = styled.div`
   margin-right: 8px;
`;

export const TasksListBody = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
`;

export const NoTasksMessage = styled.p`
   font-size: 18px;
   text-align: center;
   color: ${colors.primaryColor};
   margin: 50px auto;
`;

export const ModalOverlay = styled.p`
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background-color: rgba(0, 20, 16, 0.5);
   z-index: 1000;
   cursor: pointer;
`;
