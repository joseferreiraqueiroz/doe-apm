import { useIndividualPost } from "@/hooks/useIndividualPost"
import { useParams } from "react-router-dom"
import { ContainerPost, PostContent } from "../../styles"
import { ResponsePost } from "../ResponseContent.tsx/styles"
import { Heart } from "phosphor-react"
interface ResponsePost{
    resposta_id: number,
    resposta_conteudo: string
    resposta_usuario_nome: string | null
  }

const AllResponsesPostComponent = () => {
    const {id} = useParams()
    const {data} = useIndividualPost(id as string)
    return (
    <>
    <div className="text-2xl text-zinc-300 font-bold !ml-[6rem]">
            {data.respostas.length > 0 && (
               <span>Todas as respostas</span>
            )}
          </div>
           {data.respostas.map((respostas: ResponsePost) =>{
            return (
              <ContainerPost>
              <img src="https://github.com/diego3g.png" alt="" />
              <div className="flex flex-col gap-5 flex-1">
              <PostContent>
              <div className="flex flex-col gap-5 leading-relaxed">
                <div className="flex flex-col">
                  <span className="text-[14px] text-zinc-400 font-bold">
                    Carolina Marques Brandes
                  </span>
                  <span className="text-[12px] text-zinc-500">
                    14/04/25 às 08:51 | Editado em 15/04/2025
                  </span>
                </div>
                <div>
                  <p>
                  {respostas.resposta_conteudo}
                  </p>
                </div>
                <ResponsePost>
                  <Heart size={20} />
                </ResponsePost>
              </div>
            </PostContent>
            </div>
        </ContainerPost>
            )
           })}
          
    </>
  )
}

export default AllResponsesPostComponent