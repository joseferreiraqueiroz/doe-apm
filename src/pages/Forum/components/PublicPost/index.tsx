import { Link, useNavigate } from "react-router-dom";
import HeaderComponentForum from "../Header";
import {
  ContainerPost,
  IndividualPostContainer,
  PostContent,
} from "../IndividualPost/styles";
import { CaretRight } from "phosphor-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  ButtonConfirmDiscard,
  ButtonDiscard,
  ButtonNoDiscard,
  FooterForm,
  PublishedButton,
} from "./styles";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { usePublicPost } from "@/hooks/useMutationPublicPost";
import { useContext, useEffect } from "react";
import { AuthContext } from "@/context/context";
const SchemaValidationPostForm = z.object({
  titulo: z.string().min(1, 'título obrigatório'),
  conteudo: z.string().min(1, 'conteúdo obrigatório'),
})

const PublicPostComponent = () => {
  const navigate = useNavigate()
  const { isAuthenticate, idUsername } = useContext(AuthContext)
  console.log(idUsername)
  useEffect(() => {
      if (!isAuthenticate) {
        navigate("/");
      } 
      else{
        navigate('/publicPost')
      }
    }, [isAuthenticate, navigate]);
  

  const { mutate } = usePublicPost()

  type FormPostType = z.infer<typeof SchemaValidationPostForm>
  const { register, handleSubmit } = useForm<FormPostType>({
    resolver: zodResolver(SchemaValidationPostForm),
  })

  function handleSubmitFormPost(data: FormPostType){
    try{
      mutate({
        titulo: data.titulo,
        conteudo: data.conteudo,
        usuario_id: idUsername
      })
    }catch(err){
      console.log(err)
    }
  }

  return (
    <>
      <HeaderComponentForum />
      <IndividualPostContainer>
        <ContainerPost>
          <img src="https://github.com/diego3g.png" alt="" />
          <div className="flex flex-col gap-5 flex-1">
            <div className="flex items-center gap-2 text-sm text-zinc-400 font-bold">
              <span>
                <Link to="/forumPage">Fórum</Link>
              </span>
              <span>
                <CaretRight size={14} weight="bold" />
              </span>
              <span className="text-violet-500">Criar tópico</span>
            </div>
            <PostContent>
              <div className="flex flex-col gap-5 leading-relaxed flex-1">
                <div className="flex flex-col ">
                  <span className="text-[14px] text-zinc-400 font-bold">
                    Carolina Marques Brandes
                  </span>
                </div>
                <form className="flex flex-col gap-5" onSubmit={handleSubmit(handleSubmitFormPost)}>
                  <div>
                    <Input
                      placeholder="Título"
                      className="bg-zinc-900 border-0 !p-4 min-h-[3.125rem]"
                      {...register("titulo")}
                    />
                  </div>
                  <div>
                    <Textarea className="bg-zinc-900 border-0 !p-4 min-h-[20rem]" 
                    {...register("conteudo")}
                    />
                  </div>
                  <FooterForm>
                    <Dialog>
                      <DialogTrigger asChild>
                        <ButtonDiscard>descartar</ButtonDiscard>
                      </DialogTrigger>
                      <DialogContent className="bg-zinc-800 border-0 !p-4 flex items-center justify-center">
                        <DialogHeader>
                          <DialogTitle className="text-center text-2xl !my-[1rem]">
                            Descartar tópico
                          </DialogTitle>
                          <DialogDescription className="flex flex-col gap-3 text-[16px] text-zinc-100">
                            Tem certeza que deseja descartar as alterações?
                            <div className="flex gap-2 items-center justify-center !my-[1rem]">
                              <DialogTrigger asChild>
                                <ButtonNoDiscard>Não</ButtonNoDiscard>
                              </DialogTrigger>
                              <Link to="/forumPage">
                                <ButtonConfirmDiscard>Sim</ButtonConfirmDiscard>
                              </Link>
                            </div>
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>

                    <PublishedButton type="submit">publicar</PublishedButton>
                  </FooterForm>
                </form>
              </div>
            </PostContent>
          </div>
        </ContainerPost>
      </IndividualPostContainer>
    </>
  );
};

export default PublicPostComponent;
