import { ImageAction, SET_IMAGE } from "../types/imageType"

const initialState = {
    image: null
}

const imageReducer = (state = initialState, action: ImageAction): any => {
    switch (action.type) {
        case SET_IMAGE: {
            return {
                ...state,
                image: action.payload
            }
        }
        default:
            return state
    }
}

export default imageReducer