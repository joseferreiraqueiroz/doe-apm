import { api } from "@/ultis/configAxios";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { client } from "@/main";

export interface ResponsePostType{
    post_id?: number,
    conteudo: string
}

const responsePost = async ({post_id, conteudo}: ResponsePostType) => {
  const response = await api.post('/respostas', {
    post_id: post_id,
    conteudo: conteudo
  });
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
