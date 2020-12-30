import React, { SyntheticEvent } from "react";
import styled from "styled-components";
import {useSelector} from "react-redux";
import {RootState} from "../redux/reducers/index";
import { useHistory } from "react-router-dom";
import {resizeImage} from "../util";

const GameDetailShadowStyles = styled.div`
    width: 100%;
    min-height: 100vh;
    overflow-y: scroll;
    background: rgba(0,0,0,0.4);
    position: fixed;
    top: 0;
    left: 0;
    &::-webkit-scrollbar{
        display: none;
    }
`

const GameDetailStyles = styled.div`
    width: 80%;
    border-radius: 1rem;
    margin: 5rem 0;
    padding: 2rem;
    background: white;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
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
                h2{
                    font-size: 1.5rem;
                    font-weight: 200;
                }
            }
        }
        &-right{
            width: 40%;
            text-align: right;
            margin-right: -1rem;
            &-platforms-title{
                line-height: 2rem;
                font-size: 1rem;
                margin-right: 1rem;
            }
            &-platforms{
                margin-top: 1rem;
                span{
                    margin: 0 1rem;
                }
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


const GameDetail = () => {
    const {images, game, isLoading} = useSelector((state: RootState) => state.detail);

    const history = useHistory();

    const exitDetailHandler = (e: React.MouseEvent)=> {
        if((e.target as HTMLElement).classList.contains("shadow")){
            document.body.style.overflow="auto";
            history.push("/");
        }
    }
    
    return(
        <>
            {
                !isLoading&&game&&images?
        <GameDetailShadowStyles className="shadow" onClick={exitDetailHandler}>
            <GameDetailStyles>
                <div className="info">
                    <div className="info-left">
                        <div className="info-left-title">
                            <h1>{game.name}</h1>
                        </div>
                        <div className="info-left-rating">
                            <h2>Rating: {game.rating}</h2>
                        </div>
                    </div>
                    <div className="info-right">
                        <div className="info-right-platforms-title">Platform</div>
                        <div className="info-right-platforms">
                            {
                                game.platforms.map((platform: any)=>{
                                    return <span key={platform.platform.id}>{platform.platform.name}</span>
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="main-image">
                    <img src={resizeImage(game.background_image, 1920)} alt=""/>
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