import { Link } from "react-router-dom";
import SideBarComponent from "../SideBar";
import {
  AllPostsContent,
  AvatarUser,
  CardTopic,
  CardTopicContainer,
  IntroForum,
  IntroForumContent,
  IntroText,
  PageLayout,
  PublicPost,
  RecentlyAcessed,
} from "./styles";
import { useAllPosts } from "@/hooks/usePosts";
import { useContext } from "react";
import { AuthContext } from "@/context/context";
import { useGetUsers } from "@/hooks/useGetUsers";
import { UsersType } from "@/hooks/useMutationSignUp";
import { format, parseISO } from "date-fns"

interface PostTypes {
  id?: number;
  data?: string;
  titulo: string;
  conteudo: string;
  usuario_id: number 
}

const IntroForumComponent = () => {
  const { data: usersData } = useGetUsers();
  const { data } = useAllPosts();
  const { username } = useContext(AuthContext);
  const InititalLyricsUsername = username[0];

  if (!data || !usersData) {
    return <p>Carregando...</p>;
  }

  function getLyricsInitialUsername(nome: string | undefined, fallback: string) {
    if (!nome) return fallback;
    const partes = nome.trim().split(" ");
    const primeiraLetra = partes[0]?.charAt(0).toUpperCase() || "";
    const segundaLetra = partes[1]?.charAt(0).toUpperCase() || "";
    return primeiraLetra + segundaLetra;
  }

  return (
    <PageLayout>
      <SideBarComponent />
      <IntroForum>
        <IntroForumContent>
          <IntroText>
            <h3>Fórum</h3>
            <span>
              Explore e compartilhe conhecimento com a Comunidade Doe Apm
            </span>
          </IntroText>

          <RecentlyAcessed>
            <CardTopicContainer>
              <Link to="/individualPost">
              </Link>
            </CardTopicContainer>
          </RecentlyAcessed>
        </IntroForumContent>

        <AllPostsContent>
         <div className="flex justify-between items-center">
         <IntroText>
            <h3>Todos os Posts</h3>
          </IntroText>
          <PublicPost>
              <Link to="/publicPost">
                <button>Fazer uma publicação</button>
              </Link>
            </PublicPost>
         </div>
          <RecentlyAcessed>
            <CardTopicContainer>
              {data.map((post: PostTypes) => {
                const usuario = usersData.find(
                  (user: UsersType) => user.id === post.usuario_id
                );
                const iniciais = getLyricsInitialUsername(usuario?.nome, InititalLyricsUsername);
                const dataFormatada = post.data ?format(parseISO(post.data), 'dd/MM/yyyy HH:mm'): 'data não disponível';
                return (
                  <Link to={`/individualPost/${post.id}`} key={post.id}>
                    <div className="flex items-center justify-between !mb-2">
                      <p className="text-sm flex items-center gap-2 text-zinc-400"><p className="font-semibold text-zinc-100">autor:</p> {usuario.nome}</p>
                      <p className="text-sm text-zinc-500">{dataFormatada}</p>
                    </div>

                    <CardTopic>
                      <AvatarUser
                        className="!text-white !text-[18px] bg-violet-500"
                      >
                        {iniciais}
                      </AvatarUser>
                      <div>
                        <span>{post.titulo}</span>
                        <span>{post.conteudo}</span>
                      </div>
                    </CardTopic>
                  </Link>
                );
              })}
            </CardTopicContainer>
          </RecentlyAcessed>
        </AllPostsContent>
      </IntroForum>
    </PageLayout>
  );
};

export default IntroForumComponent;
