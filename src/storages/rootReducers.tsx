import { combineReducers } from "redux";
import imageReducer from "./reducers/imageReducer";
import textReducer from "./reducers/textReducer";
import TransformReducer from "./reducers/transformReducer";

const rootReducer = combineReducers({
    imageReducer,
    textReducer,
    TransformReducer
})

export default rootReducer