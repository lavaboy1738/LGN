import React, { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import {loadGames} from "../redux/actions/gamesAction";
import {GameCard} from "../Components/GameCard";
import {RootState} from "../redux/reducers/index";
import styled from "styled-components";

const HomeStyles = styled.div`
    border: 1px solid red;
    padding: 4vw;
`

const GamesPreviewStyles = styled.div`
    .games-preview-title{
        padding: 1rem 0;
    }
    .games-preview-games{
        min-height: 80vh;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
        grid-column-gap: 3rem;
        grid-row-gap: 3rem;
    }
`

const Home = ()=>{
    const dispatch = useDispatch()
    useEffect(()=>{
      dispatch(loadGames())
    }, [dispatch])

    const {popularGames, upcomingGames, newGames}= useSelector((state: RootState) => state.games)

    return (
        <HomeStyles>
            <GamesPreviewStyles>
                <h1 className="games-preview-title">Popular Games</h1>
                <div className="games-preview-games">
                    {
                        popularGames?
                        popularGames.map((game: any)=>{
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
        </HomeStyles>
    )
}

export {Home}