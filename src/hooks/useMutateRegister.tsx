import { api } from "@/ultis/configAxios";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export interface UsersType{
    nome: string,
    email: string,
    senha: string
    ConfirmPassword: string
}
const mutationRegister = async (data: UsersType) =>{
  const response = await api.post('/register', data)
  return response.data
}

export const useMutationRegister = () =>{
  const navigate = useNavigate()
  const mutate = useMutation({
      mutationFn: mutationRegister,
      onSuccess: () =>{
        navigate('/loginForm')
        toast.success('Cadastro bem sucedido')
      },
      onError: (err) =>{
        toast.error('Usuário já cadastrado')
        console.log(err)
      }
    })
    return mutate
}