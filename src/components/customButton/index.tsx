import { GoogleLogo } from "phosphor-react";
import { ButtonEnterWithGoogle, EntterWithGoogle } from "./styles";
import { useContext } from "react";
import { AuthContext } from "@/context/context";
const CusttomButtonGoogle = () => {
  
    const {  loginWithGoogle } = useContext(AuthContext)

  return (
    <>
      <EntterWithGoogle onClick={() => {
        loginWithGoogle()
      }}>
         <span>Ou se preferir</span>
        <ButtonEnterWithGoogle>  
          <GoogleLogo size={32} weight="fill" />
          Entrar com o Google
        </ButtonEnterWithGoogle>
      </EntterWithGoogle>
    </>
  );
};
export default CusttomButtonGoogle;
