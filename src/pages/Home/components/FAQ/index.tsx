import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { IntroText } from "../Intro/styles";
import { FaqContainer } from "./styles";
import { WhatsappLogo } from "phosphor-react";

export function FaqComponent() {
  return (
    <FaqContainer>
      <div className="flex !max-w-[70rem] !m-auto  px-4 gap-[4rem]">
        <div className="!my-[3rem] flex flex-col gap-5">
          <IntroText className="w-[100px] text-2xl">FAQ_</IntroText>
          <span className="text-3xl font-bold leading-tight">
            Perguntas e respostas mais frequentes
          </span>
        </div>
        <div className="!my-[3rem] !py-[3rem] w-[70rem]">
          <Accordion type="single" collapsible className="text-2xl">
            <AccordionItem value="item-1">
              <AccordionTrigger className="!py-[1rem] !text-xl font-semibold ">
                Como posso fazer uma doação para a APM?
              </AccordionTrigger>
              <AccordionContent className="!pb-[1rem] leading-relaxed text-zinc-400">
                Você pode doar via Pix usando a chave da APM da escola. Os dados
                são exibidos na página inicial e o valor vai direto para a conta
                da APM.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="!py-[1rem] !text-xl font-semibold">
                Para onde vai o dinheiro das doações?
              </AccordionTrigger>
              <AccordionContent className="!pb-[1rem] leading-relaxed text-zinc-400">
                Todo valor arrecadado vai para a conta da APM e é utilizado em
                melhorias na escola, como infraestrutura, materiais didáticos e
                apoio aos alunos.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="!py-[1rem] !text-xl font-semibold">
                As doações são seguras?
              </AccordionTrigger>
              <AccordionContent className="!pb-[1rem] leading-relaxed text-zinc-400">
                Sim, as doações via Pix são seguras e vão diretamente para a
                conta oficial da APM, sem intermediários.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="!py-[1rem] !text-xl font-semibold">
                Posso acompanhar como o dinheiro é usado?
              </AccordionTrigger>
              <AccordionContent className="!pb-[1rem] leading-relaxed text-zinc-400">
                Sim. A prestação de contas é divulgada regularmente no site da
                escola e em reuniões da APM, promovendo total transparência.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="!py-[1rem] !text-xl font-semibold">
                Quem pode doar?
              </AccordionTrigger>
              <AccordionContent className="!pb-[1rem] leading-relaxed text-zinc-400">
                Qualquer pessoa pode contribuir: pais, alunos, ex-alunos,
                professores e membros da comunidade em geral.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger className="!py-[1rem] !text-xl font-semibold">
                Posso doar um valor pequeno?
              </AccordionTrigger>
              <AccordionContent className="!pb-[1rem] leading-relaxed text-zinc-400">
                Sim! Toda contribuição é bem-vinda, independentemente do valor.
                Pequenas doações somadas fazem grande diferença no dia a dia da
                escola.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger className="!py-[1rem] !text-xl font-semibold">
                Preciso me identificar para doar?
              </AccordionTrigger>
              <AccordionContent className="!pb-[1rem] leading-relaxed text-zinc-400">
                Não é necessário se identificar. As doações via Pix podem ser
                anônimas, mas você também pode incluir uma mensagem na
                transferência, se desejar.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger className="!py-[1rem] !text-xl font-semibold">
                 Quais tipos de itens são comprados com as doações?
              </AccordionTrigger>
              <AccordionContent className="!pb-[1rem] leading-relaxed text-zinc-400">
                  As doações são usadas para adquirir materiais pedagógicos, livros, uniformes para alunos em vulnerabilidade, equipamentos de informática, itens de manutenção da escola e apoio a projetos culturais e esportivos.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9">
              <AccordionTrigger className="!py-[1rem] !text-xl font-semibold">
                Como posso sugerir o uso dos recursos doados?
              </AccordionTrigger>
              <AccordionContent className="!pb-[1rem] leading-relaxed text-zinc-400">
                Você pode participar das reuniões da APM ou entrar em contato
                com a direção da escola para sugerir ideias e acompanhar os
                projetos em andamento.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="w-full bg-zinc-800 rounded-md !mt-[2rem]">
            <div className="flex items-center justify-between !p-6">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <span className="w-[3rem] h-[3rem] flex items-center justify-center bg-teal-700 rounded-full"><WhatsappLogo size={24}/></span>
                        <span className="text-xl">Ficou com alguma dúvida? </span>
                    </div>
                    <span className="text-sm text-zinc-500">Envie uma mensagem e converse com uma pessoa real.</span>
                </div>
                <button className="rounded-md bg-teal-700 text-white font-semibold !px-[2rem] !py-[1rem] cursor-pointer hover:bg-teal-600 duration-200">Chamar no whatsapp</button>
            </div>
          </div>
        </div>
      </div>
    </FaqContainer>
  );
}
