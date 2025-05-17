import { api } from "@/ultis/configAxios";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { client } from "@/main";

export interface ResponsePostType{
    post_id: number,
    conteudo: string,
    usuario_id: number | null
}

const responsePost = async (data: ResponsePostType) => {
  const response = await api.post('/respostas', data);
  return response.data;
};


export const useResponsePost = () => {

  const mutate = useMutation({
    mutationFn: responsePost,
    onSuccess: () => {
     client.invalidateQueries({
        queryKey: ['get-individual-posts']
     })
      toast.success('Resposta enviada com sucesso');
    },
    onError: (err) => {
        console.log(err)
        toast.error('Não foi possível enviar resposta');
    }
  });

  return mutate;
};
