import { IntroText } from "../Intro/styles";

export function CardsInformation() {
  const cards = [
    {
      title: 'Transforme a Educação',
      description:
        'Sua doação ajuda a melhorar a estrutura da escola, garantindo um ambiente mais acolhedor e moderno para nossos alunos.',
  
    },
    {
      title: 'Apoie Projetos Sociais',
      description:
        'Contribua para atividades extracurriculares e programas que incentivam o desenvolvimento pessoal e social das crianças.',
  
    },
    {
      title: 'Invista no Futuro',
      description:
        'Com seu apoio, promovemos ações que ajudam nossos alunos a crescerem preparados para os desafios do mundo.',
    
    },
    {
      title: 'Fortaleça a Comunidade Escolar',
      description:
        'Doar é fortalecer o vínculo entre pais, professores e alunos, criando uma escola mais unida e participativa.',
   
    },
    {
      title: 'Transparência e Responsabilidade',
      description:
        'Aqui, cada centavo é usado com responsabilidade para garantir que sua contribuição gere o máximo impacto.',
    
    },
    {
      title: 'Pequenas doações, Grandes Resultados',
      description:
        'Não importa o valor, toda ajuda faz a diferença na vida das crianças e no futuro da nossa escola.',

    },
  ];

  return (
    <div className="min-h-[700px] !mb-[4rem] flex flex-col items-center !max-w-[90rem] !w-full !m-auto">
        <IntroText className="!mb-4">Doe com propósito
</IntroText>
      <h1 className="text-4xl font-semibold !mb-[3rem]">POR QUE DOAR</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((e, index) => (
          <div
            key={index}
            className="w-[400px] h-[250px] border-zinc-800 border-2 !p-8 flex flex-col gap-4 rounded-lg 
              shadow-md 
              transform 
              transition-transform 
              duration-300 
              ease-out 
              hover:scale-105
              cursor-pointer"
            
          >
            <span className="text-2xl font-semibold "
            >{e.title}</span>
            <p className="text-sm text-zinc-500">{e.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
