import { createGlobalStyle } from "styled-components";
import { mixins } from "./fonts/mixins";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        font-family: 'Inter', sans-serif;
        background-color: ${ props => props.theme["gray-900"]};
        color: ${ props => props.theme["gray-100"]};
        -webkit-font-smoothing: antialiased;
    }
      input, textarea, button{
       font-size: 1rem;
       font-weight: 400;
       ${mixins.fonts.textM}
        &:focus{
        outline: 0;
        box-shadow: 0 0 0 2px ${props => props.theme["brand-purple"]};
        transition: 0.4s;
    }
    }
`

