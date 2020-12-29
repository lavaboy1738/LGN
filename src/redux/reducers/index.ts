import {combineReducers} from "redux";
import {gamesReducer} from "./gamesReducer";

export const rootReducer = combineReducers({
    games: gamesReducer
})

export type RootState = ReturnType<typeof rootReducer>