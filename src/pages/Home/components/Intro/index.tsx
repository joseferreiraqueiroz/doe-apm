import ReactPlayer from "react-player";
import {
  CampainHighlit,
  DonationSocial,
  GradientText,
  IntroContainer,
  IntroContent,
  IntroText,
  VideoPlayer,
  VideoPlayerContent,
  VideoPlayerText,
} from "./styles";
import Logo from '../../../../assets/Logo.svg'
import { useState } from "react";
import { Link } from "react-router-dom";


const IntroComponent = () => {
  const [playVideo, setPlayVideo] = useState(false)
 
  return (
    <IntroContainer>
      <IntroText>Sua jornada na educação começa aqui!_</IntroText>
      <IntroContent>
        <h1>
          Doações <GradientText>transformam</GradientText> o mundo
        </h1>
        <p>
          <strong>Capte mais recursos com tecnologia e inovação social</strong>.
          Tenha uma plataforma de doação para chamar de sua. Vá mais longe com
          estratégias e design sob-medida.
        </p>
        <DonationSocial>
          <Link to="/forumPage"><button>Quero fazer uma doação</button></Link>
          <div>
            <span>+50mil arrecadados</span>
            <span>+3000 alunos beneficiados</span>
          </div>
        </DonationSocial>
      </IntroContent>
      <CampainHighlit>
        <span>🎓 Educação de Qualidade</span>
        <span>💖 Amor Comunitário</span>
        <span>📚 Novos Livros</span>
        <span>📈 Progresso Real</span>
        <span>🧑‍🎓 Cada Aluno</span>
        <span>🧰 Ferramentas Escolares</span>
        <span>📦 Apoio às Famílias</span>

        <span>🖥️ Inclusão Digital</span>
      </CampainHighlit>
      <VideoPlayer>
        <VideoPlayerText>
          <div>
            <img src={Logo} alt="" />
            <span>DOE APM</span>
          </div>
          <h1>Conheça um pouco do nosso projeto</h1>
          <p>
            No vídeo ao lado você vai descomplicar as dúvidas sobre nosso
            projeto e descobrir qual o nosso objetivo
          </p>
          <button onClick={() => setPlayVideo(true)}>Quero conhecer</button>
        </VideoPlayerText>
        <VideoPlayerContent>
        {playVideo? (
            <ReactPlayer
            url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            playing
            controls
            width="100%"
          />
        ) : (
          <ReactPlayer
          url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          controls
          width="100%"
        />
        )}
        </VideoPlayerContent>
      </VideoPlayer>
    </IntroContainer>
  );
};

export default IntroComponent;
