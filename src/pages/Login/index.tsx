import { Label } from "@radix-ui/react-label";
import Logo from "../../assets/Logo.svg";
import { Input } from "@/components/ui/input";
import { ArrowLeft, RocketLaunch } from "phosphor-react";
import { Link, useNavigate } from "react-router-dom";
import {
  ButtonEnterLogin,
  EnterRegisterContainer,
  EnterYourAccount,
  LoginFormContainer,
  LoginFormContent,
} from "./styles";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutationLogin } from "@/hooks/useMutationSignUp";
import { useContext, useEffect } from "react";
import { AuthContext } from "@/context/context";
import { GoogleOAuthProvider } from "@react-oauth/google";
import CusttomButtonGoogle from "../../components/customButton";

const SchemaValidationFormUsersData = z.object({
  email: z
    .string()
    .min(1, "E-mail obrigatório")
    .email("formato inválido de email"),
  senha: z.string().min(8, "senha precisa conter no mínimo 8 caracteres"),
});

const LoginForm = () => {
  const { mutate } = useMutationLogin();
  const { isAuthenticate } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticate) {
      navigate("/");
    }
  }, [isAuthenticate, navigate]);

  type FormDataType = z.infer<typeof SchemaValidationFormUsersData>;
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormDataType>({
    resolver: zodResolver(SchemaValidationFormUsersData),
  });
  async function handleSubmitUsersData(data: FormDataType) {
    try {
      await mutate(data);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <LoginFormContainer>
      <div className="returnHome">
        <Link to="/">
          <ArrowLeft size={32} />
        </Link>
      </div>
      <LoginFormContent>
        <EnterYourAccount>
          <img src={Logo} alt="LogoImage" />
          <span>Acesse sua conta</span>
        </EnterYourAccount>
        <form onSubmit={handleSubmit(handleSubmitUsersData)}>
          <Label htmlFor="email">E-mail</Label>
          <Input id="email" placeholder="Seu e-mail" {...register("email")} />
          <span>{errors?.email?.message}</span>
          <Label htmlFor="password">Senha</Label>
          <Input id="password" placeholder="Sua senha" {...register("senha")} />
          <span>{errors?.senha?.message}</span>
          <ButtonEnterLogin type="submit" disabled={isSubmitting}>
            Entrar
          </ButtonEnterLogin>
        </form>
         <GoogleOAuthProvider clientId="683767475115-u0p148sqn4lbs78gj7q6gqre2ogo0m4i.apps.googleusercontent.com">
          <CusttomButtonGoogle/>
         </GoogleOAuthProvider>
        <EnterRegisterContainer>
          <div>
            <span>Não tem uma conta?</span>
            <Link to="/registerForm">Se inscreva gratuitamente</Link>
          </div>
          <RocketLaunch size={32} weight="fill" />
        </EnterRegisterContainer>
      </LoginFormContent>
    </LoginFormContainer>
  );
};

export default LoginForm;
