type Action = {
    type: string;
    payload: {
        game: any,
        images: any
    }
}

const detailReducer = (state: any, action: Action)=>{
    switch(action.type){
        case "GET_DETAIL":
            return {
                ...state,
                game: action.payload.game,
                images: action.payload.images
            }
        default:
            return{
                ...state
            }
    }
}

export {detailReducer}