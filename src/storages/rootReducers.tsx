import { combineReducers } from "redux";
import imageReducer from "./reducers/imageReducer";
import textReducer from "./reducers/textReducer";

const rootReducer = combineReducers({
    imageReducer,
    textReducer
})

export default rootReducer