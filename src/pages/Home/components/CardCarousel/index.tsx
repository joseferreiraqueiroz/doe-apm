import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";
  import { CardContainer, CarouselContainer } from "./styles";
  import ayumiImage from '../../../../assets/ayumi.jpeg'
  import eduardo from '../../../../assets/eduardo.jpeg'
  import victor from '../../../../assets/victor.jpeg'
  

  const collaborators = [
    {
      name: "José Ítalo",
      role: "Desenvolvedor",
      avatar: "https://avatars.githubusercontent.com/octocat",
    },
      {
      name: "Victor Hugo",
      role: "Project Menager",
      avatar: [victor],
    },
    {
      name: "Laura Ayumi",
      role: "Gerente",
      avatar: [ayumiImage],
    },
    {
        name: "Matheus Pereira",
        role: "Subgerente",
        avatar: "https://avatars.githubusercontent.com/addyosmani",
      },
    {
      name: "Rhuan Rocha",
      role: "UI Designer",
      avatar: "https://avatars.githubusercontent.com/torvalds",
    },
    {
      name: "Eduardo Rodriguez",
      role: "UI Designer",
      avatar:[eduardo],
    },
  ];
  
  
  const CarouselItemComponent = () => {
    return (
      <CarouselContainer>
        <Carousel>
          <CarouselContent>
            {collaborators.map((collab, index) => (
              <CarouselItem key={index} className="basis-1/3">
                <CardContainer>
                  <div>
                    <div className="profile-data">
                      <header>{collab.name}</header>
                      <footer>{collab.role}</footer>
                    </div>
                    <div>
                      <img src={collab.avatar} alt={collab.name} className="object-cover"/>
                    </div>
                  </div>
                </CardContainer>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-transparent "/>
          <CarouselNext className="bg-transparent" />
        </Carousel>
      </CarouselContainer>
    );
  };
  
  export default CarouselItemComponent;
  