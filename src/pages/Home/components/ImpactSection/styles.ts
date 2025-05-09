import { mixins } from "@/styles/fonts/mixins";
import styled from "styled-components";

export const ImpactSectionContainer = styled.div`
       background-color: ${props => props.theme["gray-900"]};
       padding: 0 0 2rem;
`
export const ImpactSectionContent = styled.div`
    margin: 0 auto;
    padding: 4rem 0;
    max-width: 70rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    div{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        h3{
            font: ${mixins.fonts.titleM};
        }
        p{
            color: ${props => props.theme["gray-300"]}
        }
        span{
            width: 3.125rem;
            height: 3.125rem;
            background: linear-gradient(
                to top,
             ${props => props.theme["gray-800"]},
            ${props => props.theme["gray-600"]}
            );
            border-radius: 6px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
`