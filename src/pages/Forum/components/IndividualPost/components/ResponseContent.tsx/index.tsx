import { Textarea } from "@/components/ui/textarea";
import {
  Button,
  FooterResponsePost,
  ResponseContent,
  TextAreaContent,
} from "./styles";
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import {  zodResolver } from '@hookform/resolvers/zod'
import { useResponsePost } from "@/hooks/useMutateResponsePosts";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "@/context/context";


const SchemaResponseForm = z.object({
    conteudo: z.string().min(10, 'No mínimo 10 caracteres')
})

const ResponsePostComponent = () => {
    const {id} = useParams()
    const { mutate } = useResponsePost()
    const {  idUsername } = useContext(AuthContext)
    type TypeSchemaResponseForm = z.infer<typeof SchemaResponseForm>
    const { register, handleSubmit, reset } = useForm<TypeSchemaResponseForm>({
        resolver: zodResolver(SchemaResponseForm)
  })  
  function handleSubmitResponseForm(data: TypeSchemaResponseForm){
    mutate({
        post_id: Number(id),
        conteudo: data.conteudo,
        usuario_id: idUsername
    }, {
        onSuccess: () =>{
            reset()
        } 
    })
  }
   
    return (
    <ResponseContent>
         <form className="break-words" onSubmit={handleSubmit(handleSubmitResponseForm)}>
      <TextAreaContent>
       
          <Textarea
            id="textarea"
           className="border-0 outline-0 !p-4 focus-visible:ring-0! break-words"
          {...register('conteudo')}
          />
 
      </TextAreaContent>
      <FooterResponsePost>
        <Button type="submit">Enviar</Button>
      </FooterResponsePost>
      </form>
    </ResponseContent>
  );
};

export default ResponsePostComponent;
