import styled from "styled-components";
import * as colors from "../Helper/utils";

export const ModalContainer = styled.div`
   position: fixed;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   max-width: 500px;
   width: 100%;
   background-color: #fff;
   z-index: 1001;
   border-radius: 8px;
   box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
   margin: 0 30px;
   @media screen and (max-width: 680px) {
      max-width: 320px;
      margin: auto;
   }
`;

export const ModalHeader = styled.div`
   border-bottom: 5px solid ${colors.secondaryColor};
   padding: 25px;
   & h2 {
      color: ${colors.primaryColor};
      font-size: 20px;
      font-weight: bold;
   }
`;

export const ModalBody = styled.div``;

export const Form = styled.form`
   width: 60%;
   margin: 60px auto;
   & fieldset input[name="label"] {
      border: ${(props) => (props.labelError ? "1px solid red" : "1px solid #dae1eb")};
   }

   & fieldset input[name="description"] {
      border: ${(props) => (props.descriptionError ? "1px solid red" : "1px solid #dae1eb")};
   }

   & fieldset {
      border: none;
      margin: 15px;
      display: flex;
      flex-direction: column;
      & label {
         color: #455060;
         font-weight: 550;
         font-size: 13px;
         margin-bottom: 5px;
      }
      & input {
         border: 1px solid #dae1eb;
         padding: 7px 10px;
         border-radius: 2px;
         background-color: white;
         font-size: 0.8rem;
      }
   }

   & span {
      margin-top: 5px;
      font-size: 12px;
      color: red;
      display: block;
   }

   @media screen and (max-width: 680px) {
      width: 80%;
   }
`;

//Footer
export const ModalFooter = styled.div`
   height: 60px;
   display: flex;
   align-items: center;
   border-top: 2px solid #d6dee8;
   & button {
      border: none;
      border-radius: 2px;
      padding: 5px 15px;
      margin-left: 10px;
      font-weight: 600;
      cursor: pointer;
   }
`;

export const ValidateButton = styled.button`
   background-color: ${colors.secondaryColor};
   color: white;
   &:hover {
      background-color: #18aaa8;
   }
`;

export const CancelButton = styled.button`
   background-color: #e4eaf3;
   color: #455060;
   &:hover {
      background-color: #d7dfeb;
   }
`;

export const ButtonsContainer = styled.div`
   margin-left: auto;
   margin-right: 25px;
`;
