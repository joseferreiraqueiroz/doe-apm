import { ArrowCircleUp, CurrencyDollar, User } from "phosphor-react"
import { SummaryContainer, SummaryContent } from "./styles"
import { useTheme } from "styled-components"
const SummaryComponent = () => {
  
  const theme = useTheme()
  return (
    <SummaryContainer>
        <SummaryContent>
            <header>
                Total de doadores
                <ArrowCircleUp size={32} 
                color={theme["brand-purple"]}
                weight="bold"
                />
                </header>
                <strong>5000</strong>
        </SummaryContent>
        <SummaryContent>
            <header>
                Total arrecadado
                <CurrencyDollar size={32} 
                color={theme["brand-purple"]}
                weight="bold"
                />
                </header>
                <strong>5000</strong>
        </SummaryContent>
        <SummaryContent variant="purple">
            <header>
               Maior doador
                <User size={32}
                color={theme["white"]}
                weight="bold"
                />
                </header>
                <strong>João Frango</strong>
        </SummaryContent>
    </SummaryContainer>
  )
}

export default SummaryComponent