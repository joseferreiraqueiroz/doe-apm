import styled from "styled-components";

export const EntterWithGoogle = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    
`
export const ButtonEnterWithGoogle = styled.button`
      color: ${props => props.theme["gray-100"]};
     padding: 1rem;
     border-radius: 6px;
     transition: 0.2s;
     cursor: pointer;
     font-weight: bold;
    flex: 1;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    background-color: ${props => props.theme["gray-700"]};
    color: ${props => props.theme["gray-100"]};
    &:hover{
        background-color: ${props => props.theme["gray-600"]};
    }
`