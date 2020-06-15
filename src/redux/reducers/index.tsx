// I followed this article when I try to decide whether I put my logic in reducers or in action creators
// https://redux.js.org/faq/code-structure#how-should-i-split-my-logic-between-reducers-and-action-creators-where-should-my-business-logic-go

import { combineReducers } from "redux";
import basket from "./basket";
import filters from "./filters";

export default combineReducers({ basket, filters });
