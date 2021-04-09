import { combineReducers } from "redux";
import {userReducer} from "../Reducer/Index";

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
