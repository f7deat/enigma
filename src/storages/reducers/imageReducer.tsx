import { ImageAction, SET_IMAGE } from "../types/imageType"

const initialState = {
    url: 'zz'
}

const imageReducer = (state = initialState, action: ImageAction) => {
    switch (action.type) {
        case SET_IMAGE: {
           return {
            ...state,
            url: action.payload
           }
        }
        default:
          return state
      }
}

export default imageReducer