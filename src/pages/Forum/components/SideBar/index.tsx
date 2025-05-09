import { Calendar, ChatText, Gear, HouseLine, Question } from "phosphor-react"
import { SideBarContainer, SideBarContent } from "./styles"
import { Link } from "react-router-dom"

const SideBarComponent = () => {
  return (
    <SideBarContainer>
           <SideBarContent>
               <div>
               <Link to="/"><span><HouseLine size={24} /> Início</span></Link>
                   <span><Calendar size={24} />Eventos</span>
                   <span  className="!text-violet-500"><ChatText size={24} />Fórum</span>
               </div>
               <div>
                   <span><Gear size={24}/> Configurações</span>
                   <span><Question size={24}/> Ajuda</span>
               </div>
           </SideBarContent>
         </SideBarContainer>
  )
}

export default SideBarComponent