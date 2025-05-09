import styled from "styled-components"
import { mixins } from "@/styles/fonts/mixins"
export const SideBarContainer = styled.div`
    background-color: transparent;
    width: 14rem;
    position: fixed;
    height: 100%;
    border-right: 1px solid ${props => props.theme["gray-700"]};
    @media (max-width: 1080px) {
    display: none;
  }
`
export const SideBarContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 90%;
    div{
        margin-top: 1rem;
        display: flex;
        flex-direction: column;
        span{
            display: flex;
            align-items: center;
            gap: 0.75rem;
            font-size: ${mixins.fonts.textS};
            color: ${props => props.theme["gray-400"]};
            font-weight: bold;
            border-radius: 6px;
            padding: 1rem;
            transition: 0.2s;
            cursor: pointer;
          &:hover{
            background-color: ${props => props.theme["gray-700"]};
          }
        }
    }
`