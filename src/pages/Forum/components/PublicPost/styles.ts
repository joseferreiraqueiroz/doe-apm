import { mixins } from "@/styles/fonts/mixins";
import styled from "styled-components";

export const FooterForm = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 1rem;
`
const BaseButton = styled.button`
    border: 0;
    padding: 0 1rem;
    height: 3.125rem;
    border-radius: 6px;
    cursor: pointer;
    text-transform: uppercase;
    font: ${mixins.fonts.textS};
    font-weight: bold;
`
export const ButtonDiscard = styled(BaseButton)`
    color: ${props => props.theme["brand-purple"]};
` 
export const PublishedButton = styled(BaseButton)`
    background-color: ${props => props.theme["brand-purple-medium"]};
    transition: 0.2s;
    &:hover{
        background-color: ${props => props.theme["brand-purple"]};
    }
`
export const ButtonNoDiscard = styled(BaseButton)`
    padding: 0 2rem;
    background-color: ${props => props.theme["gray-600"]};
    transition: 0.2s;
    &:hover{
        background-color: ${props => props.theme["gray-700"]};
    }
   &:focus{
        box-shadow: none;
   }
`
export const ButtonConfirmDiscard = styled(BaseButton)`
    padding: 0 2rem;
    background-color: ${props => props.theme["brand-purple"]};
    transition: 0.2s;
    &:hover{
        background-color: ${props => props.theme["brand-purple-dark"]};
    }
`
