import { api } from "@/ultis/configAxios";
import { useQuery } from "@tanstack/react-query";

const getUsers = async () =>{
    const response = await api.get('/users')
    return response.data
}
export function useGetUsers(){
    const query = useQuery({
        queryFn: getUsers,
        queryKey: ['get-users']
    })
    return query
}