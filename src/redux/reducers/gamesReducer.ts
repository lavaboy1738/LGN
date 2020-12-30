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
        newGames?: Game[]
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