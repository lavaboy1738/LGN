import axios from "axios";
import {Dispatch} from "redux";
import {GetGamesURL} from "../../api";



export const loadGames = () => async(dispatch: Dispatch)=>{
    const gamesURLs = GetGamesURL();
    const popularGamesData = await axios.get(gamesURLs.popularGamesURL)
    const upcomingGamesData = await axios.get(gamesURLs.upcomingGamesURL)
    const newGamesData = await axios.get(gamesURLs.newGamesURL)
    dispatch({
        type: "FETCH_GAMES",
        payload: {
            popularGames: popularGamesData.data.results,
            upcomingGames: upcomingGamesData.data.results,
            newGames: newGamesData.data.results
        },
    })
}