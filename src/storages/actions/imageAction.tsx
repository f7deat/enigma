import { ImageAction, SET_IMAGE } from "../types/imageType"

export const setImageStore = (url: string): ImageAction => {
    return {
        type: SET_IMAGE,
        payload: url
    }
}