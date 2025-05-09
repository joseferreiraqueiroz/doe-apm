import { Label } from "@radix-ui/react-label";
import Logo from "../../assets/Logo.svg";
import { Input } from "@/components/ui/input";
import { ArrowLeft, SignOut } from "phosphor-react";
import { Link, useNavigate } from "react-router-dom";
import { ButtonEnterLogin, EnterRegisterContainer, EnterYourAccount, LoginFormContainer, LoginFormContent } from "./styles";
import {useForm} from 'react-hook-form'
import * as z from "zod"
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext, useEffect } from "react";
import { useMutationRegister } from "@/hooks/useMutateRegister";
import { AuthContext } from "@/context/context";



const SchemaValidationFormUsersData = z
  .object({
    nome: z.string().min(1, "Nome obrigatório"),
    email: z.string().min(1, "E-mail obrigatório"),
    senha: z.string().min(8, "Senha precisa conter no mínimo 8 caracteres"),
    ConfirmPassword: z.string().min(1, "Confirmação de senha obrigatória"),
  })
  .refine((data) => data.senha === data.ConfirmPassword, {
    message: "As senhas não coincidem",
    path: ["Confirmpassword"],
  });

const RegisterForm = () => {
  const navigate = useNavigate()
  const {isAuthenticate} = useContext(AuthContext)
  const { mutate } = useMutationRegister()
  
  useEffect(() =>{
    if(isAuthenticate){
      navigate('/')
    }
   
  }, [isAuthenticate, navigate])
    type FormDataType = z.infer<typeof SchemaValidationFormUsersData>
    const {register, handleSubmit, formState:{errors, isSubmitting} } = useForm<FormDataType>(
        {
            resolver: zodResolver(SchemaValidationFormUsersData)
        })
    async function handleSubmitUsersDataRegister(data:FormDataType){
      try{ 
      await mutate(data)
       }catch(err){
        console.log(err)
       }  
    }

  return (
    <LoginFormContainer>
        <div className="returnHome">
            <Link to="/loginForm">
                <ArrowLeft size={32}/>
            </Link>
        </div>
      <LoginFormContent>
        <EnterYourAccount>
          <img src={Logo} alt="LogoImage" />
          <span>Acesse sua conta</span>
        </EnterYourAccount>
        <form onSubmit={handleSubmit(handleSubmitUsersDataRegister)}>
        <Label htmlFor="name">Nome</Label>
        <Input
         id="name"
          placeholder="Seu nome"
          {...register('nome')}
          />
          <span>{errors.nome?.message}</span>
        <Label htmlFor="email">E-mail</Label>
        <Input 
        id="email"
        placeholder="Seu e-mail"
        {...register('email')}
         />
         <span>{errors.email?.message}</span>
          <Label htmlFor="password">Senha</Label>
          <Input 
          id="password"
           placeholder="Sua senha"
           {...register('senha')}
           />
           <span>{errors.senha?.message}</span>
          <Label htmlFor="Confirmpassword">Confirme sua senha</Label>
          <Input
           id="Confirmpassword"
            placeholder="Sua senha" 
            {...register('ConfirmPassword')}
            />
            <span>{errors.ConfirmPassword?.message}</span>
          <ButtonEnterLogin type="submit" disabled={isSubmitting}>Entrar</ButtonEnterLogin>
        </form>
      
        <EnterRegisterContainer>
          <div>
            <span>Já possui uma conta?</span>
            <Link to="/loginForm">Entre gratuitamente</Link>
          </div>
          <SignOut size={32}  />
        </EnterRegisterContainer>
      </LoginFormContent>
    </LoginFormContainer>
  );
};

export default RegisterForm;
