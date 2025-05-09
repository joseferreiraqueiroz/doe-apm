import { GraduationCap, LockSimpleOpen, Star, User } from "phosphor-react";
import { ImpactSectionContainer, ImpactSectionContent } from "./styles";

const ImpactSectionComponent = () => {
  return (
    <ImpactSectionContainer>
     <ImpactSectionContent>
     <div>
        <span><Star size={24}/></span>
        <h3>Nota 4.9 de 5</h3>
        <p>
          Essa é a média de satisfação de quem já apoia nossos projetos
          educacionais.
        </p>
      </div>
      <div>
        <span><User size={24}/></span>
        <h3> +3.000 alunos impactados</h3>
        <p>
          Cada doação chega diretamente a quem precisa: alunos, professores e
          famílias. Todo apoio é revertido em melhorias reais na educação.
        </p>
      </div>
      <div>
        <span><GraduationCap size={24}/></span>
        <h3>+100 ações já realizadas</h3>
        <p>
          Com sua ajuda, já conseguimos distribuir materiais, renovar espaços
          escolares, oferecer reforço escolar e muito mais.
        </p>
      </div>
      <div>
        <span><LockSimpleOpen size={24}/></span>
        <h3>Transparência e resultados</h3>
        <p>
          Acompanhe de perto onde sua doação está fazendo a diferença. A APM da
          nossa escola preza por compromisso e clareza em cada ação.
        </p>
      </div>
     </ImpactSectionContent>
    </ImpactSectionContainer>
  );
};

export default ImpactSectionComponent;
