import styled from "styled-components"

export const ResponsePost = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 2rem;
`
export const Button = styled.button`
        height: 3.125rem;
        padding: 0 1rem;
        cursor: pointer;
        transition: 0.2s;
        font-weight: bold;
        border: 0;
        background-color: ${props => props.theme["brand-purple"]};   
        border-radius: 6px;
        &:hover{
            background-color: ${props => props.theme["brand-purple-dark"]};
        }

`
export const ResponseContent = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    border-radius:  6px;
    position: relative;
    transition: 0.2s;
    &::before{
        content: '';
        position: absolute;
        top: 2rem;
        left: 0;
        width: 20px;
        height: 20px;
        background-color:${props => props.theme["gray-850"]};
        transform: skew(-30deg);
        transform-origin: top left;
    }
`
export const TextAreaContent = styled.div`
    background-color: ${props => props.theme["gray-850"]};
    min-height: 10rem;
    padding: 2rem;
    transition: 0.2s;
    form{
        word-break: break-all;
    }
`
export const FooterResponsePost = styled.div`
    background-color: ${props => props.theme["gray-800"]};
    display: flex;
    padding: 1rem;
    border-radius: 0 0 6px 6px;
    justify-content: flex-end;
    `