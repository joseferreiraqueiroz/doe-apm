import { useIndividualPost } from "@/hooks/useIndividualPost"
import { useParams } from "react-router-dom"
import { ContainerPost, PostContent } from "../../styles"
import { ResponsePost } from "../ResponseContent.tsx/styles"
import { Heart } from "phosphor-react"
import { format, parseISO } from "date-fns"
interface ResponsePost{
    resposta_id: number,
    resposta_conteudo: string
    resposta_usuario_nome: string | null
    resposta_data: string 
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
             const dataFormatada = format(parseISO(respostas.resposta_data), 'dd/MM/yyyy HH:mm');
            return (
              <ContainerPost>
              <img src="https://github.com/diego3g.png" alt="" className="invisible"/>
              <div className="flex flex-col gap-5 flex-1">
              <PostContent>
              <div className="flex flex-col gap-5 leading-relaxed">
                <div className="flex flex-col">
                  <span className="text-[14px] text-zinc-400 font-bold">
                    {respostas.resposta_usuario_nome}
                  </span>
                  <span className="text-[12px] text-zinc-500">
                   {dataFormatada}
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