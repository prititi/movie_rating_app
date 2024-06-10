import { combineReducers } from "redux";
import handleRating from "./handleRating";
import handleQueue from "./handleQueue";

const rootReducer = combineReducers({
	handleRating,
	handleQueue,
});

export default rootReducer;
