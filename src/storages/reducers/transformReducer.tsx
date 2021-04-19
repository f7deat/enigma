const initialState = {
    node: {}
}

const TransformReducer = (state = initialState, action: any): any => {
    switch (action.type) {
        case 'SET_TRANSFORM_NODE': {
            return {
                ...state,
                node: action.payload
            }
        }
        default:
            return state
    }
}

export default TransformReducer