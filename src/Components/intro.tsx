import React from "react";
import styled, {keyframes} from "styled-components";
// import from "vivus"

const logoAnimation = keyframes`
    0%{
        transform: scale(0);
        opacity: 0;
    }
    100%{
        opacity: 1;
        transform: scale(1);
    }
`

const titleAnimation= keyframes`
    0%{
        left: -0%;
    }
    100%{
        left: 120%;
    }
`

const pageAnimation = keyframes`
    0%{
        opacity:1;
        top: 0%;
    left: 0%;
    }
    99%{
        opacity: 0;
        top: 0%;
    left: 0%;
    }
    100%{
        opacity: 0;
        top: -100%;
    left: -100%;
    }
`

const IntroStyles = styled.div`
    position: absolute;
    top: -100%;
    left: -100%;
    height: 100%;
    width: 100%;
    background-color: #f6c9a0;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: 0.3s ${pageAnimation} ease 2s backwards;
    .content{
        text-align: center;
        .title{
            font-size: 1.2rem;
            font-weight: 200;
            text-align: center;
            padding-top: 0.6rem;
            position: relative;
            overflow: hidden;
            ::before{
                content: "";
                position: absolute;
                top: 0%;
                left: 120%;
                width: 100%;
                height: 100%;
                background-color: #f6c9a0;
                animation: 0.6s ${titleAnimation} ease 0.7s backwards;
            }
        }
        svg{
            animation: 0.7s ${logoAnimation} cubic-bezier(1,.06,.57,1.44)
        }
    }
`



const Intro = () => {


    return (
        <IntroStyles>
            <div className="content">
                <svg width="100" height="87" viewBox="0 0 100 87" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M67.494 14.7075L75.9853 6.12184e-06L0 0L37.9926 65.8052L46.0622 51.8284L24.6304 14.7075H67.494Z" fill="#333333"/>
                    <path d="M64.0369 21.1739L50.8778 43.9662L37.7186 21.1739L64.0369 21.1739Z" fill="#333"/>
                    <path d="M42.5905 72.67L50.3172 86.053L99.9999 3.66394e-05L84.5466 3.78854e-05L42.5905 72.67Z" fill="#333"/>
                </svg>
                <div className="title">Lava Game Network</div>
            </div>
        </IntroStyles>
    )
}

export {Intro}