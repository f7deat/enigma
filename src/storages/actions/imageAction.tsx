import { ADD_IMAGE, SET_IMAGE } from "../types/imageType"

export const addImage = (payload: any) => {
    return {
        type: ADD_IMAGE,
        payload
    }
}

export const setImageAction = (payload: any) => {
    return {
        type: SET_IMAGE,
        payload
    }
}