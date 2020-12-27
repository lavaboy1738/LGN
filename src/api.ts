export const PopularGamesURL: () => String = () => {
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

    const popularGames = `games?dates=${currentDateLastYear},${currentDate}&ordering=-rating&page_size=10`

    return `${base_url}${popularGames}`
}
