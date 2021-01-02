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
            background-color: rgba(0,0,0,0.3)
        }
        &::-webkit-scrollbar-thumb{
            background-color: #f6c9a0;
        }
        font-size: 16px;
        @media (max-width: 1024px){
            font-size: 12px;
        }
        @media (max-width: 500px){
            font-size: 10px;
        }
        @media (orientation: landscape) and (max-width: 1400px){
            font-size: 12px;
        }
        @media (min-width: 1500px){
            font-size: 20px;
        }
    }
    body{
        font-family: Jakarta-text;
        background-image: repeating-linear-gradient(135deg, rgba(86, 86, 86, 0.02) 0px, rgba(86, 86, 86, 0.02) 22px,rgba(202, 202, 202, 0.02) 22px, rgba(202, 202, 202, 0.02) 67px,rgba(247, 247, 247, 0.02) 67px, rgba(247, 247, 247, 0.02) 113px,rgba(135, 135, 135, 0.02) 113px, rgba(135, 135, 135, 0.02) 132px,rgba(157, 157, 157, 0.02) 132px, rgba(157, 157, 157, 0.02) 153px,rgba(53, 53, 53, 0.02) 153px, rgba(53, 53, 53, 0.02) 171px,rgba(17, 17, 17, 0.02) 171px, rgba(17, 17, 17, 0.02) 181px,rgba(179, 179, 179, 0.02) 181px, rgba(179, 179, 179, 0.02) 220px),repeating-linear-gradient(135deg, rgba(58, 58, 58, 0.02) 0px, rgba(58, 58, 58, 0.02) 41px,rgba(198, 198, 198, 0.02) 41px, rgba(198, 198, 198, 0.02) 60px,rgba(176, 176, 176, 0.02) 60px, rgba(176, 176, 176, 0.02) 99px,rgba(173, 173, 173, 0.02) 99px, rgba(173, 173, 173, 0.02) 146px,rgba(164, 164, 164, 0.02) 146px, rgba(164, 164, 164, 0.02) 167px,rgba(179, 179, 179, 0.02) 167px, rgba(179, 179, 179, 0.02) 205px,rgba(228, 228, 228, 0.02) 205px, rgba(228, 228, 228, 0.02) 230px,rgba(23, 23, 23, 0.02) 230px, rgba(23, 23, 23, 0.02) 241px),repeating-linear-gradient(135deg, rgba(190, 190, 190, 0.02) 0px, rgba(190, 190, 190, 0.02) 15px,rgba(74, 74, 74, 0.02) 15px, rgba(74, 74, 74, 0.02) 45px,rgba(98, 98, 98, 0.02) 45px, rgba(98, 98, 98, 0.02) 71px,rgba(43, 43, 43, 0.02) 71px, rgba(43, 43, 43, 0.02) 95px,rgba(131, 131, 131, 0.02) 95px, rgba(131, 131, 131, 0.02) 118px,rgba(21, 21, 21, 0.02) 118px, rgba(21, 21, 21, 0.02) 130px,rgba(77, 77, 77, 0.02) 130px, rgba(77, 77, 77, 0.02) 167px,rgba(231, 231, 231, 0.02) 167px, rgba(231, 231, 231, 0.02) 189px),linear-gradient(90deg, rgb(251, 251, 251),rgb(250, 250, 250));
    }
    a{
        text-decoration: none;
        color: inherit;
    }
`

export {GlobalStyles};