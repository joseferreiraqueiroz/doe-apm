import styled from "styled-components";

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background-color: ${props => props.theme["gray-900"]};
    padding: 1rem 2rem;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 5;
`
export const HeaderButtons = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;

    span{
        background-color: ${props => props.theme["gray-800"]};
        border-radius: 6px;
        height: 3.125rem;
        width: 3.125rem;
        padding: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 0.2s;
        &:hover{
            background: ${props => props.theme["gray-600"]};
        }
    }
`
const BaseButton = styled.button`
height: 3.125rem;
padding: 0 1rem;
display: flex;
align-items: center;
gap: 0.75rem;
border: 0;
color: ${props => props.theme.white};
font-weight: bold;
border-radius: 6px;
transition: 0.2s;
cursor: pointer;
`
export const ButtonLogin = styled(BaseButton)`
    background-color: transparent;
    &:hover{
        background: ${props => props.theme["gray-800"]};
    }
`

export const NavBar = styled.nav`
    background-image: url("https://www.rocketseat.com.br/_next/static/media/top-banner-offer-anniversary.3785e621.webp");
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    gap: 1rem;
    a{
        color:${props => props.theme.white};
        transition: 0.2s;
        font-weight: bold;
        &:hover{
            color: ${props => props.theme["gray-300"]};
            
        }
    }
    .spanSVG{
        width: 3.125rem;
        height: 2.125rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #10564e;
        border-radius: 6px;
        border: 1px solid #0b4a43;
        svg{
            color: #68ddbd 
            ;
        }
        
    }
`