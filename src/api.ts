type GamesURLs = {
    popularGamesURL: string;
    upcomingGamesURL: string;
    newGamesURL: string;
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

    const popularGamesURL = `${base_url}games?dates=${currentDateLastYear},${currentDate}&ordering=-rating&page_size=12`;
    const upcomingGamesURL = `${base_url}games?dates=${currentDate},${currentDateNextYear}&ordering=-added&page_size=12`;
    const newGamesURL = `${base_url}games?dates=${currentDateLastYear},${currentDate}&ordering=-released&page_size=12`;

    return {
        popularGamesURL,
        upcomingGamesURL,
        newGamesURL
    }
}
