import { mixins } from "@/styles/fonts/mixins";
import styled from "styled-components";

export const PageLayout = styled.div`
  display: flex;
  height: 100%; 
  margin-bottom: 3rem;
`

export const IntroForum = styled.main`
  margin: 0 auto;
  padding: 0 2rem;
  max-width: 100%;
  width: 100%;
  margin-left: 15rem;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1080px){
    max-width: 100%;
    margin: 0 auto;
}
`

export const IntroForumContent = styled.div`
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`
export const IntroText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    h3{
        font: ${mixins.fonts.titleM}
    }
    span{
        font: ${mixins.fonts.textM};
        color: ${props => props.theme["gray-300"]};
    }
`
export const RecentlyAcessed  = styled.div`
    .acess{
        font: ${mixins.fonts.titleS};
    }
`
export const CardTopicContainer = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 1rem;
margin-top: 1rem;
@media screen and (max-width: 1080px){
    display: grid;
    grid-template-columns: 1fr;
}
a{
      display: grid;
}
`
export const PublicPost = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    button{
        border: 0;
        padding: 0 1rem;
        height: 3.125rem;
        font-weight: bold;
        background: transparent;
        border: 1px solid ${props => props.theme["gray-600"]};
        border-radius: 6px;
        transition: 0.2s;
        cursor: pointer;
        &:hover{
            background-color: ${props => props.theme["brand-purple"]};
            border-color: ${props => props.theme["brand-purple"]};
        }
    }
`

export const CardTopic = styled.div`
    background-color: ${props => props.theme["gray-850"]};
    display: flex;
    cursor: pointer;
    border-radius: 8px;
    border: 1px solid ${props => props.theme["gray-700"]};
    height: 6rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0 1rem;
    overflow: hidden;
    @media screen and (max-width: 1080px){
        width: 100%;
        flex: 1
}
    img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        outline: 2px solid ${props => props.theme["gray-500"]};
    }
    div{
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
        max-width: calc(100% - 4.5rem); 
    }
    span:first-child{
        font-size: 10px;
        color: ${props => props.theme["gray-400"]};
        text-transform: uppercase;
    }
    span:last-child {
  font: ${mixins.fonts.textM};
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block; 

}
transition: 0.2s;
border-left: 3px solid transparent;
&:hover{
    background-color: ${props => props.theme["gray-800"]};
    border-left: 3px solid ${props => props.theme["brand-purple"]};
    transition: 0.2s;
}
`
export const AllPostsContent = styled.div`
    margin: 2rem 0 1rem;
`
export const AvatarUser = styled.span`
    border-radius: 50%;
    font-weight: bold;
    color: white;
    background-color: random(#0097a7,#FAFAFA,#7FB800);;
    width: 3.125rem;
    height: 3.125rem;
    display: flex;
    align-items: center;
    justify-content: center;
`