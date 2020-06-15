import { combineReducers } from "redux";
import basket from "./basket";
import filters from "./filters";

export default combineReducers({ basket, filters });
