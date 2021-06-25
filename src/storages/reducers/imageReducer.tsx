import { ADD_IMAGE, SET_IMAGE } from "../types/imageType"

const initialState = {
    image: null,
    listImage: []
}

const imageReducer = (state = initialState, action: any): any => {
    switch (action.type) {
        case SET_IMAGE: {
            return {
                ...state,
                image: action.payload
            }
        }
        case ADD_IMAGE: {
            return {
                ...state,
                listImage: [...state.listImage, action.payload]
            }
        }
        default:
            return state
    }
}

export default imageReducer