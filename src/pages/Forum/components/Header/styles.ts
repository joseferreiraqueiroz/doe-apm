
import styled from "styled-components";

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background-color: ${props => props.theme["gray-850"]};
    padding: 1rem 2rem;
    border-bottom: 1px solid ${props => props.theme["gray-600"]};
    position: sticky;
    top: 0;
    left: 0;
    z-index: 5;
    div{
        display: flex;
        align-items: center;
        gap: 1rem;
    }
        span{
            background-color: ${props => props.theme["gray-800"]};
            width: 2.125rem ;
            height: 2.125rem;
            display:flex ;
            align-items: center;
            justify-content: center;
            border-radius: 6px;
            transition: 0.2s;
        &:hover{
            background: ${props => props.theme["gray-600"]};
        }
        }
`
export const HeaderButtons = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;

    span{
        background-color: ${props => props.theme["gray-800"]};
        border-radius: 6px;
        height: 3.125rem;
        width: 3.125rem;
        padding: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 0.2s;
        &:hover{
            background: ${props => props.theme["gray-600"]};
        }
    }
`
