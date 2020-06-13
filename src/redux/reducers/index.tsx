import { combineReducers } from "redux";
import filters from "./filters";
import listItems from "./listItems";

export default combineReducers({ filters, listItems });
