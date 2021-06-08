import { ADD_TEXT } from "../constants/text-constant"

const initialState: any = {
    text: '',
    nodes: {},
    listText: []
}

const textReducer = (state = initialState, action: any): any => {
    switch (action.type) {
        case 'SET_TEXT_NODE': {
            return {
                ...state,
                nodes: action.payload
            }
        }
        case 'SET_TEXT': {
            return {
                ...state,
                text: action.payload
            }
        }
        case ADD_TEXT: {
            return {
                ...state,
                listText: [...state.listText, action.payload]
            }
        }
        default:
            return state
    }
}

export default textReducer