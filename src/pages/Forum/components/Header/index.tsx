import {
  Bell,
} from "phosphor-react";
import Logo from "../../../../assets/Logo.svg";
import { HeaderButtons, HeaderContainer } from "./styles";
import PopoverComponent from "@/components/Popover";


const HeaderComponentForum = () => {

  return (
    <>
      <HeaderContainer>
        <div className="flex items-center gap-2 ">
      
          <img src={Logo} alt="" />
        </div>

        <HeaderButtons>
          <span>
            <Bell size={24} />
          </span>
          <PopoverComponent/>
        </HeaderButtons>
      </HeaderContainer>
    </>
  );
};

export default HeaderComponentForum;
