import styled from "styled-components";
import * as colors from "../Helper/utils";

export const HeaderContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   color: ${colors.primaryColor};
   background-color: ${colors.grayDark};
   border-bottom: 1px solid #cdd5dd;
   padding: 15px 30px;
   margin-bottom: 40px;
`;

export const Logo = styled.img`
   width: 100px;
   cursor: pointer;
`;

export const NavContainer = styled.nav`
   display: flex;
   align-items: center;
`;

export const IconContainer = styled.div`
   margin-left: 20px;
   cursor: pointer;
`;
