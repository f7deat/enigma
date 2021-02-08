const initialState: any = {
    text: '',
    nodes: []
}

const textReducer = (state = initialState, action: any): any => {
    switch (action.type) {
        case 'SET_TEXT': {
            return {
                ...state,
                text: action.payload
            }
        }
        case 'SET_TEXT_NODE': {
            return {
                ...state,
                nodes: [...state.nodes, action.payload]
            }
        }
        default:
            return state
    }
}

export default textReducer