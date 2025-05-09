import IntroForumComponent from "./components/Intro"
import HeaderComponentForum from "./components/Header"
import { useContext, useEffect } from "react";
import { AuthContext } from "@/context/context";
import { useNavigate } from "react-router-dom";


const ForumPage = () => {
  const navigate = useNavigate()
  const { isAuthenticate } = useContext(AuthContext)

  useEffect(() => {
      if (!isAuthenticate) {
        navigate("/");
      } 
      else{
        navigate('/forumPage')
      }
    }, [isAuthenticate, navigate]);
  
  return (
    <>
        <HeaderComponentForum/>
        <IntroForumComponent/>
    </>
  )
}

export default ForumPage