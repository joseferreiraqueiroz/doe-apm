import styled from "styled-components";
import { mixins } from "../../../../styles/fonts/mixins";

export const IntroContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: 70rem;
`;

export const IntroContent = styled.div`
  width: 100%;
  text-align: center;
  padding: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  h1 {
    font: ${mixins.fonts.titleXL};
    font-weight: 500;
    display: flex;
    gap: 0.75rem;
    flex-wrap: wrap;
  }
  p {
    font: ${mixins.fonts.textL};
    color: ${props => props.theme["gray-300"]};
  }
`;
export const GradientText = styled.h1`
  background: linear-gradient(90deg, #5CE1E6, #8047F8, #8047F8, #5CE1E6);
  -webkit-background-clip: text;
  color: transparent;
`
export const IntroText = styled.p`
  background-color: black;
  margin-top: 3.5rem;
  padding: 0.25rem 1rem;
  border-radius: 6px;
  border: 1px solid transparent; 
  background-clip: padding-box;  
  border-image: linear-gradient(90deg, 
    ${props => props.theme['gray-400']}, 
    ${props => props.theme['gray-500']}, 
    ${props => props.theme['gray-600']}, 
    ${props => props.theme['gray-700']}
  ) 1;
`

export const DonationSocial = styled.div`
  margin-top: 1rem;
  button{
    border: 0;
    padding: 1rem 2rem;
    font-weight: bold;
    text-transform: uppercase;
    background-color: ${props => props.theme.white};
    border-radius: 6px;
    color: ${props => props.theme["brand-purple"]};
    transition: 0.2s;
    cursor: pointer;
    &:hover{
        background-color: ${props => props.theme["gray-300"]};
    }
  }
  div{
    margin: 6rem 0 0;
    display: flex;
    align-items: center;
    gap: 5rem;
    span{
      color: ${(props) => props.theme["green-agua-500"]};
      font: ${mixins.fonts.titleM};
    }
  }
`;
export const CampainHighlit = styled.div`
     display: flex;
    align-items: center;
    gap: 0.75rem;
    flex-wrap: wrap;
    justify-content: center; 
    margin-bottom: 8.5rem;
    span{
        text-transform: uppercase;
        background: black;
        color: ${props => props.theme["gray-300"]};
        border-radius: 16px;
        padding: 0.5rem 2rem;
        border: 0.5px solid ${props => props.theme["gray-700"]};
        font: ${mixins.fonts.textXS};
        transition: 0.2s;
        &:hover{
         border: 1px solid ${props => props.theme["brand-purple"]};
         cursor: pointer;
       }
    }
`
export const VideoPlayer = styled.div`
  background-color: ${props => props.theme["gray-900"]};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding: 2rem;
`
export const VideoPlayerText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  div{
    display: flex;
    align-items: center;
    gap: 0.75rem;
    span{
      font: ${mixins.fonts.titleXS};
    }
  }
  h1{
    font-size: ${mixins.fonts.titleL};
    font-weight: 500;
  }
  p{
    font: ${mixins.fonts.textM};
    color: ${props => props.theme["gray-100"]};
  }
  button{
    border: 0;
    border-radius: 6px;
    padding: 1rem;
    background-color: ${props => props.theme["brand-purple"]};
    color: ${props => props.theme.white};
    font-weight: bold;
    transition: 0.2s;
    width: 13rem;
    cursor: pointer;
    &:hover{
      background-color: ${props => props.theme["brand-purple-dark"]};
    }
  }
`
export const VideoPlayerContent = styled.div`
  width: 100%;
  border: 10px solid ${props => props.theme["gray-800"]};
  border-radius: 8px;
`