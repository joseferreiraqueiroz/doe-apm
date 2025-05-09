import { InstagramLogo,
    FacebookLogo,
    TwitterLogo,
    YoutubeLogo
 } from "phosphor-react"
import { HiringContainer, HiringContent, HiringUsers, JoinUsContainer, SpanUnderline } from "./styles"
const HiringComponent = () => {
  return (
    <HiringContainer>
        <HiringContent>
          <JoinUsContainer>
            <SpanUnderline>
              Junte-se a nós e faça parte da mudança
            </SpanUnderline>
            <div>
              <span>
                <InstagramLogo />
              </span>
              <span>
                <TwitterLogo />
              </span>
              <span>
                <YoutubeLogo />
              </span>
              <span>
                <FacebookLogo />
              </span>
            </div>
          </JoinUsContainer>
          <HiringUsers>
           
            <img src="https://avatars.githubusercontent.com/diego3g" />
            <img src="https://avatars.githubusercontent.com/addyosmani" />
            <img src="https://avatars.githubusercontent.com/torvalds" />
            <img src="https://avatars.githubusercontent.com/octocat" />
          
            <div>
            <p>
              Mais de <strong>3000 alunos</strong> se beneficiando do nosso
              projeto, ajude nossa causa
            </p>
            </div>
          </HiringUsers>
        </HiringContent>
      </HiringContainer>
  )
}

export default HiringComponent