import React from "react";
import styled from "styled-components";
import {motion} from "framer-motion";

const GameCardStyle = styled.div`
    height: 25rem;
    box-shadow: 0px 5px 30px rgba(0,0,0,0.2);
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    overflow: hidden;
    text-align: center;
    .game-title{
        width: 100%;
        margin-top: 1rem;
        h1{
            padding: 0 2rem 0 2rem;
            display: block;
            width: 100%;
            font-size: 1.3rem;
            font-weight: 400;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            resize: horizontal;
        }
    }
    h2{
        font-size: 1rem;
        font-weight: 200;
        margin-bottom: 1rem;
    }
    .game-image{
        width: 100%;
        flex-grow: 1;
        img{
            width: 100%;
            height: 100%;
            display: block;
            object-fit: cover;
            object-position: center;
        }
    }
`

type Prop= {
    name: string,
    released: string,
    id: string,
    imageURL: string
}

const GameCard = ({name, released, imageURL}: Prop)=>{
    return (
        <GameCardStyle>
            <div className="game-title">
                <h1>{name}</h1>
            </div>
            <h2>Release Date: {released}</h2>
            <div className="game-image">
                <img src={imageURL} alt={name}/>
            </div>
        </GameCardStyle>
    )
}

export {GameCard}