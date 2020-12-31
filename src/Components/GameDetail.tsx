import React from "react";
import styled from "styled-components";
import {useSelector} from "react-redux";
import {RootState} from "../redux/reducers/index";
import { useHistory } from "react-router-dom";
import {resizeImage} from "../util";
import {motion} from "framer-motion";
import halfStar from "../assets/images/half-star.svg";
import star from "../assets/images/star.svg";

const GameDetailShadowStyles = styled.div`
    width: 100%;
    min-height: 100vh;
    overflow-y: scroll;
    background: rgba(0,0,0,0.4);
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    &::-webkit-scrollbar{
        display: none;
    }
`

const GameDetailStyles = styled(motion.div)`
    width: 80%;
    border-radius: 1rem;
    margin: 5rem auto;
    padding: 2rem;
    background: white;
    position: absolute;
    left: 10%;
    z-index: 2;
    .info{
        display: flex;
        justify-content: space-between;
        &-left{
            width: 60%;
            &-title{
                h1{
                    font-size: 2rem;
                }
            }
            &-rating{
                margin-top: 0.5rem;
                h2{
                    font-size: 1rem;
                    font-weight: 200;
                }
            }
            &-stars{
                margin-top: 0.5rem;
                img{
                    width: 1.1rem;
                    height: 1.1rem;
                }
            }
        }
        &-right{
            width: 40%;
            text-align: right;
            margin-right: -1rem;
            &-platforms-title{
                font-size: 1rem;
                margin-right: 1rem;
            }
            &-platforms{
                margin-right: 1rem;
            }
        }
    }
    .main-image{
        margin: 2rem 0;
        img{
            width: 100%;
            display: block;
        }
    }
    .descriptions{
        p{
            font-size: 1.2rem;
            font-weight: 200;
            line-height: 150%;
        }
    }
    .screenshots{
        img{
            width: 100%;
            display: block;
            margin: 2rem 0;
        }
    }
`

type Prop = {
    pathID: string;
}

const GameDetail = (props: Prop) => {
    const {images, game, isLoading} = useSelector((state: RootState) => state.detail);

    const history = useHistory();

    const exitDetailHandler = (e: React.MouseEvent)=> {
        if((e.target as HTMLElement).classList.contains("shadow")){
            document.body.style.overflow="auto";
            history.push("/");
        }
    }

    const getStars = (rating: number)=>{
        const whole = Math.floor(rating);
        if(whole === 0){
            return [];
        }else{
            const partial = rating%1;
            const stars = [];
            for(let i = 1; i<=whole; i++ ){
                stars.push(<img src={star} key={i} alt=""/>)
            }
            partial < 0.5? stars.push(<img src={halfStar} key={whole+1} alt=""/>) : stars.push(<img src={star} key={whole+1} alt=""/>);
    
            return stars;
        }
    }

    return(
        <>
            {
                !isLoading&&game&&images?
        <GameDetailShadowStyles className="shadow" onClick={exitDetailHandler}>
            <GameDetailStyles layoutId ={props.pathID}>
                <div className="info">
                    <div className="info-left">
                        <div className="info-left-title">
                            <motion.h1 layoutId={`title ${props.pathID}`}>{game.name}</motion.h1>
                        </div>
                        <div className="info-left-rating">
                            {
                                game.rating === 0?
                                <h2>Rating: Not Available</h2>
                                :
                                <h2>Rating: {game.rating}</h2>

                            }
                        </div>
                        <div className="info-left-stars">
                            {
                                getStars(game.rating).map((star)=>{
                                    return star
                                })
                            }
                        </div>
                    </div>
                    <div className="info-right">
                        <div className="info-right-platforms-title">Platform</div>
                        <div className="info-right-platforms">
                            {
                                game.platforms.map((platform: any, index: number)=>{
                                    return (index === game.platforms.length-1?
                                    <span key={platform.platform.id}>{platform.platform.name}</span>
                                    :
                                    <span key={platform.platform.id}>{platform.platform.name}, </span>)
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="main-image">
                    <motion.img src={resizeImage(game.background_image, 1920)} layoutId ={`image ${props.pathID}`} alt=""/>
                </div>
                <div className="descriptions">
                    <p>{game.description_raw}</p>
                </div>
                <div className="screenshots">
                    {
                        images.results.map((image:any)=>{
                            return <img key={image.id} src={resizeImage(image.image, 1920)} alt=""/>
                        })
                    }
                </div>
            </GameDetailStyles>
        </GameDetailShadowStyles>
            :
            undefined
        }
        </>
    )
}

export {GameDetail}