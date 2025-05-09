import { mixins } from "@/styles/fonts/mixins"
import styled from "styled-components"

export const ItensMove = styled.div`
  background: #0d0d0d ;
  padding: 3rem 0;
`
export const ItensMoveContent = styled.div`
  width: 30%;
  margin: 0 auto; 
  gap: 1rem;
  span{
  background-color: black;
  padding: 0.25rem 2rem;
  border-radius: 6px;
  border: 1px solid transparent; 
  background-clip: padding-box;  
  border-image: linear-gradient(90deg, 
    ${props => props.theme['gray-400']}, 
    ${props => props.theme['gray-500']}, 
    ${props => props.theme['gray-600']}, 
    ${props => props.theme['gray-700']}
  ) 1;
  }
  text-align: center;
  p{
    font: ${mixins.fonts.titleL};
    font-weight: 400;
    margin-top: 2rem;
  }
`
export const FaqContainer = styled.div`
  max-width: 60rem;
  margin: 0 auto;
  margin-top: 2rem;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
  h3{
    font: ${mixins.fonts.titleM};
    font-weight: 500;
    width: 60%;
  }
  p{
    font: ${mixins.fonts.textM};
    color: ${props => props.theme["gray-300"]};
  }
  div{
    border: 1px solid ${props => props.theme["gray-700"]};
    padding: 2rem;
    width: 18rem;
    height: 19rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    transition: 0.2s;
    &:hover{
      background-color: ${props => props.theme["gray-900"]};
    }
    span{
      width: 3.125rem;
      height: 3.125rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(
                to top,
             ${props => props.theme["gray-900"]},
            ${props => props.theme["gray-800"]}
            );
    }
    h3{
      font: ${mixins.fonts.titleM};
    }
    button{
      border: 0;
      padding: 1rem;
      border-radius: 6px;
      background-color: ${props => props.theme["gray-700"]};
      transition: 0.2s;
      font-weight: bold;
      cursor: pointer;
      &:hover{
        background-color: ${props => props.theme["brand-purple"]}
        ;
      }
    }
  }
`
