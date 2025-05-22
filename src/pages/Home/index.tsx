import HeaderComponent from "../../components/Header";
import {
  CarouselContentContainer,
  ContributorsSection,
  SummaryContainerComponent,
} from "./styles";
import IntroComponent from "./components/Intro";
import { HomeParent } from "./styles";
import CarouselItemComponent from "./components/CardCarousel";
import SummaryComponent from "./components/Summary";
import ImpactSectionComponent from "./components/ImpactSection";
import { Footer } from "@/components/Footer";
import HiringComponent from "./components/HiringComponent";
import ItensMoveComponent from "./components/ItensMove";
import { CardsInformation } from "./components/CardsInformation";
import { FaqComponent } from "./components/FAQ";

export function HomeComponent() {

  return (
   <>
      <HeaderComponent />
      <HomeParent>
        <IntroComponent />
      </HomeParent>
      <HiringComponent/>
      <SummaryContainerComponent>
        <SummaryComponent />
      </SummaryContainerComponent>
      <ContributorsSection>
        <CarouselContentContainer>
          <h1>Conheça nossos desenvolvedores</h1>
          <CarouselItemComponent />
        </CarouselContentContainer>
      </ContributorsSection>
      <ImpactSectionComponent />
      <ItensMoveComponent/>
     <CardsInformation/>
    <FaqComponent/>
      <Footer/>
    </>
  );
}
