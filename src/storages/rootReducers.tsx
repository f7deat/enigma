import { combineReducers } from "redux";
import imageReducer from "./reducers/imageReducer";
import textReducer from "./reducers/textReducer";
import TransformReducer from "./reducers/transformReducer";
import boardReducer from "./reducers/boardReducer";

const rootReducer = combineReducers({
    boardReducer,
    imageReducer,
    textReducer,
    TransformReducer
})

export default rootReducer