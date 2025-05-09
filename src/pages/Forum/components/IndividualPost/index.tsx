import { Link, useNavigate, useParams } from "react-router-dom";
import HeaderComponentForum from "../Header";
import { CaretRight, Heart } from "phosphor-react";
import {
  Button,
  ContainerPost,
  IndividualPostContainer,
  PostContent,
} from "./styles";
import { useContext, useEffect } from "react";
import { AuthContext } from "@/context/context";
import { useIndividualPost } from "@/hooks/useIndividualPost";
import { ResponsePost } from "./components/ResponseContent.tsx/styles";
import ResponsePostComponent from "./components/ResponseContent.tsx";
import AllResponsesPostComponent from "./components/AllResponsesPosts";
import { useGetUsers } from "@/hooks/useGetUsers";


const IndividualPostComponent = () => {
  const navigate = useNavigate()
  const { isAuthenticate } = useContext(AuthContext)
  const {data: usersData} = useGetUsers()
  const {id} = useParams()
  useEffect(() => {
      if (!isAuthenticate) {
        navigate("/");
      } 
      else{
        navigate(`/individualPost/${id}`)
      }
    }, [isAuthenticate, navigate, id]);
  const {data} = useIndividualPost(id as string)
  if(!data || !data.respostas){
    return <p>carregando</p>
  }

interface usersType{
  id: number,
  nome: string
}

   function userIdByPostId(){
    const userPostId = usersData.filter((user: usersType) =>{
      return user.id === data.usuario_id
    })
    return userPostId[0]
  }

  return (
    <>
      <HeaderComponentForum />
      <IndividualPostContainer>
        <ContainerPost>
          <img src="https://github.com/diego3g.png" alt="" />
          <div className="flex flex-col gap-5 !flex-1">
            <div className="flex !flex-1 items-center gap-2 text-sm text-zinc-400 font-bold">
              <span>
                <Link to="/forumPage">Fórum</Link>
              </span>
              <span>
                <CaretRight size={14} weight="bold" />
              </span>
              <span className="text-violet-500">Tópico</span>
            </div>
            <PostContent>
              <div className="flex flex-1 flex-col gap-5 leading-relaxed">
                <div className="flex flex-col ">
                  <span className="text-[14px] text-zinc-400 font-bold">
                    {userIdByPostId()?.nome}
                  </span>
                  <span className="text-[12px] text-zinc-500 !flex-1">
                    {data.data}
                  </span>
                </div>
                <div className="flex flex-col gap-2 !pb-3 border-b border-zinc-700 ">
                  <span className="text-3xl font-bold text-zinc-300 ">
                  {data.titulo}
                  </span>
                </div>
                <div className="flex-1">
                  <p>
                    {data.conteudo}
                  </p>
                </div>
                <ResponsePost className="!flex-1">
                  <Heart size={20} />
                  <Button>Responder</Button>
                </ResponsePost>
              </div>
            </PostContent>
          </div>
          
        </ContainerPost>
       <AllResponsesPostComponent/>
        <div>
          <ContainerPost>
            <img src="https://github.com/diego3g.png" alt="" />
            <div className="flex flex-col gap-5 flex-1">
              <div className="text-2xl text-zinc-300 font-bold">
                <span>Deixe sua resposta</span>
              </div>
              <ResponsePostComponent/>
            </div>
          </ContainerPost>
        </div>
      </IndividualPostContainer>
    </>
  );
};
export default IndividualPostComponent;