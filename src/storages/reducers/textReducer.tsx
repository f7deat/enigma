import { TextConfig } from "konva/types/shapes/Text"
import { ADD_TEXT, UPDATE_TEXT } from "../types/text-type"

const initialState: any = {
    textId: '',
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
                textId: action.payload
            }
        }
        case ADD_TEXT: {
            return {
                ...state,
                listText: [...state.listText, action.payload]
            }
        }
        case UPDATE_TEXT: {
            state.listText.find((x: TextConfig) => x.id === action.payload.id).text = action.payload.text;
            return {
                ...state,
                listText: state.listText.map((textConfig: TextConfig) => textConfig.id === action.payload.id ? textConfig = action.payload : textConfig)
            }
        }
        default:
            return state
    }
}

export default textReducer