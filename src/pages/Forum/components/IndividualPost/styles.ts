import styled from "styled-components";

export const IndividualPostContainer = styled.div`
    width: 100%;
    max-width: 60rem;
    display: flex;
    flex-direction: column;
    margin: 2rem auto;
    gap: 2rem;
    padding: 0 1rem;
`
export const ContainerPost = styled.div`
    display: flex;
    gap: 2rem;
  
    max-width: 70rem;
    img{
          width: 60px ;
          height: 60px;
        border-radius: 50%;
        outline: 2px solid ${props => props.theme["gray-300"]};
        margin-top: 3rem;
    }
   
`
export const PostContent = styled.div`
    background-color: ${props => props.theme["gray-800"]};
    border-radius: 6px;
    display: flex;
    width: 100%;
    flex: 1;
    justify-content: space-between;
    padding: 2rem;
    position: relative;
    &::before{
        content: '';
         position: absolute;
        top: 2rem;
        left: 0;
        width: 20px;
        height: 20px;
        background-color:${props => props.theme["gray-800"]};
        transform: skew(-30deg);
        transform-origin: top left;
    }
    form{
        word-wrap: break-word;
      textarea{
            word-wrap: break-word;
            overflow-wrap: break-word;
      }
    }
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