import axois from "axios";
import {GetGamesURL} from "../../api";
import {Dispatch} from "redux";

export const loadDetail = (id: string) => async (dispatch: Dispatch) =>{

    const detailData = await axois.get(GetGamesURL().gameDetailsURL(id))
    const imagesData = await axois.get(GetGamesURL().gameImagesURL(id))

    dispatch({
        type: "GET_DETAIL",
        payload: {
            game: detailData.data,
            images: imagesData.data
        }
    })
}
