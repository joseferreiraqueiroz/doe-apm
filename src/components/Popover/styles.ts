import { mixins } from "@/styles/fonts/mixins";
import styled, { css } from "styled-components";

interface ButtonProps{
    variant?: 'hover'
}

export const ButtonMyAccountForumPage = styled.button<ButtonProps>`
background-color: ${props => props.theme["brand-purple"]};
border-radius: 40%;
height: 3.5rem;
width: 3.5rem;
display: flex;
align-items: center;
justify-content: center;
padding: 1rem;
font-weight: bold;
font: ${mixins.fonts.textL};
transition: 0.2s;
cursor: pointer;
${props => props.variant === 'hover' && css`
    &:hover{
    background-color: ${props => props.theme["brand-purple-dark"]};
    }
`}
`


export const ButtonForum = styled.button`
        background-color: ${props => props.theme["brand-purple"]};
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 6px;
        font-weight: bold;
        height: 3.125rem;
        padding: 0 1rem;
        font-weight: bold;
        transition: 0.2s;
        cursor: pointer;
        transition: 0.2s;
        &:hover{
            background-color: ${props => props.theme["brand-purple-dark"]};
        }
`