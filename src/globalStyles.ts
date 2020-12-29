import {createGlobalStyle} from "styled-components";
import "./fonts.scss";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        &::-webkit-scrollbar{
            width: 0.5rem;
            background-color: rgba(0,0,0,0.1)
        }
        &::-webkit-scrollbar-thumb{
            background-color: violet;
        }
    }
    body{
        font-family: Jakarta-text;
    }
`

export {GlobalStyles};