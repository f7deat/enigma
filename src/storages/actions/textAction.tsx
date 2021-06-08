import { TextConfig } from "konva/types/shapes/Text"
import { ADD_TEXT } from "../constants/text-constant"

export const setTextNode = (payload: any): any => {
    return {
        type: 'SET_TEXT_NODE',
        payload: payload
    }
}

export const setTextAction = (payload: string) => {
    return {
        type: 'SET_TEXT',
        payload
    }
}

export const addText = (payload: TextConfig) => {
    return {
        type: ADD_TEXT,
        payload
    }
}