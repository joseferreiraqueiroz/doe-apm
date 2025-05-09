import styled, { css } from "styled-components";
import { mixins } from "../../../../styles/fonts/mixins";

export const SummaryContainer = styled.div`
    display: flex;
    gap: 1rem;
    width: 100%;
    max-width: 70rem;
    margin: 0 auto;
`
interface SummaryProps{
    variant?: "purple"
}
export const SummaryContent = styled.div<SummaryProps>`
    width: 100%;
    background: transparent;
    border: 2px solid  ${props => props.theme["gray-800"]};
    font-family: 'Arial';
    transition: 0.2s;
    &:hover{
        background: ${props => props.theme["gray-600"]};
    }
    ${props => props.variant === "purple" && css`
        border: 2px solid ${props => props.theme["brand-purple"]};
        background: transparent;
        &:hover{
            background: ${props => props.theme["brand-purple"]};
        }
    `}

    border-radius: 6px;
    padding: 2rem;

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    strong {
        display: block;
        font: ${mixins.fonts.titleL};
        margin-top: 1rem;
    }
`;