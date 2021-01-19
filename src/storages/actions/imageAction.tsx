import { ImageAction, SET_IMAGE } from "../types/imageType"

export const setImageStore = (file: any): ImageAction => {
    return {
        type: SET_IMAGE,
        payload: file
    }
}