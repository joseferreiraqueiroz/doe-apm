import { mixins } from "@/styles/fonts/mixins";
import styled from "styled-components";

export const LoginFormContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 1rem;
    position: relative;
    .returnHome{
        position: absolute;
        top: 1rem;
        left: 1rem;
        color:${props => props.theme["gray-300"]}
    }
`
const BaseButton = styled.button`
     color: ${props => props.theme["gray-100"]};
     padding: 1rem;
     border-radius: 6px;
     transition: 0.2s;
     cursor: pointer;
     font-weight: bold;
`
export const LoginFormContent = styled.div`
    background-color: ${props => props.theme["gray-800"]};
    width: 40rem;
    padding: 3rem ;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    form{
        display: flex;
        flex: 1;
        flex-direction: column;
        gap: 1rem;
        input{
            background-color: ${props => props.theme["gray-900"]};
            border: 0;
            padding: 1rem;
            height: 3.125rem;
            &::placeholder{
                color: ${props => props.theme["gray-500"]};
            }
        }
        span{
                font: ${mixins.fonts.textXS};
                color: ${props => props.theme["red-300"]};
            }
        label{
            color: ${props => props.theme["gray-300"]};
            font:${mixins.fonts.textS}
        }
    }
`
export const EnterYourAccount = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    span{
        font: ${mixins.fonts.titleM};
        color: ${props => props.theme["gray-300"]};
    }
`

export const ButtonEnterLogin = styled(BaseButton)`
    background-color: ${props => props.theme["brand-purple"]};
     &:not(:disabled):hover{
         background-color: ${props => props.theme["brand-purple-dark"]};
     }
     &:disabled{
        background-color: ${props => props.theme["brand-purple-dark"]};
        cursor: not-allowed
     }
`

export const EnterRegisterContainer = styled.div`
    background-color: ${props => props.theme["gray-700"]};
    border-radius: 6px;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: 0.2s;
    div{
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
        a{
            font: ${mixins.fonts.textS};
            color: ${props => props.theme["brand-purple-light"]};
        }
    }
    svg{
        color: ${props => props.theme["brand-purple"]};
    }
    &:hover{
        background-color: ${props => props.theme["gray-600"]};
    }
`