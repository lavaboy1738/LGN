const initState = {
    popularGames: [],
    newGames: [],
    upcomingGames: [],
    searchedGame: ""
}

type Action = {
    type: string;
    payload: {
        popularGames?: any[],
        upcomingGames?: any[],
        newGames?: any[]
    }
}

export const gamesReducer = (state: any, action: Action) => {
    switch(action.type){
        case "FETCH_GAMES":
            return {...state, 
                popularGames: action.payload.popularGames, 
                upcomingGames: action.payload.upcomingGames, 
                newGames: action.payload.newGames
            }
        default:
            return {...state}
    }
}