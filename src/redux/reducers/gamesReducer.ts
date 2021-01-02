export type Game = {
    name: string,
    released: string,
    id: string,
    background_image: string
}

type Action = {
    type: string;
    payload: {
        popularGames?: Game[],
        upcomingGames?: Game[],
        newGames?: Game[],
        searchedGames?: Game[]
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
        case "FETCH_SEARCHED_GAMES":
            return{
                ...state,
                searchedGames: action.payload.searchedGames
            }
        case "CLEAR_SEARCHED":
            return{
                ...state,
                searchedGames: []
            }
        default:
            return {...state}
    }
}