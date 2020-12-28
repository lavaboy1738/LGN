const initState = {
    popularGames: [],
    newGames: [],
    upcomingGames: [],
    searchedGame: []
}

type Action = {
    type: string;
}

export const gamesReducer = (state = initState, action: Action) => {
    switch(action.type){
        case "FETCH_GAMES":
            return {...state}
        default:
            return {...state}
    }
}