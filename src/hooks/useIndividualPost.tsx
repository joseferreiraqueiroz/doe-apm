import { api } from "@/ultis/configAxios"
import { useQuery } from "@tanstack/react-query"

const getIndividualPost = async ({queryKey}: {queryKey: [string, string]}) => {
    const [, id] = queryKey
    const response = await api.get(`posts/${id}`)
    return response.data
}
export function useIndividualPost(id: string){
    const query = useQuery({
        queryFn: getIndividualPost,
        queryKey: ['get-individual-posts', id]
    })
    return query
}