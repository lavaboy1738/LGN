import {combineReducers} from "redux";
import {gamesReducer} from "./gamesReducer";
import {detailReducer} from "./detailReducer";

export const rootReducer = combineReducers({
    games: gamesReducer,
    detail: detailReducer
})

export type RootState = ReturnType<typeof rootReducer>