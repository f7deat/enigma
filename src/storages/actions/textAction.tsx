export const setTextAction = (text: string): any => {
    return {
        type: 'SET_TEXT',
        payload: text
    }
}

export const setNodeAction = (text: any): any => {
    return {
        type: 'SET_TEXT_NODE',
        payload: text
    }
}

export const setTextNode = (payload: any): any => {
    return {
        type: 'SET_TEXT_NODE',
        payload: payload
    }
}