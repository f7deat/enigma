import { TextConfig } from "konva/types/shapes/Text"
import { ADD_TEXT, UPDATE_TEXT } from "../types/text-type"

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

export const updateText = (payload: TextConfig) => {
    return {
        type: UPDATE_TEXT,
        payload
    }
}