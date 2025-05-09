import styled from "styled-components";
import { mixins } from "../../styles/fonts/mixins";

export const HomeParent = styled.div`
  background-image: url("https://www.rocketseat.com.br/_next/static/media/hero-bg.7b7a884e.webp");
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const ContributorsSection = styled.div`
  background-color: ${props => props.theme["gray-900"]};

`
export const CarouselContentContainer = styled.div`
  max-width: 70rem;
  width: 100%;
  margin: 0 auto;
  padding: 3rem 0;
  border-bottom: 2px solid ${props => props.theme["gray-600"]};
  h1{
    font: ${mixins.fonts.titleL};
    padding-bottom: 2rem;
  }
`
export const SummaryContainerComponent = styled.div`
  background-color: ${props => props.theme["gray-900"]};
  padding: 2rem 0
`
