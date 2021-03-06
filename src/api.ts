import {APIKey} from "./key";

type GamesURLs = {
    popularGamesURL: string;
    upcomingGamesURL: string;
    newGamesURL: string;
    gameDetailsURL: (id: string)=> string,
    gameImagesURL: (id:string) => string,
    searchedGameURL: (gameName: string) => string;
}

export const GetGamesURL: () => GamesURLs = () => {
    const base_url = "https://api.rawg.io/api/";
    const date = new Date();

    const getCurrentMonth = ()=>{
        const month = date.getMonth()+1;
        return month < 10 ? `0${month}` : month;
    }

    const getCurrentDay = () =>{
        const day = date.getDate();
        return day < 10 ? `0${day}` : day;
    }

    const currentYear = date.getFullYear();
    const currentDate = `${currentYear}-${getCurrentMonth()}-${getCurrentDay()}`;
    const currentDateLastYear = `${currentYear - 1}-${getCurrentMonth()}-${getCurrentDay()}`;
    const currentDateNextYear = `${currentYear + 1}-${getCurrentMonth()}-${getCurrentDay()}`;

    const popularGamesURL = `${base_url}games?key=${APIKey}&dates=${currentDateLastYear},${currentDate}&ordering=-rating&page_size=12`;
    const upcomingGamesURL = `${base_url}games?key=${APIKey}&dates=${currentDate},${currentDateNextYear}&ordering=-added&page_size=12`;
    const newGamesURL = `${base_url}games?key=${APIKey}&dates=${currentDateLastYear},${currentDate}&ordering=-released&page_size=12`;

    const gameDetailsURL = (gameID: string) => `${base_url}games/${gameID}?key=${APIKey}`
    const gameImagesURL = (gameID:string) => `${base_url}games/${gameID}/screenshots?key=${APIKey}`
    const searchedGameURL = (gameName: string)=> `${base_url}games?key=${APIKey}&search=${gameName}&page_size=6` 

    return {
        popularGamesURL,
        upcomingGamesURL,
        newGamesURL,
        gameDetailsURL,
        gameImagesURL,
        searchedGameURL
    }
}
