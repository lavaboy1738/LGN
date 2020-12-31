import React, { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import {Game} from "../redux/reducers/gamesReducer";
import {loadGames} from "../redux/actions/gamesAction";
import {GameCard} from "../Components/GameCard";
import {RootState} from "../redux/reducers/index";
import styled from "styled-components";
import {GameDetail} from "../Components/GameDetail";
import {useLocation} from "react-router-dom";
import {motion, AnimatePresence, AnimateSharedLayout} from "framer-motion";

const HomeStyles = styled.div`
    padding: 2vw 4vw;
`

const GamesPreviewStyles = styled(motion.div)`
    .games-preview-title{
        padding: 1rem 0;
    }
    .games-preview-games{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
        grid-column-gap: 3rem;
        grid-row-gap: 3rem;
    }
`

const Home = ()=>{
    const location = useLocation();
    const pathID = location.pathname.split("/");
    const dispatch = useDispatch()
    useEffect(()=>{
      dispatch(loadGames())
    }, [dispatch])

    const {popularGames, upcomingGames, newGames}= useSelector((state: RootState) => state.games)

    return (
        <HomeStyles>
            <AnimateSharedLayout type="crossfade">
            <AnimatePresence>
                {pathID[pathID.length-1] && <GameDetail pathID={pathID[pathID.length-1]}/>}
            </AnimatePresence>
            <GamesPreviewStyles>
                <h1 className="games-preview-title">Popular Games</h1>
                <div className="games-preview-games">
                    {
                        popularGames?
                        popularGames.map((game: Game)=>{
                            return (
                                <GameCard 
                                name={game.name} 
                                released = {game.released} 
                                id={game.id}
                                imageURL={game.background_image} 
                                key={game.id}/>
                            )
                        })
                        :
                        undefined
                    }
                </div>
            </GamesPreviewStyles>
            <GamesPreviewStyles>
                <h1 className="games-preview-title">New Games</h1>
                <div className="games-preview-games">
                    {
                        newGames?
                        newGames.map((game: any)=>{
                            return (
                                <GameCard 
                                name={game.name} 
                                released = {game.released} 
                                id={game.id}
                                imageURL={game.background_image} 
                                key={game.id}/>
                            )
                        })
                        :
                        undefined
                    }
                </div>
            </GamesPreviewStyles>
            <GamesPreviewStyles>
                <h1 className="games-preview-title">Upcoming Games</h1>
                <div className="games-preview-games">
                    {
                        upcomingGames?
                        upcomingGames.map((game: any)=>{
                            return (
                                <GameCard 
                                name={game.name} 
                                released = {game.released} 
                                id={game.id}
                                imageURL={game.background_image} 
                                key={game.id}/>
                            )
                        })
                        :
                        undefined
                    }
                </div>
            </GamesPreviewStyles>
            </AnimateSharedLayout>
        </HomeStyles>
    )
}

export {Home}