import { api } from "@/ultis/configAxios"
import { useMutation } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"

interface PostTypes{
    titulo: string,
    conteudo: string,
    usuario_id: number | null;
}

export async function PublicPost (data: PostTypes) {
   const response = await api.post('/posts', data)     
   return response.data
}
export const usePublicPost = () => {
    const navigate = useNavigate()
    const mutate = useMutation({
        mutationFn: PublicPost,
        onSuccess: () =>{
            navigate('/forumPage')
            toast.success('Post publicado')
          },
          onError: (err) =>{
            toast.error('Não foi possível publicar o post')
            console.log(err)
          }
    })
    return mutate
}