import ReactPlayer from "react-player";
import {

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
    <>
    <IntroContainer>
      <IntroText>Sua jornada na educação começa aqui!_</IntroText>

      <IntroContent className="flex flex-col gap-2">
        <h1>
          Faça a diferença com um gesto simples: apoie a gente com doações{" "}
          <GradientText>rápidas</GradientText> e <GradientText>seguras</GradientText>!
        </h1>
        <p>
          Capte mais recursos com tecnologia e inovação social.
          Tenha uma plataforma de doação para chamar de sua. Vá mais longe com
          estratégias e design sob-medida.
        </p>
       
      </IntroContent>
     <Link to="/dataDonation">
       <button className="bg-white text-violet-500 font-bold !p-4 rounded-md hover:bg-slate-100 duration-200 cursor-pointer !mt-2">Gerenciar dados</button>
     </Link>
    </IntroContainer>

      <div className="relative w-full !mt-[12rem] !px-[20rem] h-">
<div
  className="absolute bottom-0 left-0 w-full h-[60%] z-0"
  style={{
    background: "linear-gradient(to right, #00e6c3, #ff6cff, #a259ff)"
  }}
/>
        <VideoPlayer className="relative  ">
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
            {playVideo ? (
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
      </div>

    </>
  );
};

export default IntroComponent;