type Action = {
    type: string;
    payload: {
        game: {
            name: string,
            rating: number,
            platforms: {
                platform: string,
                id: number
            }[],
            background_image: string,
            description_raw: string,
        },
        images: {
            results: {
                image: string,
                id: number
            }[]
        },
        isLoading?: boolean
    }
}

const detailReducer = (state: any, action: Action)=>{
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