import React from "react";
import styled from "styled-components";
import {motion} from "framer-motion";
import {useDispatch} from "react-redux";
import {loadDetail} from "../redux/actions/detailAction";
import {Link} from "react-router-dom";
import {resizeImage} from "../util";
import {useAnimations} from "../hooks/useAnimations";
import {useScroll} from "../hooks/useScroll";

const GameCardStyle = styled(motion.div)`
    height: 25rem;
    box-shadow: 0px 5px 30px rgba(0,0,0,0.2);
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    overflow: hidden;
    text-align: center;
    cursor: pointer;
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
                object-fit: cover;
                object-position: center;
                width: 100%;
                height: 20rem;
            }
        }
`

type Prop= {
    name: string,
    released: string,
    id: string,
    imageURL: string
}

const GameCard = ({name, released, imageURL, id}: Prop)=>{
    const dispatch = useDispatch();
    const loadDetailHandler = ()=>{
        document.body.style.overflow = "hidden";
        dispatch(loadDetail(id))
    }
    const {fadeIn} = useAnimations();
    const {element, controls} = useScroll(0.2);
    return (
        <Link to={`/game/${id}`}>
            <GameCardStyle onClick={loadDetailHandler} 
            layoutId={id.toString()} 
            variants={fadeIn}
            initial="hidden"
            ref={element}
            animate={controls}
            >

                <div className="game-title">
                    <motion.h1 layoutId={`title ${id.toString()}`} >{name}</motion.h1>
                </div>
                <h2>Release Date: {released}</h2>
                <div className="game-image">
                    <motion.img src={resizeImage(imageURL, 1280)} layoutId={`image ${id.toString()}`} alt={name}/>
                </div>
            </GameCardStyle>
        </Link>
    )
}

export {GameCard}