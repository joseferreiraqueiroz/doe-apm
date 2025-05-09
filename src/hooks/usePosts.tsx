import { api } from "@/ultis/configAxios";
import { useQuery } from "@tanstack/react-query";

const getAllPosts = async () =>{
    const response = await api.get('/posts')
    return response.data
}
export function useAllPosts(){
    const query = useQuery({
        queryFn: getAllPosts,
        queryKey: ['get-posts']
    })
    return query
}