import styled from "styled-components"
import { mixins } from "@/styles/fonts/mixins"

export const HiringContainer = styled.div`
    background-color: #0d0d0d  ;
    padding: 5rem;
`
export const HiringContent = styled.div`
    width: 100%;
    max-width: 70rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${props => props.theme["gray-300"]};
    font: ${mixins.fonts.textL};
   
`
export const SpanUnderline = styled.span`
padding-bottom: 1rem;
border-bottom: 1px solid ${props => props.theme["gray-400"]};
`
export const JoinUsContainer = styled.div`
      display: flex;
      flex-direction: column;
      div{
        padding: 1rem 0 0;   
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 0.75rem;
        span{
            display: flex;
            border-radius: 6px;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 3.125rem;
            background-color: ${props => props.theme["gray-800"]};
            transition: 0.2s;
            cursor: pointer;
            &:hover{
                background-color: ${props => props.theme["gray-600"]}; 
            }
        }
      }
`
export const HiringUsers = styled.div`
    display: flex;
    width: 50%;
    align-items: center;
    gap: 1rem;
        img {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            margin-left: -2rem;
    }
    p{
        font: ${mixins.fonts.textM}
    }

`