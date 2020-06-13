import { ADD_TO_BASKET, REMOVE_FROM_BASKET } from "../actions/actionTypes";
import { itemList } from '../../data/mockData';

const initialState = {
    index: 0,
    data: itemList
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_BASKET:
            return {
                ...state,
                // index: state.index + action.payload
                index: state.index + 1
            }
        case REMOVE_FROM_BASKET:
            if (state.index > 0) {
                return {
                    ...state,
                    index: state.index - 1
                }
            }
            else {
                return {
                    ...state,
                    index: 0
                }
            }
        default:
            return state;
    }
}
