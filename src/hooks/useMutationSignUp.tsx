import { api } from "@/ultis/configAxios";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useContext } from "react";
import { AuthContext } from "@/context/context";

export interface UsersType{
    id: number
    email: string,
    senha: string
}

const mutationLogin = async (data: UsersType) => {
  const response = await api.post('/login', data);
  console.log(response.data)
  return response.data;
};


export const useMutationLogin = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const mutate = useMutation({
    mutationFn: mutationLogin,
    onSuccess: (data) => {
      login(data.token); 
      navigate('/'); 
      toast.success('Login bem sucedido');
    },
    onError: () => {
        toast.error('Usuário Inválido');
    }
  });

  return mutate;
};
