const initialState = {
    game: undefined,
    images: undefined,
    isLoading: true
}

type Action = {
    type: string;
    payload: {
        game: any,
        images: any
    }
}

const detailReducer = (state = initialState, action: Action)=>{
    switch(action.type){
        case "GET_DETAIL":
            return {
                ...state,
                game: action.payload.game,
                images: action.payload.images,
                isLoading: false
            }
        case "LOADING_DETAIL":
            return {
                ...state,
                isLoading: true
            }
        default:
            return{
                ...state
            }
    }
}

export {detailReducer}