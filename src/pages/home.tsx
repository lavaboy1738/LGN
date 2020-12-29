import React, { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import {loadGames} from "../redux/actions/gamesAction";
import {GameCard} from "../Components/GameCard";
import {RootState} from "../redux/reducers/index";
import styled from "styled-components";



const Home = ()=>{
    const dispatch = useDispatch()
    useEffect(()=>{
      dispatch(loadGames())
    }, [dispatch])

    const {popularGames, newGames, upcomingGames} = useSelector((state: RootState) => state.games)

    return (
        <div className="home">
            <GameCard/>
        </div>
    )
}

export {Home}