import {
    Container,
    Content,
    Section,
    Logo,
    FooterLink,
    SocialIcons,
    Copyright,
  } from './styles';
  
  import { InstagramLogo, FacebookLogo, Envelope } from 'phosphor-react'
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  export function Footer() {
    return (
      <Container>
        <Content>
          <Section>
            <Logo>APM Solidária</Logo>
            <p>Conectando pessoas para transformar vidas através da educação.</p>
          </Section>
  
          <Section>
            <strong>Navegação</strong>
            <FooterLink onClick={() =>{
              scrollToTop()
            }}>Início</FooterLink>
            <FooterLink href="#doar">Como Doar</FooterLink>
            <FooterLink href="#projetos">Projetos</FooterLink>
            <FooterLink href="#equipe">Nossa Equipe</FooterLink>
          </Section>
  
          <Section>
            <strong>Contato</strong>
            <FooterLink href="mailto:contato@apm.org.br">
              <Envelope /> contato@apm.org.br
            </FooterLink>
          </Section>
  
          <Section>
            <strong>Redes sociais</strong>
            <SocialIcons>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <InstagramLogo />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <FacebookLogo />
              </a>
            </SocialIcons>
          </Section>
        </Content>
  
        <Copyright>
          © 2025 APM Solidária. Todos os direitos reservados.
        </Copyright>
      </Container>
    );
  }