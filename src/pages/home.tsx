import React, { useEffect } from "react";
import {useDispatch} from "react-redux";
import {loadGames} from "../redux/actions/gamesAction";

const Home = ()=>{
    const dispatch = useDispatch()
    useEffect(()=>{
      dispatch(loadGames())
    })
    return (
        <div className="home">
            
        </div>
    )
}

export {Home}