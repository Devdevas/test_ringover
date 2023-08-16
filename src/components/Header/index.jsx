import { HeaderContainer, IconContainer, Logo, NavContainer } from "./style";
import logoTasks from "../../assets/logo_Tasks.png";
import { FaUser, FaCog } from "react-icons/fa";
import * as colors from "../Helper/utils";

const Header = () => {
   return (
      <HeaderContainer>
         <Logo src={logoTasks} alt="Logo Tasks" />
         <NavContainer>
            <IconContainer>
               <FaUser size={20} color={colors.primaryColor} />
            </IconContainer>
            <IconContainer>
               <FaCog size={20} color={colors.primaryColor} />
            </IconContainer>
         </NavContainer>
      </HeaderContainer>
   );
};

export default Header;
