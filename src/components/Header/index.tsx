import { Bell, User } from "phosphor-react";
import {
  ButtonLogin,
  HeaderButtons,
  HeaderContainer,
  NavBar,
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
      <NavBar>
        <span>
         Faça uma doação e nos ajude a formar um lugar melhor |{" "}
          <Link to="/loginForm">Realizar doação agora!</Link>
        </span>
      </NavBar>
    </>
  );
};

export default HeaderComponent;
