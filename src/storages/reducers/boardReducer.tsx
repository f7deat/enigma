import { SET_SIZE } from "../actions/boardAction";

const initialState = {
    width: 500,
    height: 500
}

const BoardReducer = (state = initialState, action: any): any => {
    switch (action.type) {
        case SET_SIZE: 
            return {
                ...state,
                width: action.payload.width,
                height: action.payload.height
            }
        default:
            return state;
    }
}

export default BoardReducer