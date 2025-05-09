import { mixins } from "@/styles/fonts/mixins";
import styled from "styled-components";

export const CarouselContainer = styled.div`
    width: 100%;
    display: flex;
    gap: 1rem;
`

  
  export const CardContainer = styled.div`
    border-radius: 6px;
    background: transparent;
    border: 1px solid ${props => props.theme["gray-600"]};
    padding: 1.5rem;
    margin: 0 0.5rem;
    img {
      height: 80px;
      width: 80px;
      border-radius: 50%;
      border: 2px solid ${props => props.theme['gray-600']};
    }
  
    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
  
      .profile-data {
        display: flex;
        flex-direction: column;
        gap: 1rem;
  
        header {
          font-weight: bold;
          font: ${mixins.fonts.titleM};
        }
  
        footer {
          font: ${mixins.fonts.textS};
        }
      }
    }
  `;