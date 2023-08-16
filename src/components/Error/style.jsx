import styled from "styled-components";
import * as colors from "../Helper/utils";

export const ErrorContainer = styled.div`
   width: 40%;
   margin: 50px auto;
   color: ${colors.primaryColor};
   text-align: center;
   & h3 {
      font-size: 24px;
      margin-bottom: 10px;
   }

   & p {
      font-size: 20px;
   }
`;
