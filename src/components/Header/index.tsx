import { Bell, User } from "phosphor-react";
import {
  ButtonLogin,
  HeaderButtons,
  HeaderContainer,
} from "./styles";

import Logo from "../../assets/Logo.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "@/context/context";
import PopoverComponent from "../Popover";

const HeaderComponent = () => {
  const { isAuthenticate } = useContext(AuthContext);

  return (
    <>
      <HeaderContainer>
        <div>
          <img src={Logo} alt="" />
        </div>

        <HeaderButtons>
          <span>
            <Bell size={24} />
          </span>
          <Link to="/loginForm">
            {!isAuthenticate && (
              <ButtonLogin>
                <User size={24} />
                Entrar
              </ButtonLogin>
            )}
          </Link>
          <PopoverComponent ButtonVariant="square"/>
        </HeaderButtons>
      
      </HeaderContainer>
     
    </>
  );
};

export default HeaderComponent;
