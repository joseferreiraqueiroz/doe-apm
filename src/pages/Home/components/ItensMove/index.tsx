import { Lightbulb, UserPlus } from "phosphor-react"
import { FaqContainer, ItensMove, ItensMoveContent } from "./styles"
import { ArrowRightCircle } from "lucide-react"

const ItensMoveComponent = () => {
  return (
    <ItensMove>
    <ItensMoveContent>
      <span>solução completa!_</span>
      <p>
        Sua doação faz a diferença: ajude a construir um futuro melhor para
        quem mais precisa.
      </p>

    </ItensMoveContent>
    <FaqContainer>
       <div>
         <span> <Lightbulb  size={24}/></span>
          <h3>Inovação</h3>
          <p>Primeira equipe a tirar do papel o projeto de doações da APM.</p>
        </div>
        <div>
        <span>   <UserPlus  size={24}/></span>
          <h3>+30 partners</h3>
          <p>Contando com mais de 30 colaboradores.</p>
        </div>
        <div>
        <span>  <ArrowRightCircle size={24}/></span>
          <h3>Entre você também</h3>
          <p>Não perca tempo, entre para a nossa comunidade.</p>
          <button>Entrar</button>
        </div>
      </FaqContainer>
  </ItensMove>
  )
}

export default ItensMoveComponent